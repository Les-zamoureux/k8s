{#snippet sum(a, b)}
	<p>{a} + {b} = {a + b}</p>
{/snippet}

<script>
    import Body from "../lib/Body.svelte";
    import { t } from "svelte-intl-precompile";
    import Button from "../lib/Button.svelte";
    import ConfirmPopup from "../lib/popups/ConfirmPopup.svelte";
    import Page from "../lib/Page.svelte";
    import { openPopup } from "../stores/store";
    import Request from "../utils/Request";
    import PersonIcon from "./../assets/person.svg"
    import EditIcon from "./../assets/edit.svg"
    import EditPrimaryIcon from "./../assets/edit-primary.svg"
    import UsernamePopup from "../lib/popups/UsernamePopup.svelte";
    import PasswordPopup from "../lib/popups/PasswordPopup.svelte";
    import Heading from "../lib/Heading.svelte";
    import Loader from "../lib/Loader.svelte";

    let props = $props()
    let orders = $state([])
    let fetchingOrders = $state(true)

    const fetchOrders = () => {
        fetchingOrders = true
        Request.get('/orders').then(res => {
            orders = res
            fetchingOrders = false
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteAccount = () => {
        Request.delete('/user').then((res) => {
            if(res) props.disconnect()
        }).catch(err => {
            console.log(err)
            return
        })
    }

    const onDeleteAccount = () => {
        openPopup(ConfirmPopup, {
            title:"profile.delete.title", 
            description:"profile.delete.description", 
            onSubmitClick:deleteAccount
        })
    }

    const onEditUsername = () => {
        openPopup(UsernamePopup, {})
    }

    const onEditPassword = () => {
        openPopup(PasswordPopup, {})
    }
</script>

<div class="ProfilePage">
    <Page title={"nav.profile"}>
        <div class="ProfileContainer">
            <div class="ProfileCard">
                <div class="CardImage">
                    <img src={PersonIcon} alt="Account icon">
                </div>
                <div class="CardContent">
                    <div class="CardInfo">
                        <div class="Info">
                            <Body>{$t("profile.email")}</Body>
                            <Body weight={"bold"}>{"******@*****"}</Body>
                        </div>
                    </div>
                     <div class="CardInfo">
                        <div class="Info">
                            <Body>{$t("profile.username")}</Body>
                            <Body weight={"bold"}>{window.localStorage.getItem('username')}</Body>
                        </div>
                        <div class="action">
                            <Button size={"small"} nude icon={EditIcon} iconHover={EditPrimaryIcon} onClick={onEditUsername}/>
                        </div>
                    </div>
                     <div class="CardInfo">
                        <div class="Info">
                            <Body>{$t("profile.password")}</Body>
                            <Body weight={"bold"}>{"******"}</Body>
                        </div>
                        <div class="action">
                            <Button size={"small"} nude icon={EditIcon} iconHover={EditPrimaryIcon} onClick={onEditPassword}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ProfileActions">
                <Button size={'medium'} label={'commons.disconnect'} onClick={props.disconnect}/>    
                <Button size={'small'} type={3} label={'profile.delete-account'} onClick={onDeleteAccount}/>    
            </div>
        </div>
        <div class="ProfileContainer">
            <Heading size={'h3'}>{$t('profile.command-history')}</Heading>
            <div class="ProfileContent">
                {#if fetchingOrders}
                    <Loader/>
                {:else}
                    <div class="OrdersList">

                    </div>
                {/if}
            </div>
        </div>
    </Page>
</div>

<style lang="scss">
    .ProfilePage{
        width: 100%;
        height: 100%;

        .ProfileContainer{
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            min-height: 400px;
            margin-bottom: 25px;

            .ProfileCard{
                background-color: var(--neutral100);
                width: 500px;
                display: flex;
                flex-direction: row;
                padding: 30px;
                border-radius: 20px;
                align-items: center;
                margin-bottom: 40px;
                justify-content: space-between;

                .CardImage{
                    width: 180px;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img{
                        pointer-events: none;
                        width: 100%;
                    }
                }

                .CardContent{
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    margin-left: 40px;
                    width: 100%;
                    gap: 10px;

                    .CardInfo{
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        align-items: center;
                        justify-content: space-between;

                        .Info{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            gap: 4px;
                        }
                    }
                }
            }

            .ProfileActions{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }
    }
</style>