let billAmount = document.getElementById("billAmount")
let percentageTip = document.getElementById("percentageTip")
let tipAmount = document.getElementById("tipAmount")
let totalAmount = document.getElementById("totalAmount")
let errorMessage = "Please Enter a Valid Input."
let warning = document.getElementById("errorMessage")

function calculate() {
    if (billAmount.value === "") {
        warning.textContent = errorMessage
    } else if (percentageTip.value === "") {
        warning.textContent = errorMessage
    } else {
        warning.textContent = ""
        let a = percentageTip.value;
        let calculatedTip = (parseInt(a) / 100) * parseInt(billAmount.value);
        tipAmount.value = calculatedTip;
        let total = parseInt(billAmount.value) + calculatedTip
        totalAmount.value = total



    }
}