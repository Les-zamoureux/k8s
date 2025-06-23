<script>
    import Request from "../../utils/Request";
    import Input from "../Input.svelte";
    import PopupContent from "../PopupContent.svelte";

    let props = $props()

    let username = $state(window.localStorage.getItem('username'))
    let error = $state(null)

    const save = () => {
        if(username !== window.localStorage.getItem('username') && username){
            Request.post('/user', {username:username}).then(res => {
                error = null
                window.localStorage.setItem('username', username)
            }).catch(err => {
                error = "sign-in.username-already-use"
            })
        }
    }
</script>

<div class="UsernamePopup">
    <PopupContent title={"profile.username-popup"} submitDisabled={username === window.localStorage.getItem('username') || !username} submitLabel={'commons.validate'} onSubmitClick={save}>
        <Input error={error} onEnterPress={save} title={'profile.new-username'} value={username} onChange={(value) => username = value}/>
    </PopupContent>
</div>

<style lang="scss">
    .UsernamePopup{
        width: 450px;
    }
</style>