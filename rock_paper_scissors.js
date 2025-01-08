const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask_question(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
async function main_menu() {
    console.log("Welcome to the Ultimate Rock Paper Scissors Game!");
    console.log("============= MAIN MENU =============");
    console.log("1. RULES");
    console.log("2. PLAY GAME");
    console.log("3. EXIT");
    for (let i = 0; i < 3; i++) {
        let choice = await ask_question("Choose to Countine:")
        choice = parseInt(choice);

        switch (choice) {
            case 1:
                console.log("====RULES====")
                console.log("0 for ROCK , 1 for Paper, 2 for scissors")
                console.log("1.Rocks beats Scissors")
                console.log("2.Scissors Cut Paper")
                console.log("3.Paper Roll Rock")
                console.log("4.Choose wisely and have fun")
                break;
            case 2:
                console.log("====LET\'S PLAY!====")
                rock_paper();
                break;
            case 3:
                console.log("GoodBye!")
                break;
            default:
                console.log("INVAILD CHOICE!")
                break;
        }
    }
}

async function rock_paper() {
        let choice = ["rock", "paper", "scissors"]
        let computer = Math.floor(Math.random() * 3)
        let input;
        let user_choice = await new ask_question("Enter your choice(ROCK,PAPER,SCISSORS):")
        user_choice=user_choice.toLowerCase();
        
        if(!choice.includes(user_choice)){
            console.log("INVAILD CHOICE! Choose from (ROCK,PAPER,SCISSORS)");
        }
        console.log(`You Choose ${user_choice}`)
        console.log(`Computer Choose ${choice[computer]}`)
        if(computer===user_choice){
            console.log("Its a draw")
        }
        else if((user_choice==="rock"&& computer==="scissors") ||
                (user_choice==="paper"&& computer==="rock")||
                (user_choice==="scissors"&& computer==="rock")){
                   console.log("🎉 YOU WIN")
                }
        else{
            console.log("😢 YOU LOOSE")
        }
    let playagain=await ask_question("Want to Play again(y/n)")
    if(playagain==="Y"||playagain==="y"){
        rock_paper()
    }
    else{
        console.log("Thanks for Playing I hope you enjoyed");
    }
}
main_menu()