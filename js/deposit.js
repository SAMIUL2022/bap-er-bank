document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentTotal =newDepositAmount  + previousDepositTotal ;
        depositTotalElement.innerText = currentTotal;

        const balanceTotalElement = document.getElementById('balance-field');
        const previousTotalbanceString = balanceTotalElement.innerText;
        const previousTotalBalance = parseFloat(previousTotalbanceString);
        const currentBalance = previousTotalBalance + newDepositAmount;
        console.log(currentBalance);
        balanceTotalElement.innerText =currentBalance;

    

    depositField.value = '';
})