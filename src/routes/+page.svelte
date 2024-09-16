<script>
    import "../global.css";

    import Menu from "../components/Menu.svelte";
    import Services from "./Services.svelte";
    import Prices from "./Prices.svelte";
    import Process from "./Process.svelte";
    import heroOne from "$lib/hero.webp";
    import heroTwo from "$lib/heroTwo.webp";
    import logoWithText from "$lib/logoWithText.png";

    let heroImg;
    const rand = Math.floor(Math.random() * 2);
    switch(rand){
        case 0: heroImg = heroOne; break;
        case 1: heroImg = heroTwo; break;
    }
</script>

<div class="container">
    <Menu/>

    <div class="hero">
        <img class="heroImage" src={heroImg} alt="Sunrise over Murrells Inlet">

        <img class="heroLogo" src={logoWithText} alt="Inlet Sites Logo">

        <h2>Professional Website Services</h2>
    </div>

    <Services/>

    <Prices/>

    <Process/>
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

    .heroImage{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        object-fit: cover;
    }

    .heroLogo{
        width: 550px;
        margin-bottom: 150px;
    }

    .hero h2{
        color: white;
        text-align: center;
    }

    @media screen and (max-width: 700px){
        .heroLogo{
            width: 90%;
        }
    }
</style>
