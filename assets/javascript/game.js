

  $(document).ready(function(){


        //GLOBAL OBJECT
    // ------------------------------------------
    var triviaBucket = [

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

      //GLOBAL VARIABLES
//------------------------------------------
  var clickSwitch = true
  var index = 0

  function incrementQuestion(){
    index++;
      };

      //FUNCTION POPULATES QUESTIONAREA
//------------------------------------------
function populateQuestionArea(){

  $(".questionArea").html(triviaBucket[index].question);
  $("#1_1").html(triviaBucket[index].trueAnswer);
  $("#1_2").html(triviaBucket[index].falseOne);
  $("#1_3").html(triviaBucket[index].falseTwo);
  $("#1_4").html(triviaBucket[index].falseThree);
};

      //START BUTTON AND TIMER FUNCTIONS
//------------------------------------------
      //START BUTTON
//------------------------------------------
$('#startButton').click(clickTimer);

    console.log("clickswitch is now = " + clickSwitch)

    function clickTimer () {

    populateQuestionArea();

    var countDownTime = 10; //Countdown time.
    var counter = setInterval(timer, 1000)

      function timer(){
        countDownTime -= 1;
        console.log("countDownTime is now = " + countDownTime)

        $("#timerArea").html(countDownTime + " seconds left to answer!"); //display's time left to answer

        if (countDownTime <= 0 || clickSwitch === false ){

        clearInterval(counter);

    // intervalTimer();

        clickSwitch = true
    }
  }
}

    //INTERVAL TIMER FUNCTION
//------------------------------------------
function intervalTimer () {

var intervalTime = 5; //Countdown time.
var intervalCounter = setInterval(timer, 1000)

  function timer(){
  intervalTime -= 1;
  console.log("intervalTime is now = " + intervalTime)

  //dynamically display true/false answer screen here.
  $("#timerArea").html("this is the interval timer!");


    if (intervalTime <= 0){
    clearInterval(intervalCounter);

    console.log("Time has run out! Next question!");
    }
  }
}
//------------------------------------------

      //ASWER BUTTON CLICK FUNCTION.
//------------------------------------------
$(document).on("click", ".answerBlock", function(){
  var $this = this;

  var clickIdentifier = $(this).attr('id');

  if (clickIdentifier === '1_1') {
    // console.log('true!');

    console.log(clickSwitch)
    incrementQuestion();
    populateQuestionArea();
    clickSwitch = false;
    clickTimer();
    // intervalTimer();
  } else {
    // console.log('false');

    incrementQuestion();
    populateQuestionArea();
    clickSwitch = false;
    clickTimer();
    // intervalTimer();
  }
});




}); //Document ready endtag.

//------------------------------------------
