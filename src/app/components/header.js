import React, { Component } from 'react';
import '../../css/header.css';
import { PageHeader, Image } from 'react-bootstrap';
import Logo from '../../img/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <Image src={Logo} className="pull-right imgLogo" responsive />
        <PageHeader>
          Pesquisa Direcionada de Contratos
        </PageHeader>
      </div>
    );
  }
}

export default Header;
