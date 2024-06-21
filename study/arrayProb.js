/* // 1. How do you find the missing number in a given integer array of 1 to 100?
const missingNum = (arr = []) => {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (arr.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;
}
const arr = [1, 2, 3, 7, 9, 19, 91, 99];
console.log(missingNum(arr)); */

/* // 2. How do you find the duplicate number on a given integer array?
const findDuplicateNum = (arr = []) => {
    const hash = {}, result = [];
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    }
    for (let k of Object.keys(hash)) {
        if (hash[k] > 1) {
            result.push(Number.parseInt(k));
        }
    }
    return result;
}
console.log(findDuplicateNum([1, 3, 9, 4, 2, 4, 8, 3, 2, 9, 20])); */

/* // 3. How do you find the largest and smallest number in an unsorted integer array?
const findLargestSmallestNum = (arr = []) => {
    let largestNum = Number.MIN_VALUE, smallestNum = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        console.log(smallestNum, " -- ", arr[i])
        if(largestNum <= arr[i]) {
            largestNum = arr[i];
        }
        if(smallestNum > arr[i]) {
            smallestNum = arr[i];
        }
    }
    return [smallestNum, largestNum];
}

console.log(findLargestSmallestNum([1, 3, 9, 4, 203, 4, 8, 3, 2, 9, 0])); */

/* // 4. How do you find all pairs of an integer array whose sum is equal to a given number?
const findAllPairsOfSum = (arr = [], sum) => {
    const hash = {}, result = [];
    for(let i = 0; i < arr.length; i++) {
       for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] === sum) {
            console.log(arr[i], " - ", arr[j]);
        }
       }
    }
}

console.log(findAllPairsOfSum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7)); */

// 5. How to remove duplicates from a given array

