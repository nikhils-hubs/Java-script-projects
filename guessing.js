const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
async function guessing_game() {
    let guess = Math.floor(Math.random() * 101);
    let inputguess;
    let number;
    let attempts = 0;
    console.log("🎯 Welcome to the Guessing Game! Try to guess the number between 0 and 100.");
    do {

        const input_form_user = await new Promise((resolve) => {
            rl.question("Enter a Number:", (inputguess) => {
                resolve(inputguess);
            });
        });
        number = parseInt(input_form_user);
        attempts++;
        if (isNaN(number)) {
            console.log("❌ ERROR,Enter the correct number");
        }
        else if (number > guess) {
            console.log("🔻 Lower Number Please!")
        }
        else if (number < guess) {
            console.log("🔺 Higher Number Please!")
        }
        else if (number === guess) {
            console.log(`🎉 Congrats You Guessed the correct number in ${attempts} 🏆`);
        }
        else {
            console.log("Something went wrong");
        }
    }
    while (number !== guess)
    rl.close();
}
guessing_game();

