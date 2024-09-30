/* Iteration 1 | Find the Maximum: 
    
    Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

*/

function maxOfTwoNumbers(number1, number2) {

    if(number1 > number2){

        return number1;
    }
    else if (number2 > number1){

        return number2;

    }
    else {return number1, number2;}

}

maxOfTwoNumbers(number1, number2);

/* Iteration 2 | Find the Longest Word:

    Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

    The function should return null if an empty array is passed as an argument.

*/

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

        if (arr.length === 0){  //Filtro para saber si el array está vacío.

            return null; 

        }

        if (arr.length === 1){ //Filtro para saber si el array solamente tiene un elemento (su longitud será "1" y para devolver el primer elemento del array ponemos el arr[0])

            return arr[0];

        }

        let longestWord = arr[0]; 

        for(let i = 0; i < arr.length; i++){

            newArrWords = arr[i];

            if (newArrWords.length > longestWord.length){

                longestWord = newArrWords;

            }

        }

    return longestWord; 
}


findLongestWord(words);


/* Iteration 3 | Sum Numbers

    Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

*/
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {

    let sum = 0; 

    if (arr.length === 0){

        return 0; 

    }

    for (let i = 0; i <arr.length; i++){

        sum += arr[i];

    }

    return sum; 

}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
