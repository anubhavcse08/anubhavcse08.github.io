/* console.log(a);
console.log(b);

var a = 12;
let b = 20; */

// Closure: lexical scope/environment with function
/* function a() {
    let x = 100;
    function b() {
        let p = 200;
        function c() {
            let q = 300;
            console.log(x, q)
        }
        return c;
    }
    return b;
}

const w = a();
const y = w();
const z = y(); */

// Reduce example
/* const users = [
    { firstname: 'Anubhav', lastName: 'Kumar', age: 23 },
    { firstname: 'Narendra', lastName: 'Modi', age: 75 },
    { firstname: 'Alia', lastName: 'Bhatt', age: 23 },
    { firstname: 'Katrina', lastName: 'kaif', age: 32 },
]; */

/* const output = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        // acc.push(curr.firstname)
        acc = [...acc, curr.firstname];
    }
    return acc;
}, []);
console.log(output);    //["Anubhav", "Alia"] */

/* //{23: 2, 75: 1, 32: 1}
const findNumSameAgePerson = users.reduce((acc, curr) => {
    // acc[curr.age] = acc[curr.age] ? ++acc[curr.age] : 1;
    // acc[curr.age] = (acc[curr.age] + 1) || 1;
    acc[curr.age] = (acc[curr.age] || 0) + 1;
    return acc;
}, {});
console.log(findNumSameAgePerson); */


/* // Sum of minimum absolute difference of each array element
const arr = [12, 10, 15, 22, 21, 20, 1, 8, 9]; // 18
arr.sort((a, b) => a - b); // [1, 8, 9, 10, 12, 15, 20, 21, 22]
let sum = 0;
sum += Math.abs(arr[0] - arr[1]); // 8 - 1
sum += Math.abs(arr[arr.length - 1] - arr[arr.length - 2]); // 22 - 21
for (let i = 1; i < arr.length - 1; i++) {
    sum += Math.min(Math.abs(arr[i] - arr[i - 1]), Math.abs(arr[i] - arr[i + 1])); // (|8 - 1|, |8 - 9|), (|9 - 8|,|9 - 10|), (|10 - 9|,|10 -12|)... so on
}
console.log('summm3: ', sum); */


//Taking the absolute sum of Array of Numbers in JavaScript
// To do this without taking help of any inbuilt library function
/* const arr = [1, -5, -34, -5, 2, 5, 6];
const absoluteSum = arr => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log([i], ':', arr[i] * -1);
            res += (arr[i] * -1);
            continue;
        };
        console.log([i], '=', arr[i]);
        res += arr[i];
    };
    return res;
};
console.log(absoluteSum(arr)); */
/*
const findSumofProduct = (arr) => {
    let sum = 0;
    if (arr.length === 1)
        sum = arr[0];
    else if (arr.length === 2)
        sum = arr[0] * arr[1];
    else {
        // let arr = [a,b,c,d];
        let suffix = arr[arr.length - 1];
        for (let i = arr.length - 2; i >= 0; i--) {
            // suffix = 4;
            // res => 4 * 2 = 8
            // res => (4 + 2) * 3 = 18
            // res => (3 + 4 + 2) * 9 = 81;

            // suffix => c;
            // res => c * d
            // res => suffix / (c + d) * b
            // res => suffix / (b + c + d) * a
            sum += suffix * arr[i];
            suffix += arr[i];
        }
    }
    return sum;
}
let arr = [9, 3, 4, 2];
console.log(findSumofProduct(arr));

// 1,3,4,5
// (1,3)+(1,4)+(1,5)+(3,4)+(3,5)+(4,5)
// 3+4+5+12+15+20 */



/* function foo() {
    let a = 0;
    b = 0;
    a++;
    return a;
}
console.log(foo());
console.log(typeof a);
console.log(typeof b); */



/* var string = "Welcome to ongraph interview"; // "interview ongraph to Welcome"
let str = '';
const revStr = string => string.split("").reverse().join("");

revStr(string).split(" ").map((item, index) => {
str += revStr(item) + " ";
})

console.log(str); */

/* // const arr = [1, 2, 1, 2, 1, 3, 1];
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// pair 1-1 = 1
// pair 1-1 = 1
// pair 2-2 = 1
// output = 1 + 1 + 1 = 3
let pair = 0;
const ppp = new Map();
arr.sort((a, b) => a - b).map((num, index) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            ++count;
        }
    }
    if (count > 1) {
        ppp.set(num, Math.floor(count / 2));
    }
})
for (let [key, value] of ppp) {
    pair += value;
}
console.log(pair); */



// INterview Questions - Vimal - raj@tekclansolutions.com
// ************************************

/* var a = 10;
function b() {
    console.log(a);
    let a = 20;
}
b(); */

