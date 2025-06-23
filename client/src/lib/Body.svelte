<script>
    import { t } from "svelte-intl-precompile";
    let props = $props()

    let classnames = $state("Body")
    if(props.size) classnames += ' ' + props.size
</script>

<p class={classnames + 
    (props.primary ? ' primary' : "") + 
    (props.underline ? ' underline' : "") + 
    (props.error ? ' error' : "") + 
    (props.success ? ' primary' : "") +
    (props.uppercase ? ' uppercase' : "") +
    (props.large ? ' large' : "") +
    (props.right ? ' right' : "") +
    (props.justify ? ' justify' : "") +
    (props.center ? ' center' : "") +
    ' ' + (props.weight || 'medium') +
    (props.hover ? ' hover' : "")
}>
    {@render props.children?.()}
    {#if props.error}
    <em>{$t(props.error)}</em>
    {/if}
    {#if props.success}
    <em>{$t(props.success)}</em>
    {/if}
    {#if props.span}
    <span>{$t(props.span)}</span>
    {/if}
</p>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    .Body{
        color: white;
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        font-size: 14px;
        transition: all .2s;

        span{
            font-size: 12px;
            font-weight: 400;
            height: 100%;
            color: white;
            margin-left: 5px;
        }

        &.huge{
            font-size: 30px;
        }

        &.veryLarge{
            font-size: 18px;
        }

        &.large{
            font-size: 16px;
        }

        &.right{
            text-align: right;
        }

        &.justify{
            text-align: justify;
        }

        &.hover{
            &:hover{
                color: var(--primary-hover);
            }
        }

        &.primary{
            color: var(--primary);

            &.hover{
                &:hover{
                    color: var(--primary-hover);
                }
            }
        }

        &.underline{
            text-decoration: underline;
        }

        &.center{
            text-align: center;
        }

        &.error{
            color: var(--red100);
        }

        &.uppercase{
            text-transform: uppercase;
        }

        &.thin{
            font-weight: 100;
        }

        &.extraLight{
            font-weight: 200;
        }

        &.light{
            font-weight: 300;
        }

        &.medium{
            font-weight: 400;
        }

        &.regular{
            font-weight: 500;
        }

        &.semiBold{
            font-weight: 600;
        }

        &.bold{
            font-weight: 700;
        }

        &.extreBold{
            font-weight: 800;
        }
    }
</style>