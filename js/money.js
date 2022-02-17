function cost (costing){
    const CostingMoney = document.getElementById(costing+'-cost');
    const PriceText = CostingMoney.value;
    const Price = parseFloat(PriceText); 
    if (Price < 0 ) {
        alert('something is wrong.you enter negative value.please check again')
    }
    else if(isNaN(Price)){
        alert('something is wrong.you enter string.please inter positive value')
    }
    return Price;
}


document.getElementById('calculate-total-expenses').addEventListener('click', function () {

    // my income
    const totalIncome = document.getElementById('total-income');
    const totalIncomeText = totalIncome.value;
    const totalIncomeValue = parseFloat(totalIncomeText);
    // my total cost

    
    const foodsPrice = cost("food");
 
    const rentPrice = cost("rent");
   
    const clothesPrice = cost("clothes");

    // my new balance
    const totalCost = foodsPrice + rentPrice + clothesPrice;
    const balance = totalIncomeValue - totalCost
    

    //total expanses
    const totalExpanses=document.getElementById('total-expenses');
    const totalExpansesText=totalExpanses.innerText;
    const totalExpensesPrice=parseFloat(totalExpansesText);

    // total expanses balance
    totalExpanses.innerText=totalCost;
    

    //new Balance
    const balanceMoney=document.getElementById('balance-money');
    const balanceMoneyText=balanceMoney.innerText;
    const balanceMoneyTotal=parseFloat(balanceMoneyText);

    // my balane 
    balanceMoney.innerText=balance;
    
    //my deposit
   

})



document.getElementById('save-money').addEventListener('click',function(){
    const totalIncome = document.getElementById('total-income');
    const totalIncomeText = totalIncome.value;
    const totalIncomeValue = parseFloat(totalIncomeText);

   const saveMoney=document.getElementById('saving-money');
   const saveMoneyText=saveMoney.value;
   const saveMoneyValue=parseFloat(saveMoneyText);

   if(saveMoneyValue<0 || isNaN(saveMoneyValue)){
       alert('please check your parcentege and try again')
   }

   const saveMoneyTotal = totalIncomeValue * (saveMoneyValue/100) ;
  

   const savingAmount = document.getElementById('saving-amount');
   const savingAmountText=savingAmount.innerText;
   savingAmountValue=parseFloat(savingAmountText);

    // saving amount
   
   savingAmount.innerText=saveMoneyTotal;

//remaining balance
   const balanceMoney=document.getElementById('balance-money');
   const balanceMoneyText=balanceMoney.innerText;
   const balanceMoneyTotal=parseFloat(balanceMoneyText);


   const remainingBalance = document.getElementById('remaining-balance');
   const remainingBalanceText = remainingBalance.innerText;
   const remainingBalanceValue=parseFloat(remainingBalanceText);

   remainingBalance.innerText=balanceMoneyTotal-saveMoneyTotal;


   if (balanceMoneyTotal < saveMoneyTotal ) {
    alert('you have low money to save...so try to expenses less next time')
}

})



