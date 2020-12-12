import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from"./Header";
import Footer from"./Footer";


function setupUnit() {
    

    return(
        <div className="setupUnit">
            <Header />
            <div className="speech">
                <h3 id="phase1">Bah.... j'ai oublié de l'ajouter....</h3>
                <h3 id="phase2">Ou pas je ne suis plus sûr....</h3>
                <h3 id="phase3">AH ! T'es encore là....</h3>
                <h3 id="phase4">Tiens un cadeau de remerciment pour être rester jusqu'à maintenant</h3>
                 <a id="phase5" href="https://www.youtube.com/watch?v=F6lVw9sNVic" target="_blank" rel="noreferrer"><h3>Ce lien changera ta vie</h3></a>
                <h3 id="phase6">Je crois aussi que la question elle est vite répondue...</h3>
            </div>
            <Footer />
        </div>
    )
}

export default setupUnit;