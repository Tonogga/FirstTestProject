window.onload = function()
{    
    // onclick-events an die entsprechenden Mitarbeiter-Reiter
    document.getElementById("informationen").onclick = informationenAuswählen;
    document.getElementById("arbeitsvertrag").onclick = arbeitsvertragAuswählen;    
    document.getElementById("urlaubskontingente").onclick = urlaubskontingenteAuswählen;
    document.getElementById("skills").onclick = skillsAuswählen;
    document.getElementById("gespräche").onclick = gesprächeAuswählen;
    document.getElementById("abmahnungen").onclick = abmahnungenAuswählen;
    document.getElementById("schulungen").onclick = schulungenAuswählen;
    document.getElementById("dokumente").onclick = dokumenteAuswählen;

    // onclick-events beim verlassen des Mitarbeiter-Profils
    document.getElementById("startseite").onclick = speichernAlert;    
    document.getElementById("mitarbeiterliste").onclick = speichernAlert;
    document.getElementById("abwesenheiten").onclick = speichernAlert;    
    document.getElementById("arbeitszeiten").onclick = speichernAlert;
    document.getElementById("reporting").onclick = speichernAlert;

    // onclick-events an die Dokumente/Kategorien von einem Mitarbeiter
    document.getElementById("kategorieArbeitsverträge").onclick = arbeitsverträgeKategorie;
    document.getElementById("kategorieBescheinigungen").onclick = bescheinigungenKategorie;
    document.getElementById("kategorieBewerbungsunterlagen").onclick = bewerbungsunterlagenKategorie;

    // onclick-events für Gesprächsgründe löschen
    document.getElementById("gesprächsgrund1delete").onclick = gesprächeDelete;
    document.getElementById("gesprächsgrund2delete").onclick = gesprächeDelete;
    document.getElementById("gesprächsgrund3delete").onclick = gesprächeDelete;

    // onclick-events für Abmahnungsgründe löschen
    document.getElementById("abmahnungsgrund1delete").onclick = abmahnungenDelete;
    document.getElementById("abmahnungsgrund2delete").onclick = abmahnungenDelete;
    document.getElementById("abmahnungsgrund3delete").onclick = abmahnungenDelete;

    // onclick-events für Schulung/Unterweisung löschen
    document.getElementById("schulungunterweisung1delete").onclick = schulungunterweisungDelete;
    document.getElementById("schulungunterweisung2delete").onclick = schulungunterweisungDelete;
    document.getElementById("schulungunterweisung3delete").onclick = schulungunterweisungDelete;

    // onclick-events für Schulung/Unterweisung löschen
    document.getElementById("zertifikat1delete").onclick = zertifikatDelete;
    document.getElementById("zertifikat2delete").onclick = zertifikatDelete;
    document.getElementById("zertifikat3delete").onclick = zertifikatDelete;

    // onclick-event für Mitarbeiter-Option (Mitarbeiter Entfernen)
    document.getElementById("mitarbeiterOptionen").onclick = mitarbeiterOptionen;
};

// Funktion beim Verlassen des Profils, ob gespeichert werden soll oder nicht
function speichernAlert()
{
    var txt;
    var r = confirm("Wollen Sie erst alle Änderungen speichern, bevor Sie die Profil-Seite verlassen?");
    if (r == true)
    {
        txt = "Erfolgreich gespeichert.";
    }
    else
    {
        txt = "Keine Änderungen vorgenommen.";
    }
    alert(txt);
}

// Methode um Mitarbeiter zu entfernen
function mitarbeiterOptionen()
{
    if (document.getElementById("mitarbeiterOptionenChoose").style.display = "none")
    {
    var se = document.getElementById("mitarbeiterOptionenChoose");
    se.style.display = "block";
    }
    else
    {
    var se = document.getElementById("mitarbeiterOptionenChoose");
    se.style.display = "none";
    }
}

// Methode um Gesprächsgründe zu löschen
function gesprächeDelete()
{
    var r = confirm("Wollen Sie den Eintrag wirklich entfernen?");
    if (r == true)
    {

    }
    else
    {
        
    }
}

