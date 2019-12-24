import React, { Component } from 'react';

import facebook from '../assets/facebook-1.svg'
import profile from '../assets/profile.png'


class Header extends Component {
  render(){
    return (
     <nav>
      <div className="logo">
        <img src={facebook} />
      </div>
      <div className="perfil">
        <p>Meu Perfil</p>
        <img src={profile} />
      </div>
     </nav>
    )
  }
}

export default Header;