//Úloha D - Funkce která přijimá 2 argumenty, spočítá čísla a vrátí zpět do programu
function plus(a, b) {
	return a + b;
}
//Number je lepší než parseInt. parseInt odsekne desetiná čísla, parseFloat je taky možnost
let firstNumber = Number(prompt('Zadej první číslo:'));
let secondNumber = Number(prompt('Zadej druhé číslo:'));

//Vypíše se do konzole výsledek
console.log(plus(firstNumber, secondNumber));
