function cost (costing){
    const CostingMoney = document.getElementById(costing+'-cost');
    const PriceText = CostingMoney.value;
    if(isNaN(PriceText)){
        
    }
    else{
        const Price = parseFloat(PriceText); 
    return Price;
    }
    
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

})



