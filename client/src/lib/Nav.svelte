<script>
    import { navigate } from 'svelte-routing';
    import Logo from './../assets/logo.svg'
    import ProfileIcon from './../assets/person.svg'
    import CartIcon from './../assets/cart.svg'
    import LikeIcon from './../assets/heart.svg'
    import AdminIcon from './../assets/admin.svg'
    import ProfileIconPrimary from './../assets/person-primary.svg'
    import CartIconPrimary from './../assets/cart-primary.svg'
    import LikeIconPrimary from './../assets/heart-primary.svg'
    import AdminPrimaryIcon from './../assets/admin-primary.svg'
    import BurgerIcon from './../assets/burger.svg'
    import CrossIcon from './../assets/cross.svg'
    import BurgerIconPrimary from './../assets/burger-primary.svg'
    import CrossIconPrimary from './../assets/cross-primary.svg'
    import Body from './Body.svelte';
    import { t } from 'svelte-intl-precompile';
    import Button from './Button.svelte';
    import { logged, currentPage } from '../stores/store';

    let props = $props()

    let options = [
        {name:"shop", link:"/shop"},
        {name:"about", link:"/about"},
        {name:"home", image:Logo, link:"/"},
        {name:"faq", link:"/faq"},
        {name:"contact", link:"/contact"}
    ]

    let open = $state(false)
    let noTransition = $state(false)
    let mobile = $state(window.innerWidth < 1024)

    let timeout = null

    const onNavigate = (page, link) => {
        open = false
        currentPage.set(page)
        navigate(link)
    }

</script>

<svelte:window
    onresize={(e)=>{
        if(!mobile && e.target.innerWidth < 1024) mobile = true
        else if(mobile && e.target.innerWidth > 1024) mobile = false
        
        clearTimeout(timeout)
        noTransition = true
        if(open) open = false
        timeout = setTimeout(()=>{
            noTransition = false
        }, 100)
    }}
/>

<nav>
    <div class="navContainer">
        <button class="Logo" onclick={()=>{onNavigate("home", '/')}}>
            <img src={Logo} alt="Logo">
        </button>
        <div class="burgerIcon">
            <Button size={"medium"} nude icon={BurgerIcon} iconHover={BurgerIconPrimary} onClick={()=>{open=!open}}/>
        </div>
    </div>
    <div class={"Options" + (open ? " open" : "") + (noTransition ? " noTransition" : "")}>
        {#if window.localStorage.getItem('isAdmin') === "true"}
        <div class={"Option admin"}>
            <Button size={"small"} nude icon={$currentPage === "admin" ? AdminPrimaryIcon : AdminIcon} iconHover={AdminPrimaryIcon} onClick={()=>{onNavigate("admin", "/admin")}}/>
        </div>
        {/if}
        {#each options as option}
        <button class={"Option" + (option.image ? ' logo' : '') + (option === options[options.length-1] ? ' last' : '')} onclick={()=>{onNavigate(option.name, option.link)}}>
            {#if option.image}
                <img src={option.image} alt="Logo">
            {:else if option.name}
                <Body large primary={$currentPage === option.name} uppercase hover={!mobile}>{$t("nav." + option.name)}</Body>
            {/if}
        </button>
        {/each}
        <div class="icons">
            {#if $logged}
                <Button size={"small"} nude icon={$currentPage === "favorites" ? LikeIconPrimary : LikeIcon} iconHover={LikeIconPrimary} onClick={()=>{onNavigate("favorites", '/favorites')}}/>
                <Button size={"small"} nude icon={$currentPage === "cart" ? CartIconPrimary : CartIcon} iconHover={CartIconPrimary} onClick={()=>{onNavigate("cart", '/cart')}}/>
                <Button size={"small"} nude icon={$currentPage === "profile" ? ProfileIconPrimary : ProfileIcon} iconHover={ProfileIconPrimary} onClick={()=>{onNavigate("profile", '/profile')}}/>
            {:else}
                <Button type={2} size={'small'} label={'login.title'} onClick={()=>onNavigate('login', '/login')}/>
            {/if}
        </div>
        <div class="closeIcon">
            <Button size={"medium"} nude icon={CrossIcon} iconHover={CrossIconPrimary} onClick={()=>{open=!open}}/>
        </div>    
    </div>
</nav>

<style lang="scss">
    nav{
        width: 100%;
        height: 120px;
        z-index: 100;
        overflow: hidden;
        position: relative;

        .navContainer{
            height: 100%;
            width: 100%;
            position: relative;
            display: none;
            
            .burgerIcon{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                height: 32px;
                right: 30px;
                cursor: pointer;
                display: none;
                align-items: center;
                justify-content: center;
            }

            .Logo{
                height: 80px;
                display: none;
                background-color: transparent;
                border: none;
                position: absolute;
                left: 20px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;

                img{
                    height: 100%;
                    pointer-events: none;
                }
            }
        }
        
        .Options{
            display: flex;
            position: relative;
            height: 100%;
            align-items: center;
            justify-content: center;
            width: 100%;

            .closeIcon{
                position: absolute;
                cursor: pointer;
                right: 10px;
                top: 30px;
                display: none;
                align-items: center;
                justify-content: center;
            }

            .icons{
                position: absolute;
                right: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 50%;
                transform: translateY(-50%);
            }

            .Option{
                margin: 0 40px;
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                border: none;
                cursor: pointer;

                &.admin{
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    width: auto;
                    margin: 0;
                    transform: translateY(-50%);
                }

                img{
                    height: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: none;
                }
            }
        }

        @media screen and (max-width : 1250px){
            .Options{
                .Option{
                    margin: 0 30px;
                    width: 80px;

                    img{
                        height: 80px;
                    }
                }
            }
        }

        @media screen and (max-width : 1024px){
            .Options{
                position:fixed;
                right: 0;
                flex-direction: column;
                width: 300px;
                height: 100vh;
                transform: translateX(100%);
                top: 0;
                justify-content: start;
                padding-top: 120px;
                transition: transform .3s ease-in-out;
                background-color: var(--neutral100);
                z-index: 1000;

                &.noTransition{
                    transition: none;
                }

                &.open{
                    transform: translateX(0);
                }

                .closeIcon{
                    display: flex;
                }
                
                .Option{
                    width: 100%;
                    margin: 0;
                    height: 100px;
                    border-top: 2px solid var(--neutral500);
                    transition: all .2s;
                    
                    &.last{
                        border-bottom: 2px solid var(--neutral500);
                    }

                    &.logo{
                        position: absolute;
                        top: 20px;
                        height: 70px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 100px;
                        border: none;

                        &:hover{
                            background-color: transparent;
                        }
                    }

                    &:hover{
                        background-color: var(--primary);
                    }
                }

                

                .icons{
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    bottom: 20px;
                    left: 50%;
                    top: auto;
                    transform: translateX(-50%);
                }
            }

            .navContainer{
                display: flex;
                .burgerIcon{
                    display: flex;
                }

                .Logo{
                    display: flex;
                }
            }
        }
    }
</style>