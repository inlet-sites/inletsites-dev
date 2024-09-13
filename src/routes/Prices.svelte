<div class="container">
    <h1>Prices</h1>

    <div class="prices">
        <ul class="description">
            <li>Consultation is 100% free and entails no obligations for clients.</li>

            <li>Development prices are generally based on the number of pages in the site. Prices displayed are just an estimate and an exact quote will be provided before services are rendered.</li>

            <li>Payment plans available for development costs so long as hosting is done through Inlet Sites</li>

            <li>Hosting prices as similar to development prices. Displayed is an estimate and an exact quote is provided prior to services rendered.</li>

            <li>Larger sites that include back end services or databases will be negotiated based on the requirments of the site.</li>
        </ul>

        <div class="priceList">
            <table>
                <tr>
                    <td>Static Site*</td>
                    <td>
                        <p>Landing page: $500</p>
                        <p>Extra pages: $100/page</p>
                    </td>
                </tr>
                <tr>
                    <td>Hosting*</td>
                    <td>
                        <p>Single page site: $50/month</p>
                        <p>Extra pages: $5/page/month</p>
                    </td>
                </tr>
                <tr>
                    <td>Custom Email address</td>
                    <td>$5/email/month</td>
                </tr>
                <tr>
                    <td>Websites with custom functionality</td>
                    <td>Request a consultation</td>
                </tr>
            </table>

            <p class="littleText">* Prices are an estimate and will be adjusted for each project</p>
        </div>
    </div>

    <a class="priceButton" href="/prices">See Full Price List</a>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 35px 0;
    }

    h1{
        font-size: 48px;
        text-decoration: underline;
        margin-bottom: 15px;
    }

    .prices{
        display: flex;
        width: 90%;
    }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 55px;
    }

    .priceList table{
        border-collapse: collapse;
    }

    .priceList td{
        border: 1px solid white;
        padding: 5px 10px;
    }

    .priceList td:nth-child(1){
        width: 350px;
    }

    .priceList td:nth-child(2){
        width: 550px;
    }

    .priceList td p{
        margin: 10px 0;
    }

    .littleText{
        font-size: 12px;
        margin-top: 5px;
    }

    .priceButton{
        margin-top: 35px;
        font-size: 26px;
        color: white;
    }

    @media screen and (max-width: 1200px){
        .prices{
            flex-direction: column;
            align-items: center;
            width: 75%;
        }

        .priceList{
            margin-top: 35px; 
        }

        li{
            margin: 10px 0;
        }
    }

    @media screen and (max-width: 800px){
        .prices{
            width: 90%;
        }
    }
</style>
