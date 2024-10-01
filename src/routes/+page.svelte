<script>
    import "../global.css";

    import Menu from "../components/Menu.svelte";
    import Services from "./Services.svelte";
    import Prices from "./Prices.svelte";
    import Process from "./Process.svelte";
    import logoWithText from "$lib/logoWithText.png";
    import logoWhiteText from "$lib/logoWhiteText.png";

    import heroOne from "$lib/landingImages/one.webp";
    import heroTwo from "$lib/landingImages/two.webp";
    import heroThree from "$lib/landingImages/three.webp";
    import heroFour from "$lib/landingImages/four.webp";
    import heroFive from "$lib/landingImages/five.webp";

    let heroImg, heroClass;
    let hero = logoWithText;
    let rand = Math.floor(Math.random() * 5);
    switch(rand){
        case 0: heroImg = heroOne; break;
        case 1: heroImg = heroTwo; break;
        case 2: heroImg = heroThree; break;
        case 3: heroImg = heroFour; break;
        case 4: heroImg = heroFive; hero = logoWhiteText; break;
    }
</script>

<div class="container">
    <Menu/>

    <div class="hero {heroClass}">
        <img class="heroImage" src={heroImg} alt="Sunrise over Murrells Inlet">

        <img class="heroLogo" src={hero} alt="Inlet Sites Logo">

        <h2>Custom Websites and Software, Built Locally, Just For You</h2>
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
        background: rgba(0, 0, 0, 0.66);
        padding: 15px;
        border-radius: 15px;
    }

    @media screen and (max-width: 700px){
        .heroLogo{
            width: 90%;
        }
    }
</style>
