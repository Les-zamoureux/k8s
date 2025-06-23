<script>
    import { t } from "svelte-intl-precompile";
    import Body from "../Body.svelte";
    import PopupContent from "../PopupContent.svelte";
    import { closePopup } from "../../stores/store";

    let props = $props()

    const onConfirm = () => {
        if(props.onSubmitClick) props.onSubmitClick()
        closePopup()
    }
</script>

<div class="ConfirmPopup">
    <PopupContent title={props.title} submitLabel={'commons.confirm'} onSubmitClick={onConfirm}>
        <div class="ConfirmPopupContent">
            <Body>{$t(props.description)}</Body>
        </div>
    </PopupContent>
</div>

<style>
    .ConfirmPopup{
        width: 500px;
    }
</style>