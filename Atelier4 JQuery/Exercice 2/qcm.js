$(document).ready(function() {
    var correctAnswers = {
        q1: 'a',
        q2: 'c',
        q3: 'c',
        q4: 'b',
        q5: 'a'
    };

    $('#corriger').click(function() {
        var score = 0;
        var totalQuestions = 5;
        var allAnswered = true;

        $('.Question').each(function() {
            var name = $(this).find('input[type=radio]').attr('name');
            var answer = $('input[name=' + name + ']:checked').val();

            if (answer === undefined) {
                allAnswered = false;
                $('input[name=' + name + ']').parent().addClass('missing');
            } else if (answer === correctAnswers[name]) {
                $('input[name=' + name + ']:checked').parent().addClass('correct');
                score++;
            } else {
                $('input[name=' + name + ']:checked').parent().addClass('incorrect');
                $('input[name=' + name + '][value=' + correctAnswers[name] + ']').parent().addClass('correct');
            }
        });

        if (!allAnswered) {
            $('#result').html('<p class="missing">Veuillez répondre à toutes les questions.</p>');
        } else {
            $('#result').html('<p>Votre score est de ' + score + ' sur ' + totalQuestions + '.</p>');
        }
    });
});
