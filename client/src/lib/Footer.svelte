<script>
    import Body from "./Body.svelte";
    import { t } from "svelte-intl-precompile";

</script>

<div class="Footer">
    <Body center>{$t('footer.copyrights')}</Body>
</div>

<style lang="scss">
    .Footer{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>