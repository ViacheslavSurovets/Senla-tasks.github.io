$(function () {


    $('#buttonTransform').on('click', divMaker);


    function divMaker() {

        let valueOfInput = +$('#GET-value').val();

        if (valueOfInput >= 0 && valueOfInput <= 30) {

            for (let i = 0; i < valueOfInput; i++) {

                let row = $('<div />').attr('class', 'row');

                for (let x = 0; x < valueOfInput; x++) {

                    let cell = $('<div />').attr('class', 'rect');

                    row.append(cell);

                }

                $('#place-for-value').append(row);

            }


            $(function () {

                $('div .rect').each(function () {

                    let color = '#' + rand() + rand() + rand();

                    $(this).css('background-color', color);

                });

                function rand() {

                    let c = parseInt(Math.random() * 255).toString(16);

                    return ("" + c).length == 1 ? '0' + c : c;

                }

            });

        } else {

            alert('введите число от 0 до 30');

        }

    }


});