// Methode um Abmahnungen zu löschen
function abmahnungenDelete()
{
    var r = confirm("Wollen Sie den Eintrag wirklich entfernen?");
    if (r == true)
    {
        
    }
    else
    {
        
    }
}

// Methode um Schulung/Unterweisung zu löschen
function schulungunterweisungDelete()
{
    var r = confirm("Wollen Sie den Eintrag wirklich entfernen?");
    if (r == true)
    {
        
    }
    else
    {
        
    }
}

// Methode um Zertifikate zu löschen
function zertifikatDelete()
{
    var r = confirm("Wollen Sie den Eintrag wirklich entfernen?");
    if (r == true)
    {
        
    }
    else
    {
        
    }
}

// MitarbeiterReiter-Informationen
function informationenAuswählen()
{
    // Variablen
    var informationen = document.getElementById("informationen");
    var informationenContainer = document.getElementById("informationenContainer");

    // zurücksetzen alle anderen nicht geklickten Mitarbeiter-Reiter
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none";
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    informationen.className = "active btn btn-secondary btn-rounded";
    informationenContainer.style.display ="block";  
}

// MitarbeiterReiter-Arbeitsvertrag
function arbeitsvertragAuswählen()
{
    // Variablen
    var arbeitsvertrag = document.getElementById("arbeitsvertrag");
    var arbeitsvertragContainer = document.getElementById("arbeitsvertragContainer");
    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none"; 
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";
    // ändern zum Hauptmitarbeiter-Reiter
    arbeitsvertrag.className = "active btn btn-secondary btn-rounded";
    arbeitsvertragContainer.style.display ="block";
}

// MitarbeiterReiter-Urlaubskontingente
function urlaubskontingenteAuswählen()
{
    // Variablen
    var urlaubskontingente = document.getElementById("urlaubskontingente");
    var urlaubskontingenteContainer = document.getElementById("urlaubskontingenteContainer");

    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none"; 
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    urlaubskontingente.className ="active btn btn-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="block";
}

// MitarbeiterReiter-Skills
function skillsAuswählen()
{
    // Variablen
    var skills = document.getElementById("skills");
    var skillsContainer = document.getElementById("skillsContainer");

    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none"; 
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none"; 
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    skills.className="active btn btn-secondary btn-rounded";
    skillsContainer.style.display ="block";
}

// MitarbeiterReiter-Gespräche
function gesprächeAuswählen()
{
    // Variablen
    var gespräche = document.getElementById("gespräche");
    var gesprächeContainer = document.getElementById("gesprächeContainer");

    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none"; 
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none"; 
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    gespräche.className = "active btn btn-secondary btn-rounded";
    gesprächeContainer.style.display ="block";
}

// MitarbeiterReiter-Abmahnungen
function abmahnungenAuswählen()
{
    // Variablen
    var abmahnungen = document.getElementById("abmahnungen");
    var abmahnungenContainer = document.getElementById("abmahnungenContainer");

    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none"; 
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none"; 
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    abmahnungen.className = "active btn btn-secondary btn-rounded";
    abmahnungenContainer.style.display ="block";
}

// MitarbeiterReiter-Schulungen
function schulungenAuswählen()
{
    // Variablen
    var schulungen = document.getElementById("schulungen");
    var schulungenContainer = document.getElementById("schulungenContainer");

    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none"; 
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none"; 
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";    
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    dokumente.className ="btn btn-outline-secondary btn-rounded";
    dokumenteContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    schulungen.className ="active btn btn-secondary btn-rounded";
    schulungenContainer.style.display ="block";
}

