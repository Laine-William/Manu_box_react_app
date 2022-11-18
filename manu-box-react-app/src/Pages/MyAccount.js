// Importe les npm install
import React from 'react';

// Importe les composants de bootstrap
import { Container,
         Row, 
         Col, 
         Tab, 
         Nav} from 'react-bootstrap';

// Importe la rubrique
import Heading from  '../components/Heading';

// Importe les icones
import { FaClipboardList, 
         FaUser } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

// Importe la feuille de style my-account
import './my-account.css';

// Importe la commande
import OrderCard from '../components/OrderCard';

// Fonction fleche MyAccount qui retoune le contenu du panier
const MyAccount = () => {

    // Retourne le contenu
    return (

        // Conteneur avec un marge interne et externe
        <Container className="py-5 mt-5">

            {/* Rubrique nos services */}
            <Heading heading="Nos services" />

            {/* Tableau du conteneur des offres */}
            <Tab.Container defaultActiveKey="mon-offre">

                {/* Ligne pour ajuster le contenu */}
                <Row className="justify-content-evenly mt-4 p-1">

                    {/* Colonne */}
                     <Col sm={3} className={`text-black bg-light p-2 rounded h-100 mb-3 user-menu`}>
                        
                        {/* Ligne */}
                        <Row className="mb-3 py-2"></Row>

                        {/* Liens avec un items nos offres et un icone */}
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="mon-offre">
                                    Nos offres en details
                                    <FaClipboardList size="1.4rem" />
                                </Nav.Link>

                                {/* Liens avec un items details et un icone */}
                                <Nav.Link eventKey="offre-detail">
                                    La Manu box en details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>

                                {/* Liens avec un items contact et un icone */}
                                <Nav.Link eventKey="contact">
                                    La Manu box contact
                                    <IoLocationSharp size="1.4rem" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                     </Col>

                     {/* Colonne de nos offres */}
                     <Col sm = {8} className={`text-black bg-light p-2 rounded`}>

                        {/* Contenu du tableau */}
                        <Tab.Content>

                            {/* Onglet mon offre */}
                            <Tab.Pane eventKey="mon-offre">

                                {/* Appel la rubrique nos offres */}
                                <Heading heading="Nos offres de box sans engagement" size="h3" />

                                {/* Appel la box S */}
                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="S"
                                    image="../images/box_size.jpg"
                                    description="Boxes S de 2 à 3 m² : 50€ HT / mois"
                                />

                                {/* Appel la box M */}
                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="M"
                                    image="images/box_size.jpg"
                                    description="Boxes M de 3 à 6 m² : 80€ HT / mois"
                                />
                                
                                {/* Appel la box L */}
                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="L"
                                    image="images/box_size.jpg"
                                    description="Boxes L de 6 à 10 m² : 140€ HT / mois"
                                />

                                {/* Appel la box XL */}
                                <OrderCard 
                                    boxId="Taille de la box"
                                    title="XL"
                                    image="images/box_size.jpg"
                                    description="Boxes XL de 10 à 16 m² : 200€ HT / mois"                                     
                                />
                            </Tab.Pane>

                            {/* Onglet offre-details */}
                            <Tab.Pane eventKey="offre-detail">
                                
                                {/* Rubrique */}
                                <Heading heading="Detail de l'offre" size="h3" />
                                
                                {/* Appel l'offre detaille */}
                                <OrderCard 
                                    boxId="Details"
                                    title="Les emplacements de stockage sont sécurisés par vidéosurveillance, avec alarme vol et incendie, et sont accessibles 7j/7 par badge personnalisé."
                                    image="images/box.jpg"
                                />
                            </Tab.Pane>

                            {/* Onglet contact */}
                            <Tab.Pane eventKey = "contact">
                                
                                {/* Rubrique contact */}
                                <Heading heading = "Contact" size = "h3" />
                                
                                {/* Appel l'adresse */}
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