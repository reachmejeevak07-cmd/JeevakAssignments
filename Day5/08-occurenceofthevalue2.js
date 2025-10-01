/* Class room array occurence :
----------------------------------
const nums = [2, 4, 5, 2, 1, 2];

Count the occurence of the value 2 in the array nums using if condition and for loop*/



const num = [1, 2, 3, 4, 5, 6, 3, 2];
let count =0;
for(i=0; i<num.length; i++)
if (num[i] ===2)
{
    count++;
}
console.log("occurence of the value 2 is :", count);
