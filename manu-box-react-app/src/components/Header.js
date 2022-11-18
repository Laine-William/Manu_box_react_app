import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BiCart} from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";


const Header = () => {

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
        <Navbar collapseOnSelect expand="md"
                className={'bg-light border-bottom'}
                style={{ width: '100%', position: 'fixed', zIndex: 100}}
        >
        <Container>
          <Link to="/">
            <Navbar.Brand className={'text-light-primary'}>
                <b>La Manu box</b>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/cart"
                className={`text-light-primary d-flex align-items-center`}
              >
                <BiCart size="2rem"/>
                {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px'}}>{totalItems}</span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0}}>&nbsp;Panier</span>
              </Link>
              <Link to="my-account" className={`nav-link 'text-light-primary`}>
                  <VscAccount size="1.8rem"/>
                  &nbsp;Nos offres de services
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;