// MitarbeiterReiter-Dokumente
function dokumenteAuswählen()
{
    // Variablen
    var dokumente = document.getElementById("dokumente");
    var dokumenteContainer = document.getElementById("dokumenteContainer");

    // zurücksetzen aller anderen nicht geklickten Mitarbeiter-Reitern
    informationen.className ="btn btn-outline-secondary btn-rounded";
    informationenContainer.style.display = "none"; 
    arbeitsvertrag.className ="btn btn-outline-secondary btn-rounded";
    arbeitsvertragContainer.style.display = "none";
    urlaubskontingente.className ="btn btn-outline-secondary btn-rounded";
    urlaubskontingenteContainer.style.display ="none"; 
    skills.className ="btn btn-outline-secondary btn-rounded";
    skillsContainer.style.display ="none";
    gespräche.className ="btn btn-outline-secondary btn-rounded";
    gesprächeContainer.style.display ="none";
    abmahnungen.className ="btn btn-outline-secondary btn-rounded";
    abmahnungenContainer.style.display ="none";
    schulungen.className ="btn btn-outline-secondary btn-rounded";
    schulungenContainer.style.display ="none";

    // ändern zum Hauptmitarbeiter-Reiter
    dokumente.className ="active btn btn-secondary btn-rounded";
    dokumenteContainer.style.display ="block";
}

// MitarbeiterReiterDokumente-Kategorien-Arbeitsverträge
function arbeitsverträgeKategorie()
{
    // Variablen
    var kategorieArbeitsverträge = document.getElementById("kategorieArbeitsverträge");
    var dokumenteArbeitsverträge = document.getElementById("dokumenteArbeitsverträge");

    // Dokumente-Kategorien auswählen
    kategorieArbeitsverträge.style.backgroundColor = "rgb(48, 194, 219)";
    kategorieArbeitsverträge.style.color = "floralwhite";
    kategorieBescheinigungen.style.backgroundColor = "";
    kategorieBescheinigungen.style.color = "rgb(48, 194, 219)";
    kategorieBewerbungsunterlagen.style.backgroundColor = "";
    kategorieBewerbungsunterlagen.style.color = "rgb(48, 194, 219)";

    // Dokumente einer Kategorie anzeigen
    dokumenteArbeitsverträge.style.display ="block";
    dokumenteBescheinigungen.style.display = "none";
    dokumenteBewerbungsunterlagen.style.display = "none";

}

// MitarbeiterReiterDokumente-Kategorien-Bescheinigungen
function bescheinigungenKategorie()
{
    // Variablen
    var kategorieBescheinigungen = document.getElementById("kategorieBescheinigungen");
    var dokumenteBescheinigungen = document.getElementById("dokumenteBescheinigungen");

    // Dokumente-Kategorien auswählen
    kategorieBescheinigungen.style.backgroundColor = "rgb(48, 194, 219)";
    kategorieBescheinigungen.style.color = "floralwhite";
    kategorieArbeitsverträge.style.backgroundColor = "";
    kategorieArbeitsverträge.style.color = "rgb(48, 194, 219)";
    kategorieBewerbungsunterlagen.style.backgroundColor = "";
    kategorieBewerbungsunterlagen.style.color = "rgb(48, 194, 219)";

    // Dokumente einer Kategorie anzeigen
    dokumenteArbeitsverträge.style.display = "none";
    dokumenteBescheinigungen.style.display = "block";
    dokumenteBewerbungsunterlagen.style.display = "none";
}

// MitarbeiterReiterDokumente-Kategorien-Bewerbungsunterlagen
function bewerbungsunterlagenKategorie()
{
    // Variablen
    var kategorieBewerbungsunterlagen = document.getElementById("kategorieBewerbungsunterlagen");
    var dokumenteBewerbungsunterlagen = document.getElementById("dokumenteBewerbungsunterlagen");

    // Dokumente-Kategorien auswählen
    kategorieBewerbungsunterlagen.style.backgroundColor = "rgb(48, 194, 219)";
    kategorieBewerbungsunterlagen.style.color = "floralwhite";
    kategorieArbeitsverträge.style.backgroundColor = "";
    kategorieArbeitsverträge.style.color = "rgb(48, 194, 219)";
    kategorieBescheinigungen.style.backgroundColor = "";
    kategorieBescheinigungen.style.color = "rgb(48, 194, 219)";

    // Dokumente einer Kategorie anzeigen
    dokumenteArbeitsverträge.style.display = "none";
    dokumenteBescheinigungen.style.display = "none";
    dokumenteBewerbungsunterlagen.style.display = "block";
}