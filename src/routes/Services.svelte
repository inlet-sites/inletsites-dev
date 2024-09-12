<script>
    import webdev from "$lib/webdev.webp";
    import hosting from "$lib/hosting.webp";
    import emailing from "$lib/emailing.webp";
    import onlineStore from "$lib/onlineStore.webp";
    import customSoftware from "$lib/customSoftware.webp";
    import onlinePayment from "$lib/onlinePayment.webp";
</script>

<div class="container">
    <h1>Services</h1>

    <div class="images">
        <a href="/services" class="serviceImage">
            <img src={webdev} alt="Image showing web development">
            <p>Website Development</p>
        </a>

        <a href="/services" class="serviceImage">
            <img src={hosting} alt="Room of web servers">
            <p>Website Hosting</p>
        </a>

        <a href="/services" class="serviceImage">
            <img src={emailing} alt="Laptop with email on it">
            <p>Email Services</p>
        </a>

        <a href="/services" class="serviceImage">
            <img src={onlineStore} alt="Computer with online shopping">
            <p>Custom online store</p>
        </a>

        <a href="/services" class="serviceImage">
            <img src={customSoftware} alt="Computer monitors displaying charts and graphs">
            <p>Custom Business Management Software</p>
        </a>

        <a href="/services" class="serviceImage">
            <img src={onlinePayment} alt="Credit card sitting on a keyboard">
            <p>Online Payments</p>
        </a>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        padding: 35px 0;
    }

    h1{
        font-size: 48px;
        text-decoration: underline;
        margin-bottom: 15px;
    }

    .images{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 75%;
    }

    .serviceImage{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 350px;
        width: 350px;
        position: relative;
        text-decoration: none;
    }

    .serviceImage img{
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0.35;
    }

    .serviceImage p{
        font-size: 28px;
        color: white;
        z-index: 2;
        text-align: center;
    }

    .serviceImage:hover img{
        opacity: 0.5;
    }
</style>
