let userName = 'Luke';
let userQuestion = 'when will the dog learn to not run out of the gate?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = 3;

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

console.log(`${userName} asked, ${userQuestion}`);

switch(eightBall) {
  case 0 :
    console.log('Signs point to yes');
    break;
  case 1 : 
    console.log('Outlook not so good');
    break;
  case 2 : 
    console.log('My sources say no');
    break;
  case 3 : 
    console.log('Do not count on it');
    break;
  case 4 :
    console.log('Cannot predict now');
    break;
  case 5 :
    console.log('Reply hazy try again');
    break;
  case 6 :
    console.log('It is decidedly so');
    break;
  case 7 :
    console.log('Maybe try and put in the effort');
    break;
  default:
    console.log('Try and think of a question idiot.');
    break;      
}