/* let a = 10;
function b(){
console.log(a);
let a = 20;
}
b(); */

/* let a = 10;
function b() {
    console.log(a);
    var a = 20;
}
b(); */

/* var a = 10;
function b() {
    console.log(a);
    a = 20;
}
b(); */

/* let a = 10;
function b() {
    console.log(a);
    a = 20;
}
b(); */

/* var a = 10; d = 15; c = 10;
function b() {
    a = 15;
    console.log(a, ' -- ', c)
    var c = 20;
}
b();
console.log(a);
console.log(c); */

/* setTimeout( () => {console.log(1); }, 1000);
console.log(2);
setTimeout (()=> {console.log(3); }); */

/* setTimeout( () => {console.log(1); }, 0);
console.log(2);
setTimeout (()=> {console.log(3); }, 1000);
setTimeout( () => {console.log(4); }, 500); */

/* setTimeout(() => { console.log(1); }, 1000);
console.log(2);
setTimeout(() => { console.log(3); }, 100);
for (var i = 0; i < 1000; i++) {
    console.log("time");
} */

/* let a = [1, 3, 5];
let b = a;
a[1] = 2;
console.log(a);
console.log(b); */

/* let a = [1,3,5];
let b = a;
b = [];
console.log(a);
console.log(b) */

/*
let obj = {
‘id’: 232, ‘age’: 30,
‘name’:’name 1’, ‘location’:’Chennai’
};

const { id, age, name as firstname = '', location } = obj;

let obj2 = {
    ‘id’ : 12, ‘name’ : ‘name 1’,
    ‘address’ : {
    ‘door’ : 23, ‘city’ : ‘Chennai’
    }
};

const { id,
    name as firstname = '',
    address: {
        door, city = ''
    } = {} }
    = obj2;

 */

// Gaurav Khandelwal12:06 PM
// *****************************************
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);


/* var emp = {
    company: 'xyz'
}
emp.name = "abc";
console.log(emp); */

/*
Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => {
        throw new Error('My Error')
    })
    .catch(() => 1)
    .then((x) => x + 1)
    .then((x) => console.log(x))
    .catch(console.error)
 */


/* let messages = [];
const first = () => messages.push('first')
const second = () => messages.push('second')
const third = () => messages.push('third')
const fourth = () => messages.push('fourth')

setImmediate(first)
process.nextTick(second)
setTimeout(third, 0)
fourth()
console.log(messages); */

/* for (var index = 1; index <= 10; index++) {
    function closeVariables(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    closeVariables(index);
} */

/* function changeStuff(a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" };
}

var num = 10;
var obj1 = { item: "unchanged" };
var obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item); */


/* function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); */

/* let func = function () {
    {
        let l = 'let';
        var v = 'var';
    }
    console.log(v);
    console.log(l);
}

func(); */

/* const offers = [
    { name: "PTM120", amount: "120" },
    { name: "HAPPY400", amount: "400" },
    { name: "FIRST100", amount: "100" },
    { name: "FIRST", amount: "" },
];

const output = offers.reduce((acc, curr) => {
  return acc < curr.amount ? curr.amount : 0 ? curr.amount : acc;
}, Number.MIN_VALUE);

const highestCashbackAmt = (offers) => {
    let highAmount = 0;
    offers.map(offer => {
        if (offer && offer.amount > highAmount) {
            highAmount = offer.amount;
        }
    })
    return highAmount;
}
console.log(highestCashbackAmt(offers)); */

/* const getReadings = async (length = 1200) => {
    const current = Date.now();
    const hour = 1000 * 60 * 60;
    console.log(new Date(current), ' -- ', hour)
    return [...new Array(length)].map((_, index) => ({
        time: current - index * hour,
        value: Math.random() * 0.7 + 0.4,
    }));
};

getReadings().then(res => console.log(res)); */


/**
* Auto-generated code below aims at helping you parse
* the standard input according to the problem statement.
**/

/* const inputStr = '*+*+*-'; // 2 = *+*-
// const inputStr = '+-*+++*+--'; // 2 = *++++---
// const inputStr = '+-*-*+*+*-*+'; // 3 = -*+*+*+-*
const subStrLength = 3;

let str = [], sortableStr = [], output = '';
for (let i = 0; i < inputStr.length; i++) {
    str.push(inputStr.substring(i, i + subStrLength));
    i = i + subStrLength - 1;
}
const subStr = str.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
}, {});
for (let str in subStr) {
    sortableStr.push([str, subStr[str]]);
}
sortableStr.sort((a, b) => {
    let aa = 0, bb = 0;
    a[0].split('').map(item => {
        let count = 0;
        if (item === '*') {
            ++count;
        } else if (item === '+') {
            ++count;
        } else if (item === '-') {
            ++count;
        }
        if (count === subStrLength) {
            return 200;
        }
        return aa += item.charCodeAt();
    });
    b[0].split('').map(b => bb += b.charCodeAt());
    return aa - bb;
})
sortableStr.sort((a, b) => b[1] - a[1]).map(str => output += str[0]);
console.log(output); */

