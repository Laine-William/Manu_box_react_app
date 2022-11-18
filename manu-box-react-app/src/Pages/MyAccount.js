
import React from 'react';


import { Container,
         Row, 
         Col, 
         Tab, 
         Nav} from 'react-bootstrap';


import Heading from  '../components/Heading';


import { FaClipboardList, 
         FaUser } from 'react-icons/fa';
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
                                    La Manu box en details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>

                                <Nav.Link eventKey="contact">
                                    La Manu box contact
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
                                    boxId="Taille de la box"
                                    title="S"
                                    image="../images/box_size.jpg"
                                    description="Boxes S de 2 à 3 m² : 50€ HT / mois"
                                />

                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="M"
                                    image="images/box_size.jpg"
                                    description="Boxes M de 3 à 6 m² : 80€ HT / mois"
                                />

                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="L"
                                    image="images/box_size.jpg"
                                    description="Boxes L de 6 à 10 m² : 140€ HT / mois"
                                />

                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="XL"
                                    image="images/box_size.jpg"
                                    description="Boxes XL de 10 à 16 m² : 200€ HT / mois"                                     
                                />
                            </Tab.Pane>

                            <Tab.Pane eventKey="offre-detail">
                                <Heading heading="Detail de l'offre" size="h3" />
                                <OrderCard 
                                    boxId="Details"
                                    title="Les emplacements de stockage sont sécurisés par vidéosurveillance, avec alarme vol et incendie, et sont accessibles 7j/7 par badge personnalisé."
                                    image="images/box.jpg"
                                />
                            </Tab.Pane>

                            <Tab.Pane eventKey="contact">
                                <Heading heading="Contact" size="h3" />
                                <OrderCard 
                                    boxId="Adresse"
                                    image="images/manu.png"
                                    description="E-mail : lamanubox@gmail.com, Tel : 0768765643, Adresse : 12 rue casimir de la vigne, 76600 Le Havre"
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