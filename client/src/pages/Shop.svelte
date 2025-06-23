<script>
    import Body from "../lib/Body.svelte";
    import Heading from "../lib/Heading.svelte";
    import List from "../lib/List.svelte";
    import Page from "../lib/Page.svelte";
    import Input from "../lib/Input.svelte";
    import { t } from "svelte-intl-precompile";
    import products from "../data/products";
    import { navigate } from "svelte-routing";

    let props = $props()

    let filteredData = $state(products)
    let search = $state("")
    let tagFilter = $state([])
    let tagHover = $state()

    const tags = ['weed', 'hash', 'ice-o-lator', 'weed-flower', 'traditional-hash', 'modern-hash']

    $effect(()=>{
        if(search !== '' || tagFilter.length !== 0){
            filteredData = products.filter((p) => {
                let filtered = false
                if((search !== '' && $t(p.name).toLowerCase().includes(search.toLowerCase())) || search === '') filtered = true
                else filtered = false

                if(((tagFilter.length !== 0 && tagFilter.find(f => f === p.type || f === p.category)) || tagFilter.length === 0) && filtered) filtered = true
                else filtered = false

                return filtered
            })
        }else filteredData = products
    })

    const onNavigate = (product) => {
        navigate('/shop/' + product.id)
    }

    const onTagClick = (tag) => {
        let index = tagFilter.indexOf(tag)
        if(index >= 0) tagFilter.splice(index, 1)
        else tagFilter.push(tag)
    }
</script>

<div class="ShopPage">
    <Page title="nav.shop">
        <div class="ShopContainer">
            <div class="ShopTitle">
                <Heading size={'h6'}>{$t("shop.slogan")}</Heading>
            </div>
            <div class="ShopContent">
                <div class="ShopContentDescription">
                    <Body size={'large'} weight={'light'} uppercase>{$t("shop.popular-products")}</Body>
                </div>
                <div class="ShopContentList">
                    <List onItemClick={onNavigate} data={products && products.length > 0 ? products.filter((p) => p.star) : []}/>
                </div>
            </div>
            <div class="ShopContent" style="margin-bottom: 100px;">
                <div class="ShopContentTitle">
                    <Heading size={'h5'}>{$t("shop.products")}</Heading>
                </div>
                <div class="ShopContentDescription">
                    <Body size={'large'} weight={'light'} uppercase>{$t("shop.products-description")}</Body>
                </div>
                <div class="ShopContentFilters">
                    <div class="FilterSearch">
                        <Input placeholder={"shop.search-product"} type={"search"} value={search} onChange={(e) => search = e}/>
                    </div>
                    <div class="FilterTags">
                        {#each tags as tag}
                            <div class={"Tag" + (tagFilter.find(f => f === tag) ? ' selected' : '') + (tagHover === tag ? ' hover' : "")} onmouseenter={()=>{tagHover = tag}} onmouseleave={()=>{tagHover = null}} onclick={()=>{onTagClick(tag)}}>
                                <Body primary={tagHover === tag || tagFilter.find(f => f === tag)} center>{$t("shop.filters." + tag)}</Body>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="ShopContentList">
                    <List onItemClick={onNavigate} data={filteredData}/>
                </div>
            </div>
        </div>
    </Page>
</div>

<style lang="scss">
    .ShopPage{
        width: 100%;
        height: 100%;

        .ShopContainer{
            width: 100%;
            height: 100%;

            .ShopContent{
                margin-bottom: 40px;

                .ShopContentDescription{
                    margin-top: 4px;
                }

                .ShopContentFilters{
                    margin: 20px 0;

                    .FilterSearch{
                        width: 400px;
                        margin-bottom: 20px;
                    }

                    @media screen and (max-width:625px) {
                        .FilterSearch{
                            width: 100%;
                        }
                    }

                    .FilterTags{
                        display: flex;
                        gap: 10px;
                        flex-wrap: wrap;

                        .Tag{
                            border: 2px solid var(--neutral500);
                            border-radius: 30px;
                            padding: 10px 20px;
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            transition: all .2s;
                            justify-content: center;

                            &.hover{
                                border-color: var(--primary-hover);
                            }

                            &.selected{
                                border-color: var(--primary);

                                &.hover{
                                    border-color: var(--primary-hover);
                                }
                            }
                        }
                    }
                }

                .ShopContentList{
                    min-height: 400px;
                    padding: 20px 0;
                }
            }

            
        }
    }
</style>