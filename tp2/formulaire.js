
function validation() {
    if (document.getElementById("nom").value == "") {
        document.getElementById("erreur").innerHTML = "La saisie du nom est obligatoire"

        document.getElementById("resultat").style.display = "none"
    }
    else if (document.getElementById("nom").value.length < 5) {
        document.getElementById("erreur").innerHTML = "le nom doit contenir au moins 5caractères "
    }



    else if (document.getElementById("prénom").value == "") {
        document.getElementById("erreur").innerHTML = "La saisie du prénom est obligatoire"
    }
    else if (document.getElementById("prénom").value.length < 5) {
        document.getElementById("erreur").innerHTML = "le prénom doit contenir au moins 5caractères "
        document.getElementById("resultat").style.display = "none"
    }


    else if (document.getElementById("date").value == "") {
        document.getElementById("erreur").innerHTML = "La séléction de votre date de naissance est obligatoire"
        document.getElementById("resultat").style.display = "none"
    }




    else if (document.getElementById("adresse").value == "") {
        document.getElementById("erreur").innerHTML = "La saisie de votre adresse est obligatoire"
        document.getElementById("resultat").style.display = "none"
    }
    else if (document.getElementById("adresse").value.length < 5) {
        document.getElementById("erreur").innerHTML = "l'adresse doit contenir au moins 5caractères "
        document.getElementById("resultat").style.display = "none"
    }



    else if (document.getElementById("mail").value == "") {
        document.getElementById("erreur").innerHTML = "La saisie du mail est obligatoire"
        document.getElementById("resultat").style.display = "none"

    }
    else if (document.getElementById("mail").value.length < 5) {
        document.getElementById("erreur").innerHTML = "la saisie du mail est obligatoire "
        document.getElementById("resultat").style.display = "none"
    }

    else {
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prénom").value;
        document.getElementById("erreur").style.display = "none"
        document.getElementById("resultat").style.display = "block"

    }

}



