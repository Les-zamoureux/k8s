<script>
    import Heading from "./Heading.svelte";
    import { t } from "svelte-intl-precompile";
    import Input from "./Input.svelte";
    import Button from "./Button.svelte";

    let props = $props()
    let search = $state("")

    const addData = () => {

    }
</script>

<div class="FetchPage">
    <div class="PageTitle">
        <Heading>{$t(props.title)}</Heading>
    </div>
    <div class="PageContent">
        <div class="ContentSearch">
            <Input type={"search"} value={search} onChange={(val) => {search = val}}/>
            <Button size={'medium'} label={'admin.add-data'} onClick={()=>{addData()}}/>
        </div>
        <div class="ContentTable">

        </div>
    </div>
</div>

<style lang="scss">
    .FetchPage{
        padding: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .PageTitle{
            margin-bottom: 10px;
        }

        .PageContent{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            width: 100%;

            .ContentSearch{
                width: 500px;
                display: flex;
                gap: 20px;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
            }

            .ContentTable{
                flex-grow: 1;
                background-color: red;
            }
        }
    }
</style>