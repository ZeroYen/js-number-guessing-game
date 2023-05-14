const btn = document.getElementById('btn');
const output = document.getElementById('OutputText');
const number = Math.floor(Math.random() * 100);

btn.addEventListener('click', function() {
    const input = document.getElementById('userInput').value;
    if (input === '' || input === '0') {
        output.textContent = "Please enter a number that is higher than 0!";
        return;
    }
    if (input < 0) {
        output.textContent = "Please enter a positive number!";
        return;
    }
    if (input > 100) {
        output.textContent = "Please enter a number between 1 and 100.";
        return;
    }
    if (input == number){
        output.textContent = `You guessed right, your number was ${number}`;
    } else if (input < number){
        output.textContent = "You guessed too low!";
    } else {
        output.textContent = "You guessed too high!";
    }
});