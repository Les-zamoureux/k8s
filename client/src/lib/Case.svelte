<script>
    import Body from "./Body.svelte";
    import Heading from "./Heading.svelte";
    import Stars from "./Stars.svelte";
    import { t } from "svelte-intl-precompile";

    let props = $props()

    const onClick = () => {
        if(props.onClick) props.onClick()
    }
</script>

<div class="Case" onclick={onClick}>
    <div class="CaseBackground">
        <div class="opacity"></div>
        <div class="imageBackground" style={"background-image: url(" + props?.data?.image + ")"}>
            <!-- <img src={props?.data?.image} alt="Case image"> -->
        </div>
    </div>
    <div class="CaseContent">
        <div class="CaseType">
            <Body size={'small'} weight={'light'} uppercase>{$t("shop.filters." + props.data.type)}</Body>
        </div>
        <div class="CaseName">
            <Body size={'large'}>{props?.data?.name}</Body>
        </div>
        <div class="CaseStars">
            <Stars rate={props.data?.rate}/>
        </div>
    </div>
</div>

<style lang="scss">
    .Case{
        width: 100%;
        aspect-ratio: 1/1;
        background-color: var(--neutral100);
        cursor: pointer;
        transition: all .2s ease-in-out;
        border-radius: 20px;
        filter: drop-shadow(0 0 20px rgba(0, 0, 0, .25));
        position: relative;
    
        &:hover{
            transform: scale(1.02);
            filter: drop-shadow(0 0 10px rgba(80, 80, 80, 0.15));
        }

        .CaseBackground{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left: 0;
            z-index: 1;

            .opacity{
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 20px;
                background: linear-gradient(rgba(37, 37, 37, .0) 50%, var(--neutral100));
            }

            .imageBackground{
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                filter:  drop-shadow(0 0 15px rgb(70, 70, 70));
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;

                img{
                    width: 100%;
                }
            }
        }

        .CaseContent{
            position: absolute;
            z-index: 10;
            width: 100%;
            top: 0;
            height: 0;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            flex-direction: column;
            padding-bottom: 20px;

            .CaseStars{
                margin-top: 5px;
            }
        }
    }
</style>