//1
function findMin(arr){
    let min = arr[0]
    for(let i = 0; i = arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}

let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7]
console.log(findMin(numbers))

//2
let numString = "1234"
let num = parseInt(numString)
console.log( num)