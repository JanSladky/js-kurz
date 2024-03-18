//Úloha která mi přidá nový li do seznamu
function createNewCard(title, text) {
	//Zatargetování na konkrétní ul který spadá pod element s .cards
	let cardContainer = document.querySelector('.cards ul');

	//vytvořím si nový li element, vložím si do něj nadpis a text
	let newCard = document.createElement('li');
	newCard.innerHTML = '<h3>' + title + '</h3><p>' + text + '</p>';

	//Vložím do rodiče
	cardContainer.appendChild(newCard);
}

createNewCard('Toto je první nadpis', 'A toto je text karty a musí být delší než jedna věta')
