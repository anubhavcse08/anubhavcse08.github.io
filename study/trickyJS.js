// 1. How can you double elements of an array (sorted)? Do not use extra variable?
/* const double = (arr = []) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]) {
            return true;
        }
    }
    return false;
}
console.log(double([2,3,3,4,6,9,1])); */

// 2. How can you extract and print the unique values from an array?
/* const uniqueValues = (arr = []) => {
    return [...new Set(arr)];
}
console.log(uniqueValues([1,6,2,6,8,1,4])); */

// 3. How can you determine if a number is an integer in JavaScript?
/* const isNum = (num) => num % 1 === 0;
console.log(isNum(2));  //true
console.log(isNum('2'));    //true
console.log(isNum('abc'));  //false */

// 4. What is the output of the following code?
/* let arr1 = [10, 12, 3.1];
let arr2 = [10, 12, 3.1];
console.log(arr1 == arr2);  //false (Reason: Arrays are reference types in JavaScript, so arr1 and arr2 point to different references, even though their contents are the same.) */

// 5. How can we compare two different array values are same or not?
const checkArrayEquality = (arr1 = [], arr2 = []) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['z', 'b', 'c'];
console.log(checkArrayEquality([arr1, arr2]));
console.log(checkArrayEquality([arr2, arr3]));


