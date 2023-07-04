
let array = [2,5,8,4,9,1]


for (let i = 0; i < array.length; i++) {
    let tempMinIndex = i
    for (let j = i + 1; j < array.length; j++) {

        if ( array[tempMinIndex] > array[j] ) {
            tempMinIndex = j
        }
    }
    if ( tempMinIndex != i ) {
        
        let temp = array[i]

        array[i] = array[tempMinIndex]

        array[tempMinIndex] = [temp]
    }
}







