const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



async function game_looper() {


    while (true) {
        const target = Math.floor(Math.random() * 100) + 1;

        let attempts = 0;
        let playAgain = true;
        
        while (true) {

            const answer = await new Promise((resolve) => {
                r1.question('Guess a number between 1 and 100 or press "q" to quit : ', resolve);
            });

            if (answer.toLowerCase() === 'q') {
                r1.write("Thanks for playing");
                playAgain = false;
                r1.close();
                break;
            }

            const number_guess = parseInt(answer);
            if (isNaN(number_guess) || number_guess < 1 || number_guess > 100) {
                r1.write("Please enter a valid number between 1 and 100\n\n")
                attempts++;
                continue;
            }

            attempts++;

            if (number_guess === target) {
                r1.write(`\nCongrulations! You guessed it right in ${attempts} \n`);
                break;
            } else if (number_guess > target) {
                r1.write("Too High, Try Again.\n\n")
            } else {
                r1.write("Too Low, Try Again.\n\n")
            }

        }

        if (!playAgain) {
            r1.close();
            break;
        } else {
            const wants_to_play = await new Promise((resolve) => {
                r1.question('\nPress 1 to start a new round, Press any key to quit : ', resolve);
            });

            if (wants_to_play.toLowerCase() !== "1") {
                r1.close();
                break;
            }
        }


    }

}


game_looper();
