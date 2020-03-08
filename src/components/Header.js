import React, { Component } from 'react'

class Header extends Component {
  render(){
    return (
      <header>
      <nav>
      <i className="fab fa-facebook-square fa-3x"></i>
        <div>
          <span id="meuPerfil"><i className="fas fa-user-circle"></i> Meu perfil</span>
        </div>
      </nav>
    </header>
    )
  }
}

export default Header;