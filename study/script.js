/* Singly linkedlist */
/* class Node {
    constructor(key, next) {
        this.val = key;
        this.next = next || null;
    }
}

const newNode = (key, next = null) => {
    const node = new Node(key, next);
    return node;
}

let a = newNode(5);
a.next = newNode(10);
a.next.next = newNode(15);

let b = newNode(4);
b.next = newNode(3);
b.next.next = newNode(18);
b.next.next.next = newNode(7);

let v = [];

while(a != null) {
    v.push(a.val);
    a = a.next;
}
while(b != null) {
    v.push(b.val);
    b = b.next;
}
const tempArr = v.sort((a, b) => b - a);
let output = tempArr[0];
for(let i = 0; i< tempArr.length; i++) {
    if(i === 0) {
        output = newNode(output);
    } else {
        output = newNode(tempArr[i], output);
    }
}
console.log(output, ' -- ', tempArr);
 */

/* 1. Remove Duplicates from Sorted Array */
/* const removeDuplicatesFromSortedArr = (arr = []) => {
    if (arr.length === 0) {
        return [];
    }
    let k = 1, result = [];
    result.push(k);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[k - 1]) {
            result.push(arr[i])
            arr[k] = arr[i];    //Overriding the [0] -> [1] array of index
            k++;
        }
    }
    return result;
}

console.log(removeDuplicatesFromSortedArr([1, 1, 2, 4, 4, 5, 6, 7, 7, 9]));  */

/* 2. Find the Index of the First Occurrence in a String */
/* var strStr = function (haystack, needle) {
    let temp = [];
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            temp.push(i);
        }
    }
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] <= (haystack.length - needle.length)) {
            if(haystack.substring(temp[i], temp[i] + needle.length) === needle) {
                return temp[i];
            }
        }
    }
    return -1;
    // return haystack.indexOf(needle, 0);
}; */

/* Implement Queue */
/* let Max_size = 10;
let queueArr = Array(Max_size), rear = -1, front = 0;

const queueInsert = (num) => {
    if(rear >= Max_size - 1) {
        return "Queue is overflow...";
    }
    queueArr[++rear] = num;
}

const queueRemove = () => {
    if (front > rear) {
        console.log("Empty queues...")
    } else {
        front++;
    }
}

const queueDisplay = () => {
    if(front > rear) {
        console.log("Empty queues...");
    } else {
        for(let i = rear; i >= front; i--) {
            console.log(queueArr[i]);
        }
    }
}

queueInsert(5);
queueInsert(10);
queueInsert(15);
queueInsert(20);
queueRemove(); // 5 gets remove because of FIFO
queueInsert(25);
queueDisplay(); */

/* // Circular Queue Impl
let max_size = 10;
let ccQueue = Array(max_size), front = 0, rear = -1;

const ccInsert = (num) => {
    if (rear === max_size - 1) {
        // if(front !== 0) {
        //     ccQueue[rear]
        // }
        console.log("Circular queue overflow...");
    } else {
        ccQueue[++rear] = num;
    }
}
const ccDisplay = () => {
    for (let i = rear; i >= front; i--) {
        if(ccQueue[i] !== undefined) {
            console.log(ccQueue[i]);
        }
    }
}
const ccDelete = () => {
    if(front > rear) {
        console.log("Circular queue is empty...")
    } else {
        front++;
    }
}

ccInsert(10);
ccInsert(20);
ccInsert(30);
ccInsert(40);
ccInsert(50);
ccInsert(60);
ccInsert(70);
ccInsert(80);
ccInsert(90);
ccInsert(100);
ccInsert(110);
// ccDelete();
ccDisplay(); */



/* // Search Insert Position
const searchInsertPosition = (arr, target, index = 0) => {
    // let possibleIndex = index;
    if(arr.length <= 1) {
        console.log(arr, index)
        // if(arr.length === 1) {
        //     if(arr[0] == target) {
        //         return index;
        //     } else if(arr[0] < target) {
        //         return index + 1;
        //     } else {
        //         return index - 1;
        //     }
        // }
        return index;
    }
    let mid = Math.floor(arr.length / 2);
    console.log(index, " --- ", arr, ' m ', mid)
    if(arr[mid] === target) {
        return mid;
    }
    else if(arr[mid] > target) {
        return searchInsertPosition(arr.splice(0, mid), target, mid);
    } else if(arr[mid] < target) {
        return searchInsertPosition(arr.splice(mid), target, mid);
    }
}

console.log(searchInsertPosition([1,3,5,6], 7)); */