import React from "react";
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import "./styles.scss";

// links 
const spotify = "https://open.spotify.com/show/2Tuy4iQmpwWQpa3GR0bbyj?si=e3519ea8848c4b07"
const instagram = "https://www.instagram.com/datflo.official/"
const lofm = "https://lofifm.com"
const advert = "https://res.cloudinary.com/dzaaowrv5/video/upload/v1641505118/Lofm-advert.mp4"

const currentYear = new Date().getFullYear();

const Header = () =>{
    return  (
      <div class="header _dropShadow">
        <div class="columns is-flex">
            <div class="column has-text-centered">
                <a class="navbar-item" href="/">
                    <StaticImage src="../images/datflo.png" alt="datflo LLC Logo" className="lrg"/>
                </a>
            </div>
        </div>
      </div>
      )
  }

  const Footer = () => {
    return (
          <footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-flex centered">
                            {/** Social Media */}
                            <div class="social-media">
                        <a href={instagram} target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href={spotify} target="_blank" rel="noreferrer">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg>
                        </a>
                    </div>
                    </div>
                    <div class="column is-flex centered"> Reach out to us: 
                    <a class="footer-nav" href="mailto:mailto:info@datflo.io">
                        info@datflo.io
                    </a>
                    </div>
                    
                    <div class="column has-text-centered"> 
                        <small>{currentYear}, datFlo LLC &nbsp; All Rights Reserved.</small>
                    </div> 
                </div>
            </div>
            
          </footer>
    )
  }

const Mobile = () => {

    // Slideshow
    const ImageSlider = () => {
        return (
            <div class="adjust-slider">
            <Swiper
            slidesPerView={1}
            onSlideChange={() => 
                console.log('slide change')}
            scrollbar={{ draggable: true }}
            className="is-flex centered"
            > 
                <SwiperSlide>
                    <StaticImage src="../images/videos-screen.png" alt="videos" className="mx-auto"/>
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage src="../images/channel-screen.png" alt="channels"/>
                </SwiperSlide>
            </Swiper>
            </div>
        )
    }

    return (
        <main class="touch">
        <Helmet>
          <meta charSet="utf-8" />
          <title>datFlo LLC</title>
        </Helmet>
        <Header/>
        {/** Begin Layer 0 */}
        <div id="layer0">
            <div class="container">
                <img class="grid"/>
            </div>
            {/** Begin Floating OBJ */}
            <section class="is-large">
                <div class="columns is-flex adjust">
                    <StaticImage src="../images/square.png" alt="floating square" />
                </div>
            </section>
            
            <section class="is-large"/>

            <section class="is-large">
                <div class="columns is-flex adjust-right">
                    <StaticImage src="../images/circle.png" alt="floating circle" />
                </div>
            </section>
            
            <section class="is-large"/>
            
            <div class="super-block"/>
            <section class="is-large">
                <div class="columns is-flex adjust-down">
                    <StaticImage src="../images/triangle.png" alt="floating triangle" />
                </div>
            </section>
        </div>
        
        {/** Begin Content  */}
        <div class="container">
          <div class="super-block"/>
          <div class="block"/>
            <div class="columns">
                <div class="column">
                    <div class="section is-large">
                        <h1>Transparency driven <br/>technology company</h1>
                    </div>
                </div>
            </div>

               
            <div class="super-block"/>

            <div class="columns">
                <div class="column"/>
                <div class="column is-7 ">
                    <a id="who"></a>
                    <div class="section is-large">
                        <h2> Who are we</h2> 
                        <p>datFlo LLC is a young start-up company founded in 2020 for the purpose of building unique applications to streamline the ticket-buying expereince.</p>
                        <p> We believe that the concert-going expereince has been clogged with old-school service fees and transaction hurdles.</p>
                        <p>Our mission at datFlo LLC is to use blockchain and community-based consensus to change the way people consume live music.</p>
                    </div>
                </div>
            </div>
            
            <a id="lofm"></a>
            <div class="section is-large">
                <div class="columns is-flex centered">
                    <h1>Lo.FM</h1>  
                    <StaticImage src="../images/lofm-logo.png" alt="lo.fm logo" class="lofm"/>
                    <div class="block"/>
                 
                </div>
                <div class="block"/>
                <div class="columns centered">
                    <p class="section">
                        An all-in-one chat platform for Lo-Fi lovers. Stream the latest uploads, create favorites list, with direct contact from the creators themselves.      
                    </p>
                    <div class="is-flex centered">
                        <a href={lofm} target="_blank" rel="noreferrer">
                            <button class="dtf-btn">
                                <span> Check it out</span>   
                            </button>
                        </a>
                    </div> 
                    
                </div>
            </div>
            
            <div class="section is-flex centered" style={{"marginBottom":"-100px"}}> 
              <video controls >
                <source src={advert} type="video/mp4" />
                <p>Please disable ad-blocker to view video</p>
              </video>  
            </div>
        </div>
        <div class="super-block"/>
        <div class="container">
            <p class="centered">&larr;<span>swipe</span>&rarr;</p>        
        </div>
        <ImageSlider />
        
        <Footer/>
        </main>
    )
}

export default Mobile