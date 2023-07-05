// give me a random unsorted 10 elements number single digits only array
let array = [ 2, 5, 8, 4, 9, 1, 3, 7, 6, 0 ]


function mergeSort (unsortedArr) {
    if ( unsortedArr.length < 2) {
        return unsortedArr
    }
    let midIndex = unsortedArr.length / 2
    
    let leftArr = mergeSort(unsortedArr.slice(0,midIndex))
    let rightArr = mergeSort(unsortedArr.slice(midIndex))

    return mergeArray(leftArr, rightArr )
}


function mergeArray (leftArr, rightArr) {
    let mergeArr = []

    while (leftArr.length && rightArr.length ) {
        if (leftArr[0] < rightArr[0] ){
            mergeArr.push(leftArr.shift())
        } else {
            mergeArr.push(rightArr.shift())
        }
    }
    return [...mergeArr, ...leftArr, ...rightArr]


}

console.log(mergeSort(array))