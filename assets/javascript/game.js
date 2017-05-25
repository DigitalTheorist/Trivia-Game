

  $(document).ready(function(){


var trivaBucket = [ //make an array of object (in order to use a for loop)

   {
    question: 'what color is the sky?',
    trueAnswer:'blue',
    falseOne: 'red',
    falseTwo: 'green',
    falseThree: 'violet',
    },

  {
    question: 'San Francisco is in what State?',
    trueAnswer: 'California',
    falseOne: 'Idaho',
    falseTwo: 'North Dakota',
    falseThree: 'Florida',
    },

  {
    question: "In what city is Apple's Headquarters?",
    trueAnswer: 'Cupertino',
    falseOne: 'San Francisco',
    falseTwo: 'Houston',
    falseThree: 'Boston',
    },

  {
    question: 'Is water wet?',
    trueAnswer: 'Yes',
    falseOne: 'no',
    falseTwo: 'what?',
    falseThree: 'I need some coffee',
    }

];

var index = 0

function incrementQuestion(){
index++;
console.log(index);
};


// This 'this' function pushes data to Q&A divs.
// ------------------------------------------
function populateQuestionArea(){
  $(".questionArea").html(trivaBucket[index].question);
  $("#answer1").html(trivaBucket[index].trueAnswer);
  $("#answer2").html(trivaBucket[index].falseOne);
  $("#answer3").html(trivaBucket[index].falseTwo);
  $("#answer4").html(trivaBucket[index].falseThree);
};
populateQuestionArea();

//GAME TIMER & START BUTTON
//------------------------------------------
$('#startButton').click(timer);

    // function startButtonTimer () {

    var countDownTime = 10; //Countdown time.
    var counter = setInterval(timer, 1000)

    function timer(){
    countDownTime -= 1;
    console.log("countDownTime is now = " + countDownTime)

    $("#timerArea").html(countDownTime + " seconds left to answer!"); //display's time left to answer

    if (countDownTime <= 0){
    clearInterval(counter);

    setTimeout(console.log("Time has run out! Next question!"));
    }
  }
// }


$(document).on("click", ".answerBlock", function(){
  var $this = this;

  console.log("this", this);

  var clickIdentifier = $(this).attr('id');

  console.log("the answer button you clicked on returns " + clickIdentifier); //logs answer1 ect...

  if (clickIdentifier === 'answer1') {
    console.log('true!');
    incrementQuestion();
    populateQuestionArea();
  } else {
    console.log('false');
    incrementQuestion();
    populateQuestionArea();
  }



});




}); //Document ready endtag.
