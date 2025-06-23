<script>
    import LoaderIcon from './../assets/load.svg'
    import Body from './Body.svelte';
    import { t } from 'svelte-intl-precompile';
    
    let props = $props()
</script>

<div class="Loader">
    <div class="LoaderContent">
        <img src={LoaderIcon} alt="Loader Icon">
    </div>
    <Body>{$t("loading")}</Body>
</div>

<style lang="scss">
    .Loader{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;

        .LoaderContent{
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 100%;
                pointer-events: none;
                animation: spin 2s linear infinite;;
            }
        }
    }

    @keyframes spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
</style>