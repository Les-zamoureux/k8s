<script>
    import Star from './../assets/star.svg'
    import Half from './../assets/half.svg'
    import Empty from './../assets/empty.svg'
    import Body from './Body.svelte';
    
    let props = $props()

    const onStarClick = (e, id) => {
        if(props.onClick && !props.disabled) {
            let width = props.large ? 40 : 15
            let half = e.offsetX <= width / 2
            props.onClick(half ? id-0.5 : id)
        }
    }
</script>

<div class={"Stars" + (props.left ? ' left' : "") + (props.onClick ? ' clickable' : "") + (props.large ? ' large' : "")}>
    {#each {length:5}, i}
        <div class="Star" onclick={(e)=>{onStarClick(e, i)}}>
            {#if (props.rate - (i+1) >= 0)}
                <img src={Star} alt="Full star">
            {:else if (props.rate - (i+0.1) > 0)}
                <img src={Half} alt="Half star">
            {:else}
                <img src={Empty} alt="Empty star">
            {/if}
        </div>
    {/each}

    {#if props.showRate}
        <div class="StarsText"><Body size={props.large ? 'large' : 'small'} uppercase>{props.rate + '/5'}</Body></div>
    {/if}
</div>

<style lang="scss">
    .Stars{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &.clickable{
            .Star{
                transition: opacity .2s;
                cursor: pointer;

                &:hover{
                    opacity: .7;
                }
            }
        }

        &.left{
            justify-content: left;
        }

        &.large{
            .Star{
                width: 40px;
                height: 40px;
            }

            .StarsText{
                margin-left: 15px;
            }
        }

        .Star{
            width: 15px;
            height: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 100%;
                pointer-events: none;
            }
        }

        .StarsText{
            margin-left: 5px;
        }
    }
</style>