// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



// creo variabile per select
let gameMode = document.getElementById("select-mode");



// creo click event per generare griglia
let myButton = document.querySelector(".play-button");

myButton.addEventListener("click",
    function() {

        // creo elemento big-square
        // richiamo contenitore
        const container = document.querySelector(".square-container");

        // richiamo funzione per creare elemento
        const bigSquare = createElementWClass("div", "big-square");

        // porto elemento in pagina
        container.append(bigSquare);



        // creo caselle square

        // creo condizione per difficoltà
        let gameModeValue = gameMode.value;

        if (gameModeValue === "easy") { // se difficoltà facile

            // creo ciclo per le 100 caselle
            for (let i = 1; i <= 100; i++) {

                // richiamo funzione per creare elemento
                const littleSquare = createElementWClass("div", "square");

                // assegno classe difficoltà
                littleSquare.classList.add("easy-square");

                // scrivo il numero relativo della casella
                littleSquare.innerHTML = i;

                // porto elemento in pagina
                bigSquare.append(littleSquare);

                // creo click event per quando viene cliccata una casella

                littleSquare.addEventListener("click",
                    function() {

                        // aggiungo classe per cambiare colore 
                        littleSquare.classList.add("clicked");

                        // mostro il numero della casella
                        console.log("numero casella: ", i);

                    }
                );
            }

        } else if (gameModeValue === "mid") { // se difficoltà media

            // creo ciclo per le 81 caselle
            for (let i = 1; i <= 81; i++) {

                // richiamo funzione per creare elemento
                const littleSquare = createElementWClass("div", "square");

                // assegno classe difficoltà
                littleSquare.classList.add("mid-square");

                // scrivo il numero relativo della casella
                littleSquare.innerHTML = i;

                // porto elemento in pagina
                bigSquare.append(littleSquare);

                // creo click event per quando viene cliccata una casella

                littleSquare.addEventListener("click",
                    function() {

                        // aggiungo classe per cambiare colore 
                        littleSquare.classList.add("clicked");

                        // mostro il numero della casella
                        console.log("numero casella: ", i);

                    }
                );
            }

        } else if (gameModeValue === "hard") { //se difficoltà difficile

            // creo ciclo per le 49 caselle
            for (let i = 1; i <= 49; i++) {

                // richiamo funzione per creare elemento
                const littleSquare = createElementWClass("div", "square");

                // assegno classe difficoltà
                littleSquare.classList.add("hard-square");

                // scrivo il numero relativo della casella
                littleSquare.innerHTML = i;

                // porto elemento in pagina
                bigSquare.append(littleSquare);

                // creo click event per quando viene cliccata una casella

                littleSquare.addEventListener("click",
                    function() {

                        // aggiungo classe per cambiare colore 
                        littleSquare.classList.add("clicked");

                        // mostro il numero della casella
                        console.log("numero casella: ", i);

                    }
                );
            }

        }
        
    }
);









// FUNZIONI

// funzione per creare elemento html
function createElementWClass (tagName, className) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}

