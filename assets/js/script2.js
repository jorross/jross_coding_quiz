var highscores_list_el = $('#score-list');
var clear_btn_div = $('#start-btn-div');

for (var i=0; i<localStorage.length; i++) {
    highscores_list_el.append(
        '<li class="w-100">' + localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i)) + '</li>'
    )
}

clear_btn_div.on('click', '.btn-danger', function() {
    localStorage.clear();
    location.reload();
})