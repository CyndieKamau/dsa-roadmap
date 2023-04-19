// function that calculates sum of all nos, including n;
// eg; n=3 is 1+2+3=6

function addNoUpTo(n) {
    let number = 0;
    for (let i =1; i<= n; i++) {
        number += i;
    }

    return number;

}

console.log(addNoUpTo(6))

// function has O(n); Big O Notation of n.


function addNoUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addNoUpTo(20))

// function has O(1); Big O Notation of 1.



function countUpAndDown(n) {
    console.log("Counting Upwards...");
    for (let up = 0; up < n; up ++) {
        console.log(up);
    }

    console.log("Gotten Up...\nGoing Downwards...");
    for (let down = n - 1; down >= 0; down --) {
        console.log(down);
    }

    console.log("Gotten Back Home!.");

}

//function has Big O Notation of O(n);



function printAllPairs(n) {
    for (let a = 0; a < n; a ++) {
        for (let b = 0; b < n; b ++) {
            console.log(a, b);
        }
    }
}

//function has Big O Notation of O(n^2); Because of the nested for loops.