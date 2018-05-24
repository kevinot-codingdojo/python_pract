var PURSE = 25;//starting amount, i.e., a roll of quarters
function Gamble()
{
var PICK1 = (Math.ceil(Math.random() * 100)); // This selects a number for you between 1 and 100, the chances of winning,
var PICK2 = (Math.ceil(Math.random() * 100));//This is the computer's pick
if (PURSE > 0 && PICK1 == PICK2)//so long as you still have quarters left continue
  {
    PURSE--
    var WINNINGS = Math.ceil(Math.random() * 50) + 50;//winnings between 50 and 100 quarters
    PURSE = PURSE + WINNINGS;
    console.log("Your number  " + PICK2 + " matched the computer's pick. You have won " + WINNINGS + " quarters! You now have " + PURSE + " quarters in your bank. Thanks for playing!");
  }
else if (PURSE > 0 && PICK1!=PICK2)//if you still have coins left and the picks did not match, display failure message and then rerun the function with a decremented PURSE. 
  {
    PURSE--
    console.log("Your number  " + PICK2 + "  did not match the computer's pick " + PICK1 + ". Unfortunately, you did not win. (Your purse is now at " + PURSE + " coins. We'll try again!");
    Gamble();//I guess this exits out to the Gamble() function call, which then usese the most recent values for the variable, and then regenerates the random PICK1 and PICK2
  }
else
  {
    console.log("Looks like you need more money!")
  }
}
Gamble();