// *****************************************************

/* function reducer1(state, action) {
    console.log(state, "1111111111111", action)
    return {
        ...state,
        ...action
        // age: action.age,
        // name: action?.payload
    }
}
function reducer2(state, action) {
    console.log(state, "222222222222222", action)
    return {
        ...state,
        address: state?.name + " for " + action?.payload?.length
    }
}
function composeReducers(reducers) {
    const reducerFun = {};
    for (let i = 0; i < reducers.length; i++) {
        // function callReducer(i) {
        const callReducer = (...args) => reducers[i](...args);
        reducerFun[reducers[i].name] = callReducer;
        // }
        // callReducer(i);
    }
    return reducerFun;
}

const finalReducer = composeReducers([reducer1, reducer2]);
const finalState = finalReducer.reducer1({ age: 20 }, { payload: "John", age: 45 });
const finalState2 = finalReducer.reducer2({ age: 90, name: "Krishna" }, { payload: "New payload", age: 30 });
const expected = {
    age: 20,
    name: "John",
    address: "John for 4"
}

const result = finalReducer.reducer2({ hello: "blah" }, { payload: "Something else" });
console.log(finalState2, " finallll>>>>>>>>> ", result); */


/* const sum = (...num) => {
    return num.reduce((acc, curr) => {
        return acc += curr;
    }, 0)
}

console.log(sum(1, 3));
console.log(sum(1, 3, 9, 6, 7)); //26
console.log(sum(1, 3, 4, 2, 8)); //18  */


/* const str = ['flower', 'flow', 'flame'];
let outputRes = '';
str[0].split("").map((flower, index) => {
    let flag = 0;
    for (let i = 0; i < str.length; i++) {
        const value = str[i].split("");
        if (flower === value[index]) {
            ++flag;
            if (flag === str.length)
                outputRes += value[index];
        } else {
            flag = 0;
            break;
        }
    }
})
// console.log(output);  */

/* const removeDuplicatesNum = (arr = []) => {
    let hash = {}, newArr = [];
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    }
    for (let k of Object.keys(hash)) {
        newArr.push(k);
    }
    return newArr;
}
// console.log(removeDuplicatesNum([1,2,3,4,4,5])); */

/* const missingNumberInGivenArray = (arr = []) => {
    let missingNumArr = [], count = 0;
    arr.sort();
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
        if (i !== arr[i - arr[0] - count]) {
            count++;
            missingNumArr.push(i);
        }
    }
    return missingNumArr;
}
// console.log(missingNumberInGivenArray([10, 11, 13, 15, 16]));
// console.log(missingNumberInGivenArray([16, 11, 13, 15, 10])); */

/* function reverseString(str = "") {
    return str.split(" ").reverse().join(" ");
}

// console.log(reverseString("I Love My India")); */

//Teckion - Interview questions
// Javascript fundamentasl. => 25
// CODING PROBLEMS => 20
// CSS => 10



/* let a = 50;
var b = 40;
{
    console.log(b);
    // console.log(a);
    var b = 90;
    let a = 200;
    function call() {
        // console.log(b);
        console.log(a);
        let b = 55;
        var a = 65;
        console.log(a);
        console.log(b);
    }
    call();
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b); //40 = > 90 */

/* // Event delegation uses //
// this keywpord
function Employee() {
    this.name = 'Raj Thakur'
    this.company = 'XYZ'

    return this
}

const emp1 = new Employee(); 
console.log(emp1);

const data = Employee();
console.log(data); */

// Implement curry function which should work like this
// // start
/* function curry(...num1) {
    let s = num1.reduce((a, b) => a * b);
    return (...num2) => {
        return num2.length === 0 ? s : curry(s, ...num2);
    }
    // return (...args2) => {
    //     return (...args3) => {
    //         return args1.concat(args2).concat(args3).reduce((a, b) => a * b)
    //     }
    // }
    //     // base condition
    //     // console.log(args[0], " --- ", func)
    //     // if (args[0]) {
    //     //     return curry(func(args[0]));
    //     // }
    //     // return func;

    // return (...args) => func(...args)
} */
// // end

// function multiply(a, b, c) { console.log(a, ' - ', b, ' -- ', c); return a * b * c; }

// let curried = curry(multiply);
// console.log(curry(2)(3)(4)()); // 24
// console.log(curry(2, 3)(4)()); // 24
// console.log(curry(2, 3, 4)()); // 24
// console.log(curry(5)(6, 7)(3, 1)()); // 630


