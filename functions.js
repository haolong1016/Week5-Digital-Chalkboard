
function checkTriviaAnswer() {
    var answer = document.getElementById("triviaAnswer").value.toLowerCase(); 
    var response = document.createElement("p"); 

    if (answer === "beijing") {
        response.textContent = "You guessed '" + answer + "'. That's correct!";
    } else {
        response.textContent = "You guessed '" + answer + "'. That's incorrect. The correct answer is Beijing.";
    }

    document.body.appendChild(response); 
}


function checkNumber() {
    var number = document.getElementById("numberInput").value;

    if (!(/^\d{5}$/.test(number))) {
        alert("Please enter a valid 5-digit integer.");
        return;
    }

    number = parseInt(number); 
    var response = document.createElement("p");

    if (number % 2 === 0) {
        response.textContent = number + " is even.";
    } else {
        response.textContent = number + " is odd.";
    }

    document.body.appendChild(response);
}
