// 1. Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.

function findLargestProduct(something) {
    let arrayOfProduct = []
    let num

    for (let i = 0; i < something.length - 1; i++) {
        arrayOfProduct.push(something[i] * something[i + 1])
    }
    for (let j = 0; j < arrayOfProduct.length; j++) {
        if (arrayOfProduct[j] > arrayOfProduct[j + 1])
            num = arrayOfProduct[j]
    }
    return num
}

console.log(findLargestProduct([3, 5, 20, 10, 5]))




// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.


function countOfMissedNums(array) {
    let maxNum = 0

    for (let i = 0; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i]
        }
    }
    return `Count of missed numbers is ${maxNum - array.length} `
}
console.log(countOfMissedNums([1, 5, 8, 20, 3, 7, 6]))




// 3. Implement built in array sort method using bubble sort algorithm.

// C-o-m-m-e-n-t!  / An interesting thing, when the  numbers are not double digits or the opposite, the algorithm surprisingly works a bit different .


function myBubble(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[i]) {
                let char1 = input[j]
                let char2 = input[i]
                input[i] = char1
                input[j] = char2
            }
        }
    }
    return input
}

let sortedArray = [10, 32, 16, 54, 46].sort(this.myBubble)
console.log(sortedArray)



// 4. Insert a n positive number. Print the n-st prime number.



function getAllPrimeNums(n) {
    let result
    if (n === 1 || n === 2 || n === 3) {
        result = `for ${n} "prime numbers are" ${(6 * n) - 1} , ${(6 * n) + 1} , ${(n * n) + n + 41} `
    } else if (n % 2 === 0) {
        result = `for ${n} "prime numbers are"  ${(6 * n) + 1} , ${(n * n) + n + 41} `
    }
    else if (n % 2 !== 0 && n > 10) {
        result = `for ${n} "prime numbers are"  ${(6 * n) + 1},  ${(n * n) + n + 41} `
    }
    else if (n % 2 !== 0 && n < 10) {
        result = `for ${n} "prime numbers are" ${(6 * n) - 1}  , ${(n * n) + n + 41} `
    }

    return result
}

console.log(getAllPrimeNums(7))