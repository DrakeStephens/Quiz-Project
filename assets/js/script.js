var startBtn = document.getElementById("start-button")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var a4 = document.querySelector("#a4")
var submitBtn = document.getElementById("SUBMIT")

var timeLeft = 60;
var score = 0;

function endGame() {
    alert("Congratulations! You scored " + score + " out of 5.");
}

function timer() {
    

    var timeInterval = setInterval(function(){
        startBtn.textContent = "Time:" + timeLeft;
        timeLeft--;
        

        if(timeLeft === 0) {
        timerEl.textContent = "";
        alert("You have run out of time!")
        endGame();
        clearInterval(timeInterval);
        }
    }, 1000);
}

//questions

    function question1(){
        
        a1.textContent = "filler 1"
        a2.textContent = "filler 1"
        a3.textContent = "filler 1"
        a4.textContent = "filler 1"

        submitBtn.addEventListener("click", function questionOneEvent(event){
            event.preventDefault();
            if(answer1.checked){
                alert("Correct!")
                score = score + 1;
                question2();
                submitBtn.removeEventListener("click",question1())
                return;

            }
            else{
                alert("Wrong!")
                timeLeft = timeLeft - 5;
                question2();
                submitBtn.removeEventListener("click",question1())
                return;
            }
        })

    }


    function question2(){
        a1.textContent = "filler 2"
        a2.textContent = "filler 2"
        a3.textContent = "filler 2"
        a4.textContent = "filler 2"
        
        submitBtn.addEventListener("click", function(){
            if(answer3.checked){
                alert("Correct!")
                score = score + 1;
                question3();
                return;
            }
            else{
                alert("Wrong!")
                timeLeft = timeLeft - 5;
                question3();
                return;
            }
        })
    }
    
    function question3(){
        a1.textContent = "filler 3"
        a2.textContent = "filler 3"
        a3.textContent = "filler 3"
        a4.textContent = "filler 3"

        submitBtn.addEventListener("click", function(){
            if(answer2.checked){
                alert("Correct!")
                score = score + 1;
                question4();
                return;
            }
            else{
                alert("Wrong!")
                timeLeft = timeLeft - 5;
                question4();
                return;
            }
        })
    }
    
    function question4(){
        a1.textContent = "filler 4"
        a2.textContent = "filler 4"
        a3.textContent = "filler 4"
        a4.textContent = "filler 4"

        submitBtn.addEventListener("click", function(){
            if(answer4.checked){
                alert("Correct!")
                score = score + 1;
                question5();
                return;
            }
            else{
                alert("Wrong!")
                timeLeft = timeLeft - 5;
                question5();
                return;
            }
        })
    }

    function question5(){
        a1.textContent = "filler 5"
        a2.textContent = "filler 5"
        a3.textContent = "filler 5"
        a4.textContent = "filler 5"

        submitBtn.addEventListener("click", function(){
            if(answer3.checked){
                alert("Correct!")
                score = score + 1;
                endGame();
                return;
            }
            else{
                alert("Wrong!")
                       timeLeft = timeLeft - 5;
                endGame();
                return;
            }
        })
    }


startBtn.addEventListener("click", function(timez) {
    timez.preventDefault();
    timer();
    question1();
});



var questions = [question1, question2, question3, question4, question5]