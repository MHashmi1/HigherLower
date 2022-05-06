let valid_input = false;
let max, input;
let nums=new Array(); //array for holding guesses


//prompts for maximum number until a number > 0 is entered
while(!valid_input) {
    input = window.prompt("Enter maximum number:");

    max = Number(input);

    if(max != NaN && max > 0) {
        valid_input = true;
    }
    else{
        window.alert("Your entry was not a number greater than 0. Please try again.");
    }
}

//assign random number from 1 - max value specified by user
let num = Math.floor(Math.random() * max) + 1;

console.log(num);
console.log(max);

function do_guess() {
    let guess = Math.round(Number(document.getElementById("guess").value)); //value entered in form is the guess

    //loop through array holding guesses and determine if guess has been entered before
    let repeat=false;
    for (let x=0; x<nums.length; x++){
        if (nums[x]==guess){
            repeat = true;
        }
    }


    let message = document.getElementById("message");

    //test to see if guess is a number
    if (isNaN(guess)){
        message.innerHTML = "Your guess must be a number! Try again!";
    }

    //test to see if guess has been entered before; determined by for loop at beginning of function
    else if(repeat){
        message.innerHTML = "You have already guessed this number! Try again!";
    }

    //test for guess > max
    else if(guess>max){
        message.innerHTML = "Your guess is outside the range of numbers, Try again!";
    }

    //test for guess<1
    else if(guess<1){
        message.innerHTML = "Your guess must be a number greater than 0. Try again!";
    }

    //tests if guess = number 
    else if(guess == num) {
        nums.push(guess);
        message.innerHTML = "You got it! It took you "+nums.length+" guesses and your guesses were "+nums+".";
    }

    //tests if guess is greater than number, add to guess array and increases count of guess
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        nums.push(guess);
    }

    //if all other conditionals fail, guess is lower than the number, guess entered to guess array and count of guesses increased
    else {
        message.innerHTML = "No, try a higher number.";
        nums.push(guess);
    }

    console.log(guess);
    console.log(nums);
}