import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () =>{
  const companyLogo = 'https://cdn.sanity.io/images/s08sn1n8/production/993598801097cd8d73626c8f1c9c7b51084e452d-617x377.png'
    return  (
      <div className="container is-max-widescreen header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <StaticImage src={companyLogo} alt="datflo LLC Logo" className="lrg"/>
              </a>
  
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true">Who are we</span>
                <span aria-hidden="true">Lo.FM</span>
              </a>
            </div>
  
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item " href="#who">
                  Who are we
                  <div class="underline">&nbsp;</div>
                </a>
                <a class="navbar-item is-4" href="#lofm">
                  Lo.FM
                  <div class="underline">&nbsp;</div>
                </a>
              </div>
            </div>
        </nav>
      </div>
      )
  }

  export default Header;