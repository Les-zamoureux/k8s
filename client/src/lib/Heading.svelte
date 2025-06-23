<script>
    let props = $props()

    let classname = $state("Heading")
    if(props.right) classname += ' right'
    classname += props.size ? " " + props.size : ' h1'
    classname += props.center ? " center" : ''
</script>

{#if props.size === "h2"}
<h2 class={classname}>{@render props.children?.()}</h2>
{:else if props.size === "h3"}
<h3 class={classname}>{@render props.children?.()}</h3>
{:else if props.size === "h4"}
<h4 class={classname}>{@render props.children?.()}</h4>
{:else if props.size === "h5"}
<h5 class={classname}>{@render props.children?.()}</h5>
{:else if props.size === "h6"}
<h6 class={classname}>{@render props.children?.()}</h6>
{:else}
<h1 class={classname}>{@render props.children?.()}</h1>
{/if}

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

    .Heading{
        color: white;
        font-family: "Bungee", sans-serif;
        font-weight: 400;
        font-style: normal;

        &.right{
            text-align: right;
        }

        &.center{
            text-align: center;
        }

        &.h0{
            font-size: 75px;
        }

        &.h1{
            font-size: 48px;
        }

        &.h2{
            font-size: 36px;
        }

        &.h3{
            font-size: 28px;
        }

        &.h4{
            font-size: 24px;
        }

        &.h5{
            font-size: 22px;
        }

        &.h6{
            font-size: 20px;
        }

        @media screen and (max-width:1024px){
            &.h0{
                font-size: 48px;
            }

            &.h1{
                font-size: 36px;
            }

            &.h2{
                font-size: 28px;
            }

            &.h3{
                font-size: 24px;
            }

            &.h4{
                font-size: 20px;
            }

            &.h5{
                font-size: 20px;
            }

            &.h6{
                font-size: 18px;
            }
        }

        @media screen and (max-width:650px){
            &.h0{
                font-size: 40px;
            }

            &.h1{
                font-size: 32px;
            }

            &.h2{
                font-size: 26px;
            }

            &.h3{
                font-size: 22px;
            }

            &.h4{
                font-size: 20px;
            }

            &.h5{
                font-size: 18px;
            }

            &.h6{
                font-size: 16px;
            }
        }
    }
</style>