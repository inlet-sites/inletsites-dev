<script>
    import workingTogether from "$lib/workingTogether.webp";
</script>

<div class="container">
    <h1>The process</h1>

    <div class="contents">
        <img src={workingTogether} alt="Tow people working together on a computer">

        <ol class="text">
            <li>The process used for creating your website and getting it online is as simple as possible. We understand that your time is valuable and and we try to make the process as simple and painless as possible.</li>

            <li>The most important step in the process is the discussion that we will have together. The better that we can understand the needs of your business, the better that we are able to serve you.</li>

            <li>Once we understand your needs and requirements, we will do all the work for you so that you don't have to worry about anything. You get to see a test version of your site and get revisions until you are happy with it.</li>

            <li>Pay nothing until you see a working version of your site that you are happy with.</li>

            <li>Once you approve the website as presented, we put the website live online. No more work is required from you and you may contact us at any time if there is any problem or you need something more.</li>

            <li>If you choose not have the site hosted by Inlet Sites, we will provide all of the code for you once payment for development is recieved.</li>
        </ol>
    </div>

    <a class="details" href="/process">More Details</a>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-top: 2px solid white;
    }

    h1{
        text-align: center;
        font-size: 48px;
        text-decoration: underline;
        margin-bottom: 15px;
    }

    .contents{
        display: flex;
        width: 90%;
    }

    img{
        border-radius: 15px;
        opacity: 0.75;
        width: 50%;
    }

    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 55px;
    }

    .text p{
        margin: 15px 0;
        font-size: 18px;
    }

    .details{
        margin-top: 35px;
        font-size: 26px;
        color: white;
    }

    @media screen and (max-width: 1200px){
        .contents{
            flex-direction: column;
            align-items: center;
        }

        img{
            margin-bottom: 35px;
            width: 350px;
        }

        li{
            margin: 10px 0;
        }
    }
</style>
