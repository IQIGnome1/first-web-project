// Nupp Programmeerimine I 
const btnProgaI = document.getElementById("Programmeerimine_I");
if (btnProgaI) {
    btnProgaI.addEventListener("click", function () {
       window.location.href = "./Programmeerimine_1/progaI.html";
    });

}


//  Nupp Kontrolltöö (progaI.html)
const btnKontroll = document.getElementById("ProgKt");
if (btnKontroll) {
    btnKontroll.addEventListener("click", function () {
        window.location.href = "./progaIKt.html";
    });
}

//  Nupp Eksamid (progaI.html)
const btnEks = document.getElementById("ProgEks");
if (btnEks) {
    btnEks.addEventListener("click", function () {
        window.location.href = "./progaEksamid.html";
    });

}


// ------------------------------------------------------------------- //


// Nupp Programmeerimine II 
const btnProgaII = document.getElementById("Programmeerimine_II");
if (btnProgaII) {
    btnProgaII.addEventListener("click", function () {
        window.location.href = "./Programmeerimine_2/progaII.html";
    });
}


//  Nupp Kontrolltöö (progaII.html)
const btnKontroll2 = document.getElementById("Prog2kt_II");
if (btnKontroll2) {
    btnKontroll2.addEventListener("click", function () {
        window.location.href = "./proga2Kt.html";
    });
}


//  Nupp Eksamid (progaII.html)
const btnProgaEks2 = document.getElementById("Prog2Eks");
if (btnProgaEks2) {
    btnProgaEks2.addEventListener("click", function () {
        window.location.href = "./proga2Eks.html";
    });
}


// ------------------------------------------------------------------- //


// Nupp tagasi avalehele (index.html) – abloend / avloend / proga I / proga II
const btnTagasiIndex = document.getElementById("TagasiIndex");
if (btnTagasiIndex) {
    btnTagasiIndex.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
}



// Kast kontrolltöö (andmebaasid loend)
const btnAndmeKt = document.getElementById("AndmebaasidKt");
if (btnAndmeKt) {
    btnAndmeKt.addEventListener("click", function () {
        window.location.href = "./kontrolltööd.html";
    });
}


// Kast „Eksamid “ (andmebaasid loend)
const btnAbEksami2 = document.getElementById("AndmebaasidEks");
if (btnAbEksami2) {
    btnAbEksami2.addEventListener("click", function () {
        window.location.href = "./eksamid.html";
    });
}

//Andmebaasid (loend)
const andmebaasidI = document.getElementById("Andme");
if (andmebaasidI) {
    andmebaasidI.addEventListener("click", function () {
        window.location.href = "./Andmebaasid/abloend.html";
    });
}


// ------------------------------------------------------------------- //






// Kast KT (AAR loend)
const btnAarKt = document.getElementById("AARKT");
if (btnAarKt) {
    btnAarKt.addEventListener("click", function () {
        window.location.href = "./Aarkontrolltööd.html";
    });
}

// Kast Eksam (AAR loend)
const btnAarEks = document.getElementById("AAREks");
if (btnAarEks) {
    btnAarEks.addEventListener("click", function () {
        window.location.href = "./AarEksam.html";
    });
}


// Kast 3. (AAR loend)
const Aar = document.getElementById("Aara");
if (Aar) {
    Aar.addEventListener("click", function () {
        window.location.href = "./AAR/aarloend.html";
    });
}



// ------------------------------------------------------------------- //

// OOP loend
const btnOop = document.getElementById("Oop");
if (btnOop) {
    btnOop.addEventListener("click", function () {
        window.location.href = "./OOP/ooploend.html"; 
    });
}


// Kast 1. KT (OOP loend)
const btnOopKT1 = document.getElementById("OOPKT");
if (btnOopKT1) {
    btnOopKT1.addEventListener("click", function () {
        window.location.href = "./oopkt.html";
    });
}

// Kast 2. KT (OOP loend)
const btnOopKT2 = document.getElementById("OOPKT2");
if (btnOopKT2) {
    btnOopKT2.addEventListener("click", function () {
        window.location.href = "./oopkt2.html";
    });
}


