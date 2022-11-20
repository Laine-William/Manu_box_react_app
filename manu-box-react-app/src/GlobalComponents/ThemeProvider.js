// Import les npm install et les composants
import React, { createContext, 
                useState, 
                useEffect, 
                useContext } from 'react';

// ThemeContext appel la methode createContext
const ThemeContext = createContext ();

// Fonction fleche ThemeProvider qui retourne les proprietes du theme fourni
const ThemeProvider = (props) => {

    // 
    const [theme, setTheme] = useState (JSON.parse (localStorage.getItem ('theme')) || false );
    
    // Fonction fleche useEffect qui retourne
    useEffect (() => {

        // 
        localStorage.setItem ('theme', JSON.stringify (theme));

    }, [theme]);

    // 
    const setThemeMode = mode => setTheme (mode);

    // Retourne le contenu
    return (

        // 
        <ThemeContext.Provider value = {{ theme, setThemeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// Fonction fleche useThemeHook qui retourne un theme hook
const useThemeHook = () =>{

    // 
    const {theme} = useContext (ThemeContext);
    
    // Retourne le theme
    return [theme];
}

export { ThemeProvider, ThemeContext, useThemeHook};