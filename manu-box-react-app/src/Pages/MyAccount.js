import React from 'react';
import { Container, Row, Col, Tab, Nav, Image} from 'react-bootstrap';
import Heading from  '../components/Heading';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import './my-account.css';
import OrderCard from '../components/OrderCard';


const MyAccount = () => {

    return (
        <Container className="py-5 mt-5">
            <Heading heading="Nos services" />
            <Tab.Container defaultActiveKey="mon-offre">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className={`text-black bg-light p-2 rounded h-100 mb-3 user-menu`}>
                        <Row className="mb-3 py-2"></Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="mon-offre">
                                    Nos offres en details
                                    <FaClipboardList size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="offre-detail">
                                    La Manu-box en details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="contact">
                                    La Manu-box contact
                                    <IoLocationSharp size="1.4rem" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className={`text-black bg-light p-2 rounded`}>
                        <Tab.Content>
                            <Tab.Pane eventKey="mon-offre">
                                <Heading heading="Nos offres de box sans engagement" size="h3" />
                                <OrderCard 
                                    title="S"
                                    image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                                    description="Boxes S de 2 à 3 m² : 50€ HT / mois"
                                />
                                <OrderCard 
                                    title="M"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    description="Boxes M de 3 à 6 m² : 80€ HT / mois"
                                />
                                <OrderCard 
                                    title="L"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    description="Boxes L de 6 à 10 m² : 140€ HT / mois"
                                />
                                <OrderCard 
                                    title="XL"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    description="Boxes XL de 10 à 16 m² : 200€ HT / mois"                                     
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="offre-detail">
                                <Heading heading="Detail de l'offre" size="h3" />
                                <OrderCard 
                                    title="Mens Casual Premium Slim Fit T-Shirts"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    description="05 July, 2022"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="contact">
                                <Heading heading="Contact" size="h3" />
                                <OrderCard 
                                    title="Mens Casual Premium Slim Fit T-Shirts"
                                    img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                                    description="05 July, 2022"
                                />
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;