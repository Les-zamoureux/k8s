<script>
    import Case from "./Case.svelte";

    let props = $props()

    let onItemClick = (item) => {
        if(props.onItemClick) props.onItemClick(item)
    }
</script>

<div class="List">
    {#each props.data as item}
        <Case data={item} onClick={() => onItemClick(item)}/>
    {/each}
</div>

<style lang="scss">
    .List{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        width: 100%;
        grid-gap: 30px;
    }
</style>