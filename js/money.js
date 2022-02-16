


document.getElementById('calculate-total-expenses').addEventListener('click', function () {

    // my income
    const totalIncome = document.getElementById('total-income');
    const totalIncomeText = totalIncome.value;
    const totalIncomeValue = parseFloat(totalIncomeText);
    // my total cost

    const foodCost = document.getElementById('food-cost');
    const foodPriceText = foodCost.value;
    const foodsPrice = parseFloat(foodPriceText);

    const rentCost = document.getElementById('rent-cost');
    const rentPriceText = rentCost.value;
    const rentPrice = parseFloat(rentPriceText);

    const clothesCost = document.getElementById('clothes-cost');
    const clothesPriceText = clothesCost.value;
    const clothesPrice = parseFloat(clothesPriceText);
    // my new balance
    const totalCost = foodsPrice + rentPrice + clothesPrice;
    const balance = totalIncomeValue - totalCost
    console.log(balance);

})