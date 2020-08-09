"use strict";

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while(num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
    
//     console.log(i);
    
// }
// function done () {
//     console.log("It`s fine");
// }
// const learnProgramming = (lang, callback) => {
//     console.log(`I learn ${lang}`);
//     callback();
// }


// learnProgramming("JavaScript", done);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//         tired: {
//             solid: true,
//             bt: ["Hello world"]
//         },
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// options.makeTest();
// const {bt, solid} = options.colors.tired; // деструктиризация
// const {border, bg} = options.colors;  // деструктуризация
// console.log(bt);
// console.log(Object.keys(options).length);


// console.log(options['colors']['border']);
// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} have value ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Property ${key} have value ${options[key]}`);
//         counter++;
//     }
    
// }
// console.log(counter);

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // передает только ссылку а не сам обьект(не создает новый обьект)
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 4,
//         y: 6
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c["x"] = 20;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// }
// const clone = Object.assign({}, add);
// clone.d = 5;
// // console.log(clone);
// // console.log(add);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[1] = 'assdsfdsf';
// // console.log(newArr);
// // console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a,  b , c ) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];
// newAarray[2] = 'c';
// console.log(array);
// console.log(newAarray);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// q.two = 3;
// console.log(q);
// console.log(newObj);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};
const jack = {
    health: 180
};
jack.__proto__ = soldier;  // depreciate(т.е. этот метод уже не используется)
console.log(jack.armor); 

console.log(Object.getPrototypeOf(jack));

jack.sayHello();
