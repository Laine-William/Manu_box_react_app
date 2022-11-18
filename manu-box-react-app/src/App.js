// Importe les npm install
import React from "react";

// Importe 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importe l'en tête
import Header from './components/Header';

// Importe la route
import { Router } from "@reach/router";

// Importe les pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import MyAccount from "./Pages/MyAccount";

// Fonction App qui retourne la page principale
function App() {

  // Retourne le contenu
  return (

    // Style principal
    <main className={'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>

      <Header/>

      {/* Route */}
      <Router>

        {/* Chemin des fichiers */}
        <Home path="/" />
        <MyAccount path="my-account" />
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
