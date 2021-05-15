const terms = document.getElementById("years");
const bubble = document.querySelector(".bubble");

terms.addEventListener('input',function(){
const val = terms.value;
bubble.innerHTML = val > 1 ? `${val} Month` : `${val} Months`;
});

// List for submit

document.getElementById("loan-form").addEventListener('submit',function(e){
    calculateresult();
    e.preventDefault();
});

function calculateresult(){
    // console.log("aa");
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');

    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');

    const getprincipal = parseFloat(amount.value);
    const getinterest = parseFloat(interest.value)/12;
    const getterm = parseFloat(terms.value);


    // compute monthly payment
    const monthly = Math.round((getprincipal*(getterm*getinterest))/100);
    console.log(monthly);

    if(monthly){
        monthlypayment.value  = ((getprincipal+monthly)/getterm).toFixed(2);
        totalinterest.value = monthly.toFixed(2);
        totalpayment.value = (monthlypayment.value * getterm).toFixed(2);

        document.getElementById('results').style.display = 'block';
    }
}