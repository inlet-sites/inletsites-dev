<script>
    import webdev from "$lib/webdev.webp";
    import hosting from "$lib/hosting.webp";
    import emailing from "$lib/emailing.webp";
    import onlineStore from "$lib/onlineStore.webp";
    import customSoftware from "$lib/customSoftware.webp";
    import onlinePayment from "$lib/onlinePayment.webp";
    import blog from "$lib/blog.webp";
    import gallery from "$lib/gallery.webp";
    import paymentPlan from "$lib/paymentPlan.webp";
    import url from "$lib/url.webp";
</script>

<div class="container">
    <h1>Services</h1>

    <div class="images">
        <a href="/services#siteDevelopment" class="serviceImage">
            <img src={webdev} alt="Web development">
            <p>Website Development</p>
        </a>

        <a href="/services#domain" class="serviceImage">
            <img src={url} alt="URL">
            <p>Domain Purchasing</p>
        </a>

        <a href="/services#blog" class="serviceImage">
            <img src={blog} alt="Computer on a table with a blog on it">
            <p>Personal Blog</p>
        </a>

        <a href="/services#gallery" class="serviceImage">
            <img src={gallery} alt="Gallery of photos">
            <p>Photo Gallery</p>
        </a>

        <a href="/services#emailing" class="serviceImage">
            <img src={emailing} alt="Laptop with email on it">
            <p>Email Services</p>
        </a>

        <a href="/services#hosting" class="serviceImage">
            <img src={hosting} alt="Room of web servers">
            <p>Website Hosting</p>
        </a>

        <a href="/services#paymentPlan" class="serviceImage">
            <img src={paymentPlan} alt="Black and white dollar sign with a shadow">
            <p>Payment Plans</p>
        </a>

        <a href="/services#store" class="serviceImage">
            <img src={onlineStore} alt="Computer with online shopping">
            <p>Custom online store</p>
        </a>

        <a href="/services#onlinePayment" class="serviceImage">
            <img src={onlinePayment} alt="Credit card sitting on a keyboard">
            <p>Online Payments</p>
        </a>

        <a href="/services#custom" class="serviceImage">
            <img src={customSoftware} alt="Computer monitors displaying charts and graphs">
            <p>Custom Business Management Software</p>
        </a>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(200, 200, 200);
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
        color: rgb(200, 200, 200);
        z-index: 2;
        text-align: center;
    }

    .serviceImage:hover img{
        opacity: 0.5;
    }
</style>
