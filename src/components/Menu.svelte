<div class="menu">
    <a class="inletSites" href="/">Inlet Sites</a>
    <a href="/services">Services</a>
    <a href="/prices">Prices</a>
    <a href="/process">The Process</a>
</div>

<style>
    .menu{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 50px;
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
        margin: 0 15px;
    }

    .menu a:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
