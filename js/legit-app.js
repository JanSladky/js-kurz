//Úloha která mi přidá nový li do seznamu

//Zatargetování na konkrétní ul který spadá pod element s .cards
let cardContainer = document.querySelector('.cards ul');

//Najdu si h3 element a text p
let title = 'Nový nadpis';
let text = 'A tohle je nový text, který mi vyplní text karty protože jedna věta je moc málo.';

//vytvořím si nový li element, vložím si do něj nadpis a text
let newCard = document.createElement('li');
newCard.innerHTML = '<h3>' + title + '</h3><p>' + text + '</p>';

//Alternativní zápis do více řádků
newCard.innerHTML = `
<h3> ${title} </h3>
<p> 
    ${text} 
</p>
`
//Vložím do rodiče
cardContainer.appendChild(newCard);
