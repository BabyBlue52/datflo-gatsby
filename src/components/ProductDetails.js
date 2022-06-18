import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// links 
const lofm = "https://lofifm.com"
const advert = "https://res.cloudinary.com/dzaaowrv5/video/upload/v1641505118/Lofm-advert.mp4"


const ProductDetails = () => {

return (
    <div class="container is-fullhd">
            <div class="block"/>
            <div class="columns">
                <div class="column is-7">
                <a id="lofm"></a>
                <div class="section is-large">
                    <h1>Lo.FM</h1>
                    <div class="block" />
                    <div class="columns">
                    <div class="column is-4 ">
                        <StaticImage src="../images/lofm-logo.png" alt="lo.fm logo"/>
                    </div>
                    <div class="column is-8 ">
                    <p>
                        An all-in-one chat platform for Lo-Fi lovers. Stream the latest uploads, create favorites list, with direct contact from the creators themselves.      
                    </p> 
                    <div class="block"/>
                        <a href={lofm} target="_blank" rel="noreferrer">
                        <button class="dtf-btn">
                            <span> Check it out</span>   
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div class="column is-5 ">
                <div class="section is-large"> 
                <video controls
                
                >
                    <source src={advert} type="video/mp4" />
                    <p>Please disable ad-blocker to view video</p>
                </video>  
                </div>
                </div>
            </div>

    </div>
)

}

export default ProductDetails