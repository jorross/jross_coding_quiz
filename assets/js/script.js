var start_div_el = $("#start-btn-div");
var textEl = $('#starting-text');
var headerEl = $('#header');

function startFunc(event) {
    textEl.remove();
    $(this).remove();

    headerEl.append(
        '<p class=\"d-flex justify-content-center\">'+question_bank[0].question+'</p>'
    )
}

var question_bank = [
    {
        "question": "Which of the following is not a primitive data-type?",
        "answers": {
            "a": "char",
            "b": "int",
            "c": "truck",
            "d": "boolean"
        }
    }
]

start_div_el.on('click', 'button', startFunc);