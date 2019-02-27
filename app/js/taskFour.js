
    function getDimensionalArray (array, n) {

        let divider = Math.ceil(array.length / n);

        let firstArray = [];

        let secondArray = [];


        for (let i = 0; i <= divider; i++) {

            firstArray.push(array[i]);

        }

        for (let i = divider + 1; i <= array.length - 1; i++) {

            secondArray.push(array[i]);

        }

        let result = [firstArray, secondArray];

        console.log(result);

    }