// async vs defer in javascript
// session storage vs local storage



/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    printName: function (place, state) {
        // console.log("qqqqq", this)
        console.log(this.firstName + ' ' + this.lastName + ' living in ' + place + ', ' + state);
    }
}; */

// The call, bind and apply methods can be used to set the this keyword independent of how a function is called.
// The bind method creates a copy of the function and sets the this keyword,
// while the call and apply methods sets the this keyword and calls the function immediately.

/* person.printName.call(person, "Pune", "Maharastra");
person.printName.apply(person, ["Patna", "Bihar"]);
const personGreet = person.printName.bind(person, "Erode", "Tamilnadu");
personGreet(); */

/* const lengthOfLongestSubstring = (s, index = 0, highestLenSubstring = []) => {
    let highestLen = 1;
    for (let i = 0; i < s.length; i++) {
        let len = 1, subStr = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] !== s[j] && !subStr.includes(s[j])) {
                len += 1;
                subStr += s[j];
                console.log(s[i], " - ", subStr, " -- ", len, " --- ", highestLen)
                if (len > highestLen) {
                    highestLen = len;
                }
            } else {
                break;
            }
        }
    }
    return highestLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));  //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew"));    //3 */

/* const myPromise = new Promise((resolve, reject) => {
    document.getElementById("btn1").addEventListener("click", () => {
        resolve("My promise resolved");
    });
    document.getElementById("btn2").addEventListener("click", () => {
        reject("My promise rejected");
    });
});
console.log(myPromise)
myPromise.then(res => console.log(res)).catch(err => console.log(err)); */


//Memoized (return from cache) function inside function
/* const memoizedFn = (fn) => {
    const map = new Map();
    return (...args) => {
        if (map.has(`${args[0]}_${args[1]}`)) {
            console.log("Return from cache...");
            return map.get(`${args[0]}_${args[1]}`);
        } else {
            const value = fn(...args);
            console.log("Return from Execution...");
            map.set(`${args[0]}_${args[1]}`, value);
            return value;
        }
    }
}

const addSum = (a, b) => a + b;
const addMemo = memoizedFn(addSum);
console.log(addMemo(1, 2));

console.log(addMemo(1, 2));

console.log(addMemo(4, 2));

console.log(addMemo(1, 2));
 */

/* //Handle flatten array
const handleFlattenArr = (arr = [], newArr) => {
    arr.forEach(item => {
        if(Array.isArray(item)) {
            return handleFlattenArr(item, newArr);
        } else {
            newArr.push(item);
        }
    });
    return newArr;
}

console.log(handleFlattenArr([2, 4, [12, 5, [9, 4, 2, [4, 5, 1, 7], [3, 5, 0]]]], []));
console.log(handleFlattenArr([2, 4, [12, 5, [9, 4, 2, [3, 5, 0]]], 100, 200], [])); */

/* //Destructuring
const primaryObject = [
    { key: "sample3", value: "3_sample" },
    { key: "sample1", value: "1_sample" },
    { key: "sample2", value: "2_sample" },
    { key: "sample3", value: "3_1_sample" },
    { key: "sample5", value: "5_sample" },
    { key: "sample8", value: "8_sample" },
    { key: "sample2", value: "2_1sample" }
];
const hash = {};
primaryObject.forEach(item => {
    hash[item.key] = hash[item.key] ? [...hash[item.key], item] : [item];
});

console.log(hash); */

// const curry = (fn) => {
//     return (...args1) => {
//         console.log(args1)
//         // return fn(args1);
//     }
// }

// function multiply(a, b, c) { console.log(a, ' - ', b, ' -- ', c); return a * b * c; }

// let curried = curry(multiply);

// console.log(curried(2)(3)(4)()); // 24

// // console.log(curry(2, 3)(4)()); // 24

// // console.log(curry(2, 3, 4)()); // 24

// // console.log(curry(5)(6, 7)(3, 1)()); // 630


/* const numArr = [1,2,3];

// const mapResult = numArr.map(num => num + 2);
// console.log(numArr, " --- ", mapResult);

const forEachResult = numArr.forEach((num, i, arr) => arr[i] = num + 2);
console.log(numArr, " --- ", forEachResult); */



//Munsi ji Problem
/* function compute() {
    // let totalAmount = 0;
    // const exportFn = { lacs, crores, value };

    // function lacs(amount) {
    //     totalAmount += amount * 100000;
    //     return exportFn;
    // }
    // function crores(amount) {
    //     totalAmount += amount * 10000000;
    //     return exportFn;
    // }

    // function value() {
    //     return totalAmount;
    // }
    // return exportFn;

    this.totalAmount = 0;
    this.lacs = function (amount) {
        this.totalAmount += amount * 100000;
        return this;
    }

    this.crores = function (amount) {
        this.totalAmount += amount * 10000000;
        return this;
    }

    this.value = function () {
        return this.totalAmount;
    }

    return this;
}

console.log(compute().lacs(15).crores(2).value());
console.log(compute().lacs(2).value()); */


