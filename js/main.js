// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// creo click event per generare griglia

let myButton = document.querySelector(".play-button");

myButton.addEventListener("click",
    function() {

        // creo elemento big-square
        // richiamo contenitore
        const container = document.querySelector(".square-container");

        // richiamo funzione per creare elemento
        const bigSquare = createSomething("div", "big-square");
        console.log(bigSquare);

        // porto elemento in pagina
        container.append(bigSquare);

        // creo caselle square
    }
)





// FUNZIONI

// funzione per creare elemento html
function createSomething (tagName, className) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}

