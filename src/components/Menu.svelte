<script>
    let displayMenu = false;

    const toggleMenu = ()=>{
        displayMenu = !displayMenu;
    }
</script>

<div class="openMenu" on:click={toggleMenu}>
    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000">
        <path d="M3 5H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 12H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M3 19H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</div>

{#if displayMenu}
    <div class="closeMenu" on:click={toggleMenu}>
        <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000">
            <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
{/if}

{#if displayMenu}
    <div class="menu" on:click={toggleMenu}>
        <a class="inletSites" href="/">Inlet Sites</a>
        <a href="/services">Services</a>
        <a href="/prices">Prices</a>
        <a href="/process">The Process</a>
        <a href="/contact">Contact</a>
    </div>
{/if}

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
        top: 35px;
        right: 35px;
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
        padding: 0 35px;
        z-index: 2;
    }

    .menu .inletSites{
        margin-right: auto;
        background: none;
    }

    .menu .inletSites:hover{
        background: none;
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

    @media screen and (max-width: 900px){
        .menu{
            flex-direction: column;
            justify-content: space-around;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: #041e42;
            z-index: 3;
        }

        .menu .inletSites{
            text-align: left;
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
        }
    }
</style>
