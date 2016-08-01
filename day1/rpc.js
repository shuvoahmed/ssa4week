do {
  var userSelection = prompt("Enter Your Selection:  Rock / Paper / Scissors")
  console.log('You Selected ' + userSelection);
}while (userSelection != 'Rock' && userSelection != 'Paper' && userSelection != 'Scissors' )



var mySelection = (Math.floor(Math.random()*3));
var result = 'Tie';
//1 = Rock
//2 = Paper
//3 = Scissors

if (mySelection === 1)
	mySelection = 'Rock';
else if(mySelection === 2)
	mySelection = 'Paper';
else
	mySelection = 'Scissors';

console.log('I Selected ' + mySelection);
alert('I Selected:  ' + mySelection);
if(userSelection === 'Rock')
{
	if(mySelection === 'Rock')
		result = 'Its a Tie';
	else if(mySelection === 'Paper')
		result = 'I win!';
	else
		result = 'You win!';
}

if(userSelection === 'Paper')
{
	if(mySelection === 'Rock')
		result = 'You win!';
	else if(mySelection === 'Paper')
		result = 'Its a Tie';
	else
		result = 'I win!';
}

if(userSelection === 'Scissors')
{
	if(mySelection === 'Rock')
		result = 'I win!';
	else if(mySelection === 'Paper')
		result = 'You win!';
	else
		result = 'Its a tie';
}

console.log(result);
alert(result);