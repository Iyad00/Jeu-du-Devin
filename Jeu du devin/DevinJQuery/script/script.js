let tentatives;
let nb;
let input;
let valeur;
let valide;
let texte;
let victoire = 0;
let defaite = 0;
let res;
let rejouer;


$(document).ready(function() {

    start();
    rejouer = $("#replay").click(function() {
        valide.off("click", getValue);
        start();
    });

});

function start() {

    
    valide = $("#valide");
    valide.click(getValue);

    texte = $("p#text");
    texte.text("");

    input = $("#input");
    input.val("");

    nb = Math.floor((Math.random()*100)+1);

    tentatives = 1;
    valeur = 0;
    res  = $("#winlooseratio");
}

function getValue() {

    valeur = Number(input.val() || NaN);
    verifier(valeur);
    return;
}

function verifier(nombre) {

    if (!Number.isFinite(nombre)) {
        texte.text("Pas un nombre !");
        return;
    }

    else if(nombre == nb) {

        texte.text("["+tentatives+"] Gagné, le nombre était " + nb + " !");

        victoire += 1;

        if(defaite != 0) {
                res.text("Victoire / Défaites / Ratio : " + victoire + " / "+defaite+" / "+victoire/defaite);
            }
        else {
            res.text("Victoire / Défaites / Ratio : " + victoire + " / "+defaite+" / 0");
        }

        texte.css("color","green");

        valide.off("click", getValue);

    }

    else {

        if(tentatives == 6) {
            texte.text("["+tentatives+"] Perdu. Le nombre était " + nb + " !");
            texte.css("color","red");

            defaite += 1;

            if(defaite != 0) {
                res.text("Victoire / Défaites / Ratio : " + victoire + " / "+defaite+" / "+victoire/defaite);
            }
            else {
                res.text("Victoire / Défaites / Ratio : " + victoire + " / "+defaite+" / 0");
            }

            valide.off("click", getValue);
        }

        else if(nombre < nb) {
            texte.text("["+tentatives+"] Trop Petit");
            texte.css("color","red");

            tentatives = tentatives + 1;
    
        }
        else if(nombre > nb) {
            
            texte.text("["+tentatives+"] Trop Grand");
            texte.css("color","blue");

            tentatives += 1;
    
        }
    }
}