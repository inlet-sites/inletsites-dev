<script>
    import "../../global.css";
    import Menu from "../../components/Menu.svelte";
</script>

<Menu/>

<div class="container">
    <h1>Get in touch:</h1>

    <a href="mailto:lee@inletsites.dev">lee@inletsites.dev</a>
    <a href="tel:+18434109586">(843) 410-9586</a>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 75px auto;
        width: 90%;
    }

    h1{
        font-size: 38px;
        margin-bottom: 35px;
    }

    a{
        color: white;
        margin: 15px 0;
        font-size: 28px;
    }
</style>
