document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newTotalWithdrawAmount = document.getElementById('withdraw-field');
    const newTotalWithdrawString = newTotalWithdrawAmount.value;
    const newWithdrawAmount =parseFloat(newTotalWithdrawString);




    const previousTotalWithdrawElement = document.getElementById('user-withdraw');
    const previousTotalWithdrawString = previousTotalWithdrawElement.innerText;
    const previousAmount= parseFloat(previousTotalWithdrawString);
    const currentWithdraw = newWithdrawAmount +previousAmount;
    previousTotalWithdrawElement.innerText = currentWithdraw;


const balanceField = document.getElementById('balance-field');
const previousBalanceString = balanceField.innerText;
const previousBalance = parseFloat(previousBalanceString);
const currentTotalBalance= previousBalance - currentWithdraw;
balanceField.innerText = currentTotalBalance;



    newTotalWithdrawAmount.innerText ='';

})