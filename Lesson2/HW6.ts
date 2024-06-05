/* 1. - Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
let strHelloWorld1: string = 'hello world';
let strLoremIpsum1: string = 'lorem ipsum';
let strJavascriptIsCool1: string = 'javascript is cool';
document.write(`Знайти та вивести довижину настипних стрінгових значень: 'hello world', 'lorem ipsum', 'javascript is cool':<br>`);
document.write(strHelloWorld1.length.toString());
document.write(' ');
document.write(strLoremIpsum1.length.toString());
document.write(' ');
document.write(strJavascriptIsCool1.length.toString());
document.write(`<br>`);
document.write(`<br>`);
/*2. - Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
let strHelloWorld2: string = 'hello world';
let strLoremIpsum2: string = 'lorem ipsum';
let strJavascriptIsCool2: string = 'javascript is cool';
document.write(`Перевести до великого регістру наступні стрінгові значення:<br>`);
document.write(strHelloWorld2.toUpperCase());
document.write(' ');
document.write(strLoremIpsum2.toUpperCase());
document.write(' ');
document.write(strJavascriptIsCool2.toUpperCase());
document.write(`<br>`);
document.write(`<br>`);


/*3. - Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
let strHelloWorld3: string = 'HELLO WORLD';
let strLoremIpsum3: string= 'LOREM IPSUM';
let strJavascriptIsCool3: string= 'JAVASCRIPT IS COOL';
document.write(`Перевести до нижнього регістру настипні стрінгові значення:<br>`);
document.write(strHelloWorld3.toLowerCase());
document.write(' ');
document.write(strLoremIpsum3.toLowerCase());
document.write(' ');
document.write(strJavascriptIsCool3.toLowerCase());
document.write(`<br>`);
document.write(`<br>`);


// 4. - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString: string = ' dirty string   ';
document.write(`Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів:<br>`);
document.write(dirtyString.trim());


/* 5. - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
console.log('Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів:');
let str: string = 'Ревуть воли як ясла повні';
let arr: string[] = str.split(' ');
console.log(arr);


// 6. - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об\'єкти в масиві на стрінгові:');
let numberArr: number[] = [10,8,-7,55,987,-1011,0,1050,0];
let map: string[] = numberArr.map(index =>{return index.toString()});

console.log(map);


/* 7. - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

console.log('створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction:');
let nums: number[] = [11, 21 ,3];
const sortNums = (nums, direction: string): void =>{
    if (direction ==='ascending'){
        nums.sort((index1, index2) => index1 - index2)}
    else if (direction ==='descending'){
        nums.sort((index1, index2) => index2 - index1);
    }

    console.log(nums);
}
sortNums(nums,'ascending');
sortNums(nums,'descending');




//==========================
// 8. - є масив
let coursesAndDurationArray: {title: string, monthDuration: number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
console.log('є масив\n' +
    'let coursesAndDurationArray = [\n' +
    '    {title: \'JavaScript Complex\', monthDuration: 5},\n' +
    '    {title: \'Java Complex\', monthDuration: 6},\n' +
    '    {title: \'Python Complex\', monthDuration: 6},\n' +
    '    {title: \'QA Complex\', monthDuration: 4},\n' +
    '    {title: \'FullStack\', monthDuration: 7},\n' +
    '    {title: \'Frontend\', monthDuration: 4}\n' +
    '];відсортувати його за спаданням за monthDuration:');
coursesAndDurationArray.sort((direction1, direction2) => direction2.monthDuration - direction1.monthDuration);
console.log(coursesAndDurationArray);


//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців');
let filterDuration = coursesAndDurationArray.filter(objOfArr => {
    return objOfArr.monthDuration > 5;
});
console.log(filterDuration);


//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration} */
console.log('за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}');
let coursesAndDurationArrNew= coursesAndDurationArray.map((direction, index) => {
    ({id: index + 1, ...direction});
    return {id: index + 1,...direction};
});
console.log(coursesAndDurationArrNew);


