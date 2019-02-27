$(function () {

    $('#buttonTransform').on("click", function () {

        let valueOfInput = +$('#GET-value').val();


        let msg = '  sheep... ';

        for (let i = 0; i < valueOfInput; i++) {

            let output = [i + 1] + msg;

           $('#place-for-value').append( output )

        }
    });

});



