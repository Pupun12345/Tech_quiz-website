const questions=[
    {
        question:"Which of the following tags is used to define an unordered list in HTML?",
        answers:[
          {text:"ol",correct:false},
          {text:"li",correct:true},
          {text:"ul",correct:false},
          {text:"a",correct:false},
        ]
    },
    {
        question:"What does CSS stand for?",
        answers:[
          {text:"Computer Style Sheets",correct:false},
          {text:"Creative Style Sheets",correct:false},
          {text:"Cascading Style Sheets",correct:true},
          {text:"cascading style sheet",correct:false},
        ]
    },
    {
        question:"HTML stand for?",
        answers:[
          {text:"hyper text markup language",correct:true},
          {text:"hyperlink markup language",correct:false},
          {text:"hyper markup language",correct:false},
          {text:"markup language",correct:false},
        ]
    },
    {
        question:"Which method is used to access the elements of an array in JavaScript?",
        answers:[
          {text:"array.get()",correct:false},
          {text:"array.[index]",correct:true},
          {text:"array.getItem()",correct:false},
          {text:"array.select()",correct:false},
        ]
    },
    {
        question:"Which property is used to change the background color of an element in CSS?",
        answers:[
          {text:"color",correct:false},
          {text:"background-color",correct:true},
          {text:"bgcolor",correct:false},
          {text:"background-changer",correct:false},
        ]
    },
    {
        question:"What is the purpose of the &lt;canvas&gt; element in HTML5?",
        answers:[
          {text:"To embed videos",correct:false},
          {text:"To extrat all",correct:false},
          {text:"To draw graphics using JavaScript",correct:true},
          {text:"To create forms",correct:false},
        ]
    },
    {
        question:"Which jQuery method is used to hide selected elements?",
        answers:[
          {text:"display()",correct:false},
          {text:"hide()",correct:true},
          {text:"hiden()",correct:false},
          {text:"hidened()",correct:false},
        ]
    },
    {
        question:"Which statement is true about the "==" operator in JavaScript?",
        answers:[
          {text:"checks both value and type of the variables",correct:false},
          {text:"checks only the value of the variables",correct:true},
          {text:"checks only the type of the variables",correct:false},
          {text:"will throw an error if used with different type",correct:false},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
  resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
          button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn =e.target;
  const isCorrect =selectedBtn.dataset.correct==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display="block";
}
function showScore(){
  resetState();
  questionElement.innerHTML=`you scored ${score}out of ${questions.length}!`;
  nextButton.innerHTML="Play Again";
  nextButton.style.display="block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});
startQuiz();