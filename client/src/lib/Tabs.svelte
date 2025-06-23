<script>
    import { t } from "svelte-intl-precompile";
    import Body from "./Body.svelte";
    import { navigate } from "svelte-routing";

    let props = $props()
    let hover = $state(null)
</script>

<div class="Tabs">
    <div class="TabOptions">
        {#each Object.keys(props.pages) as tab}
            <button onclick={()=>{props.onChange(tab)}} class={"TabOption" + (props.currentTab === tab ? " selected" : "")} onmouseenter={()=>{hover=tab}} onmouseleave={()=>{hover=null}}>
                <Body primary={hover===tab || props.currentTab === tab}>{$t("menu."+tab)}</Body>
            </button>
        {/each}
    </div>
    <div class="TabContent">
        <svelte:component this={props.pages[props.currentTab]}/>
    </div>
</div>

<style lang="scss">
    .Tabs{
        width: 100%;
        height: 100%;

        display: flex;
        background-color: var(--neutral0);

        .TabOptions{
            width: 300px;
            height: 100%;
            background-color: transparent;

            .TabOption{
                width: 100%;
                height: 100px;
                border: none;
                border-bottom: 2px solid var(--neutral100);
                padding: 20px;
                display: flex;
                cursor: pointer;
                background-color: transparent;
                align-items: center;
                transition: all .2s;
            }
        }

        .TabContent{
            width: 100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            flex-grow: 1;
            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            background-color: var(--neutral100);
        }
    }
</style>