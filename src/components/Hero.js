import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const HeroSection = () => {
    const data = useStaticQuery(graphql`
    query Headline{
      allSanityHeadline {
        nodes {
          id
          pageHeadline
        }
      }
    }    
    `)

    return (
        <>
            <div class="columns">
                <div class="column is-8 ">
                <div class="section is-large">
                    <h1>{data.allSanityHeadline.nodes[0].pageHeadline}</h1>
                </div>
                </div>
                <div class="column">
                    
                </div>
            </div>
            
            <div class="block"/>
        </>
    )
}

export default HeroSection
