<script>
    import { navigate } from "svelte-routing";
    import Tabs from "../lib/Tabs.svelte";
    import Home from "./Admin/Home.svelte";
    import Users from "./Admin/Users.svelte";
    import Faq from "./Admin/Faq.svelte";
    import Logs from "./Admin/Logs.svelte";
    import Products from "./Admin/Products.svelte";

    let props = $props()
    let currentTab = $state("home")

    $effect(()=>{
        let isAdmin = window.localStorage.getItem('isAdmin')
        if(isAdmin !== "true"){
            props.disconnect()
            navigate('/')
        }

        if(props.id){
            switch(props.id){
                case "":
                    if(currentTab !== 'home'){
                        currentTab = "home"
                    }
                    break
                case "products":
                    if(currentTab !== 'products'){
                        currentTab = "products"
                    }
                    break
                case "home":
                    if(currentTab !== 'home'){
                        currentTab = "home"
                    }
                    break
                case "faq":
                    if(currentTab !== 'faq'){
                        currentTab = "faq"
                    }
                    break
                case "logs":
                    if(currentTab !== 'logs'){
                        currentTab = "logs"
                    }
                    break
                case "users":
                    if(currentTab !== 'users'){
                        currentTab = "users"
                    }
                    break
                default :
                    navigate("/admin")
                    break
            }
        }else{
            currentTab = 'home'
        }
    })
</script>

<div class="AdminPage">
    <Tabs
        pages={{
            'home':Home,
            'products':Products,
            'faq':Faq,
            'users':Users,
            'logs':Logs,
        }}
        currentTab={currentTab}
        onChange={(tab) => navigate('/admin/'+tab)}
    >

    </Tabs>
</div>

<style lang="scss">
    .AdminPage{
        width: 100%;
        height: calc(100% - 120px);
        position: absolute;
        top: 120px;
        left: 0;
    }
</style>