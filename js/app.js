/* Úloha 3 - část B */
//Button kterým přidám další kartu
/* let addButton = document.getElementById('addNewElement')

addButton.addEventListener('click', addNewLi)

//Spuštění funkce i po zmačknutí klávesy enter
document.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		addNewLi()
	}
})

function addNewLi() {
	//Nadpis do karty
	let inputForCardHeading = document.getElementById('inputHeading').value
	//Text pro karty
	let inputForCardText = document.getElementById('inputText').value

	//Vytvoření nového li elementu s konkrétní class
	let newLi = document.createElement('li')
	newLi.classList.add('sdk')

	//Vytvoření nového nadpisu h3 v li elementu s textem zadaným z inputu
	let newHeading = document.createElement('h3')
	let newHeadingText = document.createTextNode(inputForCardHeading)
	newHeading.appendChild(newHeadingText)

	//Vytvoření nového elementu p pro text karty z textu zadaného z inputu
	let newParagraph = document.createElement('p')
	let newParagraphText = document.createTextNode(inputForCardText)
	newParagraph.appendChild(newParagraphText)

	//Přidání nadpisu a odstavce do nového li elementu
	newLi.appendChild(newHeading)
	newLi.appendChild(newParagraph)

	let array = document.getElementById('array')
	array.appendChild(newLi)
} */
/* **************** End of úloha 3 část B ************************ */

/* Úloha 3 - část C - práce s poly */

//Iniciace buttonu pro přidání nového prvku
let addButton = document.getElementById('addNewElement');
//Spuštění funkce když se klikne na button
addButton.addEventListener('click', controlEntryData);

//Spuštění funkce i po zmačknutí klávesy enter
document.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		controlEntryData();
	}
});

//Pole objektů do kterých uložím data z objektu
let arrayOfObject = [];

function controlEntryData() {
	//Nadpis do karty
	let inputForCardHeading = document.getElementById('inputHeading').value;
	//Text pro karty
	let inputForCardText = document.getElementById('inputText').value;

	if (inputForCardHeading === '' && typeof inputForCardHeading !== 'string') {
		alert('Vyplňte prosím text pro nadpis');
	} else if (inputForCardText === '') {
		alert('Vyplňte prosím i text pro text karty.');
	} else if (typeof inputForCardHeading !== 'string') {
		alert('Text musí být pouze string ne number');
	} else {
		resultWithData();
	}
}

function resultWithData() {
	//Funkce pro uložení dat do pole objektů
	function addDataToArrayOfObject() {
		//Nadpis do karty
		let inputForCardHeading = document.getElementById('inputHeading').value;
		//Text pro karty
		let inputForCardText = document.getElementById('inputText').value;
		//Objekt do kterého si uložím data zapsaná do inputů
		let objekt = {
			heading: inputForCardHeading,
			text: inputForCardText,
		};

		arrayOfObject.push(objekt);
	}
	addDataToArrayOfObject();
	let array = document.getElementById('array');
	//array.innerHTML = ''

	//Cyklus pro projití polem a vypsání dat
	arrayOfObject.forEach(function (objekt) {
		//Vytvoření nového li elementu s konkrétní class
		let newLi = document.createElement('li');
		newLi.classList.add('sdk');
		array.appendChild(newLi);

		//Vytvoření nového nadpisu h3 v li elementu s textem zadaným z inputu
		let newHeading = document.createElement('h3');
		newHeading.textContent = objekt.heading;
		newLi.appendChild(newHeading);

		//Vytvoření nového elementu p pro text karty z textu zadaného z inputu
		let newParagraph = document.createElement('p');
		newParagraph.textContent = objekt.text;
		newLi.appendChild(newParagraph);
	});
}

/* **************** End of úloha 3 část C - práce s poly ************************ */

/* 
function naformatujSumu(cislo) {
	cislo = cislo.toFixed(2)
	cislo = cislo.replace('.', ',')
	cislo = cislo + ' Kč'

	return cislo
}
let summary = 1421.43242343 */

//console.log('Celková suma je: ' + naformatujSumu(summary))

//v tomto je výsledek
/* naformatujSumu(summary) */

//A nebo si ho uložím do proměnné
/* let naformatovanaSuma = naformatujSumu(summary)

console.log(naformatovanaSuma) */

//Úloha b + c - přijimá 2 argumenty a vypisuje jako alert do webu
/* function pozdrav(jmeno, urazka) {
	let vysledek = 'Ahoj jmenuješ se ' + jmeno;
	vysledek += ' a jsi ' + urazka;

	return vysledek;
}

let jmeno = prompt('Zadej jméno');
let urazka = prompt('Zadej příjmení');

let result = pozdrav(jmeno, urazka);
alert(result); */

//Úloha d - 2 čísla, sečíst a vrátit pomocí return
/* function plus(cislo1, cislo2) {
	return cislo1 + cislo2
}

let vysledek = plus(25, 2365)
console.log(vysledek)
 */
//Úloha e - sečti dvě čísla která jsou zadaná přes prompt
/* function plus(cislo1, cislo2) {
	return cislo1 + cislo2;
}

let prvniCislo = parseFloat(prompt('Zadej číslo 1:'));
let druheCislo = parseFloat(prompt('Zadej číslo 2:'));

let vysledek2 = plus(prvniCislo, druheCislo);

console.log(vysledek2); */

//Úloha f - sečti dvě čísla, zaokrouhli a vypiš do konzole
/*  function nasobeni(pocet, cenaZaKus) {
	let vysledek = pocet * cenaZaKus;

	return vysledek.toFixed(2);
}

let pocetProduktu = parseFloat(prompt('Zadej počet produktů:'));
let cenaZaKus = parseFloat(prompt('Zadej cenu za kus:'));

let vysledek2 = nasobeni(pocetProduktu, cenaZaKus);

console.log('Zakoupil jsi ' + pocetProduktu + 'produkty v celkové sumě: ' + vysledek2); */

//Úloha G - funkce která vypočítá částku odečtenou o procento
/* function discount(number, percentage) {
	let discount = (number * (100 - percentage)) / 100

	return discount
}
let newNumber = discount(500, 13)

console.log(newNumber) */

//Úloha H - funkce která formátuje číslo na základě zaslaného argumentu
/* function naformatujSumu(number, mena) {
	
	if (mena === 'czk') {
		return number.toLocaleString('cs-CZ', {
			style: 'currency',
			currency: 'CZK'
		})
	} else if (mena === 'usd') {
		return number.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})
	} else if( mena === 'eur') {
		return number.toLocaleString('de-DE', {
			style: 'currency',
			currency: 'EUR'
		})
}
}
let entryNumber =  parseFloat(prompt('Zadej číslo k naformátování v potřebné měně: '));
let entryCurrency = prompt('Zadej měnu k naformátování částky: ');

let vysledek = naformatujSumu(entryNumber, entryCurrency);
console.log('Naformátované číslo je: ', vysledek); */
