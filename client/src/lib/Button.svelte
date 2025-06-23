<script>
    import Body from "./Body.svelte";
    import {t} from "svelte-intl-precompile"

    let props = $props()

    let hover = $state(false)

    let classnames = $state("Button")
    if(props.size) classnames += ' ' + (props.size ? props.size : "medium")
    classnames += props.type ? (' type' + props.type) : " type1"

    const onClickButton = () => {
        if(props.onClick && !props.disabled) props.onClick()
    }
</script>

{#if ((props.label || props.icon) && props.onClick)}
<!-- A11y: <div> with click handler must have an ARIA role -->
<button class={classnames + (props.icon && !props.label ? ' iconButton' : "") + (props.nude ? ' nude' : "") + (props.disabled ? ' disabled' : "") + (hover && !props.disabled ? ' hover' : "")} onclick={()=>onClickButton()} onmouseenter={() => hover = true} onmouseleave={() => hover = false}>
    {#if props.icon}
    <img src={props.iconHover && hover ? props.iconHover : props.icon} alt="Icon">
    {/if}
    {#if props.label}
    <Body underline={props.type === 3} hover={props.type === 3} primary={(props.type === 1 || !props.type) && (!hover || (hover && props.disabled)) || (props.type === 3) || (props.type === 2 && hover && !props.disabled)}>{$t(props.label)}</Body>
    {/if}
</button>
{/if}

<style lang="scss">
    .Button{
        width: 100%;
        background-color: transparent;
        height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: all .2s;
        justify-content: center;
        border: 2px solid;

        &.disabled{
            cursor: default;
            opacity: .4;
        }

        &.small{
            width: 160px;
            height: 40px;
        }

        &.medium{
            width: 200px;
            height: 50px;
        }

        &.nude{
            border: none;

            &.hover{
                background-color: transparent;
            }
        }

        &.iconButton{
            &.small{
                width: 40px;
                height: 40px;
                padding: 10px;

                img{
                    width: 100%;
                }
            }

            &.medium{
                width: 50px;
                height: 50px;
                padding: 10px;

                img{
                    width: 100%;
                }
            }

            img{
                pointer-events: none;
            }
        }

        &.type1{
            border-color: var(--primary);

            &.hover{
                background-color: var(--primary);
            }

            &.iconButton{
                &.hover{
                    background-color: transparent;
                }
            }
        }

        &.type2{
            border-color: white;

            &.hover{
                border-color: var(--primary);
            }
        }

        &.type3{
            border: none;
            height: auto;   
            justify-content: start;
        }
    }
</style>