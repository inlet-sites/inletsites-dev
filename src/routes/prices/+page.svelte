<script>
    import "../../global.css";
    import Menu from "../../components/Menu.svelte";
</script>

<Menu/>

<div class="container">
    <h1>Prices</h1>
    <p class="firstNote">Prices displayed here are a guide to the general prices. Total cost is created on an individual, case-by-case basis.</p>    
    
    <h2 id="businessCard"><a href="/services#businessCard">Business-Card Website</a></h2>
    <p class="note">*Development costs will be waived for the remainder of 2024 (up to 5 pages)</p>
    <table>
        <tr>
            <td>Up to 5 pages</td>
            <td>$350.00</td>
        </tr>
        <tr>
            <td>Additional pages</td>
            <td>$50.00/page</td>
        </tr>
        <tr>
            <td>Changes (sites already hosted w/ Inlet Sites)</td>
            <td>1 free, then $25</td>
        </tr>
    </table>

    <h2>Hosting</h2>
    <p class="note">*Hosting of custom sites or online stores will be larger and individually negotiated</p>
    <table>
        <tr>
            <td>Business Card Website</td>
            <td>$50.00/month</td>
        </tr>
        <tr>
            <td>Larger sites</td>
            <td>Individually negotiated</td>
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

    <h2>Photo Gallery</h2>
    <p class="note">*Additional service, requires website</p>
    <table>
        <tr>
            <td>Standard gallery using Inlet Sites portal</td>
            <td>$500.00 development</td>
        </tr>
        <tr>
            <td>Custom photo gallery or portal</td>
            <td>Negotiated individually</td>
        </tr>
    </table>

    <table>
        <caption>Monthly cost based on number of photos</caption>
        <tr>
            <td>0-100</td>
            <td>$15</td>
        </tr>
        <tr>
            <td>101-500</td>
            <td>$25</td>
        </tr>
        <tr>
            <td>501-1000</td>
            <td>$45</td>
        <tr>
            <td>1000+</td>
            <td>$75</td>
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
            <td>$0.01/email</td>
        </tr>
    </table>

    <h2>Custom site/ online store</h2>
    <p>Prices negotiated individually due to individual nature of the requirements. Cost of the static site will laregely reflect prices above, however, server code and database creation/management will increase costs.</p>
</div>

<style>
    .container{
        margin: 75px auto;
        width: 90%;
        max-width: 1200px;
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
        margin: 35px 0 15px 0;
        margin-top: 35px;
        font-size: 38px;
    }

    h2 a{
        color: rgb(200, 200, 200);
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

    caption{
        margin-top: 15px;
    }
</style>
