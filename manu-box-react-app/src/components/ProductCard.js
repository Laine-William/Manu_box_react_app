// Importe les npm install
import React from 'react';

// Importe les composants bootstrap
import { Button, 
         Card } from 'react-bootstrap';

// Importe le composant panier
import { useCart } from 'react-use-cart';

// Fonction fleche ProductCard qui retourne les proprietes du panier
const ProductCard = (props) => {

    // variables pour la carte
    let { image, 
          price, 
          title} = props.data;

    // Appel addItem de la methode useCart
    const { addItem } = useCart ();

    // Fonction fleche addToCart qui ajoute au panier
    const addToCart = () =>{

        // Ajoute les proprietes de la carte
        addItem (props.data);

    //console.log(props.data);
    }

    // Retourne le contenu
    return (

        // Taille de la carte
        <Card 
            style = {{ width: '18rem', height: 'auto' }}
                className = {`text-center p-0 overflow-hidden shadow mx-auto mb-4` }>

                {/* Style de la carte */}
                <div style = {{ background : 'white', 
                                height : '15rem', 
                                overflow : 'hidden', 
                                display: 'flex',
                                justifyContent : 'center', 
                                alignItems : 'center', 
                                marginBottom: 'inherit' }}>

                    {/* Longueur de l'image */}
                    <div style = {{ width : '9rem' }}>

                        {/* Image de la carte */}
                        <Card.Img variant = "top" src = {image} className = "img-fluid" />
                    </div>
                </div>
            
            {/* Corps de la carte */}
            <Card.Body>

                {/* Titre de la carte */}
                <Card.Title style = {{ textOverflow : 'ellipsis',  overflow : 'hidden', whiteSpace : 'nowrap' }}>
                    {title}
                </Card.Title>

                {/* Taille de la carte en m² */}
                <Card.Title>
                    <span className = "h3">{ price }</span> m²
                </Card.Title>

                {/* Bouton ajouter au panier */}
                <Button
                    onClick = { () => addToCart () }                

                    className = { `d-flex align-item-center m-auto border-0` }>
                    Ajouter
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;