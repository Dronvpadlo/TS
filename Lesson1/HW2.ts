/*<----------------------Масиви та об'єкти:--------------------------------->


- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let array1: (string | number | boolean)[];
console.log(array1);



/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let book1: {title:string, pageCount:number, genre:string} = {
    title: 'Red Dragon',
    pageCount: 398,
    genre: 'detective',
}
let book2: {title:string, pageCount:number, genre:string} ={
    title: 'Process',
    pageCount: 299,
    genre: 'classic',
}
let book3: {title:string, pageCount:number, genre:string} ={
    title: 'Blaze',
    pageCount: 238,
    genre: 'horror',
}
console.log(book1, book2, book3);



/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let book4: {title:string, pageCount:number, genre:string, authors: any} = {
    title: 'Den Kameradan',
    pageCount: 468,
    genre: 'classic',
    authors:[
        {name: 'Erich Maria Remarque', age: 72}
    ]
}
let book5: {title:string, pageCount:number, genre:string, authors:any} ={
    title: 'Misery',
    pageCount: 272,
    genre: 'horror',
    authors: [
        {name: 'Stephen King', age: 76}
    ]
}
let book6: {title:string, pageCount:number, genre:string, authors:any} ={
    title: 'Martin Iden',
    pageCount: 498,
    genre: 'classic',
    authors: [
        {name: 'Jack London', age: 40}
    ]
}
console.log(book4, book5, book6);



/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let users: {name:string, username:string, password:string}[] =[
    {name: 'Arthur' ,username:'Ar2r' ,password:'artrdr'},
    {name: 'Irving' ,username:'Irwin' ,password:'irving31'},
    {name: 'Joseph' ,username:'JoeJoe' ,password:'sepht09'},
    {name: 'Erik' ,username:'R_IQ' ,password:'er88rick'},
    {name: 'Adrian' ,username:'SniperCS' ,password:'shoot76'},
    {name: 'Lucas' ,username:'Moura27' ,password:'LucMou27'},
    {name: 'Albert' ,username:'Mason' ,password:'LookOnCamera72'},
    {name: 'Robert' ,username:'Lokampb' ,password:'PatriciaHoll22'},
    {name: 'Vito' ,username:'Scaletta' ,password:'Barbar2'},
    {name: 'Eleonora' ,username:'LandorA' ,password:'11orA'},
]
console.log('password1: ' + users[0].password)
console.log('password2: ' + users[1].password)
console.log('password3: ' + users[2].password)
console.log('password4: ' + users[3].password)
console.log('password5: ' + users[4].password)
console.log('password6: ' + users[5].password)
console.log('password7: ' + users[6].password)
console.log('password8: ' + users[7].password)
console.log('password9: ' + users[8].password)
console.log('password10: ' + users[9].password)



/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/

let temperature: {day:string, morning:number, noon:number, evening:number}[] = [
    {day: 'In Monday temperature:', morning: 7, noon: 14, evening: 10},
    {day: 'In Tuesday temperature:', morning: 9, noon: 17, evening: 13},
    {day: 'In Wednesday temperature:', morning: 10, noon: 17, evening: 13},
    {day: 'In Thursday temperature:', morning: 9, noon: 16, evening: 13},
    {day: 'In Friday temperature:', morning: 11, noon: 21, evening: 17},
    {day: 'In Saturday temperature:', morning: 10, noon: 20, evening: 16},
    {day: 'In Sunday temperature:', morning: 9, noon: 19, evening: 15},
]
console.log(temperature);



/*<-----------------------Логічні розгалуження:---------------------------------->
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x: number = 3;
if (x > 0){
    console.log('true')
}
else{
    console.log('false')
}



/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time: number = 12;
if (time <= 14 && time >= 0){
    console.log('first')
}
else if(time > 14 && time <= 29 ){
    console.log('second')
}
else if(time > 29 && time <= 44){
    console.log('third')
}
else if(time > 44 && time <= 59){
    console.log('fourth')
}
else {
    console.log('Error')
}



/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day: number = 2;
if (day < 11){
    console.log('first decade')
}
else if(day > 10 && day <21 ){
    console.log('second decade')
}
else if(day >20 && day <= 31){
    console.log('third decade')
}
else {
    console.log('Mount have 31 day max')
}



/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let weekday: number = +prompt('Write number of week day');
switch (weekday){
    case 1:
        console.log('In Monday: meeting with president of France');
        break
    case 2:
        console.log('In Tuesday: singing with frontmen of group BMTH');
        break
    case 3:
        console.log('In Wednesday: playing football with Tony Kroos');
        break
    case 4:
        console.log('In Thursday: playing PC game');
        break
    case 5:
        console.log('In Friday: cooking dinner');
        break
    case 6:
        console.log('In Saturday: recording song with Lady Gaga');
        break
    case 7:
        console.log('In Sunday: relax');
        break
    default:
        console.log('One week have only 7 days')
}



/*    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/

let number1: number= +prompt('Enter the first number');
let number2: number= +prompt('Enter the second number');
if (number1>number2){
    console.log(number1)
}
else if(number1<number2){
    console.log(number2)
}
else{
    console.log('numbers are equal')
}



/*    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).*/

let xx: number = 0;
if(!xx){
    console.log('default');
}
else{
    console.log(xx);
}



/*    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray:{title:string, monthDuration:number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер');
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер');
}