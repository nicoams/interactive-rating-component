const home = document.querySelector(".home");
const thankYou = document.querySelector(".thankYou");
const submitBtn = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-number");
const error = document.getElementById("divMessage");

const submitForm = () => {
    thankYou.classList.remove("hidden")
    home.style.display = "none"
};

function validateForm(){

    var radioChecked = document.querySelector("input[name=rate]:checked");
 
    if (!radioChecked){
        error.classList.remove("hidden")
        error.innerHTML = "Please, select an option below:";
    }
    else{
        return(submitForm());
    }
}

submitBtn.addEventListener("click", validateForm);

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});