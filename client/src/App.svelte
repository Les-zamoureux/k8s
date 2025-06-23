<script>
  import { Router, Route, navigate } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Login from "./pages/Login.svelte";
  import Nav from "./lib/Nav.svelte";
  import Profile from "./pages/Profile.svelte";
  import Faq from "./pages/FAQ.svelte";
  import Contact from "./pages/Contact.svelte";
  import Shop from "./pages/Shop.svelte";
  import Favorites from "./pages/Favorites.svelte";
  import Cart from "./pages/Cart.svelte";
  import Product from "./pages/Product.svelte";
  import Admin from "./pages/Admin.svelte";
  import Request from "./utils/Request";
  import { logged, currentPage } from "./stores/store";
  import Popup from "./lib/Popup.svelte";

  let props = $props()

  $effect(()=>{
    if(!$logged){
      let authToken = window.localStorage.getItem('authToken')
      if(authToken) {
        Request.get("/user/me").then(res => {
          if(props.tab === "admin" && !res.is_admin){
            navigate('/')
            disconnect()
          }

          login(authToken, res.username, res.is_admin)
        }).catch(err => {
          console.log(err)
          if(props.tab === "cart" || props.tab === 'favorites' || props.tab === 'profile') navigate('/')
          disconnect()
        })
      }else{
        if(props.tab === "cart" || props.tab === 'favorites' || props.tab === 'profile') navigate('/')
      }
    }

    if(props.params){
      if(props.params['*'] && props.params['*'] !== ''){
        setCurrentPage('home')
        navigate('/')
      }else{
        setCurrentPage('home')
      }
    }else{
      switch (props.tab){
        case 'home' :
          if(props.id) navigate('/home')
          if($currentPage !== "home"){
            setCurrentPage('home')
          }
          break;
        case 'shop' :
          if(props.id){
            if($currentPage !== "product"){
              setCurrentPage('product')
            }
          }else{
            if($currentPage !== "shop"){
              setCurrentPage('shop')
            }
          }
          break;
        case 'about' :
          if(props.id) navigate('/about')
          if($currentPage !== "about"){
            setCurrentPage('about')
          }
          break;
        case 'faq' :
          if(props.id) navigate('/faq')
          if($currentPage !== "faq"){
            setCurrentPage('faq')
          }
          break;
        case 'contact' :
          if(props.id) navigate('/contact')
          if($currentPage !== "contact"){
            setCurrentPage('contact')
          }
          break;
        case 'admin' :
          if(window.localStorage.getItem('isAdmin') !== "true") navigate('/')
          if(props.id && props.id !== "home" && props.id !== "logs" && props.id !== "products" && props.id !== "users" && props.id !== "faq"){
            navigate('/admin')
          }
          if($currentPage !== "admin"){
            setCurrentPage('admin')
          }
          break;
        case 'favorites' :
          if(props.id) navigate('/favorites')
          if($currentPage !== "favorites"){
            setCurrentPage('favorites')
          }
          break;
        case 'cart' :
          if(props.id) navigate('/cart')
          if($currentPage !== "cart"){
            setCurrentPage('cart')
          }
          break;
        case 'profile' :
          if(props.id) navigate('/profile')
          if($currentPage !== "profile"){
            setCurrentPage('profile')
          }
          break;
        case 'login' :
          if($logged) navigate('/')
          if(props.id) navigate('/login')
          if($currentPage !== "login"){
            setCurrentPage('login')
          }
          break;
        case "sign-in":
          if($logged) navigate('/')
          if(props.id) navigate('/sign-in')
          if($currentPage !== "signIn"){
            setCurrentPage("signIn")
          }
          break
        case "forgot-password":
          if($logged) navigate('/')
          if(props.id) navigate('/forgot-password')
          if($currentPage !== "forgotPassword"){
            setCurrentPage("forgotPassword")
          }
          break
        case "change-password":
          if($logged || !props.id) navigate('/')
          if($currentPage !== "changePassword"){
            setCurrentPage("changePassword")
          }
          break
        case "verify-account":
          if($logged || !props.id) navigate('/')
          if($currentPage !== "verifyAccount"){
            setCurrentPage("verifyAccount")
          }
          break
        default :
          setCurrentPage('home')
          navigate('/')
          break
      }
    }
  })

  const setLogged = (_logged) => {
    logged.set(_logged)
  }

  const setCurrentPage = (_currentPage) => {
    currentPage.set(_currentPage)
  }

  const login = (token, username, isAdmin) => {
    window.localStorage.setItem('authToken', token)
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('isAdmin', isAdmin)
    setLogged(true)
  }

  const disconnect = () => {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('isAdmin')
    setLogged(false)
  }

  let url = "";
</script>


<Router url={url}>
  <div class="AppContainer">
    {#if $currentPage === "login" || $currentPage === "signIn" || $currentPage === "forgotPassword" || $currentPage === "changePassword" || $currentPage === "verifyAccount"}
      <div class="AppContent">
        <Login login={login} id={props.id}/>
      </div>
    {:else}
      <Nav/>
      <div class="AppContent">
        {#if $currentPage === "home"} <Home/>
        {:else if $currentPage === "shop"} <Shop/>
        {:else if $currentPage === "product"} <Product id={props.id}/>
        {:else if $currentPage === "about"} <About/>
        {:else if $currentPage === "faq"} <Faq/>
        {:else if $currentPage === "admin"} <Admin id={props.id}/>
        {:else if $currentPage === "contact"} <Contact/>
        {:else if $currentPage === "favorites"} <Favorites/>
        {:else if $currentPage === "cart"} <Cart/>
        {:else if $currentPage === "profile"} <Profile disconnect={disconnect}/>
        {/if}
      </div>
    {/if}
    <Popup/>
  </div>
</Router> 

<style lang="scss">
  .AppContainer{
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    background-color: var(--neutral0);

    .AppContent{
      z-index: 1;
      width: 100%;
      position: absolute;
      top: 0;
      min-height: 100%;
    }
  }
</style>