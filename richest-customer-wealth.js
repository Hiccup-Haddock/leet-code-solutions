// https://leetcode.com/problems/richest-customer-wealth/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth (accounts) {
let maxWealth = 0
   for (let i = 0; i < accounts.length; i++) {
        let wealth = 0
        for (let j = 0; j < accounts[i].length; j++) {
             wealth += accounts[i][j];
        }
        if (wealth > maxWealth) {
            maxWealth = wealth
        }
   }  
   return maxWealth
};
// Test-Cases
// maximumWealth([[2,8,7],[7,1,3],[1,9,5]])