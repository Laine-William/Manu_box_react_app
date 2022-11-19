// Importe les npm install
import React from 'react';

// Importe les composants bootstrap
import { Container, 
         Navbar, 
         Nav } from 'react-bootstrap';

// Importe les icones 
import { FaCouch } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';

// Importe les liens avec une route
import { Link } from "@reach/router";

// Importe le composant panier
import { useCart } from "react-use-cart";

// Fonction fleche pour Header qui retoune une entete
const Header = () => {

  // Appel le panier
  const {

    isEmpty,
    totalItems,
  } = useCart ();

  // Retourne le contenu
  return (

    // Barre de navigation 
    <Navbar collapseOnSelect expand = "md"
            className = { 'bg-light border-bottom' }
            style = {{ width : '100%', position : 'fixed', zIndex : 100 }}>
        
      {/* Conteneur */}
      <Container>

        {/* Liens */}
        <Link to="/">

          {/* Barre de navigation avec la marque (titre) */}
          <Navbar.Brand className = { 'text-light-primary' }>
            <b>La Manu box</b>
          </Navbar.Brand>
        </Link>

        {/* Changement de la barre de navigation pour pc */}
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />

      {/* Changement de la barre de navigation pour le mobile */}
      <Navbar.Collapse id = "basic-navbar-nav">

        {/* Navigation */}
        <Nav className="ms-auto">

          {/* Liens du panier */}
          <Link
            to = "/cart"
            className = {`text-light-primary d-flex align-items-center` }>

            {/* Taille de l'icone (canape) */}
            <FaCouch size = "2rem"/>

            {/* s'il n'est pas vide il y a le nombre d'articles au dessus de l'icone */}
            { ! isEmpty && <span style = {{ position: 'relative', 
                                            left: '-21px', 
                                            top: '-18px' }}>{ totalItems }
                           </span> }

            {/* s'il n'est pas vide il y a le nombre d'articles au dessus de l'icone sinon il n'y a rien */}
            <span style = {{ marginLeft : ! isEmpty ? '-13px': 0 }}> &nbsp;Mes meubles</span>
          </Link>
              
          {/* Liens de nos offres de services avec un icone */}
          <Link to = "my-account" className = { `nav-link 'text-light-primary` }>
            
            {/* Taille de l'icone (contact) */}
            <IoMdContact size = "1.8rem"/>
            
            &nbsp;Nos offres de services
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;