import React from 'react';

import './style.css';
import facebookLogo from '../../assets/facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={facebookLogo} alt="Facebook logo"/>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  )
}

export default Header;