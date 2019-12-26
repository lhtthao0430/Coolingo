$(document).ready(function(){
    $('.result').html('You have <br> Right Answer: ' + sessionStorage.getItem('right-answer') + '<br>Wrong Answer: ' + sessionStorage.getItem('wrong-answer'));
});