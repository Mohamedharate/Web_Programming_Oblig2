let feil = false;

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    feil = true;
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function valider(){

}

function regBillett(){

    const film = $("#film");
    const fornavn = $("#inpFornavn");
    const etternavn = $("#inpEtternavn");
    const telefonnr = $("#inpTelefonnr");
    const mail = $("#inpEpost");
    const antall = $("#inpAntall");
    //const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (antall.val() === "" || antall.val() <= 0){
        feil = true;
        //$("#feilMedlingAntall").className = 'invalid-feedback d-block'
    }

    if (fornavn.val() === ""){
        feil = true;
       // $("#feilMedlingFornavn").className = 'invalid-feedback d-block'

    }
    if(etternavn.val() === ""){
        feil = true;
       // $("#feilMedlingEtternavn").className = 'invalid-feedback d-block'

    }
    if (telefonnr.val() === ""){
        //$("#feilMedlingTlfnr").addClass("was-validated")
        feil = true;
    }
    if (mail.val() === ""){
        feil = true;
      //  $("#feilMedlingEpost").addClass('invalid-feedback d-block')
    }






//|| !mail.val().match(mailformat)
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

    let ut = "<table class=\"table table-striped table-bordered\"><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";
    for (const billett of billetter){
        ut += "<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+"</td><td>"+billett.etternavn+"</td>" +
            "<td>"+billett.telefonnr+"</td><td>"+billett.mail+"</td></tr>";
    }
    ut += "</table>"
    $("#billettene").html(ut);
}

function slettBilletter(){

    $.get("/slettAlle", function (){
        hentAlle();
    });
}