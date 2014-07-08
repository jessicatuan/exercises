console.log('rps.js loaded');
 
// What the computer's choice is
function computerChoice() {
	// RPS has 3 options, rock, paper, scissors
	// Each one should get a 33% chance of getting picked
 
	var number = Math.random();
 
	/* 
	 * Way 1
	*/ 
	// var choice;
	// if(number >= 0 && number <= 0.33) {
	// 	console.log('between 0 and 33');
	// 	choice = 'rock';
	// } else if(number <= 0.67 && number > 0.33) {
	// 	console.log('between 33 and 67')
	// 	choice = 'paper';
	// } else {
	// 	choice = 'scissor';
	// 	console.log('between 67-100')
	// }
	// return choice
 
	/* 
	 * Way 2
	*/ 
	// if(number >= 0 && number <= 0.33) {
	// 	console.log('between 0 and 33');
	// 	var choice = 'rock';
	// } else if(number <= 0.67 && number > 0.33) {
	// 	console.log('between 33 and 67')
	// 	var choice = 'paper';
	// } else {
	// 	var choice = 'scissor';
	// 	console.log('between 67-100')
	// }
 
	// return choice;
 
	/* 
	 * Way 3
	*/ 
	if(number >= 0 && number <= 0.33) {
		console.log('between 0 and 33');
		return 'rock';
	} else if(number <= 0.67 && number > 0.33) {
		console.log('between 33 and 67');
		return 'paper';
	} else {
		console.log('between 67-100');
		return 'scissors';
	}
 
}
 
// Comparing the computer to the user
var compare = function( computer, user ) {
 
	if(computer === user) {
		return "it's a tie";
	}
 
	// //Scissors Beats Paper
	// if(computer === 'scissors'){
	// 	if(user === 'rock') {
	// 		return 'rock wins';
	// 	} else if (user === 'paper') {
	// 		return 'scissors wins';
	// 	}
	// }
 
	// if(computer === 'rock'){
	// 	if(user ==='scissors') {
	// 		return 'rock wins'
	// 	} else if (user === 'paper') {
	// 		return 'scissors wins';
	// 	}
	// }
 
	// if(computer === 'paper'){
	// 	if(user ==='scissors') {
	// 		return 'scissors wins'
	// 	} else if (user === 'rock') {
	// 		return 'paper wins';
	// 	}
	// }
 
	// Paper win options
	if(computer === 'rock' && user === 'paper') {
		return 'paper wins';
	}
 
	if(computer === 'paper' && user === 'rock') {
		return 'paper wins';
	}
 
	// Rock win options
	if(computer === 'scissors' && user === 'rock') {
		return 'rock wins';
	}
	if(computer === 'rock' && user === 'scissors') {
		return 'rock wins';
	}
 
	// Scissors win options
	if(computer === 'paper' && user === 'scissors') {
		return 'scissors wins';
	}
 
	if(computer === 'scissors' && user === 'paper') {
		return 'scissors wins';
	}
 
}
 
// What the user's choice is
$("#rock,#paper,#scissors").on('click', function(){
	var userChoice = this.id;
	var compChoice = computerChoice();
	var message = compare(userChoice, compChoice);	
	$("#userChoice").html(userChoice);
	$("#compChoice").html(compChoice);
	$("#message").html(message);
});
 
$(".rps-action").on('click', function(){
	var userChoice = this.id;
	var compChoice = computerChoice();
	var message = compare(userChoice, compChoice);	
	$("#userChoice").html(userChoice);
	$("#compChoice").html(compChoice);
	$("#message").html(message);
});