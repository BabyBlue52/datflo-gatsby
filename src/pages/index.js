import React from "react";
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby';

import HeroSection from "../components/Hero";
import ProductDetails from "../components/ProductDetails";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import Mobile from "./Mobile"
import Header from "../components/HeaderNav";

import "./styles.scss";


// markup
const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query backgroundImages {
  //     allSanityHomepageImages {
  //       edges {
  //         node {
  //           image {
  //             _key
  //           }
  //         }
  //       }
  //     }
  //   }  
  // `)

  return (
    <>
      {/** Begin Desktop Layout */}
      <main class="desktop">
        <Helmet>
          <meta charSet="utf-8" />
          <title>datFlo LLC</title>
        </Helmet>
        <Header />  

        {/** Begin Background Layer */}
        <div id="layer0">
          <div class="container ">
          <img class="grid"/>

          {/** Begin Floating OBJ */}
          <section class=" ">
            <div class="columns adjust">
              <div class="column is-5 "></div>
              <div class="column is-2 ">
                <StaticImage src="../images/square.png" alt="floating square" />
              </div>
              <div class="column is-5 "></div>
            </div>
          </section>
          <section class="section is-medium adjust-down ">
            <div class="columns">
              <div class="column is-5 ">
                <StaticImage src="../images/circle.png" alt="floating circle" />
              </div>
            </div>
          </section>
          <section class="section is-medium adjust-down ">
            <div class="columns">
              <div class="column is-8"></div>
              <div class="column is-4 ">
                <a id="lofm"></a>
                <StaticImage src="../images/triangle.png" alt="floating triangle" />
              </div>
            </div>
          </section>
          <section class="section is-large"/>
          <section class="section is-medium adjust-down ">
            <div class="columns">
              <div class="column is-10"></div>
              <div class="column is-2 adjust-left ">
                <StaticImage src="../images/square.png" alt="floating square" />
              </div>
            </div>
          </section>
          </div>
        </div>
        {/** END Background Layer */}
        <div id="layer1">
          <HeroSection/>
          <ProductDetails/>
          <ImageSlider/>
          <Footer/>
        </div>
        
      </main>
      
      {/** Begin Mobile Layout */}  
      <Mobile/> 
    </>
  )
}

export default IndexPage

// export const query = graphql`
//   query {
//     allSanitySocialLinks {
//       nodes {
//         url
//         }
//       }
//   }
// `