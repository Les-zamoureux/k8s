<script>
    import { openPopup, closePopup } from "../stores/store";
    import Button from "./Button.svelte";
    import Heading from "./Heading.svelte";
    import { t } from "svelte-intl-precompile";

    let props = $props()

    const onCancelClick = () => {
        closePopup()
    }

    const onSubmitClick = () => {
        console.log("submit")
        if(props.onSubmitClick) {
            props.onSubmitClick()
            closePopup()
        }
    }
</script>

<div class={"PopupContent" + (props.size ? props.size : " small")}>
    <div class="ContentTitle">
        {#if props.title}
            <Heading size={'h3'}>{$t(props.title)}</Heading>
        {/if}
    </div>
    <div class="Content">
        {@render props.children?.()}
    </div>
    <div class="ContentButtons">
        <Button size={'medium'} label={$t("commons.cancel")} type={2} onClick={onCancelClick}/>
        <Button size={'medium'} disabled={props.submitDisabled} label={props.submitLabel} type={1} onClick={onSubmitClick}/>
    </div>
</div>

<style lang="scss">
    .PopupContent{
        width: auto;
        display: flex;
        flex-direction: column;
        padding: 20px;

        .ContentTitle{
            margin-bottom: 20px;
        }

        .Content{
            margin-bottom: 30px;
        }

        .ContentButtons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            width: 100%;
        }
    }
</style>