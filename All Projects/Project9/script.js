// Get DOM elements
const balance = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');

// Dummy
var transactions = [
    {id:1, reason:'Salary', amount:500},
    {id:2, reason:'Breakfast', amount:20},
    {id:3, reason:'Lunch', amount:-30},
    {id:4, reason:'Dinner', amount:-60}
];

// Arrays
const amountArray = [];
const creditArray = [];
const debitArray = [];

// transactions.forEach( e =>{
//     console.log('forEach');
//     addTransaction(e);
// })

function addTransaction(e) {
    const counter = true;
    const checkSign = (e.amount>0 ?  counter: counter === false);
    if (checkSign) {
        creditArray.push(e.amount);
        var listItems = list.innerHTML;
        list.innerHTML = `
        ${listItems}
        <li class="credit">${e.reason} <span>$${e.amount}</span>  <button onclick="deleteTrans(${e.id})" class="btn">x</button></li>
        `
    } else {
        debitArray.push(e.amount);
        var listItems = list.innerHTML;
        list.innerHTML = `
        ${listItems}
        <li class="debit">${e.reason} <span>$${e.amount}</span> <button onclick="deleteTrans(${e.id})"  class="btn">x</button></li>
        `
    }

    amountArray.push(e.amount); 
    accBalance();
}

// Function to delete transactions 
function deleteTrans(id) {
    console.log('deleteTrans');
    transactions = transactions.filter( transactions => transactions.id !== id);
    list.innerHTML = '';
    amountArray.length = 0;
    debitArray.length = 0;
    creditArray.length = 0;

    transactions.forEach( e =>{
            const counter = true;
            const checkSign = (e.amount>0 ?  counter: counter === false);
            if (checkSign) {
                creditArray.push(e.amount);
                var listItems = list.innerHTML;
                list.innerHTML = `
                ${listItems}
                <li class="credit">${e.reason} <span>$${e.amount}</span>  <button onclick="deleteTrans(${e.id})" class="btn">x</button></li>
                `
            } else {
                debitArray.push(e.amount);
                var listItems = list.innerHTML;
                list.innerHTML = `
                ${listItems}
                <li class="debit">${e.reason} <span>$${e.amount}</span> <button onclick="deleteTrans(${e.id})"  class="btn">x</button></li>
                `
            }
        
            amountArray.push(e.amount); 
        })
        accBalance();
    }


// Function to update credit, debit and balance
function accBalance() {
    console.log('accBalance');
    // Acc Balance
    const accBalance = amountArray.reduce((acc, curVal) => {
        return acc + curVal;
    }, 0);
    balance.innerText = `$${accBalance}`;

    // Credit 
    const creditMoney = creditArray.reduce((acc, curVal) => {
        return acc + curVal;
    }, 0);
    moneyCredit.innerText = `$${creditMoney}`;

    // Debit
    const debitMoney = debitArray.reduce((acc, curVal) => {
        return acc + curVal;
    }, 0);
    moneyDebit.innerText = `$${debitMoney}`;
}


// Get ID
function getId() {
    return Math.floor(Math.random()*10);
}



function addTrans() {
    console.log('addTrans');
    if(reason.value.trim() === '' || amount.value.trim() === '' ) {
        alert('Field is empty');
    } else {
        var newTransaction = {id:1, reason:`${reason.value}`, amount:+`${amount.value}`};
        transactions.push(newTransaction);
        addTransaction(newTransaction);
    }
    reason.value = '';
    amount.value = '';
    console.log(transactions);
}