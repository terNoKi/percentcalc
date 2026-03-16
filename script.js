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