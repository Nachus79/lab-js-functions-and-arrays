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

    let sum = 0; //Creo una variable para almacenar la suma.

    if (arr.length === 0){  //Con if tengo un filtro para saber si el array está vacío (su "length" será igual a "0"). 
   
        return 0; 

    }

    for (let i = 0; i <arr.length; i++){ //Con el bucle FOR recorro el array y lo almaceno en una variable. Cada elemento (arr[i]) se sumará al anterior (+=).

        let elementsArray = arr[i]; //En lugar de usar "arr[i]" lo almaceno en una variable.

        sum += elementsArray;

    }

    return sum; 

}



/* Iteration 4 | Numbers Average

    Calculating an average is a prevalent task. So let's practice it a bit.

    The logic behind this:

    Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?)
    Divide that sum by the number of elements in the array.


*/
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {

    let sum = 0; //Igual que en el ejercicio anterior, nos sirve para almacenar la suma.

    let average = 0; //Aquí almacenamos la media. 

    if (arr.length === 0){

        return 0; 

    }


    for (let i = 0; i < arr.length; i++){ //Recorro el array.

        let elementsArray = arr[i];

        sum += elementsArray; //Sumo cada elemento del array y lo almaceno en la variable "sum". 
        
        average = sum / arr.length; //Actualizo la variable "average" dividiendo el contenido de "sum" entre el número de elementos del array (arr.length). Así sacamos la media aritmética. 
    }

    return average;

}

 


/* Iteration 5 | Find Elements: 

    Let's create a simple array search.

    Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

    The function should return null if an empty array is passed as an argument.
*/

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {

    if (arr.length === 0){

        return null; 

    }

     if (arr.includes(word)){  //Al emplear el metodo include no hace falta usar un bucle FOR. 

         return true; 
    }
    else { return false; }

    

}
