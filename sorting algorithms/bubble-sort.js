let array = [2,5,8,4,9,1]


for (let i = 0; i < array.length; i++) {
    
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[i] ) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }

    }
    
}

console.log(array)