/* function User(name) {
    this.name = name;
    // never create function inside constructor function
    this.printName = function() {
        console.log(this.name);
    }
    console.log(this);
}

const instanceObj = new User("Anubhav");
instanceObj.printName();  */

/* function User(name) {
    this.name = name;
    console.log(this);
}
// Creating custom ProtoType
User.prototype.printName = function () {
    console.log(this.name);
}

User.prototype.customNewProperty = "custom protoType property creation";

const instanceObj = new User("Anubhav");
instanceObj.printName();
console.log(instanceObj.customNewProperty); */


/* //Create custom Array protoType - unique method.
const arr = [1, 4, 1, 5, 2, 4];
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique()); */


/* // Call and bind based questions
var obj = {
    helloWorld: function () {
        console.log(this);
        return "Hello World " + this.name;
    },
    name: "hello"
}

var obj2 = {
    helloWorld: obj.helloWorld,
    name: 'bye'
};

console.log(obj2.helloWorld());
console.log(obj2.helloWorld.call(obj));
const bindExample = obj2.helloWorld.bind(obj);
console.log(bindExample()); */

/* //Inheritance in Javascript:
const User = function(name, password) {
    this.name = name;
    this.password = password;
}

User.prototype.printNamePassword = function() {
    console.log(this.name + " - " + this.password);
}

const Admin = function(name, password, course) {
    User.call(this, name, password);
    this.course = course;
}

Admin.prototype.printAdminName = function() {
    console.log("Admin name: ", this.name);
}

const adminObj = new Admin("John", 21919, "Law");
console.log(adminObj.printAdminName()) */


/* // Two-way Angular binding custom code
const input = document.createElement('input');
const state = { value: "Hi" }

function model(state, input) {
    input.value = state.value;
    Object.defineProperty(state, "value", {
        get: function () {
            return input.value;
        },
        set: function (newValue) {
            input.value = newValue;
            return;
        }
    });
    input.addEventListener("change", (e) => {
        const newValue = e.target.value;
        state.value = newValue;
    })
}

model(state, input);
// console.log(state.value);
console.log(input.value);   //Hi

state.value = "dev"
console.log(input.value);   //dev

input.value = "EngineerAnubhav";
input.dispatchEvent(new Event('change'));
console.log(state.value); */


/* foo();  // Foo calling...
var foo = 20;   // Memory creation phase: undefined & Execution phase foo = 20
function foo() {    // With same name variable foo = undefined replacing to foo = "function definition" in memory creation pahse & Execution phase will not do anything. So, in Execution phase foo = 20 based on above line
    console.log("Foo Calling...");
}
foo();  //TypeError: foo is not a function */

/* {
    var a = 10;
    let b = 20;

    console.log(a);
    console.log(b);
}

console.log(a); //10 because var is accessable in block level
console.log(b); // ReferenceError: b is not defined ----- let is not accessable outside of any block or functional level
 */

/* function abc() {
    var a = 100;
    console.log(a); //Not reachable at this place
}
console.log(a); // ReferenceError: a is not defined ----- because var is not accessable in function block level
abc(); */


/* function abc() {
    var a = 100;
    console.log(a); //100
}
abc();
console.log(a); // ReferenceError: a is not defined ----- because var is not accessable in function block level
 */


/* function foo(a, ...rest, c) {
    console.log(a, rest, c);
}

foo(1, 2, 3, 4, 5); */


/* const user = {
    id: 123,
    name: "Ram",
    address: {
        village: "Ayodhya",
        state: "UP"
    }
}

console.log(Object.isSealed(user));
Object.defineProperties(user, {fatherName: {value: "Binay Kumar", writable: false}, temp: {value: "temp", writable: true}});
console.log(user);
user.temp = "Temporary";
user.fatherName = "Mr Binay Kumar";
console.log(user);
const freezIdOnly = Object.getOwnPropertyDescriptor(user, "id");
freezIdOnly.writable = false;
freezIdOnly.configurable = false;
freezIdOnly.enumerable = false;
user.id = 1000;
console.log(freezIdOnly, user) */