//=========================
// 9.  описати колоду карт (від 6 до туза без джокерів)
console.log('описати колоду карт (від 6 до туза без джокерів)');
let cards: {cardSuit: string, value: string, color: string}[] = [
    {cardSuit: 'spade', value: '6',color:'black'},
    {cardSuit: 'spade', value: '7',color:'black'},
    {cardSuit: 'spade', value: '8',color:'black'},
    {cardSuit: 'spade', value: '9',color:'black'},
    {cardSuit: 'spade', value: '10',color:'black'},
    {cardSuit: 'spade', value: 'ace',color:'black'},
    {cardSuit: 'spade', value: 'jack',color:'black'},
    {cardSuit: 'spade', value: 'queen',color:'black'},
    {cardSuit: 'spade', value: 'king',color:'black'},
    {cardSuit: 'clubs', value: '6',color:'black'},
    {cardSuit: 'clubs', value: '7',color:'black'},
    {cardSuit: 'clubs', value: '8',color:'black'},
    {cardSuit: 'clubs', value: '9',color:'black'},
    {cardSuit: 'clubs', value: '10',color:'black'},
    {cardSuit: 'clubs', value: 'ace',color:'black'},
    {cardSuit: 'clubs', value: 'jack',color:'black'},
    {cardSuit: 'clubs', value: 'queen',color:'black'},
    {cardSuit: 'clubs', value: 'king',color:'black'},
    {cardSuit: 'diamond', value: '6',color:'red'},
    {cardSuit: 'diamond', value: '7',color:'red'},
    {cardSuit: 'diamond', value: '8',color:'red'},
    {cardSuit: 'diamond', value: '9',color:'red'},
    {cardSuit: 'diamond', value: '10',color:'red'},
    {cardSuit: 'diamond', value: 'ace',color:'red'},
    {cardSuit: 'diamond', value: 'jack',color:'red'},
    {cardSuit: 'diamond', value: 'queen',color:'red'},
    {cardSuit: 'diamond', value: 'king',color:'red'},
    {cardSuit: 'heart', value: '6',color:'red'},
    {cardSuit: 'heart', value: '7',color:'red'},
    {cardSuit: 'heart', value: '8',color:'red'},
    {cardSuit: 'heart', value: '9',color:'red'},
    {cardSuit: 'heart', value: '10',color:'red'},
    {cardSuit: 'heart', value: 'ace',color:'red'},
    {cardSuit: 'heart', value: 'jack',color:'red'},
    {cardSuit: 'heart', value: 'queen',color:'red'},
    {cardSuit: 'heart', value: 'king',color:'red'},
];

console.log(cards);

//- знайти піковий туз
console.log('знайти піковий туз');
let spadeAce: {cardSuit: string, value: string, color: string}[] = cards.filter(cardOfArr => {
    if (cardOfArr.cardSuit ==='spade' && cardOfArr.value === 'ace'){
        console.log(cardOfArr);
    }
});
console.log('_________________________________________________________');

//- всі шістки
console.log('всі шістки');
let sixthCards: {cardSuit: string, value: string, color: string}[] = cards.filter(cardOfArr => {
    if (cardOfArr.value ==='6'){
        console.log(cardOfArr);
    }
});
console.log('_________________________________________________________');

//- всі червоні карти
console.log('всі червоні карти');
let redCards: {cardSuit: string, value: string, color: string}[] = cards.filter(cardOfArr => {
    if (cardOfArr.color ==='red'){
        console.log(cardOfArr);
    }
});
console.log('_________________________________________________________');


//- всі буби
console.log('всі буби');
let diamondsCards: {cardSuit: string, value: string, color: string}[] = cards.filter(cardOfArr => {
    if (cardOfArr.cardSuit ==='diamond'){
        console.log(cardOfArr);
    }
});
console.log('_________________________________________________________');


//- всі трефи від 9 та більше
console.log('всі трефи від 9 та більше');
let moreThanEightClubs: {cardSuit: string, value: string, color: string}[] = cards.filter(cardOfArr => {
    if (cardOfArr.cardSuit ==='clubs' && cardOfArr.value !=='6' && cardOfArr.value !=='7' && cardOfArr.value !=='8'){
        console.log(cardOfArr);
    }
});
console.log('_________________________________________________________');


/*{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/



//=========================

//  10.  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
console.log('Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об\'єкт');
const callback = function (accumulator, card): void {
    if (card.cardSuit === 'spade'){
        accumulator[0].push(card);
    }
    if (card.cardSuit === 'diamond'){
        accumulator[1].push(card);
    }
    if (card.cardSuit === 'heart'){
        accumulator[2].push(card);
    }
    if (card.cardSuit === 'clubs'){
        accumulator[3].push(card);
    }
    return accumulator;
};

let reduce: any = cards.reduce(callback, [[],[],[],[]]);
console.log(reduce);
/*{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}*/




//=========================
/*  11.  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray*/
console.log('взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArra');
let coursesArray: {title: string, monthDuration: number, hourDuration: number, modules: string[]}[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//--написати пошук всіх об'єктів, в який в modules є sass
console.log('написати пошук всіх об\'єктів, в який в modules є sass');
let sassFinder:{title: string, monthDuration: number, hourDuration: number, modules: string[]}[] = coursesArray.filter(module => {
    module.modules.filter(direction => {
        if (direction === 'sass'){
            console.log(module);
        }
    })
});
console.log('_________________________________________________________');
//--написати пошук всіх об'єктів, в який в modules є docker
console.log('написати пошук всіх об\'єктів, в який в modules є docker');
let dockerFinder:{title: string, monthDuration: number, hourDuration: number, modules: string[]}[] = coursesArray.filter(module => {
    module.modules.filter(direction => {
        if (direction === 'docker'){
            console.log(module);
        }
    })
});