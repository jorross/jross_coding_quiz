var start_div_el = $("#start-btn-div");
var textEl = $('#starting-text');
var headerEl = $('#header');
var resultEl = $('#result');
var timerEl = $('#timer');

var index = 0;

var time = 60;
function startTimer() {
    timerEl.text(time);
    var x = setInterval(function() {
        time--;
        timerEl.text(time);

        if (time < 0) {
            clearInterval(x);
            timerEl.text("EXPIRED");
            // kick user out of quiz
          }
    }, 1000);
};

function nextFunc(event) {
    // increment the index for question and answer bank
    index++;

    // clear elements from previous question
    headerEl.children().eq(3).remove();
    start_div_el.children().remove();

    // write new question to the page
    writeQuestion();
};

function processAnswer(event) {

    event.preventDefault();

    var btn_clicked = $(this);

    if (btn_clicked[0].innerText == answer_bank[index]) {
        resultEl.append(
            '<span class=\"d-flex justify-content-center w-100\">Correct! :)</span>'
        )
    }
    else {
        resultEl.append(
            '<span class=\"d-flex justify-content-center w-100\">Incorrect! :(</span>'
        )
    }
    
    nextFunc();
};

function writeQuestion() {
    headerEl.append(
        '<p class=\"d-flex justify-content-center\">'+question_bank[index].question+'</p>'
    );

    start_div_el.append(
        '<button class=\"justify-content-center m-2 btn btn-primary\">'+question_bank[index].answers.a+'</button',
        '<button class=\"justify-content-center m-2 btn btn-primary\">'+question_bank[index].answers.b+'</button',
        '<button class=\"justify-content-center m-2 btn btn-primary\">'+question_bank[index].answers.c+'</button',
        '<button class=\"justify-content-center m-2 btn btn-primary\">'+question_bank[index].answers.d+'</button'
    );
};

function startFunc(event) {

    textEl.remove();
    $(this).remove();

    writeQuestion();

    startTimer();

    start_div_el.on('click', 'button', processAnswer);
};

var question_bank = [
    {
        "question": "Which of the following is not a primitive data-type?",
        "answers": {
            "a": "char",
            "b": "int",
            "c": "truck",
            "d": "boolean"
        }
    },
    {
        "question": "Which of the following symbols is used to seperate statements in a for-loop?",
        "answers": {
            "a": ".",
            "b": ",",
            "c": "\'",
            "d": ";"
        }
    }
];

var answer_bank = ["truck", ";"];

start_div_el.on('click', '#start-btn', startFunc);