<script>
    import "../../global.css";
    import Menu from "../../components/Menu.svelte";
</script>

<Menu/>

<div class="container">
    <h1>Prices</h1>
    <p class="firstNote">Prices displayed here are a guide to the general prices. Total cost is created on an individual, case by case basis.</p>    
    
    <h2>Static Site Development</h2>
    <table>
        <tr>
            <td>Single Page</td>
            <td>$500.00</td>
        </tr>
        <tr>
            <td>Additional pages</td>
            <td>$100.00/page</td>
        </tr>
    </table>

    <h2>Hosting</h2>
    <p class="note">*Hosting of custom sites or online stores will be larger and individually negotiated</p>
    <table>
        <tr>
            <td>Single page</td>
            <td>$50../month</td>
        </tr>
        <tr>
            <td>Additional pages</td>
            <td>$5.00/page/month</td>
        </tr>
    </table>

    <h2>Domain</h2>
    <p>The cost of a domain depends on the domain you want. Inlet Sites charges nothing additional for this.</p>

    <h2>Blog</h2>
    <p class="note">*Additional service, requires website</p>
    <table>
        <tr>
            <td>Inlet Sites portal</td>
            <td>$25.00/month</td>
        </tr>
        <tr>
            <td>Portal on website</td>
            <td>$500.00 development cost + $25.00/month</td>
        </tr>
    </table>

    <h2>Email</h2>
    <p class="note">*Additional service, requires website</p>
    <table>
        <tr>
            <td>Email address at your site</td>
            <td>$5.00/month/email</td>
        </tr>
        <tr>
            <td>Automated emailing</td>
            <td>$0.05/email</td>
        </tr>
    </table>

    <h2>Custom site/ online store</h2>
    <p>Prices negotiated individually due to individual nature of the requirements. Cost of the static site will laregely reflect prices above, however, server code and database creation/management will increase costs.</p>
</div>

<style>
    .container{
        margin: 75px auto;
        width: 90%;
    }

    h1{
        font-size: 48px;
        text-decoration: underline;
        text-align: center;
    }

    .firstNote{
        text-align: center;
    }

    h2{
        margin-top: 35px;
        font-size: 38px;
    }

    table{
        border-collapse: collapse;
    }

    td{
        border: 1px solid white;
        padding: 5px 10px;
        font-size: 22px;
    }

    .note{
        font-size: 14px;
        margin-bottom: 25px;
    }
</style>
