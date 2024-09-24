<script>
    import "../../global.css";
    import Menu from "../../components/Menu.svelte";

    import contract from "$lib/contract.docx";
</script>

<Menu/>

<div class="container">
    <h1>Agreement Example</h1>
    <p>An example contract/agreement is available for review below if you wish to see it.</p>
    <p>Of course, each contract will be personalized depending on the individual requirements. This is provided so that you may view the generals of the contract and have time to review it.</p>

    <a href={contract} download>Downloadable example</a>
</div>

<style>
    .container{
        margin: 75px auto;
        width: 90%;
        max-width: 1200px;
    }

    h1{
        font-size: 48px;
        text-decoration: underline;
        text-align: center;
    }

    p{
        margin: 35px 0;
    }

    a{
        font-size: 26px;
        color: white;
    }
</style>