/* // Automatically fetch again when error happens until maximum retry count is met.
const fetchWithAutoRetry = async (fetcher, maximumRetryCount = 1) => {
    if (maximumRetryCount > 0) {
        try {
            // const result = await fetcher(maximumRetryCount);
            // console.log("try ", result);
            return await fetcher(maximumRetryCount);;
        } catch (error) {
            fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
            // console.log("catch block", res);
            throw (error);
        }
    }
    throw ("Error: Maximum try reached...");
}

const p1 = () => new Promise((resolve, reject) => resolve("Resolved P1"));
const p2 = (maximumRetryCount) => new Promise((resolve, reject) => {
    const random = Math.random() > 0.5;
    console.log({ random }, " --- ");
    if (random) {
        resolve("Resolved P2");
    } else {
        reject("Reject P2...");
    }
});

fetchWithAutoRetry(p2, 5).then((res) => console.log(res)).catch((err) => console.log(err));
 */

/* 
var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0](); //In the Invoke function this refer to number of the arguments
    }
}

obj.method(fn, 2, 30); */

/* function a() {
    console.log([...arguments].reduce((a, b) => a *= b))
}

a(1, 2, 3, 4, 5); */

/* (function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})(); */
/* (function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout((function () { console.log(3) })(), 0);
    console.log(4);
})(); */
/* (function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout((function () { console.log(3) })(), 3000);   // What will happen after 3 seconds
    console.log(4);
})(); */
/* (function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout((function () { console.log(3); return function() {console.log("hello got callback...")} })(), 3000);
    console.log(4);
})(); */


// Currying
// Suppose we have a function which takes some arguments and then we want that function to partially executed
// so take a example , we have add function and that will take multiple arguments and we want to create currying
// and then what happens is when you pass that function from a currying function then we get the new function which can be invoke with
// single-single parameters. So suppose a, b, c will pass to the original function and the carried function executed partially
// so you can add one and then two and then it will return a new function which can be invoked by passing three...

/* const add = (a) => {
    return (b) => {
        if (b) {
            return add(a + b);
        } else {
            return a;
        }
    }
};

const curried = add(2)(3)(4)();
console.log(curried, " --- "); */

//Fibonacci series
/* function fibonacci(num) {
    if(num <= 1)
        return 1;
    console.log(num - 1, " --- ", num - 2)
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4)); */
/*
//Fibonacci series with cache
function fibonacci(num, cache) {
    cache = cache || {};
    if(cache[num]) {
        console.log("coming from cache...", cache);
        return cache[num];
    }
    if(num <= 1) {
        console.log("Coming from Execution...", cache)
        return 1;
    }
    return cache[num] = fibonacci(num - 1, cache) + fibonacci(num - 2, cache);
}

console.log(fibonacci(4, {}));
console.log(fibonacci(5, {}));
console.log(fibonacci(4, {})); */

/* //Memoize function
function memoize(func) {
    const cache = {};
    return (...args) => {
        const argsKey = args.join(',');
        if(!args.length) {
            return "";
        }
        if(!cache[argsKey]) {
            console.log("Not coming from cache...");
            cache[argsKey] = argsKey.split(",").map((str) => func(str));
        } else {
            console.log("Coming from cache...");
        }
        console.log(cache);
        return cache[argsKey];
    }
}

const customFun = (str = "") => `${str.toLocaleUpperCase()}`;
const memoizedCustomFun = memoize(customFun);

console.log("Result >>>", memoizedCustomFun("hello"));
console.log("Result >>>", memoizedCustomFun("hi"));
console.log("Result >>>", memoizedCustomFun("hello", "anubhav"));
console.log("Result >>>", memoizedCustomFun("hello")); */


/* function abc() {
    const a = b = c = 1;
}
abc();
console.log(typeof a, typeof b, typeof c); */

/* saySomething();
sayHello();
var sayHello = () => {
    console.log("hello world");
}
function saySomething() {
    console.log("I love you!");
} */

/* {
    //Temporal dead zone start here
    const func = () => console.log(letVar);
    //Here is the TDZ
    let letVar = 3; // TDZ ends
    func();
} */

/* {
    func();
    const func = () => console.log(letVar);
    let letVar = 3;
} */

/* {
    func();
    var func = () => console.log(letVar);
    let letVar = 3;
} */

/* {
    const func = () => console.log(letVar);
    func();
    let letVar = 3;
} */

/* function shallowToDeepCopy () {
    const obj1 = {
        name: "Anubhav",
        designation: "Software Developer",
        address: {
            vill: "Dharmpur",
            postOffice: "Amnour",
            dateOfStartLiving: new Date(),
            dist: {
                actual: "Saran",
                subDist: "Chapra"
            }
        },
        website: "https://anubhavcse08.github.io/",
        host: undefined,
        owner: null,
        property: NaN
    }

    console.log(obj1);
    // obj2 = obj1;    // It will change each and everything if you change obj2 property because it's pointing to same reference
    // obj2 = {...obj1};   // Shallow copy, It will change inner property of original object obj1, postOffice getting change
    // obj2 = Object.assign({}, obj1);    // Shallow copy, It will change inner property of original object obj1, postOffice getting change
    obj2 = JSON.parse(JSON.stringify(obj1));    //Deep copy, but "host" getting removed, Nan value getting Null & new Date() value converting in String
    obj2.name = "Anubhav Malhotra";
    obj2.address.postOffice = "Marhowrah";
    console.log(obj2);
    console.log(obj1);
}

shallowToDeepCopy(); */

