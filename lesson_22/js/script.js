// Строгий режим
"use strict"

// ЩО ТАКЄ JS

/*
Що такє JS - мультипарадигмена, динамічно типізована,
мова програмування.
Будь-яка программа це певна
послідовність інструкцій (команнд)

Інструкції можуть містити:
Значення
Оператори
Вирази
Ключові слова
Коментарі
*/

// СИНТАКСИС

// Коментар
/*
	Коментар
	Коментар
	Коментар
*/

/*
причиною ДУЖЕ
багатьох невдач
є - неуважність
*/

// ПРАВИЛО СИНТАКСИСУ №0
/*
ВСЕ що відкрито має бути закрито
ВСЕ що закрито має бути відкрито
*/

// ПРАВИЛО СИНТАКСИСУ №1 (Я раджу)
/*
після КОЖНОЇ інструкції
ставьте крапку з комою (;)
*/

// ПРАВИЛО СИНТАКСИСУ №2
/*
мова JS чутлива до регістру!
*/

// ЗМІННІ ТА КОНСТАНТИ
/*
Змінна - це певний контейнер, який може зберігати
якісь дані.
let - об'являє змінну. Потрібне тільки в момент об'яви змінної
*/
// Анатомія:
// let і'мя_змінної;

// І'мя змінної
/*
	0) має відповідати данним які містить змінна,
	або буде містити
	1) латиниця (врай рекомндовано)
	2) букви, цифри, символи $ та _
	3) не може починатись з цифри
	4) не може дорівнювати одному з ключових
	(зарезервованих) слів
	(список - https://fls.guru/js-reservedkeywords.html)
	5) Стиль - lowerCamelCase
*/
// Не може бути 2х однакових змінних в одній області видимості

// Привласнення значення

// Відразу, в момент об'яви
// let userAge = 15;

// Потім, в процесі програми
// let userAge;
// ...код...
// userAge = 25; // let вже не потрібен

// Зміна значення
/*
let userAge = 15;
console.log(userAge);

// ...код...

// Динамічна типизація в дії
userAge = 'Я Жека'; // let вже не потрібен
console.log(userAge);
*/

// Копіювання значення
/*
let userAge = 15;
console.log(userAge);
let userAge2;
console.log(userAge2);

userAge2 = userAge; // let вже не потрібен
console.log(userAge2);
console.log(userAge);
*/

// Область видимості
/*
	1) Не можна використовувати змінну (let) до її об'яви
	2) Змінну "видно" в межах блоку де вона об'явлена та в усіх дочірніх
*/

/*
// Тут ми за межами блоку
if (1 > 0) { // Це JS-блок
	// Тут межі блоку
	let userAge = 15;
	console.log(userAge);
	if (10 > 5) { // Це JS-блок
		// У дочірніх блоках видно змінну
		console.log(userAge);
	}
}
// Тут ми за межами блоку
// Не буде працювати
console.log(userAge);
*/


// Робота зі змінними ззовні
/*
let num;
if (10 > 5) {
	num = 20;
}
console.log(num);
*/

// Константи
/*
const userAge = 15;
console.log(userAge);
userAge = 10; // Не можна змінювати
console.log(userAge);
*/

// Якщо значення константи нам відомо заздалегідь
//const COLOR_GREY = '#424551';

/*
const userAge = 10 + 5;
console.log(userAge);
*/

// ТИПИ ДАНИХ
/*
undefined
null
number
string
boolean
object
*/
// Оператор typeof вертає тип даних

/*
// undefined (невизначанність)
let userAge;
console.log(typeof userAge); // Тип даних
console.log(userAge); // Значення
*/

/*
null (пустота, порожнеча)
*/
/*
let userAge = null;
console.log(typeof userAge); // Тип даних
console.log(userAge); // Значення
*/

/*
number - число (не велике) та спец. значення
Number();
*/
/*
let userAge = 0;
console.log(typeof userAge); // Тип даних
console.log(userAge); // Значення
*/

/*
// Infinity - нескінченність
let result = 10 / 0;
console.log(typeof result); // Тип даних
console.log(result); // Значення
*/
/*
// NaN - обчислення не може бути виконано
let result = "Жека" * 10;
console.log(typeof result); // Тип даних
console.log(result); // Значення
*/

/*
string - рядки
String();
*/
/*
let myAge = 10;
let myName = 'Жека';
console.log(typeof myName); // Тип даних
console.log(myName); // Значення
console.log(typeof myAge); // Тип даних
console.log(myAge); // Значення
*/

// Лапки
/*
1) Одинарні - ''
2) Подвійні - ""
3) Зворотні - ``

Одинарні та подвійні лапки повністю ідентичні.
Але, якщо відкита одинарні лапки до
закривати треба теж одинарною
*/
/*
const myName = `Жека`;
const myAge = "38";
const myAge2 = "10";
const myInfo = `Ім'я: ${myName}, вік: ${myAge}`;
console.log(typeof myAge); // Тип даних
console.log(myAge); // Значення
console.log(myAge + myAge2);
*/

/*
boolean - правда або брехня (true false)
*/
/*
false повернуть: пустий рядок, цифра нуль, undefined, NaN
*/
/*
let someVar;
console.log(typeof Boolean(someVar)); // Тип даних
console.log(Boolean(someVar)); // Значення
*/

/*
const myInfo = {
	age: 10,
	name: "Жека"
}
console.log(myInfo);
myInfo.age = 5;
console.log(myInfo);
*/
