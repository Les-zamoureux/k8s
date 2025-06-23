<script>
    import { t } from "svelte-intl-precompile";
    import Heading from "../../lib/Heading.svelte";
    import FetchPage from "../../lib/FetchPage.svelte";

    let props = $props()
    let data = $state([])

    const setData = (_data) => {
        data = _data
    }

    $effect(()=>{
        console.log(props)
    })
</script>

<div class="Products">
    <FetchPage title={'menu.products'} type={'product'}/>

</div>

<style lang="scss">
    .Products{
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
    }
</style>