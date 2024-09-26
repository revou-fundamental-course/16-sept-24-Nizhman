function replaceNama() {
let nama = prompt("siapakah nama anda?", "nama");
document.getElementById("nama").innerHTML = nama

}

replaceNama ();

document.getElementById("ganti").innerHTML = "ini adalah website pertama"
document.getElementById("perubahan").innerHTML = "Our Headquarter"
document.getElementById("kota-1").innerHTML = "Bogor"
document.getElementById("kota-2").innerHTML = "Bandung"
document.getElementById("kota-3").innerHTML = "IKN"
document.getElementById("hubungi-2").innerHTML = "Message Us"

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}



function validateMessage() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    if (name == "" || birthdate == "" || gender == "" || messages == "") {
        alert("isi semua kolom");
        return false;
    }
    setSenderUI(name, birthdate, gender, messages);
    return false;
}

function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
