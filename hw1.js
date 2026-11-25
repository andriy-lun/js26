//1
console.log (1 + ') _____________________________________');
let nic, city;
nic = 'Ivan3';
city = nic;
console.log (city);


//***2***
//Який буде результат виконання скрипта?
console.log (2 + ') _____________________________________');
let name = "Olga";
console.log(`привіт ${1}`); // 1
console.log(`привіт ${"name"}`); // name
console.log(`привіт ${name}`); // Olga

//***3***
//Видобути число зі змінних
console.log (3 + ') _____________________________________');
let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";
// вивести в консоль тип

let aNum = Number(a);
console.log(aNum);
console.log(+a);

let bPar = parseInt(b);
console.log(bPar);

let cPar = parseFloat(c);
console.log(cPar);

console.log(typeof(cPar));


//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
console.log (4 + ') _____________________________________');
let floatNum = 0.1 + 0.2;
//console.log(floatNum);
console.log(+floatNum.toFixed(1));
console.log((10*0.1+10*0.2)/10);
console.log(Math.round(10*floatNum)/10);

//***5***
//Поверніть найбільше число с набору 20, 10, 50, 40;
console.log (5 + ') _____________________________________');
let arr = [20, 10, 50, 40];
let maxArr = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxArr) {
        maxArr = arr[i]
    }
};
console.log(maxArr);

console.log(Math.max(...arr));

console.log(Math.max.apply(null,arr));

console.log(Math.max.apply(undefined,arr));

const max = arr.reduce((acc, current) => {
  return current > acc ? current : acc;
});

console.log(max);

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
console.log (6 + ') _____________________________________');
console.log (Math.random()*(4-2)+2);
console.log (Math.floor(Math.random()*(4-2+1)+2));


//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
console.log (7 + ') _____________________________________');
let msg="Welcome to Bahamas!";
console.log(msg.length)


//***8**
//вивести в консоль message великими літерами
console.log (8 + ') _____________________________________');
let mes="message"
console.log (mes.toUpperCase());


//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
console.log (9 + ') _____________________________________');
const obj = {};
obj.name='Anna';
obj.city='Lviv';
obj.age=21;
console.log(obj);
delete obj.city;
obj['like flowers']=true;
console.log(obj);


//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
console.log (10 + ') _____________________________________');
for (let key in obj) {
    console.log(key + ": " + obj[key])
};
