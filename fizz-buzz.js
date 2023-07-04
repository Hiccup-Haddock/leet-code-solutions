// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz (n) {
    
    let tempArr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
             tempArr.push("FizzBuzz")
        }
        else if ( i % 5 === 0) { 
            tempArr.push("Buzz")
        }
        else if (i % 3 === 0) { 
            tempArr.push("Fizz")
        }
        else { 
            tempArr.push(i.toString(
        ))}
    }
    return tempArr        
};

fizzBuzz(15)