function obliczProcent() {
    let liczba = parseFloat(document.getElementById('liczba_baza').value);
    let procent = parseFloat(document.getElementById('procent').value);
    let poleWyniku = document.getElementById('wynik1');
    
    if (isNaN(liczba) || isNaN(procent)){
        poleWyniku.innerHTML = "<span class='blad'>Błąd: Wpisz liczby w obu polach!</span>";
        return;
    }
    let wynik = (procent/100) * liczba;
    poleWyniku.innerHTML = `Wynik: ${procent}% z ${liczba} to <b>${wynik}</b>`;
}

function jakiToProcent(){
    let calosc = parseFloat(document.getElementById('liczba_całość').value);
    let czesc = parseFloat(document.getElementById('część').value);
    let poleWyniku = document.getElementById('wynik2');

    if (isNaN(calosc) || isNaN(czesc)){
        poleWyniku.innerHTML = "<span class='blad'>Błąd: Wpisz liczby w obu polach!</span>";
        return;
    }

    if (calosc === 0){
        poleWyniku.innerHTML = "<span class='bald'>Błąd: Nie dzielimy przez zero</span>"
        return
    }

    let wynik = (czesc/calosc) * 100;
    poleWyniku.innerHTML = `Wynik: ${czesc} to <b>${wynik}%</b> z ${calosc}`;
}