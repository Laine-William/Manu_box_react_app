// Importe les npm install
import React from 'react';

// Importe les composants de bootstrap
import { Button, 
         Container, 
         Col, 
         Row, 
         Table } from 'react-bootstrap';

// Importe le panier
import { useCart } from 'react-use-cart';

// Importe l'icone pour le panier
import { BsCartX} from 'react-icons/bs';

import { Link } from "@reach/router";

// Fonction fleche Cart qui retoune le contenu du panier
const Cart = () => {

    // Creation de variables pour le panier
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    // Retourne le contenu
    return (

        // Conteneur avec un marge interne et externe
        <Container className="py-4 mt-5">

            {/* Titre */}
            <h1 className={`my-5 text-center`}>

                {/* Test si le panier est vide ou non */}
                {isEmpty ? 'Votre panier est vide !' : 'Le Panier'}
            </h1>

            {/* Creation des lignes dans un tableau responsive */}
            <Row className="justify-content-center">

                {/* Tableau responsive */}
                <Table responsive="sm" striped bordered hover variant className="mb-5">
                    <tbody>
                        {/* Parcourt les items et les index avec la méthode map */}
                        {items.map ((item, index) => {

                            return(

                                <tr key = {index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>

                                    {/* Affiche le titre */}
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>

                                    {/* Affiche la taille */}    
                                    <td>{item.price} m2</td>

                                    {/* Affiche la quantite */} 
                                    <td>Quantite ({item.quantity})</td>

                                    {/* Action des boutons au clique qui ajoute, enleve et supprime */}
                                    <td>
                                        <Button onClick = { () => updateItemQuantity (item.id, item.quantity - 1)} className="ms-2">-</Button>

                                        <Button onClick = { () => updateItemQuantity (item.id, item.quantity + 1)} className="ms-2">+</Button>

                                        <Button variant = "danger" onClick = { () => removeItem (item.id)} className="ms-2">Supprimer cette article</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                
                {/* Test si le panier n'est pas vide affiche les lignes */}
                {! isEmpty &&
                    <Row 
                        style = {{ position: 'fixed', bottom: 0}}
                        className = {`justify-content-center w-100`}>
                        
                        {/* Calcul la taille total */}
                        <Col className="py-2">
                            <h4>Taille total : {cartTotal} m²</h4>

                            <h4>Votre taille de box : {}
                                <Link to="../my-account">
                                    <Button className="ms-2">Voir les offres</Button>
                                </Link>
                            </h4>
                        </Col>

                        {/* Bouton pour vider le panier */}
                        <Col className = "p-0" md = {4}>
                            <Button variant = "danger"
                                className = "m-2"
                                onClick = { () => emptyCart ()}>
                                <BsCartX size = "1.7rem" />
                                Vider le panier en cours
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
    );
};

export default Cart;