// Fully deep copy inner to inner property - handle by recursion function
/* let deepCopyObj = {};
function recursionDeepCopy(obj = {}) {
    for (const key in obj) {
        console.log(">>>>>>>>>>>>", key)
        const element = obj[key];
        // console.log()
        // if (Object.hasOwnProperty.call(obj, key)) {
        // const pp = new Date(element)
        // console.log(key, " ----- ", pp != "Invalid Date");
        // }
        // console.log(typeof element === "object", "&&" , key, element)
        if (typeof element == "object" && element != null) {  //&& (new Date(element) != "Invalid Date")
            recursionDeepCopy(element);
        } else {
            deepCopyObj[key] = element;
        }
    }
    // console.log("hello", deepCopyObj)
    return deepCopyObj;
}

const obj1 = {
    name: "Anubhav",
    designation: "Software Developer",
    address: {
        vill: "Dharmpur",
        postOffice: "Amnour",
        // dateOfStartLiving: new Date(),
        dist: {
            actual: "Saran",
            subDist: "Chapra"
        }
    },
    website: "https://anubhavcse08.github.io/",
    host: undefined,
    owner: null,
    property: NaN
}

console.log(obj1);
const newObj = recursionDeepCopy(obj1);
newObj.name = "KAAAAAAAAAAAAAAAAAa";
// newObj.address.vill = "Patna";
console.log(newObj)
console.log(obj1); */

/* // converting into Chunk of Array
function chunk(arr, sizeToBeChunk, output = []) {
    if (arr.length === 0)
        return output;
    const splicedArr = arr.splice(0, sizeToBeChunk);
    output.push(splicedArr);
    return chunk(arr, sizeToBeChunk, output);
}

console.log(chunk([1, 2, 34, 89, 5, 67, 2, 45, 7, 43], 3));   //[[1,2,34], []]
console.log(chunk([1, 2, 34, 89, 5], 3));   //[[1,2,34], []] */

/* //Debouncing search
function debounce(searchFn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);    //aborting automatically delay time se phle call kiya jayega toh
        timer = setTimeout(() => {
            searchFn(args);
        }, delay)
    }
}

function func(data, delay) {
    setTimeout(() => {
        console.log("Function func getting called after delay...!", data[0]);
    }, data[1]);
}

const innerFn = debounce(func, 1000);
innerFn("1", 1000);
setTimeout(() => {
    innerFn("2", 2000);
}, 1000);
setTimeout(() => {
    innerFn("3", 500);
}, 1300);
innerFn("4", 2500);
setTimeout(() => {
    innerFn("5", 1000);
}, 3000); */

//Throttling
/* const throttlingExample = (func, delay) => {
    let timer = null;
    return (...args) => {
        if(!timer) {
            func(args);
        }
        timer = setTimeout(() => {
            timer = null;
        }, delay);
    }
}

function fn(seconds) {
    console.log("after sometime printing, Throttling example... " + seconds);
}

const innerThrottledFn = throttlingExample(fn, 500);
innerThrottledFn(); // This will execute immediately
innerThrottledFn(); // This will be ignored
setTimeout(() => {
    innerThrottledFn(300); // This will also be ignored
}, 300);
setTimeout(() => {
    innerThrottledFn(600); // This will execute
}, 600);
setTimeout(() => {
    innerThrottledFn(800); // This will be ignored
}, 800);
setTimeout(() => {
    innerThrottledFn(1100); // This will be ignored
}, 1100); */

/* // Target to achive each execution of method count should increment with one +1
// and there should reset method also...
function counter() {
    let count = 0;
    return function () {
        return {
            count: ++count,
            reset: () => count = 1
        }
    }
}
const innerC = counter();
console.log(innerC().count);
console.log(innerC().count);
console.log(innerC().count);
console.log(innerC().count);
console.log(innerC().reset());
console.log(innerC().count);
console.log(innerC().count);
console.log(innerC().count);
console.log(innerC().count);

//How to achive this without closure...
//Immediate invoking function...
const counter = (() => {
    let count = 0;
    function inner() {
        count++;
        console.log(count)
        return count;
    }
    inner.reset = () => count = 0;
    console.log(inner);
    return inner;
})();

counter() //1
counter() //2
counter() //3
counter.reset();
counter() //1
*/




