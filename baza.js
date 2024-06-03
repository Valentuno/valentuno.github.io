let tabela = document.getElementById("Tabela");
let row1 = tabela.rows[1];
let rows = tabela.rows;
let dir = 'asc';

let ikon_nazwa_up = document.getElementById("nazwa-icon-asc");
let ikon_nazwa_down = document.getElementById("nazwa-icon-desc");
let filter1 = document.getElementById("filter-nazwa");

let filter2 = document.getElementById("filter-ocena");
let ikon_ocena_up = document.getElementById("ocena-icon-asc");
let ikon_ocena_down = document.getElementById("ocena-icon-desc");

let filter3 = document.getElementById("filter-rentownosc");
let ikon_rentownosc_up = document.getElementById("rentownosc-icon-asc");
let ikon_rentownosc_down = document.getElementById("rentownosc-icon-desc");

let filter4 = document.getElementById("filter-id");
let ikon_id_up = document.getElementById("id-icon-asc");
let ikon_id_down = document.getElementById("id-icon-desc");

filter1.onclick = function() {
    let i, x, y;
    let switch_count = 1;
    ikon_nazwa_down.classList.remove("active-filter");
    ikon_nazwa_up.classList.remove("active-filter");
    ikon_ocena_up.classList.remove("active-filter");
    ikon_ocena_down.classList.remove("active-filter");
    ikon_rentownosc_up.classList.remove("active-filter");
    ikon_rentownosc_down.classList.remove("active-filter");
    ikon_id_up.classList.remove("active-filter");
    ikon_id_down.classList.remove("active-filter");
    while (switch_count != 0) {
        switch_count = 0;
        if (dir == 'asc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[2].innerHTML;
                y = rows[i+1].cells[2].innerHTML;
                if (x.toLowerCase() > y.toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'desc';
                ikon_nazwa_up.classList.add("no-display");
                ikon_nazwa_up.classList.remove("active-filter");
                ikon_nazwa_down.classList.remove("no-display");
                ikon_nazwa_down.classList.add("active-filter");
            }
        }
        else if (dir == 'desc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[2].innerHTML;
                y = rows[i+1].cells[2].innerHTML;
                if (x.toLowerCase() < y.toLowerCase()) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'asc';
                ikon_nazwa_down.classList.add("no-display");
                ikon_nazwa_down.classList.remove("active-filter");
                ikon_nazwa_up.classList.remove("no-display");
                ikon_nazwa_up.classList.add("active-filter");
            }
        }
        
    }
    
}

filter2.onclick = function() {
    let i, x, y;
    let switch_count = 1;
    ikon_nazwa_down.classList.remove("active-filter");
    ikon_nazwa_up.classList.remove("active-filter");
    ikon_ocena_up.classList.remove("active-filter");
    ikon_ocena_down.classList.remove("active-filter");
    ikon_rentownosc_up.classList.remove("active-filter");
    ikon_rentownosc_down.classList.remove("active-filter");
    ikon_id_up.classList.remove("active-filter");
    ikon_id_down.classList.remove("active-filter");
    while (switch_count != 0) {
        switch_count = 0;
        if (dir == 'asc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[4].innerHTML;
                y = rows[i+1].cells[4].innerHTML;
                if (x > y) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'desc';
                ikon_ocena_up.classList.add("no-display");
                ikon_ocena_up.classList.remove("active-filter");
                ikon_ocena_down.classList.remove("no-display");
                ikon_ocena_down.classList.add("active-filter");
            }
        }
        else if (dir == 'desc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[4].innerHTML;
                y = rows[i+1].cells[4].innerHTML;
                if (x < y) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'asc';
                ikon_ocena_down.classList.add("no-display");
                ikon_ocena_down.classList.remove("active-filter");
                ikon_ocena_up.classList.remove("no-display");
                ikon_ocena_up.classList.add("active-filter");
            }
        }
        
    }
    
}

filter3.onclick = function() {
    let i, x, y;
    let switch_count = 1;
    ikon_nazwa_down.classList.remove("active-filter");
    ikon_nazwa_up.classList.remove("active-filter");
    ikon_ocena_up.classList.remove("active-filter");
    ikon_ocena_down.classList.remove("active-filter");
    ikon_rentownosc_up.classList.remove("active-filter");
    ikon_rentownosc_down.classList.remove("active-filter");
    ikon_id_up.classList.remove("active-filter");
    ikon_id_down.classList.remove("active-filter");
    while (switch_count != 0) {
        switch_count = 0;
        if (dir == 'asc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[3].innerHTML;
                y = rows[i+1].cells[3].innerHTML;
                if (parseFloat(x) > parseFloat(y)) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'desc';
                ikon_rentownosc_up.classList.add("no-display");
                ikon_rentownosc_up.classList.remove("active-filter");
                ikon_rentownosc_down.classList.remove("no-display");
                ikon_rentownosc_down.classList.add("active-filter");
            }
        }
        else if (dir == 'desc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[3].innerHTML;
                y = rows[i+1].cells[3].innerHTML;
                if (parseFloat(x) < parseFloat(y)) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'asc';
                ikon_rentownosc_down.classList.add("no-display");
                ikon_rentownosc_down.classList.remove("active-filter");
                ikon_rentownosc_up.classList.remove("no-display");
                ikon_rentownosc_up.classList.add("active-filter");
            }
        }
        
    }
    
}

