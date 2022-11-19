// Importe les npm install
import React, {useEffect, 
               useState} from 'react';

// Importe les composants de bootstrap
import { Container, 
         Row, 
         Col, 
         InputGroup, 
         FormControl } from 'react-bootstrap';

// Importe les icones pour la barre de recherche 
import { BiSearch } from 'react-icons/bi';

// Importe la barre de recherche
import SearchFilter from 'react-filter-search';

// Importe la carte produit
import ProductCard from '../components/ProductCard';

// Fonction fleche Home qui retoune la page d'accueil
const Home = () => {

    const [searchInput, setSearchInput] = useState('');

    const [productData, setProductData] = useState([]);

     // Fonction asynchrone pour afficher un retour de la requete
    async function getResponse(){

        // Reponse de la recherche avec la methode fetch pour le fichier json (stokage des donnees)
        const res = await fetch ("articles.json")
                          .then (res=> res.json());

        // Donne la reponse du produit
        setProductData (await res);
    }

    // Fonction fleche useEffect qui retoune la reponse de la requete
    useEffect (() => {

        getResponse();
    },[]);

    // Retourne le contenu
    return (

        // Conteneur avec un marge interne et externe
        <Container className="py-4">

            {/* Ligne ajuster au contenu */}
            <Row className="justify-content-center">

                {/* Taille de la colonne */}
                <Col xs = {10} md = {7} lg = {6} xl = {4} className = "mb-3 mx-auto text-center">

                    {/* Titre */}
                    <h1 className = 'text-black my-5'>Rechercher un produit</h1>
                    
                    {/* Taille du formulaire */}
                    <InputGroup className = "mb-3">

                        {/* Formulaire avec un texte en entree */}
                        <InputGroup.Text className = 'bg-light text-light-primary'>

                            {/* Taille icone de recherche */}
                            <BiSearch size = "2rem" />
                        </InputGroup.Text>

                        {/* Controle la forme de la recherche */}
                        <FormControl 

                            // Texte
                            placeholder = "Taper votre recherche"

                            // Valeur de la recherche entree
                            value = {searchInput}

                            // Fonction fleche recherche la valeur cible (texte)
                            onChange = { (e) => setSearchInput (e.target.value )}

                            className = 'bg-light text-black'
                        />
                    </InputGroup>
                </Col>

                {/* Recherche avec un filtre */}
                <SearchFilter 

                    // Valeur de la recherche entree
                    value = {searchInput}

                    // Donne le produit de la recherche
                    data = {productData}

                    // Rendu du resultat de recherche avec une fonction fléché
                    renderResults = { results => (

                        // Ligne au contenu centrer
                        <Row className = "justify-content-center">

                            {/* Parcourt les resultats et item avec la méthode map */}
                            { results.map ((item, i) => (

                                // Donnee des item avec leur cle
                                <ProductCard data = {item} key = {i} />
                            ))}
                        </Row>
                    )}
                />   
            </Row>
        </Container>
    );
};

export default Home;