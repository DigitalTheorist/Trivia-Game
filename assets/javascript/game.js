  $(document).ready(function(){

          //GAME/TIMER START BUTTON
//------------------------------------------

$('#startButton').click(timerBlock);

    function timerBlock () {
    var count = 5;
    var counter = setInterval(timer, 1000)

    trivaBucket.question1.operator1();

    function timer(){
    count -= 1;
    console.log("count is now = " + count)

    $("#timerArea").html(count + " seconds left to answer!");

    if () //TODO: If answer1 is clicked before timer ends move to "correct" screen

    if (count <= 0){
    clearInterval(counter);
    console.log("Ah! You didn't answer in time!")

    }
  }
}
    //This 'this' function pushes data to Q&A divs.
//------------------------------------------
var objectFunction = function () {
  $(".questionArea").html(this.question);
  $(".answer1").html(this.trueAnswer);
  $(".answer2").html(this.falseOne);
  $(".answer3").html(this.falseTwo);
  $(".answer4").html(this.falseThree);
};

var trivaBucket = {

  question1: {
    name: '#answer1',
    question: 'what color is the sky?',
    trueAnswer: 'blue',
    falseOne: 'red',
    falseTwo: 'green',
    falseThree: 'violet',
    operator1: objectFunction
  },

  question2: {
    name: '#answer2',
    question: 'San Francisco is in what State?',
    trueAnswer: 'California',
    falseOne: 'Texas',
    falseTwo: 'North Dakota',
    falseThree: 'Florida',
    operator2: objectFunction
  },

  question3: {
    name: '#answer3',
    question: "In what city is Apple's Headquarters?",
    trueAnswer: 'Cupertino',
    falseOne: 'San Francisco',
    falseTwo: 'Atlanta',
    falseThree: 'Boston',
    operator3: objectFunction

  },

  question4: {
    name: '#answer4',
    question: 'Is water wet?',
    trueAnswer: 'Yes',
    falseOne: 'no',
    falseTwo: 'what?',
    falseThree: 'I need some coffee.',
    operator4: objectFunction
  }

};
//------------------------------------------
    //end object

}); //Document ready endtag.



//TODO: display correct for 5 seconds

//TODO: move to next questions

//TODO: otherwise move to "nope" display

//TODO: display incorrect for 5 seconds

//TODO: move to next question