filter4.onclick = function() {
    let i, x, y;
    let switch_count = 1;
    ikon_nazwa_down.classList.remove("active-filter");
    ikon_nazwa_up.classList.remove("active-filter");
    ikon_ocena_up.classList.remove("active-filter");
    ikon_ocena_down.classList.remove("active-filter");
    ikon_rentownosc_up.classList.remove("active-filter");
    ikon_rentownosc_down.classList.remove("active-filter");
    ikon_id_up.classList.remove("active-filter");
    ikon_id_down.classList.remove("active-filter");
    while (switch_count != 0) {
        switch_count = 0;
        if (dir == 'asc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[0].innerHTML;
                y = rows[i+1].cells[0].innerHTML;
                if (Number(x) > Number(y)) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'desc';
                ikon_id_up.classList.add("no-display");
                ikon_id_up.classList.remove("active-filter");
                ikon_id_down.classList.remove("no-display");
                ikon_id_down.classList.add("active-filter");
            }
        }
        else if (dir == 'desc') {
            for (i=1; i<(rows.length -1 ); i++) {
                x = rows[i].cells[0].innerHTML;
                y = rows[i+1].cells[0].innerHTML;
                if (Number(x) < Number(y)) {
                    rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
                    switch_count= +1;
                }
            }
            if (switch_count == 0) {
                dir = 'asc';
                ikon_id_down.classList.add("no-display");
                ikon_id_down.classList.remove("active-filter");
                ikon_id_up.classList.remove("no-display");
                ikon_id_up.classList.add("active-filter");
            }
        }
        
    }
    
}
let h;
document.getElementById("btn-piwo").onclick = function() {
    document.getElementById("btn-wszystko").classList.remove("active-btn");
    document.getElementById("btn-piwo").classList.remove("active-btn");
    document.getElementById("btn-wodka").classList.remove("active-btn");
    let piwo_list = document.getElementsByClassName("piwo");
    for (h=0 ; h < piwo_list.length; h++) {
        piwo_list[h].classList.remove("no-display")
    }
    let woda_list = document.getElementsByClassName("wodka");
    for (h=0 ; h < woda_list.length; h++) {
        woda_list[h].classList.add("no-display")
    }
    document.getElementById("btn-piwo").classList.add("active-btn");
}

document.getElementById("btn-wodka").onclick = function() {
    document.getElementById("btn-wszystko").classList.remove("active-btn");
    document.getElementById("btn-piwo").classList.remove("active-btn");
    document.getElementById("btn-wodka").classList.remove("active-btn");
    let woda_list = document.getElementsByClassName("wodka");
    for (h=0 ; h< woda_list.length; h++) {
        woda_list[h].classList.remove("no-display")
    }
    let piwo_list = document.getElementsByClassName("piwo");
    for (h=0 ; h< piwo_list.length; h++) {
        piwo_list[h].classList.add("no-display")
    }
    document.getElementById("btn-wodka").classList.add("active-btn");
}

document.getElementById("btn-wszystko").onclick = function() {
    document.getElementById("btn-wszystko").classList.remove("active-btn");
    document.getElementById("btn-piwo").classList.remove("active-btn");
    document.getElementById("btn-wodka").classList.remove("active-btn");
    let piwo_list = document.getElementsByClassName("piwo");
    let woda_list = document.getElementsByClassName("wodka");
    for (h=0 ; h< woda_list.length; h++) {
        woda_list[h].classList.remove("no-display")
    }
    for (h=0 ; h < piwo_list.length; h++) {
        piwo_list[h].classList.remove("no-display")
    }
    document.getElementById("btn-wszystko").classList.add("active-btn");
}
// let alkohole = new Array;
// let g = 6;
// let z;
// for (z=1; z<(rows.length - 1);z++) {
//     alkohole.push(parseFloat(rows[z].cells[3].innerHTML))
// }
// let alkohole_odleglosc = new Array;
// for (z=1; z<(rows.length - 1);z++) {
//     alkohole_odleglosc.push(Math.abs(g-parseFloat(rows[z].cells[3].innerHTML)))
// }
// // window.alert(alkohole.indexOf(10.07));
// window.alert(alkohole_odleglosc);
// alkohole_odleglosc.sort();
// window.alert(alkohole_odleglosc);
// // window.alert(alkohole.indexOf(Math.abs(g+alkohole_odleglosc[0])));

let alkohole = new Array;
// window.alert(alkohole[1].rent);
let g = 12.5;
let z;
for (z=1; z<(rows.length - 1);z++) {
    alkohole.push({id:rows[z].cells[0].innerHTML,rent:parseFloat(rows[z].cells[3].innerHTML)})
}
// for (z=1; z<alkohole.length;z++) {
//     // window.alert(alkohole[z].id,alkohole[z].rent)
// }
let alkohole_odleglosc = new Array;
for (z=1; z<(rows.length -1);z++) {
    alkohole_odleglosc.push({id:rows[z].cells[0].innerHTML,rent:Math.abs(g-parseFloat(rows[z].cells[3].innerHTML))})
}
alkohole_odleglosc.sort((a,b) => a.rent - b.rent);
window.alert(alkohole_odleglosc[1].id)