// Global variables



// The actual code starts here
// Print ttotal number of months included in the dataset

console.log("Total number of months included in the dataset: "+finances.length);

// Sum up net total amount of Profit/Losses over the whole period
// Each array element is a 2-element array [month, profit-loss-amount]
// Coding in a generalist way to address the second (being the last) 
// element indexed as length-1 rather than hard-coding index of "1"

var totalProfitLoss = 0;

for (var main_index = 0; main_index < finances.length; main_index++) {
   totalProfitLoss += finances[main_index][finances[main_index].length - 1];
}    

console.log("Net total of Profit/Losses: "+totalProfitLoss);

// Calculating average change 