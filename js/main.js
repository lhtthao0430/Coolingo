$(document).ready(function(){
	type = 1;
	process = 0;
	index = 0;
	$('.container-learn').hide();
	$('.result').hide();
	const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => {o[k] = v[i]; return o} , {}))
	const Content = Struct('type', 'content', 'answer');
	var question = [];

    $.ajax({
		headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"},
		url: "http://localhost:8080/test",
		type: 'GET',
		dataType:"json",
		processData: false,
		success: function(data) {
			$.each(data, function(key, value){
				question.push(Content(value.loai, value.ndungch, value.dapan))
				$('.container-learn').show();
				nextQuestion(question[index]);
			})
		}
	});

	function nextQuestion(q){
		switch (q.type){
			case 1:
				$('#speaker').hide();
				$('#input-answer').hide();
				$('.choose-answer').hide();
				$('#wrap-word').show();
				$('#wrap-answer').show();
				$('.question-type').text('Translate it');
				$('.question').text(q.content);
				$('#wrap-word').empty();
				$('#wrap-answer').empty();
				var answers = q.answer.split(' ');
				for (i = 0; i < answers.length; i++) {
					$('#wrap-word').append("<div class='choose-word'>"+answers[i]+" </div>");
				}
				break;
			case 2:
				$('#speaker').hide();
				$('#input-answer').hide();
				$('#wrap-word').hide();
				$('#wrap-answer').hide();
				$('.choose-answer').show();
				$('.question-type').text('Fill the space');
				contents = q.content.split('; ');
				$('.question').html(contents[0] + '<br>' + contents[1]);
				$('#A').text('A. ' + contents[2]);
				$('#B').text('B. ' + contents[3]);
				$('#C').text('C. ' + contents[4]);
				$('#D').text('D. ' + contents[5]);
				break;
			case 3:
				$('#input-answer').hide();	
				$('#wrap-word').hide();
				$('#wrap-answer').hide();
				$('.wrap-choose-answer').hide();
				$('.choose-answer').hide();
				$('#input-answer').show();
				$('#speaker').show();
				$('.question-type').text('Type what your hear');
				$('.question').empty();
				break;
		}
	}
	$('#speaker').click(function() {
        var msg = new SpeechSynthesisUtterance();
        msg.text = question[index].content;
        window.speechSynthesis.speak(msg);
    });

	$('#wrap-word').on('click', '.choose-word', function() {
			$(this).appendTo($('#wrap-answer'));
	});

	$('.wrap-choose-answer').on('click', '.choose-answer', function() {
		$('.choose-answer').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#next').click(function() {
		if ($(this).text() === 'Check'){
			$(this).text('Next');
			process += 10;
			if (process > 100){
				$('.result').text('Done');
			}
			$('#bar').width(process + '%');
			switch(question[index].type){
				case 1:
					if ($('#wrap-answer').children('.choose-word').text() == question[index].answer + ' '){
						$('.result').text('Right Answer');
						$('.result').css('background-color', '#2bff00');
					}
					else {
						$('.result').text('Wrong Answer. Answer is ' + question[index].answer);
						$('.result').css('background-color', '#ff0000');
					}
					break;
				case 2:
					if ($('.selected').attr('id') == question[index].answer){
						$('.result').text('Right Answer');
						$('.result').css('background-color', '#2bff00');
					}
					else {
						$('.result').text('Wrong Answer. Answer is ' + question[index].answer);
						$('.result').css('background-color', '#ff0000');
					}
					break;
				case 3:
					if ($('#input-answer').val() == question[index].content){
						$('.result').text('Right Answer');
						$('.result').css('background-color', '#2bff00');
					}
					else {
						$('.result').text('Wrong Answer. Answer is ' + question[index].content);
						$('.result').css('background-color', '#ff0000');
					}
			}
			$('.result').show();
		}
		else {
				$(this).text('Check');
				index++;
				nextQuestion(question[index]);
				$('.result').hide();
		}
    });
});