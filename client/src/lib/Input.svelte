<script>
    import Body from "./Body.svelte";
    import SearchIcon from "./../assets/search.svg"
    import UpIcon from "./../assets/chevron-up.svg"
    import DownIcon from "./../assets/chevron-down.svg"

    import {t} from "svelte-intl-precompile"

    let props = $props()
    
    let focus = $state(false)

    const onChangeValue = (e) => {
        if(props.onChange) props.onChange(e.target.value)
    }

    const onKeyPress = (e) => {
        if(e.code === "Enter" && props.onEnterPress) props.onEnterPress()
    }

    const plus = () => {
        let newValue = Number(props.value) +1
        if((props.max != null && newValue <= props.max) || props.max == null){
            props.onChange(newValue)
        }
    }

    const minus = () => {
        let newValue = Number(props.value) -1
        if((props.min != null && newValue >= props.min) || props.min == null){
            props.onChange(newValue)
        }
    }
</script>

<div class={"InputContainer"}>
    {#if props.title}
    <div class="InputTitle">
        <Body error={props.error}>{$t(props.title)}</Body>
    </div>
    {/if}
    <div class={"InputContent" + (props.error ? ' error' : "") + (focus ? ' focus' : "") + (props.type == 'search' ? ' search' : "") + (props.type == 'textarea' ? ' textarea' : "") + (props.type == 'number' ? ' number' : "")}>
        {#if props.type === 'textarea'}
            <textarea class="input" value={props.value} placeholder={props.placeholder ? $t(props.placeholder) : null} onkeypress={onKeyPress} onfocusin={(e)=>{focus=true}} onfocusout={(e)=>{focus=false}} oninput={onChangeValue}></textarea>
        {:else} <input class="input" value={props.value} placeholder={props.placeholder ? $t(props.placeholder) : null} type={props.type ? props.type : "text"} onkeypress={onKeyPress} onfocusin={(e)=>{focus=true}} onfocusout={(e)=>{focus=false}} oninput={onChangeValue}/>
        {/if}
        
        {#if props.type === "search"}
            <div class="SearchIcon">
                <img src={SearchIcon} alt="Search icon">
            </div>
        {/if}

        {#if props.type === "number"}
            <div class="controls">
                <button class={"control top" + (props.max != null && props.value >= props.max ? " disabled":"")} disabled={props.max != null && props.value >= props.max} onclick={()=>{plus()}}>
                    <img src={UpIcon} alt="Up icon">
                </button>
                <button class={"control bottom" + (props.min != null && props.value <= props.min ? " disabled":"")} disabled={props.min != null && props.value <= props.min} onclick={()=>{minus()}}>
                    <img src={DownIcon} alt="Down icon">
                </button>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .InputContainer{
        width: 100%;
        
        .InputTitle{
            margin-bottom: 8px;
        }

        .InputContent{
            width: 100%;
            height: 50px;
            position: relative;
            border: 2px solid var(--neutral500);
            background-color: transparent;
            transition: opacity .2s;
            border-radius: 15px;
            transition: all .2s;

            &.textarea{
                height: 350px;
                min-height: 350px;
                max-height: 350px;
            }

            &.focus{
                background-color: var(--neutral150);
            }

            &.error{
                border-color: var(--red100);
            }
        
            &.search{
                input{
                    width: calc(100% - 40px);
                    margin-left: 40px;

                    &:focus{
                        width: 100%;
                        margin-left: 0;
                    }

                    &:focus ~ .SearchIcon{
                        margin-left: 0px;
                        opacity: 0;
                    }
                }
            }

            &.number{
                .input{
                    width: calc(100% - 80px);
                }

                .input::-webkit-outer-spin-button,
                .input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                /* Firefox */
                .input[type=number] {
                    -moz-appearance: textfield;
                    appearance: textfield;
                }
            }
        
            .SearchIcon{
                position: absolute;
                left: 5px;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                z-index: 100;
                padding: 5px;
        
                img{
                    width: 100%;
                    pointer-events: none;
                }
            }

            .controls{
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 60px;
                display: flex;
                border-bottom-right-radius: 12px;
                border-top-right-radius: 12px;
                flex-direction: column;

                .control{
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    cursor: pointer;
                    background-color: transparent;
                    transition: all .3s;

                    &.disabled{
                        opacity: .2;
                        cursor: default;

                        &:hover{
                            background-color: transparent;
                        }
                    }

                    &:hover{
                        background-color: var(--neutral150);
                    }

                    &.top{
                        border-top-right-radius: 12px;
                    }

                    &.bottom{
                        border-bottom-right-radius: 12px;
                    }

                    img{
                        width: 20px;
                        pointer-events: none;
                    }
                }
            }

            .input{
                width: 100%;
                box-sizing: border-box;
                height: 100%;
                border-radius: 15px;
                font-size: 16px;
                background-color: transparent;
                padding: 10px 15px;
                color: white;
                transition: all .2s;
                border: none;
                text-decoration: none;

                &:focus{
                    width: 100%;
                    margin-left: 0;
                    outline: none;
                }

                &:focus ~ .SearchIcon{
                    margin-left: 0px;
                    opacity: 0;
                }
            }

            @media screen and (max-width : 1100px){
                .input{
                    font-size: 14px;
                }
            }

            @media screen and (max-width : 650px){
                .input{
                    font-size: 12px;
                }
            }
        }
    }
</style>