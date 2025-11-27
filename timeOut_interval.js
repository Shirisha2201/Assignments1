const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter seconds to count down:", (input)=>{
    let timeLeft = parseInt(input);
    if(isNaN(timeLeft)||timeLeft<=0){
        console.log("Please enter a valid positive number.");
        r1.close();
        return;
    }
    console.log(`Countdown starting from ${timeLeft} seconds...`);
    console.log(`Press "s" anytime to stop the countdown.`);

    const intervalId = setInterval(()=>{
        console.log(`Time left: ${timeLeft}s`);
        timeLeft--;

        if(timeLeft<0){
            clearInterval(intervalId);
            console.log("Countdown Complete!");
            r1.close();
        }
    },1000);
    setTimeout(() => {
        process.stdin.on("data", (key)=>{
            if(key.toString().trim().toLowerCase()==="s"){
                clearInterval(intervalId);
                console.log("Countdown stopped by user!");
                r1.close();
            }
        });
    }, 500);
});