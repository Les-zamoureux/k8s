<script>
    import Body from "../lib/Body.svelte";
    import Page from "../lib/Page.svelte";
    import products from "../data/products";
    import { locale, t } from "svelte-intl-precompile";
    import Heading from "../lib/Heading.svelte";
    import Stars from "../lib/Stars.svelte";
    import Input from "../lib/Input.svelte";
    import Button from "../lib/Button.svelte";
    import PuceIcon from "../assets/puce.svg";
    import { timeElapsed } from "../utils/helpers";

    let props = $props()
    let data = $state(null)

    let date = new Date()
    date.setDate(date.getDate() +1)

    let quantity = $state(1)
    let rate = $state(1)
    let message = $state("")

    $effect(() => {
        if(products.length > props.id){
            data = products[props.id]
        }
    })

    const addToCart = () => {
        locale.set('fr');
        console.log('addToCart')
    }

    const buyNow = () => {
        locale.set('en');
        console.log('Buy Now')
    }

    const changeRate = (starSelected) => {
        rate = starSelected+1
    }

    const sendMessage = () => {
        console.log("Message : ", rate, message)
        rate = 1
        message = ""
    }
</script>

<div class="ProductPage">
    <Page fullPage>
        {#if !data}
            <div></div>
        {:else}
            <div class="ProductContainer">
                <div class="RowContent">
                    <div class="ProductContent">
                        <div class="ImageContainer" style={"background-image:url("+data.image+");"}></div>
                    </div>
                    <div class="ProductContent">
                        <div class="InfosContainer">
                            <div class="info" style="margin:0px;"><Body uppercase weight={'light'}>{$t('product.type', { values: { category: $t('shop.filters.' + data.category), type: $t('shop.filters.' + data.type) } })}</Body></div>
                            <div class="info" style="margin-top:0px;"><Heading size={'h0'}>{data.name}</Heading></div>
                            <div class="info" style="margin-top: 0; margin-bottom:10px"><Body weight={'thin'} size={'large'} uppercase>{data.genetics}</Body></div>
                            <div class="info" style="margin-top: 15px;"><Stars left rate={data.rate} showRate/></div>
                            <div class="info" style="margin-bottom: 30px; margin-top:30px;"><Body size={'huge'} weight={'semiBold'} span={'product.unity'}>{$t('product.price', { values: { "price": data.price } })}</Body></div>
                            <div class="info"><Body>{$t('product.thc', { values: { count: data.thc } })}</Body></div>
                            <div class="info"><Body>{$t('product.cbd', { values: { count: data.cbd } })}</Body></div>
                        </div>
                        <div class="DescriptionContainer">
                            <div class="DescriptionTitle"><Heading size={'h6'} weight={'bold'}>{$t("commons.description")}</Heading></div>
                            <div class="DescriptionContent"><Body justify>{data.description}</Body></div>
                        </div>
                        <div class="ListContainer">
                            <div class="List">
                                <div class="title">
                                    <Heading size={'h6'}>{$t('product.aspects')}</Heading>
                                </div>
                                <div class="elements">
                                    {#each data.aspects as aspect}
                                        <div class="element">
                                            <div class="Puce">
                                                <img src={PuceIcon} alt="Puce">
                                            </div>
                                            <Body>{$t(aspect)}</Body>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="List">
                                <div class="title">
                                    <Heading size={'h6'}>{$t('product.flavors')}</Heading>
                                </div>
                                <div class="elements">
                                    {#each data.flavors as flavor}
                                        <div class="element">
                                            <div class="Puce">
                                                <img src={PuceIcon} alt="Puce">
                                            </div>
                                            <Body>{$t(flavor)}</Body>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="List">
                                <div class="title">
                                    <Heading size={'h6'}>{$t('product.effects')}</Heading>
                                </div>
                                <div class="elements">
                                    {#each data.effects as effect}
                                        <div class="element">
                                            <div class="Puce">
                                                <img src={PuceIcon} alt="Puce">
                                            </div>
                                            <Body>{$t(effect)}</Body>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="List">
                                <div class="title">
                                    <Heading size={'h6'}>{$t('product.ideal-for')}</Heading>
                                </div>
                                <div class="elements">
                                    {#each data.idealFor as i}
                                        <div class="element">
                                            <div class="Puce">
                                                <img src={PuceIcon} alt="Puce">
                                            </div>
                                            <Body>{$t(i)}</Body>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ProductContent">
                    <div class="RecapContainer">
                        <div class="RecapContent">
                            <Body size={'huge'} weight={'semiBold'} span={'product.unity'}>{$t('product.price', { values: { price: data.price } })}</Body>
                        </div>
                        <div class="RecapContent"><Body primary size={'veryLarge'} span={$t("product.delivered-at", {values:{date : date.toLocaleDateString()}})}>{$t('product.free-delivery')}</Body></div>
                        <div class="RecapContent">
                            <Input type={'number'} title={"product.quantity-in-g"} min={1} max={data.stock} value={quantity} onChange={(newQuantity) => quantity = newQuantity}/>
                        </div>    
                        <div class="RecapContent">
                            <Body weight={'semiBold'}>{$t('commons.total')}</Body>
                            <Body size={'huge'} weight={'semiBold'}>{$t('product.price', { values : {price : data.price * quantity}})}</Body>
                            <Body size={'small'} weight={'thin'}>{$t('product.price-with-unity', { values : {price : data.price}})}</Body>
                        </div>
                        <div class="RecapContent">
                            <Button type={1} label={'product.add-to-cart'} onClick={addToCart}/>
                            <div style="margin-top:20px;width:100%;"><Button type={2} label={'product.buy-now'} onClick={buyNow}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Separator"></div>
            <div class="ReviewContainer">
                <Heading size={'h3'}>{$t("product.reviews")}</Heading>
                <div class="ReviewContent">
                    <div class="ReviewContentTitle"><Body size={'large'} weight={'semiBold'}>{$t("product.global-rank")}</Body></div>
                    <div class="ReviewDetails">
                        <Stars rate={data.rate} large left showRate/>
                    </div>
                </div>
                <div class="ReviewContent">
                    <div class="ReviewContentTitle"><Body size={'large'} weight={'semiBold'}>{$t("product.last-reviews")}</Body></div>
                    <div class="ReviewDetails">
                        {#each data.reviews as review}
                            <div class="Review">
                                <div class="ReviewHeader">
                                    <div class="ReviewInfos">
                                        <div class="Reviewer"><Body size={'large'} weight={'bold'}>{review.name}</Body></div>
                                        <Body weight={'light'}>{$t("product.review-date", { values: {time:$t("time."+timeElapsed(review.date).type, {values : {time:timeElapsed(review.date).time}})}})}</Body>
                                    </div>
                                    <div class="Rate">
                                        <Stars large left rate={review.rate}/>
                                    </div>
                                </div>
                                <div class="ReviewMessage">
                                    <Body>{review.message}</Body>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="Separator"></div>
            <div class="ReviewContainer">
                <Heading size={'h3'}>{$t("product.write-review")}</Heading>
                <div class="ReviewDescription"><Body>{$t("product.write-review-detail")}</Body></div>
                <div class="ReviewContent" style="margin-top: 20px;">
                    <Stars rate={rate} onClick={changeRate} large left/>
                </div>
                <div class="ReviewContent" style="max-width: 800px;">
                    <Input type={'textarea'} placeholder={"product.your-comment"} value={message} onChange={(e)=> message = e}/>
                </div>
                <div class="ReviewContent">
                    <Button size={'medium'} label={'commons.send'} type={2} onClick={sendMessage}/>
                </div>
            </div>
        {/if}
    </Page>
</div>


<style lang="scss">
    .ProductPage{
        width: 100%;
        height: 100%;

        .ProductContainer{
            width: 100%;
            display: flex;
            flex-direction: row;

            .RowContent{
                display: flex;
                width: 100%;
                flex-direction: row;
            }

            .ProductContent{
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                padding: 0 20px;
                position: relative;


                .ImageContainer{
                    width: 400px;
                    aspect-ratio: 1/1;
                    background-color: rgba(48, 48, 48, 0.8);
                    overflow: hidden;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: sticky;
                    top:0;
                }

                .InfosContainer{
                    margin-bottom: 40px;
                }

                .DescriptionContainer{
                    margin-bottom: 40px;

                    .DescriptionTitle{
                        margin-bottom: 10px;
                    }
                }

                .ListContainer{
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                    gap: 40px;
                    width: 100%;

                    .List{
                        width: 400px;
                        display: flex;
                        flex-direction: column;

                        .title{
                            margin-bottom: 10px;
                        }

                        .elements{
                            margin-left: 10px;

                            .element{
                                display: flex;
                                align-items: center;
                                margin-top: 10px;

                                .Puce{
                                    margin-right: 10px;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: start;

                                    img{
                                        pointer-events: none;
                                    }
                                }
                            }
                        }
                    }
                }

                .RecapContainer{
                    padding: 35px 25px;
                    width: 300px;
                    background-color: var(--neutral100);
                    border: 3px solid var(--neutral150);
                    // filter: drop-shadow(0 0 20px rgba(0, 0, 0, .4));
                    border-radius: 5px;
                    gap: 25px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .RecapContent{
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        justify-content: space-between;
                    }
                }
            }
        }

        .Separator{
            width: calc(100% - 100px);
            height: 2px;
            margin: 80px 0;
            background-color: var(--neutral100);
        }

        .ReviewContainer{
            padding: 0 50px;
            width: 100%;

            .ReviewDescription{
                margin-top: 15px;
            }

            .ReviewContent{
                display: flex;
                flex-direction: column;
                margin-top: 30px;

                .ReviewContentTitle{
                    margin-bottom: 15px;
                }

                .ReviewDetails{
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    gap: 20px;

                    .Review{
                        padding: 20px;
                        flex-grow: 1;
                        background-color: var(--neutral100);
                        border: 3px solid var(--neutral150);
                        border-radius: 15px;
                        max-width: 600px;

                        .ReviewHeader{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 30px;

                            .ReviewInfos{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                gap: 5px;
                            }
                        }

                        .ReviewMessage{
                            margin-top: 40px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }

        @media screen and (max-width : 1350px){
            .ProductContainer{
                flex-direction: column;
                gap: 50px;
            }
        }

        @media screen and (max-width : 1000px){
            .ProductContainer{
                .RowContent{
                    flex-direction: column;
                    gap: 50px;
                }
            }

            .Separator{
                width: 100%;
            }

            .ReviewContainer{
                padding: 0 20px;

                .ReviewContent{
                    .ReviewDetails{
                        .Review{
                            width: 100%;
                            max-width: none;
                            .ReviewHeader{
                                flex-direction: column;
                                align-items: start;
                                gap: 15px;
                            }
                        }
                    }
                }
            }
        }

        @media screen and (max-width : 650px){
            .ProductContainer{
                width: 100%;
                .ProductContent{
                    width: 100%;

                    .ImageContainer, .RecapContainer{
                        width: 100%;
                    }
                }
            }

            .ReviewContainer{

                .ReviewContent{
                    .ReviewDetails{
                        .Review{
                            .ReviewHeader{
                                flex-direction: column;
                                align-items: start;
                                gap: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>