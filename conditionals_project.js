/* Part 1 - Conditionals Gymnastics */

/* Program #1 */
// Output:
// @
// #

/* Program #2 */
// Output:
// @

/* Program #3 */
// Output:
// @
// ^

/* Program #4 */

/* NOTE: This is a weird example we don't cover in the curriculum!
  'apple' > 'alien' will actually return true because this is comparing
  alphabetical order! 'ap' comes after 'al' so technically, "apple" is greater in
  alphabetical order/value than "alien" */

// Output:
// 7

/* Program #5 */
// Output:
// "true blocks are executed"

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - Guess That Number */
// Note: Student can also convert userGuess to number to have a === check
// Conditional check for undefined user input not required

let randNum = Math.floor(Math.random() * 101);
let userGuess = process.argv[2];
let statement;
if (userGuess == randNum) {
  statement = 'YOU GUESSED RIGHT!!!';
} else if (userGuess < randNum) {
  statement = 'Your Guess is TOO LOW';
} else {
  statement = 'Your Guess is TOO HIGH';
}

console.log('Your guess:', userGuess);
console.log('Random number generated:', randNum);
console.log(statement);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3 - Grader Bot */
let score = 0;
let userInput = process.argv[2];
let message;

console.log(score);
console.log('');

if (userInput == undefined) {
  message = 'Empty response… Bad user';
} else if (userInput === 'A') {
  message = 'Wrong answer :(';
  score -= 1;
} else if (userInput === 'B') {
  message = 'Wrong answer :(';
  score -= 1;
} else if (userInput === 'C') {
  message = 'RIGHT ANSWER! WOHOO!!!';
  score += 5;
} else if (userInput === 'D') {
  message = 'Bad bad bad...';
  score -= 50;
} else if (userInput === 'I.KNOW.THE.SECRET') {
  message = 'Welcome to NIRVANA';
  score += 1000000;
} else {
  message = 'Invalid Response';
}

console.log(message);
console.log('Final score:', score);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Who's That Pokemon? */

let speciesInput = process.argv[2];
let nameInput = process.argv[3];

if (speciesInput === 'Pokemon') {
  if (nameInput === 'Pikachu') {
    console.log("Hello Pikachu, you're an electric mouse!");
  } else if (nameInput === 'Charmander') {
    console.log('Hello Charmander, your final evolution is cool beans!');
  } else {
    console.log(
      'Hello',
      nameInput + ', we do not have your Pokemon data yet...'
    );
  }
} else if (speciesInput === 'human') {
  console.log('Hello', nameInput + ", you're a human, not a Pokemon :(");
} else {
  console.log('Unknown species... INTRUDER INTRUDER!');
}
