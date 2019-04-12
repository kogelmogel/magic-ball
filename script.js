$(document).ready(function(){


var magic8Ball = {};


magic8Ball.listOfAnswers = ['It is certain.', 'Outlook good.', 'It will happen', 'As I see it, yes.', 'You may rely on it.', 'Stars are with you babe!', 'Go for it.', 'Sure', 'Obviously', 'Reply hazy, try again.', 'Better not tell you now.', 'Concentrate and ask again.', 'Long way ahead', 'Without a doubt.', 'Maybe', 'Don\'t count on it.', 'In your dreams', 'No, no, no!', 'My sources say no.', 'Very doubtful.'];

magic8Ball.askQuestion = function(question){
var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
	$("#answer").hide();
	$("#answer").text(answer);
	
	console.log(question);
	console.log(answer);
};

var onClick = function (){
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png")
	$("#8ball").effect("shake");
		
	setTimeout(
		function(){
		var question = prompt('Ask me anything');
		magic8Ball.askQuestion(question);
		$("#answer").fadeIn(4000);
	}, 500)
};

$('#questionButton').click(onClick);

})