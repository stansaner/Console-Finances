# Console-Finances
Web development bootcamp javascript challenge.

This javascipt programme demonstrates processing on a dataset
in the form of a nested array with financial record of profits and losses.

The program performs the following functions:

- calculates the total sum of profits and losses over the whole period
- tracks a derivative of profits and losses in the form of magnitude 
  of month-on-month changes to the profits and losses
- analyzes these changes by:
    - calculating average of the magnitude of these changes to give an idea how wildly the profits and losses swing from month to the next which gives an idea about variabililty of the profits and losses
    - it finds the month when the profit improved the most (i.e when the profit increased the most)
    - it also finds the month when the loss worsened the most. It could be a month when a previous month's loss deepened most in the subsequent month or when a previous month's profit completely disappeared and swung in a loss or when previous month's profit dropped to the next month's still a profit, but the drop was the biggest negative change.

Such output may be useful for business financial analysis to assist in determining factors that have the most positive and the most negative impact on business outcomes.

## How to use:

The application can be accesses at 

https://stansaner.github.io/Console-Finances/

You need to Inspect the webpage and choose the Console tab to see the output.