<script>
    import Heading from './../lib/Heading.svelte'
    import LogoSvg from "./../assets/logo.svg"

    import { Link, navigate } from 'svelte-routing';

    import {t} from 'svelte-intl-precompile'
    import Input from '../lib/Input.svelte';
    import Button from '../lib/Button.svelte';
    import Body from '../lib/Body.svelte';
    import { emailCheck } from '../utils/helpers';
    import Request from '../utils/Request';

    import { currentPage } from '../stores/store';
    
	let props = $props();

    let username = $state("")
    let email = $state("")
    let password = $state("")
    let confirmPassword = $state("")

    let submitError = $state({})
    let submitSuccess = $state({})

    $effect(()=>{
        if($currentPage === "verifyAccount"){
            Request.post('/user/verify/' + props.id).then((res) => {
                if(res){
                    submitError = {}
                }
            }).catch(err => {
                console.log(err)
                submitError = {"invalidToken":true}
            })
        }
    })

    const onLogin = () => {
        if((email || username) && password){
            Request.post('/login', {email:email, password:password}).then((res) => {
                submitError = {}
                props.login(res.token, res.username, res.is_admin)
                navigate('/')
            }).catch(err => {
                console.log(err)
                submitError = {"loginError":true}
            })
        }
    }

    const onSignIn = () => {
        if((email && emailCheck(email)) && password && confirmPassword && username){
            submitError = {}
            if(password && confirmPassword && password !== confirmPassword) submitError["passwordError"] = true
            if(Object.keys(submitError).length === 0){
                Request.post('/register', {username:username, email:email, password:password}).then((res) => {
                    submitError = {}
                    onSwitchPage('login')
                }).catch(err => {
                    if(err.status === 409){
                        let error = err.response?.data?.error
                        if(error && error.startsWith("already-used")){
                            if(error.includes("email")) submitError["emailAlreadyUse"] = true
                            if(error.includes("username")) submitError["usernameAlreadyUse"] = true
                        }
                    }else if(err.status === 400){
                        let error = err.response?.data?.error
                        if(err && err === "Invalid request") submitError["registerError"] = true
                        else{submitError["passwordFormat"] = true}
                    }else{
                        submitError["registerError"] = true
                    }
                })
            }
        }
    }

    const onPasswordRequested = () => {
        submitError = {}
        Request.post('/forgotten-password', {email:email}).then((res) => {
            submitSuccess = {'emailSent' : true}
        }).catch(err => {
            console.log(err)
            submitError["emailDoesntExist"] = true
        })
    }

    const onChangePassword = () => {
        if(!password || !confirmPassword || (password && confirmPassword && password !== confirmPassword)){
            submitError["passwordError"] = true
        }else{
            submitError = {}
            Request.post('/change-password', {password:password, passwordToken:props.id}).then((res) => {
                submitSuccess = {'emailSent' : true}
                onSwitchPage('login')
            }).catch(err => {
                console.log(err)
                submitError["invalidToken"] = true
            })
        }
    }

    const onSwitchPage = (page) => {
        email = ''
        password = ''
        confirmPassword = ''
        username = ''
        switch(page){
            case "login":
                navigate('/login')
                break
            case "signin":
                navigate('/sign-in')
                break
            case "forgotPassword":
                navigate('/forgot-password')
                break
            default :
                navigate('/')
                break
        }
    }
</script>