/* const textArr = ["Anubhav", "Chandu", "Sandeep", "Hero"];
const changeTextWhileClicking = (arr) => {
    let clickedCount = 0;
    const text1 = document.getElementById("text1");
    text1.style.cursor = "pointer";
    text1.addEventListener("click", () => {
        text1.innerText = arr[clickedCount];
        if (arr.length - 1 === clickedCount) {
            clickedCount = 0;
        } else {
            clickedCount++;
        }
    });
}

changeTextWhileClicking(textArr); */

// const bodyElement = document.getElementById("body");


// newChild.innerText = "click kro..."; 
/* const getPosition = (event) => {

    const numberOfCircle = document.querySelectorAll(".circle");
    if(numberOfCircle.length >= 2) {
        numberOfCircle.forEach(circ => document.body.removeChild(circ));
    }

    const x = event.clientX;
    const y = event.clientY;
    const randomNum = Math.random();
    const radius = "100px";

    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = y - 50 + "px";
    circle.style.left = x - 50 + "px";

    circle.style.width = radius;
    circle.style.height = radius;

    document.body.appendChild(circle);
}

document.addEventListener("click", getPosition); */



/* Reverse a string */
/* unction reverseStr(str = "") {
    return str.split("").reverse().join("");
}
console.log(reverseStr("Automation")); */

/* // Check palindrom string
const hasPalindromeStr = (str = "") => {
    const originalStr = str;
    return str.split("").reverse().join("") === originalStr;
}

console.log(hasPalindromeStr("madam"));
console.log(hasPalindromeStr("Anubhav")); */

/* // Fibonacci Series
const fibonacciSeries = (num) => {
    let a = 0, b = 1;
    console.log(a, b);
    for(let i = 2; i < num; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

const recursiveFibonacciSeries = (num, c) => {
    if(num < 2) {
        return 1;
    }
    return recursiveFibonacciSeries(num - 2) + recursiveFibonacciSeries(num - 1)
}

// console.log(fibonacciSeries(10));
console.log(recursiveFibonacciSeries(7)); */

/* // Find duplicate elements in the given array
const findDuplicateElementsInArr = (arr = []) => {
    const hash = {};
    const duplicateElements = [];
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    }
    for (let k of Object.keys(hash)) {
        if (hash[k] > 1) {
            duplicateElements.push(parseInt(k));
        }
    }
    return duplicateElements;
}

console.log(findDuplicateElementsInArr([1, 4, 5, 6, 3, 4, 1, 64, 2, 1, 64, 3,])); */

/* // Find max and min in the given array
const findMinMaxInArray = (arr = []) => {
    // return `max: ${Math.max(...arr)} | min: ${Math.min(...arr)}`;
    // let min = Number.MAX_VALUE;
    // let max = Number.MIN_VALUE;
    // for (let i = 0; i < arr.length; i++) {
    //     if(min > arr[i]) {
    //         min = arr[i];
    //     }
    //     if(max < arr[i]) {
    //         max = arr[i];
    //     }
    // }
    // return `max: ${max} | min: ${min}`;
}

console.log(findMinMaxInArray([ 3, 5, 84, 23, 4, 2, 7, 89, 4])); */

/* // Find second max and min in the given array
const findSecondMinMaxInArray = (arr = [], numberOfElement = 1) => {
    const setArr = new Set(arr);
    const max = Math.max(...setArr);
    const min = Math.min(...setArr);

    if(numberOfElement <= 0){
        return `Secondmax: ${max} | Secondmin: ${min}`;
    } else {
        setArr.delete(max);
        setArr.delete(min);
        return findSecondMinMaxInArray([...setArr], numberOfElement - 1);
    }
}

console.log(findSecondMinMaxInArray([ 3, 5, 84, 23, 4, 2, 7, 89, 4])); */

/* //Selection Sort
const selectionSort = (arr = [], resultedArr = []) => {
    if(arr.length === 0) {
        return resultedArr;
    }
    let i = 0, small = 0;
    for (let j = 0; j < arr.length; j++) {
        if(arr[small] > arr[j]) {
            small = j;
        }        
    }
    let temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
    console.log(arr);
    resultedArr.push(arr[i]);
    return selectionSort(arr.splice(1), resultedArr);
}

console.log(selectionSort([ 3, 5, 84, 23, 4, 2, 7, 89, 4])) */

/* //Bubble Sort
const bubbleSort = (arr = []) => {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            count++;
            console.log(arr[i], " > ", arr[i + 1])
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    if (count === 0) {
        return arr;
    } else {
        return bubbleSort(arr);
    }
}

console.log(bubbleSort([3, 5, 84, 23, 4, 2, 7, 89, 4])); */


