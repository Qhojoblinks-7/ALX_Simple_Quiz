function checkAnswer() {
    // Function body
    let correctAnswer = "4";
    let userAnswer = document.querySelector('[name="quiz"]:checked').value;

    let feedBack = document.querySelector('#feedback');

    if (userAnswer === correctAnswer){
        feedBack.textContent= "Correct! Well done.";
    }else{
        feedBack.textContent= "That's incorrect. Try again!";
    }
}

let button = document.getElementById('submit-answer');
button.addEventListener('click', checkAnswer);