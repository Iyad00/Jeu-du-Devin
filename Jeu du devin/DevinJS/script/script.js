let tentatives;
let nb;
let input;
let valeur;
let valideid;

window.onload = function() {
    start();
}

function start() {

    valide = document.querySelector("#valide").removeEventListener("click", start);
    valide = document.querySelector("#valide").addEventListener("click", getValue);
    document.getElementById("valide").textContent = "Valider";
    document.getElementById("text").textContent = "";
    document.getElementById("input").value = "";

    input = document.querySelector("#input");

    nb = Math.floor((Math.random()*100)+1);

    tentatives = 1;
    valeur = 0;
}

function getValue() {


    valeur = document.querySelector("#input").value;
    verifier(valeur);
}

function verifier(nombre) {


    if(tentatives == 6) {

        if(nombre == nb) {
        document.getElementById("text").innerHTML = "<span style = 'color : green;'>["+tentatives+"]Gagné </span>";
        document.getElementById("valide").textContent = "Rejouer ?"; 
        document.querySelector("#valide").addEventListener("click", start);
        }
        else {
        document.getElementById("text").innerHTML = "<span style = 'color : red;'>Perdu. Le nombre était " + nb + " !</span>";
        document.getElementById("valide").textContent = "Rejouer ?"; 

        document.querySelector("#valide").addEventListener("click", start);
        }
    }

    else if(isNaN(nombre) == true || nombre == "") {
        document.getElementById("text").textContent = "Pas un nombre !";
    }

    else if(nombre < nb) {
        document.getElementById("text").innerHTML = "<span style ='color : red;'>["+tentatives+"] Trop Petit </span>";
        tentatives = tentatives + 1;

    }
    else if(nombre > nb) {
        
        document.getElementById("text").innerHTML = "<span style ='color : blue;'>["+tentatives+"] Trop Grand </span>";
        tentatives = tentatives + 1;

    }
    else if(nombre == nb) {
        document.getElementById("text").innerHTML = "<span style = 'color : green;'>["+tentatives+"]Gagné !</span>";
        document.getElementById("valide").textContent = "Rejouer ?";
        document.querySelector("#valide").addEventListener("click", start);
    }
}