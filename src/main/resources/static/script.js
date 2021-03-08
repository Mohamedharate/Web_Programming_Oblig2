
function regBillett(){

    const film = $("#film");
    const fornavn = $("#inpFornavn");
    const etternavn = $("#inpEtternavn");
    const telefonnr = $("#inpTelefonnr");
    const mail = $("#inpEpost");
    const antall = $("#inpAntall");
    const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;


    let feil = false;

    if (antall.val() === "" || antall.val() <= 0){
        feil = true;
    }

    if (fornavn.val() === ""){
        feil = true;
    }

    if(etternavn.val() === ""){
        feil = true;
    }
    if (telefonnr.val() === ""){
        feil = true;
    }
    if (mail.val() === "" || !mail.val().match(mailformat)){
        feil = true;
    }

    if (!feil){
        const billett = {
            film: film.val(),
            fornavn : fornavn.val(),
            etternavn : etternavn.val(),
            telefonnr : telefonnr.val(),
            mail : mail.val(),
            antall : antall.val()
        }

        $.post("/lagre", billett, function (){
            hentAlle();
        })



        antall.val("");
        fornavn.val("");
        etternavn.val("");
        telefonnr.val("");
        mail.val("");

    }
}

function hentAlle(){
    $.get("/hentAlle", function (data){
        formaterData(data)
    })
}


function formaterData(billetter){
    let ut = "<h1>Alle Billetter</h1><table class='table table-striped table-bordered'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";
    for (const billett of billetter){
        ut += "<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td>" +
            "<td>"+billett.telefonnr+"</td><td>"+billett.mail+"</td></tr>";
    }
    ut += "</table> <button onclick=\"slettBilletter()\" class=\"w-100 btn btn-primary btn-lg\" type=\"submit\">Slett alle</button>"
    $("#billettene").html(ut);
}

function slettBilletter(){

    $.get("/slettAlle", function (){
       hentAlle();
    });
    $("billettene").html(null)
}