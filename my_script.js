// Global variables

var greatestProfitIncrease = 0;
var indexProfitIncrease = 0;   // Index of the element where greatest 
                           // profit increase month-on-month occurred
var greatestLossDecrease = 0;  
var indexLossDecrease = 0;     // Index of the element where greates
                           // decrease in losses occurred
var monthOnMonth = 0; //month-on-month differences
var sumMonthlyDiff = 0; // cummulator of month-on-month differences

var recordProfitChange = 0; // Tracker of the highest profit increase
var recordProfitIndex = 0; // which month highest profit change
var recordLossChange = 0; // Tracker of the loss worsened most
var recordLossIndex = 0; // which month greates loss change

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

    // when summing up month-on-month differences, skip the first 
    // index as there is no -1-st element to calculate differences from

        if (main_index == 0) {
            // console.log("skipping the first iteration");
            continue;
        }
      
         
        monthOnMonth = finances[main_index][finances[main_index].length - 1] - finances[main_index - 1][finances[main_index - 1].length - 1];

        if (monthOnMonth >= 0) {  // Profit
            if (monthOnMonth > recordProfitChange) { // Is this month's profit greater
                                                    // than biggest profit seen so far?
                recordProfitChange = monthOnMonth;
                recordProfitIndex = main_index;
            }
        } else {  // Loss
            if (monthOnMonth < recordLossChange) { // Is this month's loss greater
                                             // than biggest loss seen so far?
                                             // Loss is a negative number
                                             // a bigger loss is more negative, i.e.
                                             // less than recordLoss
                recordLossChange = monthOnMonth;
                recordLossIndex = main_index;
            }
        }

        // month-on-month difference can be a negative number, for example:
        // a big loss in one month (a negative number) -MINUS- a profit 
        // in the previous month gives an even bigger negative number,
        // or a smaller profit minus a larger profit in the previous month,
        // but what matters is the MAGNITUDE (the size of that difference)
        // which is a positive number, i.e. the absolute value of that "difference"
        // So we need to obtain an ABS(value) to get that magnitude.
        // Such approach gives an information how wildly the profits or losses  
        // swing from one month to the next.
        // Simply summing up the month-on-month differences without taking
        // them as magnitudes (absolute values) and averaging that would 
        // give a totally non-sensical number with no information value.

        sumMonthlyDiff += Math.abs(monthOnMonth); 
        
}    

console.log("Net total of Profit/Losses: $" + totalProfitLoss);

// Calculating average change month-on-month.
// There are one less month-on-month differences than data points (months),  
// so the average is calculated by total divided by (number of data points - 1).
// It is like fence posts and fence panels, there is one more fence post
// over the number of panels between the posts. Data points are like fence posts, 
// the month-on-month differences like fence panels between them.

// console.log("Total of all differences: $" + sumMonthlyDiff);

// Rounding to 2 decimal places is achieved by Math.round(number*100)/100
console.log("Average Month-on-month Change: $" + Math.round((sumMonthlyDiff/(finances.length - 1)*100))/100);


console.log("Greatest Profit Increase: "+finances[recordProfitIndex][0]+" ($"+recordProfitChange+")");
console.log("When the loss worsened most: "+finances[recordLossIndex][0]+" ($"+recordLossChange+")");
