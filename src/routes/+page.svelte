<script>
    import "../global.css";

    import Menu from "../components/Menu.svelte";
    import heroImg from "$lib/hero.webp";
</script>

<div class="container">
    <Menu/>

    <div class="hero">
        <img src={heroImg} alt="Sunrise over Murrells Inlet">

        <h1>Inlet Sites</h1>

        <h2>Professional Website Services</h2>
    </div>
</div>

<style>
    .container{
        height: 100%;
        width: 100%;
    }

    .hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%; 
        height: 100vh;
        position: relative;
    }

    .hero img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }

    .hero h1{
        font-size: 68px;
        color: white;
    }

    .hero h2{
        color: white;
    }
</style>
