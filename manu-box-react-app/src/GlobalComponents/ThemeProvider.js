// Import les npm install et les composants
import React, { createContext, 
                useState, 
                useEffect, 
                useContext } from 'react';

// ThemeContext appel la methode createContext
const ThemeContext = createContext ();

// Fonction fleche ThemeProvider qui retourne les proprietes du theme fourni
const ThemeProvider = (props) => {

    // Theme utilise l'etat actuel pour analyser le contenu du fichier JSON en stockage local pour le theme ou retourne faux
    const [theme] = useState (JSON.parse (localStorage.getItem ('theme')) || false );
    // console.log (theme);
    
    // Fonction fleche useEffect qui retourne le theme
    useEffect (() => {

        // Stock localement le theme dans un fichier JSON pour le modifier en convertissant la valeur en chaine de caractere
        localStorage.setItem ('theme', JSON.stringify (theme));
        // console.log (theme);

    }, [theme]);

    // Retourne le contenu
    return (

        // Le fournisseur de theme prend la valeur du theme
        <ThemeContext.Provider value = {{ theme }}>

            {/* Propriete disponible pour les enfants */}
            {props.children}
        </ThemeContext.Provider>
    );
};

// Fonction fleche useThemeHook qui retourne un theme hook
const useThemeHook = () =>{

    // Theme appel le context du theme
    const {theme} = useContext (ThemeContext);
    
    // Retourne le theme
    return [theme];
}

export { ThemeProvider, ThemeContext, useThemeHook};