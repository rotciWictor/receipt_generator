let digitable_line = document.getElementById("digitable_line");
let today_date = document.getElementById("today_date");
let payer_document = document.getElementById("payer_document");
let payer_name = document.getElementById("payer_name");
let receiver_document = document.getElementById("receiver_document");
let receiver_name = document.getElementById("receiver_name");
let third_party_id = document.getElementById("third_party_id");
let value = document.getElementById("value");
let date = document.getElementById("date");
let status = document.getElementById("status");

let div = document.getElementById("div");
let results = document.getElementById("results");

let back = document.getElementById("back");

let show_date = document.getElementById("date");
let val = document.getElementById("val");
let tp_id = document.getElementById("tp_id");
let payer = document.getElementById("payer");
let payer_doc = document.getElementById("payer_doc");
let receiver = document.getElementById("receiver");
let receiver_doc = document.getElementById("receiver_doc");

function showValues()
{
    show_date.innerHTML = today_date.value;
    val.innerHTML = value.value;
    tp_id.innerHTML = third_party_id.value;
    payer.innerHTML = payer_name.value;
    payer_doc.innerHTML = payer_document.value;
    receiver.innerHTML = receiver_name.value;
    receiver_doc.innerHTML = receiver_document.value;

    div.style.display = "none";
    results.style.display = "flex";
    back.style.display = "flex";
}

window.onload=function(){
    let btn = document.getElementById("Generate");

    btn.onclick = function () {
        showValues();
    };

    back.onclick = function () {
        results.style.display = "none";
        div.style.display = "flex";
        back.style.display = "none";
    };
}