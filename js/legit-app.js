//Úloha D - Funkce která přijimá 2 argumenty, spočítá čísla a vrátí zpět do programu
function plus(a, b) {
	return a + b;
}
//Number je lepší než parseInt. parseInt odsekne desetiná čísla, parseFloat je taky možnost
/* let firstNumber = Number(prompt('Zadej první číslo:'));
let secondNumber = Number(prompt('Zadej druhé číslo:'));

//Vypíše se do konzole výsledek
console.log(plus(firstNumber, secondNumber)); */

//Úloha H - funkce která naformátuje jako české koruny, s možností formátovat i v jiných měnách
//Úprava funkce kdy přednastavím nějakou hodnotu třeba CZK
function financial(number, currency = 'czk') {
	if (currency === 'usd') {
		number = number.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	} else if (currency === 'sk') {
		number = number.toLocaleString('sk-SK', {
			style: 'currency',
			currency: 'SK',
		});
	} else {
		number = number.toLocaleString('cs-CZ', {
			style: 'currency',
			currency: 'CZK',
		});
	}

	return number;
}

console.log(financial(123.5454));
