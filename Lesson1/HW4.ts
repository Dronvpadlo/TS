/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
function areasq(a: number, b: number): void{
    if (a > 0 && b > 0) {
        let result1: number = a * b;
        document.write(`square area: ${result1} if sides have lenght ${a} and ${b}</br>`);
    }
    else{
        document.write(`uncorrect</br>`);
    }
}
areasq(5, 8);

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
function areacircle(p: number, r: number):void{
    if (p > 0 && r > 0) {
        let result2: number = p * r * r;
        document.write(`circle area: ${result2} if radius have ${r}</br>`);
    }
    else{
        document.write(`uncorrect</br>`);
    }
}
areacircle(3.14, 5);


/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
function areacylind(p: number, r: number, h: number):void{
    if (p > 0 && r > 0 && h > 0) {
        let result3: number = 2 * p * r * h;
        document.write(`cylindr area: ${result3} if radius = ${r} and height = ${h}</br>`);
    }
    else{
        document.write(`uncorrect</br>`);
    }
}
areacylind(3.14, 6, 9);



/*- створити функцію яка приймає масив та виводить кожен його елемент*/
function loop(array1: any): void{
    for (const item of array1) {
        document.write(`${item}, `);
    }
}
let array1:(string | number | boolean)[] = [12, 'task4', 442, false];

loop(array1);
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
function p(a: any): void{
    document.write(`<p>${a}</p>`);
}
p('<p>forExample</p>');
p('<p>forExample</p>');


/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
document.write(`<ul>`)
function li1(a1:any): void{
    document.write(`<li>${a1}</li>`);
}
li1('item');
li1('item');
li1('item');
document.write(`</ul>`);


/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
function li2(a2: any): void {
    document.write(`<ul>`);
    for (let i: number = 0; i < numberList; i++) {
        document.write(`<li>${a2}</li>`);
    }
    document.write(`</ul>`);
}
const numberList: number = 4;
li2('item2');



/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
document.write(`<ul>`)
function loop2(array2:(string | number | boolean)[]): void{
    for (const item of array2) {
        document.write(`<li>${item}</li> `);
    }
}
let array2:(string | number | boolean)[] = [12, 'task4', 442, false];

loop2(array2);
document.write(`</ul>`);




/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
function loop3(users: any): void {
    for (const user of users) {
        document.write(`<div class="user">
        <div class="id">id: ${user.id}</div>
        <div class="name">name: ${user.name}</div>
        <div class="age">age: ${user.age}</div>
        </div>`);
    }
}
let users: {id: number, name: string, age: number, status: boolean}[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}];

loop3 (users);

//- створити функцію яка повертає найменьше число з масиву

function minArr (arr: any) {
    let min = arr[0];

    for (let i: number = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;

}
const arrNum: number[] = [91,12,19];
document.write(minArr(arrNum));
document.write(`<br>`);


/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

function sumArr(arr: number[]): number{
    let summ: number = 0;
    for (let elem of arr) {
        summ += elem;
    }
    return summ
}
const sum: number[] = [1,2,10,22,2,23];
document.write(sumArr(sum).toString());
document.write(`<br>`);


/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
let numbers: number[] = [11,22,33,44];
function swap(arr:any, index1:any, index2:any){
    let indexRes = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = indexRes;
    return arr
}
document.write(swap(numbers, 0,1));
document.write(`<br>`);

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
let resultValue: any
function exchange(sumUAN: number, currencyValues: any, exchangeCurrency: string){
    for (let item of currencyValues) {
        if (exchangeCurrency === item.currency){
            resultValue = sumUAN / item.value;
        }

    }
    document.write(resultValue)
}

exchange (10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');