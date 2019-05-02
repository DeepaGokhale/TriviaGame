var time = 15;
var intervalId;
var iQuestion = 0;
var ansKey;
var wins = 0;
var losses = 0;

// Initial object array of questions

var triviaQuestions = [{question: "Bronze is an alloy consisting of two or more metals. What are they?", answer1: "Copper and zinc" , answer2: "Copper and tin", answer3: "Copper and gold" , answer4:"Copper and lead" , answerKey: "2"}, 
                        {question: "What colour is Cerulean?" , answer1: "Red" , answer2: "Green", answer3: "yellow" , answer4:"Blue" , answerKey: "4"}, 
                        {question: "What type of electrical charge does a neutron have?", answer1: "Negative" , answer2: "Positive", answer3: "No charge" , answer4:"Double negative" , answerKey: "3"}, 
                        {question: "The first sheep was successfully cloned in 1996, what was the sheep’s name?" , answer1: "Dolly" , answer2: "Donna", answer3: "Holly" , answer4:"Hailey" , answerKey: "1"}, 
                        ];

window.onload = function() {
    //startTimer();
    // $("#start").on("click", startTimer);
    // $("#stop").on("click", stop);
    // $("#reset").on("click", reset);
    // $("#start").on("click", start);
  };

function startTimer(){
    intervalId = setInterval(count, 1000);
}

function count(){
    $("#timeLeft").text("Time Remaining: " + time + " Seconds");
    time--;
    if (time == 0)
    {
        clearInterval(intervalId);
        nextQuestion();         
    }
    
}


function nextQuestion()
{      
    if(iQuestion < triviaQuestions.length)
    {
        //$("#amIcorrect").text("");    
        time = 15;
        startTimer();
        $("#question").text(triviaQuestions[iQuestion].question);
        $("#answer1").text(triviaQuestions[iQuestion].answer1);
        $("#answer2").text(triviaQuestions[iQuestion].answer2);
        $("#answer3").text(triviaQuestions[iQuestion].answer3);
        $("#answer4").text(triviaQuestions[iQuestion].answer4);
        ansKey = "answer" + triviaQuestions[iQuestion].answerKey;
        iQuestion ++;
    }
    else
    {
        clearInterval(intervalId);
        time = 0;
        $("#timeLeft").text("Time Remaining: " + time + " Seconds");
        //show the wins and losses
    }
    $("#losses").text("Total losses:" + losses);
    $("#wins").text("Total Wins:" + wins);
}

$(".answer").on("click", function(){
    if(time != 0)
    {
        var answerId = $(this).attr("id");
        console.log("ans clicked : " + answerId);
        console.log(ansKey);
        clearInterval(intervalId);
        if (answerId == ansKey)
        {       
            wins++;
            console.log("No of wins:" + wins);            
        }
        else
        {        
            losses++;
            console.log("No of losses:" + losses);           
        }    
        nextQuestion();
    }    
})