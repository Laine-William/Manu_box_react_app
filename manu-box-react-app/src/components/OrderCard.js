// Importe les npm install
import React from 'react';

// Imorte les composants bootstrap
import { Card, 
         Row, 
         Col, 
         Badge } from 'react-bootstrap';
         
// Importe le theme
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

// Fonction fleche orderCard avec des proprietes qui retoune la carte
const OrderCard = (props) => {

    // Appel le theme
    const [theme] = useThemeHook ();
    
    // Retourne la carte
    return (
    
        // 
        <Card className = {`mb-3`} border = {theme ? 'warning' : 'primary'}>

            {/* En tete de la carte */}
            <Card.Header>
                <b>{ props.box }</b>

                <small className = "float-end">{ props.boxId }</small>
            </Card.Header>
        
            {/* Marge de la ligne */}
            <Row className = "p-2">

                {/* Taille de la colonne */}
                <Col xs = {3} sm = {2}>

                    {/* Image de la carte */}
                    <Card.Img variant = "top" src = { props.image } />
                </Col>

                {/* Colonne */}
                <Col>

                    {/* Corps de la carte */}
                    <Card.Body>

                        {/* Titre de la carte */}
                        <Card.Title>{ props.title }</Card.Title>

                        {/* Texte dans la carte */}
                        <Card.Text>

                            {/* Description en vert */}
                            <Badge pill bg = "success">{ props.description }</Badge>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
       </Card>
    );
};

export default OrderCard;