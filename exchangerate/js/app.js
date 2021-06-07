// Ui
const currencyone = document.getElementById("currency-one"),
    amountone = document.getElementById("amount-one");

const currencytwo = document.getElementById("currency-two"),
    amounttwo = document.getElementById("amount-two");

const rateel = document.getElementById('rate');
const swap = document.getElementById('swap');

// Calculate Exchange Rate and Update by AJAX
function calculate(){
    // console.log("i am working");
    const currone = currencyone.value;
    const currtwo = currencytwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/2817e458452c86a170215b9e/latest/${currone}`)
    .then(res=>res.json()) //promise(response JSON)
    .then(
        data=>{
            // console.log(data);
            const rate = data.conversion_rates[currtwo];
            // console.log(rate);
            rateel.innerText=`1${currone} = ${rate} ${currtwo}`;
            amounttwo.value = (rate * amountone.value);
        }
    )
}

// Event Listener
currencyone.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
currencytwo.addEventListener('change',calculate);
amounttwo.addEventListener('input',calculate);
calculate();
swap.addEventListener('click',()=>{
    const temp = currencyone.value;
    currencyone.value = currencytwo.value;
    currencytwo.value = temp;
    calculate();
});