<script>
    import logoWithText from "$lib/logoWithText.png";
    import logoWhiteText from "$lib/logoWhiteText.png";

    let menu;
    let displayMenu = false;

    const toggleMenu = ()=>{
        displayMenu = !displayMenu;
    }
</script>

<button class="openMenu" on:click={toggleMenu}>
    <svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000">
        <path d="M3 5H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 12H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 19H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</button>

<div class="menu" bind:this={menu} class:display={displayMenu}>
    <button class="closeMenu" on:click={toggleMenu}>
        <svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000">
            <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </button>

    <a class="inletSites blackLogo" href="/">
        <img src={logoWithText} alt="Inlet Sites logo">
    </a>
    <a class="inletSites whiteLogo" href="/">
        <img src={logoWhiteText} alt="Inlet Sites logo">
    </a>
    <a href="/services">Services</a>
    <a href="/prices">Prices</a>
    <a href="/process">The Process</a>
    <a href="/agreement">Agreement</a>
    <a href="/contact">Contact</a>
</div>

<style>
    .openMenu{
        display: none;
        position: absolute;
        top: 35px;;
        left: 35px;
        z-index: 2;
    }

    .closeMenu{
        display: none;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 4;
    }

    .menu{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        width: 100vw;
        background: rgba(255, 255, 255, 0.35);
        position: absolute;
        top: 0;
        left: 0;
        padding-right: 35px;
        z-index: 2;
    }

    .menu .inletSites{
        background: none;
        padding: 0;
        margin: 5px auto 5px 15px;
    }

    .menu .inletSites:hover{
        background: none;
    }

    .menu .inletSites img{
        height: 50px;
    }

    .whiteLogo{
        display: none;
    }

    .menu a{
        color: black;
        text-decoration: none;
        background: rgba(0, 0, 0, 0.05);
        padding: 5px;
        width: 125px;
        text-align: center;
        margin: 10px 15px;
        border-radius: 5px;
    }

    .menu a:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    .menu a:active{
        background: rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 1050px){
        .menu{
            display: none;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: #041e42;
            z-index: 3;
            padding: 0;
        }

        .blackLogo{
            display: none;
        }

        .whiteLogo{
            display: block;
        }

        .menu.display{
            display: flex;
        }

        .menu .inletSites{
            margin-top: 35px;
        }

        .menu a{
            color: white;
            font-size: 22px;
            padding: 20px 0;
            width: 90%;
            background: rgba(255, 255, 255, 0.5);
        }

        .openMenu, .closeMenu{
            display: flex;
            background: none;
            border: none;
        }
    }
</style>

