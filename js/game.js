const kostka = document.getElementById("kostka");
const statistika = document.getElementById("statistika");
const tlacitko = document.getElementById("tlacitko");
let hod = 1
let hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    kostka.src = "img/kostka" + hod + ".png";
}

tlacitko.addEventListener("click", function(){
    if (!timer) {
        timer = setInterval(animace, 50);
        tlacitko.innerText = "STOP";
    }
    else {
        clearInterval(timer);
        timer = false;
        tlacitko.innerText = "HREJ";
        hody.push(hod);
    vypisStatistiky();
    }
})

function suma() {
    let sum = 0;
    for (let i = 0; i < hody.length; i++) {
        sum += hody[i];
    }
    return sum;
}

function max() {
    let maximum = 1;
    hody.forEach(function(value, index) {
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min() {
    let minimum = 6;
    hody.forEach(function(value, index) {
        if (value < minimum) minimum = value;
    })
    return minimum;
}

function vypisStatistiky() {
    statistika.innerHTML = `<p>Poslední hod: ${hod}</p>`;
    if (hody.length < 10) {
        statistika.innerHTML += `<p>Počet hodů: 0${hody.length}</p>`;
    }else {
        statistika.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    }
    if (suma() < 10) {
        statistika.innerHTML += `<p>Součet všech hodů: 00${suma()}</p>`;
    }else if (suma() < 100) {
        statistika.innerHTML += `<p>Součet všech hodů: 0${suma()}</p>`;
    }
    else {
        statistika.innerHTML += `<p>Součet všech hodů: ${suma()}</p>`;
    }
    statistika.innerHTML += `<p>Průměr všech hodů: ${(suma() / hody.length).toFixed(2)}</p>`;
    statistika.innerHTML += `<p>Nejvyšší hod: ${max()}</p>`;
    statistika.innerHTML += `<p>Nejnižší hod: ${min()}</p>`;
}