var score = 0;
const quizDB = [
    {
        question: "Q1: What is full form of HTML?",
        a: "Hello to my land",
        b: "Hello text markup language",
        c: "Hyper Text Markup Language",
        d: "hi text markup langauge",
        ans: "hyper text markup language"
    },
    {
        question: "Q2: What is full form of CSS?",
        a: "Cascade styling sheets",
        b: "casio style sheet",
        c: "cascade super style",
        d: "cascade styling sheep",
        ans: "Cascade styling sheets"
    },
    {
        question: "Q3: What is full form of JS?",
        a: "Jount style",
        b: "joint super",
        c: "java script",
        d: "java super",
        ans: "java script"
    },
    {
        question: "Q4: What is full form of HTTP?",
        a: "Hyper Text transfer paragraph",
        b: "Helo text trasfer protocal",
        c: "Hyper Text transition protocol",
        d: "Hyper text transfer protocol",
        ans: "Hyper text transfer protocol"
    },
    {
        question: "Q5: What is full form of FTP?",
        a: "flow transfer portal",
        b: "file transition paragraph",
        c: "file transition protocol",
        d: "file transfer protocol",
        ans: "file transfer protocol"
    },
]


function nextquestionfun() {
    if (questioncounter > quizDB.length) {
        return;

    }
    else {
        var question = document.getElementById('questionID');
        var correctanswer = quizDB[questioncounter - 1].ans;
        // console.log(quizDB[0].question);
        var answers = document.querySelectorAll('.AnswersClass');
        for (i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                var chcanswer = answers[i];
                // console.log(chcanswer)
                var sellabel = answers[i].nextElementSibling.innerHTML;
                // console.log(sellabel)
                answers[i].checked = false;

                if (sellabel.toLowerCase().match(correctanswer.toLowerCase())) {
                    // console.log("matched corrected");
                    score = score+1;
                    document.getElementById('corretansspanID').innerHTML = score;

                }
                else{console.log("not matched"); console.log(sellabel.toLowerCase()+" = "+correctanswer.toLowerCase())}


            }
        }
        // console.log("yahan tk thik hai"+questioncounter +"="+ quizDB.length)
        loadquestion();

    }





}

var questioncounter = 0;

function loadquestion() {
    if (questioncounter < quizDB.length) {
        var question = document.getElementById('questionID');
        question.innerHTML = quizDB[questioncounter].question;
        var options = document.querySelectorAll('.label');

        options[0].innerHTML = quizDB[questioncounter].a;
        options[1].innerHTML = quizDB[questioncounter].b;
        options[2].innerHTML = quizDB[questioncounter].c;
        options[3].innerHTML = quizDB[questioncounter].d;

        questioncounter += 1;
    }
    else{
        document.getElementById('questionID').innerHTML = 'Congratulation!';
        document.getElementById('questionID').style.display = 'flex';
        document.getElementById('questionID').style.justifyContent = 'center';
        document.getElementById('questionID').style.alignItems = 'center';

        document.getElementById('form').style.display = 'none';
        document.getElementById('optionsdivID').innerHTML = `You have Scored ${score*100/quizDB.length}% <br><br><br> Correct Answers: ${score} Out of ${quizDB.length}`;
        // document.getElementById('optionsdivID').innerHTML = `Correct Answers:${score}% `;
        document.getElementById('optionsdivID').style.display = 'flex';
        document.getElementById('optionsdivID').style.justifyContent = 'center';
     
   
        
    }





}




















// calling all the functions////////////////////////////////////////////////////////////



loadquestion();