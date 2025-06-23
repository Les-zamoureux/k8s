<script>
    import { Route, Router } from "svelte-routing";
    import App from "./App.svelte"

    export let url = ""
</script>

<Router url={url}>
    <Route path="/*" let:params>
        <App params={params}/>
    </Route>
    <Route path="/:tab" let:params>
        <App tab={params.tab}/>
    </Route>
    <Route path="/:tab/:id" let:params>
        <App tab={params.tab} id={params.id}/>
    </Route>
</Router>