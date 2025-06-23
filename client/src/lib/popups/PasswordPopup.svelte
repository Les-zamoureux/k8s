<script>
    import Request from "../../utils/Request";
    import Input from "../Input.svelte";
    import PopupContent from "../PopupContent.svelte";

    let props = $props()

    let password = $state("")
    let newPassword = $state("")
    let confirmNewPassword = $state("")
    let error = $state(null)

    const save = () => {
        if(!password || !newPassword || !confirmNewPassword) return

        if(newPassword === confirmNewPassword){
            Request.put('/user/change-password', {oldPassword : password, newPassword : newPassword}).then((res) => {
                error = null
            }).catch(err => {
                console.log(err)
                error = "invalidPassword"
            })
        }else{
            error = "passwordError"
        }
    }
</script>

<div class="PasswordPopup">
    <PopupContent title={"profile.password-popup"} submitDisabled={!password || !newPassword || !confirmNewPassword} submitLabel={'commons.validate'} onSubmitClick={save}>
        <div class="PasswordPopupFields">
            <Input error={error === "invalidPassword" ? "profile.invalid-password" : ""} onEnterPress={save} type={'password'} title={'profile.old-password'} value={password} onChange={(value) => password = value}/>
            <Input error={error === "passwordError" ? "sign-in.password-error" :""} onEnterPress={save} type={'password'} title={'profile.new-password'} value={newPassword} onChange={(value) => newPassword = value}/>
            <Input error={error === "passwordError" ? "sign-in.password-error" :""} onEnterPress={save} type={'password'} title={'profile.confirm-new-password'} value={confirmNewPassword} onChange={(value) => confirmNewPassword = value}/>
        </div>
    </PopupContent>
</div>

<style lang="scss">
    .PasswordPopup{
        width: 450px;

        .PasswordPopupFields{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
</style>