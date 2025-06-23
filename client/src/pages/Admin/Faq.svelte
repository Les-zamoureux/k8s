<script>
    import { t } from "svelte-intl-precompile";
    import Heading from "../../lib/Heading.svelte";
    import FetchPage from "../../lib/FetchPage.svelte";

    let props = $props()
    let data = $state([])

    const setData = (_data) => {
        data = _data
    }
</script>

<div class="Logs">
    <FetchPage title={"menu.faq"} type={'faq'}/>
</div>

<style lang="scss">
    .Logs{
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
    }
</style>