<script>
    import { popupContent } from "./../stores/store";
    import ConfirmPopup from "./popups/ConfirmPopup.svelte";
    
    let props = $props()
</script>

<div class={"Popup" + ($popupContent !== null ? " open" : "")}>
    <div class="PopupContainer">
        {#if $popupContent && $popupContent.component && $popupContent.props}
            <svelte:component this={$popupContent.component} {...$popupContent.props}/>
        {:else}
            {@render props.children?.()}
        {/if}
    </div>
</div>

<style lang="scss">
    .Popup{
        position: absolute;
        display: none;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, .5);

        &.open{
            z-index: 1000;
            display: flex;
        }

        .PopupContainer{
            background-color: var(--neutral100);
            border-radius: 10px;
            display: flex;
            padding: 20px;
        }
    }
</style>