<div class="LoginPage">
    <div class="FormContainer">
        <div class="FormHeader">
            <div class={'FormLogo'} onclick={onSwitchPage}>
                <img src={LogoSvg} alt="Logo"/>
            </div>
        </div>
        {#if $currentPage === "login"}
        <div class="FormContent">
            <div class="FormTitle">
                <Heading size="h3">{$t("login.title")}</Heading>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onLogin()} error={submitError['loginError'] ? 'login.error' : null} value={email} onChange={(val) => email = val} title={'login.email-or-username'}/>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onLogin()} error={submitError['loginError'] ? 'login.error' : null} value={password} type={"password"} onChange={(val) => password = val} title={'login.password-field'}/>
            </div>
            <div class="FormField" style="margin-top:30px">
                <Button type={1} size={"small"} disabled={email === "" || password === ""} label={"commons.validate"} onClick={()=>onLogin()}/>
            </div>
            <div class="FormField">
                <Button type={3} label={"login.no-account"} onClick={()=>onSwitchPage("signin")}/>
                <div style="margin-top:10px"><Button type={3} label={"login.forgotten-password"} onClick={()=>onSwitchPage("forgotPassword")}/></div>
            </div>
        </div>
        {:else if $currentPage === "signIn"}
        <div class="FormContent">
            <div class="FormTitle">
                <Heading size="h3">{$t("sign-in.title")}</Heading>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onSignIn()} error={submitError['usernameAlreadyUse'] ? 'sign-in.username-already-use' : null} value={username} onChange={(val) => username = val} title={'sign-in.username-field'}/>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onSignIn()} error={submitError["emailAlreadyUse"] ? 'sign-in.email-already-use' : null} value={email} type={email} onChange={(val) => email = val} title={'sign-in.email-field'}/>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onSignIn()} error={submitError["passwordError"] ? 'sign-in.password-error' : submitError["passwordFormat"] ? 'sign-in.password-format' : null} value={password} type={"password"} onChange={(val) => password = val} title={'login.password-field'}/>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onSignIn()} error={submitError["passwordError"] ? 'sign-in.password-error' : null} value={confirmPassword} type={"password"} onChange={(val) => confirmPassword = val} title={'sign-in.confirm-password-field'}/>
            </div>
            <div class="FormField" style="margin-top:30px">
                <Button type={1} size={"small"} disabled={(email === "" || !emailCheck(email)) || password === "" || username === "" || confirmPassword === ""} label={"commons.validate"} onClick={()=>onSignIn()}/>
            </div>
            <div class="FormField">
                <Button type={3} label={"sign-in.already-account"} onClick={()=>onSwitchPage("login")}/>
            </div>
        </div>
        {:else if $currentPage === "forgotPassword"}
        <div class="FormContent">
            <div class="FormTitle">
                <Heading size="h3">{$t("forgot-password.title")}</Heading>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onPasswordRequested()} error={submitError["emailDoesntExist"] ? 'forgot-password.error' : null} value={email} type={email} onChange={(val) => email = val} title={'sign-in.email-field'}/>
            </div>
            <div class="FormField" style="margin-top:30px">
                <Button type={1} size={"small"} disabled={email === "" || !emailCheck(email)} label={"commons.validate"} onClick={()=>onPasswordRequested()}/>
            </div>
            <div class="FormField">
                <Button type={3} label={"sign-in.already-account"} onClick={()=>onSwitchPage("login")}/>
            </div>
            {#if submitSuccess["emailSent"]}
            <div class="FormField">
                <Body success={'emailSent'}/>
            </div>
            {/if}
        </div>
        {:else if $currentPage === "changePassword"}
        <div class="FormContent">
            <div class="FormTitle">
                <Heading size="h3">{$t("change-password.title")}</Heading>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onChangePassword()} error={submitError["passwordError"] ? 'sign-in.password-error' : null} value={password} type={"password"} onChange={(val) => password = val} title={'login.password-field'}/>
            </div>
            <div class="FormField">
                <Input onEnterPress={()=>onChangePassword()} error={submitError["passwordError"] ? 'sign-in.password-error' : null} value={confirmPassword} type={"password"} onChange={(val) => confirmPassword = val} title={'sign-in.confirm-password-field'}/>
            </div>
            <div class="FormField" style="margin-top:30px">
                <Button type={1} size={"small"} disabled={password === '' || confirmPassword === ''} label={"commons.validate"} onClick={()=>onChangePassword()}/>
            </div>
            {#if submitError["invalidToken"]}
            <div class="FormField">
                <Body error={$t("change-password.error")}/>
            </div>
            {/if}
        </div>
        {:else if $currentPage === "verifyAccount"}
        <div class="FormContent">
            <div class="FormTitle">
                <Heading size="h3">{$t("verify-account.title")}</Heading>
            </div>
            {#if submitError["invalidToken"]}
            <div class="FormField">
                <Body error={$t("verify-account.error")}/>
            </div>
            {:else}
            <div class="FormField">
                <Body>{$t("verify-account.description")}</Body>
            </div>
            <div class="FormField">
                <Button type={1} size={"medium"} label={"verify-account.connection"} onClick={()=>onSwitchPage('login')}/>
            </div>
            {/if}
        </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .LoginPage{
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .FormContainer{
            width: 500px;
            display: flex;
            flex-direction: column;
            background-color: var(--neutral100);
            border-radius: 15px;
            box-shadow: 0px 0px 50px rgba($color: #000000, $alpha: .25);

            .FormHeader{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 40px 0;
                flex-grow: 0;

                .FormLogo{
                    width: 125px;
                    height: 125px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img{
                        pointer-events: none;
                        width: 100%;
                    }
                }
            }

            .FormContent{
                padding: 40px;
                padding-top: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;

                .FormTitle{
                    width: 100%;
                }

                .FormField{
                    width: 100%;
                    margin-top: 15px;
                }
            }
        }

        @media screen and (max-width:600px){
            .FormContainer{
                width: 100vw;
                border-radius: 0;
                overflow-y: auto;
                // height: 100vh;
                min-height: 100vh;
                align-items: center;
                justify-content: center;
            }
        }
    }

    @media screen and (max-height:760px){
        .LoginPage{
            .FormContainer{
                width: 100vw;
                border-radius: 0;
                overflow-y: auto;
                // height: 100vh;
                min-height: 100vh;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>