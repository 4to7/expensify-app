//get visible expenses 
export default (expenses) => {
    //var total = 0;
    // OLD syntax
    // expenses.forEach(function(obj){
    //     total += obj.amount;
    //   });
    
    // ES6 syntax
    return expenses ? expenses
    .map((expense) => expense.amount)
    .reduce((prev,next) => prev + next,0) : 0;
};
