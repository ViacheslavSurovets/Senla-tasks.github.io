$(function () {

    $('#buttonTransform').on('click', function () {

        let valueOfInput = $('#GET-value').val();

        let arrStr = valueOfInput.split(' ');

        let strLengths = arrStr.map(function (n) {

            return n.length;

        });

        console.log(strLengths);

        let smallest = function (array) {

            let result = Math.min.apply(Math, array);

            return $('#place-for-value').append( 'The shortest length of the word:  ' + result )

        };

        smallest(strLengths);
    });
});

