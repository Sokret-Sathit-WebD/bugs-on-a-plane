
const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");
const query = document.querySelector("[data-name=form]");


function formAlert() {

    const firstName = form["first-name"].value;
    const lastName = form["last-name"].value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form["travel-location"].value;
    const diet = [""];


    if (form.vegan.checked) {
        diet.push(document.getElementById('vegan').value);
    }
    else if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location  + "\nDiet:" + diet + "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", function(e){
    e.preventDefault()
	formAlert()
})