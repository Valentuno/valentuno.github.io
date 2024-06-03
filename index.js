
let pojemnosc;
let zawartosc;
let cena;
let gramatura;
let oplacalnosc;



document.getElementById("slider-pojemnosc").step = "10";
var slider1 = document.getElementById("slider-pojemnosc");
var input1 = document.getElementById("input-pojemnosc");
input1.value = slider1.value;
slider1.oninput = function() {
    input1.value = this.value;
    pojemnosc = input1.value;
    zawartosc = input2.value * 0.01;
    cena = input3.value;
    gramatura = pojemnosc * zawartosc;
    gramatura = gramatura.toFixed(2);
    oplacalnosc = gramatura / cena;
    oplacalnosc = oplacalnosc.toFixed(2);
    document.getElementById("Ile-g").textContent = gramatura;
    document.getElementById("zl/g").textContent = oplacalnosc;
}
input1.oninput = function() {
    slider1.value = this.value;
    if (this.value>1000) {
        this.value = 1000
    }
    pojemnosc = input1.value;
    zawartosc = input2.value * 0.01;
    cena = input3.value;
    gramatura = pojemnosc * zawartosc;
    gramatura = gramatura.toFixed(2);
    oplacalnosc = gramatura / cena;
    oplacalnosc = oplacalnosc.toFixed(2);
    document.getElementById("Ile-g").textContent = gramatura;
    document.getElementById("zl/g").textContent = oplacalnosc;
}

document.getElementById("slider-zawartosc").step = "1";
var slider2 = document.getElementById("slider-zawartosc");
var input2 = document.getElementById("input-zawartosc");
input2.value = slider2.value;
slider2.oninput = function() {
    input2.value = this.value;
    pojemnosc = input1.value;
    zawartosc = input2.value * 0.01;
    cena = input3.value;
    gramatura = pojemnosc * zawartosc;
    gramatura = gramatura.toFixed(2);
    oplacalnosc = gramatura / cena;
    oplacalnosc = oplacalnosc.toFixed(2);
    document.getElementById("Ile-g").textContent = gramatura;
    document.getElementById("zl/g").textContent = oplacalnosc;
}
input2.oninput = function() {
    slider2.value = this.value;
    if (this.value>100) {
        this.value = 100
    }
    pojemnosc = input1.value;
    zawartosc = input2.value * 0.01;
    cena = input3.value;
    gramatura = pojemnosc * zawartosc;
    gramatura = gramatura.toFixed(2);
    oplacalnosc = gramatura / cena;
    oplacalnosc = oplacalnosc.toFixed(2);
    document.getElementById("Ile-g").textContent = gramatura;
    document.getElementById("zl/g").textContent = oplacalnosc;
}

var input3 = document.getElementById("input-cena");
input3.oninput = function() {
    if (this.value <1) {
        this.value = 1
    }
    pojemnosc = input1.value;
    zawartosc = input2.value * 0.01;
    cena = input3.value;
    gramatura = pojemnosc * zawartosc;
    gramatura = gramatura.toFixed(2);
    oplacalnosc = gramatura / cena;
    oplacalnosc = oplacalnosc.toFixed(2);
    document.getElementById("Ile-g").textContent = gramatura;
    document.getElementById("zl/g").textContent = oplacalnosc;
}






