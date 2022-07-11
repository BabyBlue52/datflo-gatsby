import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const HeroSection = () => {
    const data = useStaticQuery(graphql`
    query PageContent {
        allSanityPageContent {
          edges {
            node {
              id
              label
              pageContent
            }
          }
        }
      }
      
    `)

    return (
        <>
            <div class="columns">
                <div class="column is-8 ">
                <div class="section is-large">
                    {/* Sanity Starter */}
                    <h1>{data.allSanityPageContent.edges[0].node.pageContent}</h1>
                </div>
                </div>
                <div class="column">
                    
                </div>
            </div>
            
            <div class="block"/>

            <div class="columns">
                <div class="column is-5 ">
                <div class="section is-large">
                
                </div>
                </div>
                <div class="column is-7 ">
                <a id="who"></a>
                <div class="section is-large">
                    <h2>{data.allSanityPageContent.edges[1].node.label}</h2> 
                    <p>{data.allSanityPageContent.edges[1].node.pageContent}</p>
                </div>
                </div>
            </div>
            
            <div class="block"/>
        </>
    )
}

export default HeroSection
