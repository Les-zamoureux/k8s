<script>
    import { t } from "svelte-intl-precompile";
    import Heading from "../../lib/Heading.svelte";
    import Body from "../../lib/Body.svelte";
    import ProductsIcon from './../../assets/canabis-icon.svg'
    import UsersIcon from './../../assets/users.svg'
    import LogsIcon from './../../assets/logs.svg'
    import FaqIcon from './../../assets/faq.svg'
    import { navigate } from "svelte-routing";

    let props = $props()

    const cards = [
        {name:"products", image:ProductsIcon},
        {name:"faq", image:FaqIcon},
        {name:"users", image:UsersIcon},
        {name:"logs", image:LogsIcon},
    ]

    $effect(()=>{
        console.log(props)
    })

    const switchPage = (page) => {
        navigate('/admin/'+page)
    }
</script>

<div class="Home">
    <div class="HomeTitle">
        <Heading>{$t('admin.title')}</Heading>
    </div>
    <div class="HomeContent">
        {#each cards as card}
            <button class="HomeCard" onclick={()=>{switchPage(card.name)}}>
                <div class="CardImage">
                    <img src={card.image} alt="Card image">
                </div>
                <div class="CardContent">
                    <Heading center size={'h3'}>{$t("menu."+card.name)}</Heading>
                    <Body center>{$t("admin."+card.name)}</Body>
                </div>
            </button>
        {/each}
    </div>
</div>

<style lang="scss">
    .Home{
        width: 100%;
        height: 100%;
        padding: 40px;
        display: flex;
        position: relative;
        flex-direction: column;

        .HomeContent{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            // height: 100%;
            grid-gap: 30px;
            box-sizing: border-box;
            padding: 20px 0;

            .HomeCard{
                width: 100%;
                aspect-ratio: 1/1;
                display: flex;
                align-items: center;
                gap: 20px;
                background-color: transparent;
                justify-content: center;
                cursor: pointer;
                padding: 20px;
                flex-direction: column;
                border: 3px solid var(--neutral150);

                .CardImage{
                    width: 100px;
                    height: 150px;
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img{
                        pointer-events: none;
                        width: 100%;
                    }
                }

                .CardContent{
                    gap: 10px;
                    height: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
</style>