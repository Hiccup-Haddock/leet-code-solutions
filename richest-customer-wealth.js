// https://leetcode.com/problems/richest-customer-wealth/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let tempArr = []
   for (let i = 0; i < accounts.length; i++) {
        let tempNum = 0

        for (let j = 0; j < accounts[i].length; j++) {
             tempNum += accounts[i][j];
        }
        tempArr.push(tempNum)
   }  
     
   tempArr.sort((a,b) => b - a)
   return tempArr[0]
};
// Test-Cases
// maximumWealth([[2,8,7],[7,1,3],[1,9,5]])