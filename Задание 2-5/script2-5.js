let cardNumber = prompt("Введите номер карты");
num = cardNumber.replace(cardNumber.slice(0,-4), "************");

alert("Номер вашей карты" + num);