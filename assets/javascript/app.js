var questionOne = {
    question: "How long (in months) does an elephant's pregnancy last?",
    choices: choices = [22, 9, 18, 6],
    answer: this.choices[0],
};

var questionTwo = {
    question: "Elephants have a good short term memory, or long term memory?",
    choices: choices = ["long term memory", "short-term memory"],
    answer: this.choices[0],
};

var questionThree = {
    question: "Forest elephants are different from savanna elephants in what way?",
    choices: choices = ["they are smaller", "they dont have tusks", "they do not live in Africa", "they live in south america"],
    answer: this.choices[0],
};

var questionFour = {
    question: "An elephant's _______________________ is an elongated fusion of its nose and upper lip and contains approximately 150,000 muscles?",
    choices: choices = ["Tusk", "Tail", "Trunk", "mouth"],
    answer: this.choices[2],
};

var questionFive = {
    question: "What are female elephants called?",
    choices: choices = ["Emu", "Calf", "Cow", "Ewes"],
    answer: this.choices[2],
};

var questionSix = {
    question: "Elephant's ____ skin helps keep them cool.",
    choices: choices = [gray, hairy, shiny, wrinkly],
    answer: this.choices[3],
};

var questionSeven = {
    question: "What is the main food in an elephant's diet?",
    choices: choices = ["Grass", "Bark", "insects", "water plants"],
    answer: this.choices[0],
};

var questionEight = {
    question: "Elephant-human conflict exists because: ",
    choices: choices = ["There are too many elephants", "Elephant habitat is being destroyed", "", "Humans have never been in contact with elephants before"],
    answer: this.choices[1],
};

var questionNine = {
    question: "The most immediate threat to elephants are poachers who kill them for what resource??",
    choices: choices = ["the ivory in their tusks", "the ivory in their teeth", "the ivory in their skin", "the ivory in their feet"],
    answer: this.choices[0],
};

var questionTen = {
    question: "What does WWF stand for?",
    choices: choices = ["World Wildlife Foundation", "World Wildlife Facility", "World Wildlife Fund"],
    answer: this.choices[2],
};

var questions = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question, questionFive.question, questionSix.question, questionSeven.question, questionEight.question, questionNine.question, questionTen.question];

var answers = [questionOne.answer, questionTwo.answer, questionThree.answer, questionFour.answer, questionFive.answer, questionSix.answer, questionSeven.answer, questionEight.answer, questionNine.answer, questionTen.answer];

//When the user clicks the start button display the first question from the questions array and start a 10 second timer.

//If the user clicks the correct answer congratulate them, wait a few seconds, then display next question.

//If the user clicks the wrong answer imsult them, wait a few seconds, then display the next question.

//If the timer runs out show time's up, wait a few seconds, then display the next question.

//When all 10 questions have been answered end the game and show the score and a restart button.

$("#startButton").click(function() {
    setTimeout(fiveSeconds, 5000);
    setTimeout(tenSeconds, 10000);
    setTimeout(fifteenSeconds, 15000);
    setTimeout(twentySeconds, 20000);
    setTimeout(twentyFiveSeconds, 25000);
    setTimeout(thirtySeconds, 30000);
    setTimeout(thirtyFiveSeconds, 35000);
    setTimeout(fortySeconds, 40000);
    setTimeout(fortyFiveSeconds, 45000);
    $("#question").html('<h2>' + questions[0] + '</h2>');
    $("#choiceOne").html('<h2>' + questionOne.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionOne.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionOne.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionOne.choices[3] + '</h2>');

    // Put an if else statement here.
    // if the user clicks the correct answer
    // alert correct and add point to correct
    // else the user picks any other answer
    // alert wrong and add point to incorrect
    //if ()
})

function fiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[1] + '</h2>');
    $("#choiceOne").html('<h2>' + questionTwo.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionTwo.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionTwo.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionTwo.choices[3] + '</h2>');
}

function tenSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[2] + '</h2>');
    $("#choiceOne").html('<h2>' + questionThree.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionThree.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionThree.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionThree.choices[3] + '</h2>');
}

function fifteenSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[3] + '</h2>');
    $("#choiceOne").html('<h2>' + questionFour.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionFour.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionFour.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionFour.choices[3] + '</h2>');
}

function twentySeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[4] + '</h2>');
    $("#choiceOne").html('<h2>' + questionFive.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionFive.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionFive.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionFive.choices[3] + '</h2>');
}

function twentyFiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[5] + '</h2>');
    $("#choiceOne").html('<h2>' + questionSix.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionSix.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionSix.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionSix.choices[3] + '</h2>');
}

function thirtySeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[6] + '</h2>');
    $("#choiceOne").html('<h2>' + questionSeven.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionSeven.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionSeven.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionSeven.choices[3] + '</h2>');
}

function thirtyFiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[7] + '</h2>');
    $("#choiceOne").html('<h2>' + questionEight.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionEight.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionEight.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionEight.choices[3] + '</h2>');
}

function fortySeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[8] + '</h2>');
    $("#choiceOne").html('<h2>' + questionNine.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionNine.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionNine.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionNine.choices[3] + '</h2>');
}

function fortyFiveSeconds() {
    alert("Time's Up!")
    $("#question").html('<h2>' + questions[9] + '</h2>');
    $("#choiceOne").html('<h2>' + questionTen.choices[0] + '</h2>');
    $("#choiceTwo").html('<h2>' + questionTen.choices[1] + '</h2>');
    $("#choiceThree").html('<h2>' + questionTen.choices[2] + '</h2>');
    $("#choiceFour").html('<h2>' + questionTen.choices[3] + '</h2>');
}

