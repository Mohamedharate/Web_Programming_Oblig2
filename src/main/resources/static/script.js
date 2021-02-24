<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>




const fornavn = $("#inpFornavn");
const etternavn = $("#inpEtternavn");
const telefonnr = $("#inpTelefonnr");
const mail = $("#inpEpost");
const antall = $("#inpAntall");


const alleBillettene = $("#alleBillettene");

let feil = false;
if (antall.length === 0){
    feil = true;
    $("#feilMedlingAntall").html("Må skrive noe inn i antall");
}
if (fornavn.length === 0){
    feil = true;
    $("#feilMedlingFornavn").html("Må skrive noe inn i fornavnet")
}

if(etternavn.length === 0){
    feil = true;
    $("#feilMedlingEtternavn").html("Må skrive noe inn i ettnavnet")
}
if (telefonnr.length === 0){
    feil = true;
    $("#feilMedlingTlfnr").html("Må skrive noe inn i telefonnr")
}
if (mail.length === 0){
    feil = true;
    $("#feilMedlingEpost").html("Må skrive noe inn i epost")
}


let billettArray = [];
let teller = 0;


function regBillett(){

    if (!feil){
        const billett = {
            film: $("#film").val(),
            fornavn : fornavn.val(),
            etternavn : etternavn.val(),
            telefonnr : telefonnr.val(),
            mail : mail.val(),
            antall : antall.val()
        }

        $.post("/lagre", billett, function (){
            hentAlle();
        })

        alleBillettene.style.display = "block";


        billettArray.push(billett);

        $("#form").reset();

        teller++;
    }
}

function hentAlle(){
    $.get("/hentAlle", function (data){
        formaterData(data)
    })
}


function formaterData(billetter){
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";
    for (const billett of alleBillettene){
        ut += "<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td>" +
            "<td>"+billett.telefonnr+"</td><td>"+billett.mail+"</td></tr>";
    }
    ut += "</table>"
    $("#billettene").html(ut);

}

function slettBilletter(){
   // billettArray = [];
   // alleBillettene.html("")

    $.get("/slettAlle", function (){
       hentAlle();
    });

}