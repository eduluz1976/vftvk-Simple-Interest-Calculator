
function compute() {
    principal = parseInt(document.getElementById("principal").value);
    rate = parseFloat(document.getElementById("rate").value);
    period = parseInt(document.getElementById("years").value);



    var amount = period * principal * ((rate / 100));

    var finalYear = parseInt((new Date()).getFullYear()) + parseInt(period);



    listMappedFields = {
        value_principal: principal,
        value_rate: rate,
        value_amount: parseInt(amount),
        value_final_year: finalYear
    };

    for (k in listMappedFields) {
        document.getElementById(k).innerText = listMappedFields[k];
    }

    document.getElementById("result").style.display = "block";

}

function initPage() {
    var yearsContainer = document.getElementById("years");
    for (var i = 1; i <= 30; i++) {
        var elYear = document.createElement("option");
        elYear.setAttribute("value", i);
        elYear.innerText = i;
        yearsContainer.appendChild(elYear);
    }
    updateRate();
}


function updateRate(value) {
    var value = document.getElementById('rate').value
    document.getElementById('display_rate').innerHTML = value
}

