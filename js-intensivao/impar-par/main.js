// Para gerar valores ímpares e pares com soma:
/*
let numberOne = prompt ("Digite o primeiro número")
let numberTwo =prompt ("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const Sum = sum % 2

if (Sum === 0){
  alert("Éum número par")
} else {
alert("É um número ímpar")
}  
*/


//para saber se o número é par ou ímpar
let numberOne = prompt ("Digite o primeiro número")

numberOne = Number(numberOne)

const Result = numberOne % 2

if (Result === 0){
  alert("É um número par")
} else {
alert("É um número ímpar")
}