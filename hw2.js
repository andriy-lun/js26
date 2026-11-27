/*

// 1)Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
let a = prompt ("Ведіть число");
let bool = (!a || !a.trim())    ? "Ви нічого не ввели" // ЯКЩО порожньо -> ТОДІ запиши цей текст
         : isNaN(a = Number(a)) ? "Це не число!"       // ІНАКШЕ, ЯКЩО не число -> ТОДІ запиши цей текст (змінна a прямо під час перевірки перетворюється з тексту на число, і далі працює вже як число.)
         : a === 0              ? "Ви ввели число 0"   // ІНАКШЕ, ЯКЩО нуль -> ТОДІ запиши цей текст
         : a > 0;                                      // ІНАКШЕ (у всіх інших випадках) -> порахуй a > 0 (true або false)
alert (`${a}, ${typeof(a)}, ${bool}`);


// 2)Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
let b = prompt("Введіть слово 'test'");
let word = (b==="test") ? true : false;
alert (word);

let b2 = prompt("Введіть слово 'test'");
let word2 = b2 === "test";
alert(word2);

let b3 = prompt ("Введіть слово 'test'");
let word3;
if (b3 === "test") {
    word3 = true;
} else {
    word3 = false;
};
alert(word3);

*/
console.log("Task3_________________________________")
// 3)Якщо змінна більше 10 - відніміть 5
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
let c = 13;
// if (c > 10) {
//     c-= 5;
// } else if (c < 10) {
//     c+= 5;
// };
// console.log(c);
c>10 ? c-=5 //c=c>10 краще - щоб перевірка коду не сварилась на присвоєння в середині тернарного оператора
    : c<10 ? c+= 5
    : c;
console.log(c);

console.log("\nTask4_________________________________")
//4)Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

//let m = 13;
const m = Math.floor(Math.random() * 12) + 1;
switch(m) {
    case 1: 
        console.log("January");
        break;
    case 2: 
        console.log("February");
        break;
    case 3: 
        console.log("March");
        break;
    case 4: 
        console.log("April");
        break;
    case 5: 
        console.log("May");
        break;
    case 6: 
        console.log("June");
        break;
    case 7: 
        console.log("July");
        break;
    case 8: 
        console.log("August");
        break;
    case 9: 
        console.log("September");
        break;
    case 10: 
        console.log("October");
        break;
    case 11: 
        console.log("November");
        break;
    case 12: 
        console.log("December");
        break;
    default:
        console.log("Input number in range [1...12]");                                                                                     
}

console.log("\nTask5_________________________________")
//5)Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
const xyz = Math.floor(Math.random() * 900) + 100;
console.log(xyz);
const first = Math.floor(xyz/100);
//const second = Math.floor((xyz/100 - Math.floor(xyz/100)) * 10);//оптимізовуєм (%)
const second = Math.floor(xyz/10) % 10;
//const third = Math.round((xyz/10 - Math.floor(xyz/10))*10);//оптимізовуєм через %
const third = xyz % 10;
const sum = first + second + third;          
console.log(`${first} + ${second} + ${third} = ${sum}`);