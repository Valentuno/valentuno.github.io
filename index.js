
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

document.getElementById("finder").onclick = function() {
    let tabela = document.getElementById("Tabela");
    let rows = tabela.rows;
    let alkohole = new Array;
    let g = document.getElementById("zl/g").innerHTML;
    let z;
    for (z=1; z<(rows.length - 1);z++) {
        alkohole.push({id:rows[z].cells[0].innerHTML,rent:parseFloat(rows[z].cells[3].innerHTML)})
    }
    let alkohole_odleglosc = new Array;
    for (z=1; z<(rows.length -1);z++) {
        alkohole_odleglosc.push({id:rows[z].cells[0].innerHTML,rent:Math.abs(g-parseFloat(rows[z].cells[3].innerHTML))})
    }
    alkohole_odleglosc.sort((a,b) => a.rent - b.rent);
    // window.alert(alkohole_odleglosc[0].id)
    // window.alert(rows[alkohole_odleglosc[0].id].cells[1].innerHTML.slice(9,-8))
    document.getElementById("alternative-1-nazwa").textContent = rows[alkohole_odleglosc[0].id].cells[2].innerHTML;
    let sorc = rows[alkohole_odleglosc[0].id].cells[1].innerHTML.slice(10,-9).toString();
    document.getElementById("alternative-1-zdjecie").src = sorc.toString();
    document.getElementById("alternative-1-rent").textContent = "G za 1zł = " + rows[alkohole_odleglosc[0].id].cells[3].innerHTML;
    document.getElementById("alternative-1-cena").textContent = "Ocena = " + rows[alkohole_odleglosc[0].id].cells[3].innerHTML;
    document.getElementById("alternative-2-nazwa").textContent = rows[alkohole_odleglosc[1].id].cells[2].innerHTML;
    let sorc2 = rows[alkohole_odleglosc[1].id].cells[1].innerHTML.slice(10,-9).toString();
    document.getElementById("alternative-2-zdjecie").src = sorc2.toString();
    document.getElementById("alternative-2-rent").textContent = "G za 1zł = " + rows[alkohole_odleglosc[1].id].cells[3].innerHTML;
    document.getElementById("alternative-2-cena").textContent = "Ocena = " + rows[alkohole_odleglosc[1].id].cells[3].innerHTML;
    window.scrollTo(0,300);
}






