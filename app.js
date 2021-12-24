let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const subUser = "You".fontsize(3).sub();
const subComp = "Comp".fontsize(3).sub();

// get random Computer Choices
function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}

// game function
function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        // Win 
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // Lose 
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        // Tie
        case "ss":
        case "pp":
        case "rr":
            tie(userChoice, computerChoice);
            break;
    }
}

// win(),lose(), tie() functions

function convertToWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";

}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore; // change the user score on score board
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWords(user)}${subUser} beats ${convertToWords(computer)}${subComp}. You Win!`;
    // transition for .green-glow
    document.getElementById(user).classList.add('green-glow');
    setTimeout( function() {document.getElementById(user).classList.remove('green-glow')}, 300);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore; 
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWords(computer)}${subComp} beats ${convertToWords(user)}${subUser}. You Lose!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout( () => {document.getElementById(user).classList.remove('red-glow')}, 300);
}

function tie(user, computer) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWords(user)}${subUser} with ${convertToWords(computer)}${subComp}. It's a Draw!`;
    document.getElementById(user).classList.add('yellow-glow');
    setTimeout( () => {document.getElementById(user).classList.remove('yellow-glow')}, 300);
    
}

// main() function
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissor_div.addEventListener('click', function() {
        game("s");
})

}

main();