// Tagasi nupp (OOP)
const btnTagasiOOPLoend = document.getElementById("TagasiOOPLoend");
if (btnTagasiIndex) {
    btnTagasiIndex.addEventListener("click", function () {
        window.location.href = "../ooploend.html";
    });
}

console.log("btnOopKT1 =", btnOopKT1)



// ------------------------------------------------------------------- //


// Anmdeturve
const btAdme = document.getElementById("Anmdeturve");
if (btAdme) {
    btAdme.addEventListener("click", function () {
        window.location.href = "./Anmdeturve/avloend.html"; 
    });
}



// Anmdeturve
const btAAR = document.getElementById("AAR_KT");
if (btAAR) {
    btAAR.addEventListener("click", function () {
        window.location.href = "./AAR/aar_materjal_eksam2021b..html"; 
    });
}


// Kast „Andmeturve eksam 01.06.2023“ (andmeturve loend)
const btnAvEksami1 = document.getElementById("AndmeturveEks");
if (btnAvEksami1) {
    btnAvEksami1.addEventListener("click", function () {
        window.location.href = "./aveksamid.html";
    });
}

/*
Selles failis lisame erinevatele nuppudele klõpsu-käsitlejad. 
Kood kontrollib enne igat tegevust, kas nupp üldse olemas on, 
et vältida vigasid ja tagada, et sama script.js töötaks kõikidel lehtedel. 
Kui nupp on olemas, lisatakse sellele klõpsu kuulaja, 
mis suunab kasutaja õigesse HTML-lehte. 
*/

/*--------------------------------------------------------------------------------------------*/


// HAMBURGER MENÜÜ (ainult avalehel)
// Stiil: sama loogika nagu teistel nuppudel (võta ID järgi, kontrolli olemasolu, lisa click)


const menuuNupp = document.getElementById("menuuNupp");
const menuuKast = document.getElementById("menuuKast");
const menuuTaust = document.getElementById("menuuTaust");
const menuuSulge = document.getElementById("menuuSulge");

// Avab külgmenüü
function avaMenuu(){
  // Kui mingit elementi ei ole (nt teistel lehtedel), siis ära tee midagi
  if(!menuuNupp || !menuuKast || !menuuTaust) return;

  // Tee menüü nähtavaks (CSS klass "avatud")
  menuuKast.classList.add("avatud");
  menuuTaust.classList.add("avatud");

  // Keela lehe scroll, et taust ei liiguks menüü all
  document.body.classList.add("menuu-avatud");

  // Väike ligipääsetavuse info (pole kohustuslik, aga kasulik)
  menuuKast.setAttribute("aria-hidden", "false");
  menuuTaust.setAttribute("aria-hidden", "false");
  menuuNupp.setAttribute("aria-expanded", "true");

  // Pane fookus sulgemise nupule (mugav klaviatuuriga)
  if(menuuSulge){
    menuuSulge.focus();
  }
}

// Sulgeb külgmenüü
function sulgeMenuu(){
  if(!menuuNupp || !menuuKast || !menuuTaust) return;

  menuuKast.classList.remove("avatud");
  menuuTaust.classList.remove("avatud");
  document.body.classList.remove("menuu-avatud");

  menuuKast.setAttribute("aria-hidden", "true");
  menuuTaust.setAttribute("aria-hidden", "true");
  menuuNupp.setAttribute("aria-expanded", "false");
}

// Kui hamburger nupp on olemas, lisa click (nagu teistel nuppudel)
if(menuuNupp){
  menuuNupp.addEventListener("click", avaMenuu);
}

// Kui X nupp on olemas, lisa click
if(menuuSulge){
  menuuSulge.addEventListener("click", sulgeMenuu);
}

// Kui taust (overlay) on olemas, siis taustale vajutades sulge menüü
if(menuuTaust){
  menuuTaust.addEventListener("click", sulgeMenuu);
}

// ESC klahviga sulgemine 
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    sulgeMenuu();
  }
});




