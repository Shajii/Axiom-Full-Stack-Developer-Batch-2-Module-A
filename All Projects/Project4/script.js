// Get DOM Elements
const inputValue = document.getElementById("inputValue");
const inputCurrency = document.getElementById("inputCurrency");
const xrate = document.getElementById("xrate");
const outputValue = document.getElementById("outputValue");
const outputCurrency = document.getElementById("outputCurrency");
const button = document.getElementById('button');

// Event Listeners
inputCurrency.addEventListener('change', calculate);
outputCurrency.addEventListener('change', calculate);    
inputValue.addEventListener('change', calculate);    
outputValue.addEventListener('change', calculate);    
button.addEventListener('click', () => {
    //Currency
    const appendCurrency = inputCurrency.value;
    inputCurrency.value = outputCurrency.value;
    outputCurrency.value = appendCurrency;
    calculate()
})


function calculate() {
    const inputCode = inputCurrency.value;
    const outputCode = outputCurrency.value;
    const inputAmount = inputValue.value;
    var outputAmount = outputValue.value;
    

    // Fetching
    fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/latest/${inputCode}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.conversion_rates[outputCode];
        xrate.innerHTML = `${inputAmount} ${inputCode} = ${inputAmount*rates} ${outputCode}`;
        outputValue.value = inputAmount*rates.toFixed(2);
    })
}


