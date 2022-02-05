const calc = require("./calc");
const inquirer = require("inquirer");
const operationSum = calc.sum;
const operationSub = calc.subtraction;
const operationMulti = calc.multiplication;
const operationDiv = calc.division;

inquirer
  .prompt([
    {
      name: "operation",
      message: "Qual Operação Você quer fazer?",
      

    },
    {
      name: "n1",
      message: "Digite o Primeiro Número:",
    },
    {
      name: "n2",
      message: "Digite o Segundo Número",
    },
  ])
  .then((answer) => {
    let n1 = parseFloat(answer.n1);
    let n2 = parseFloat(answer.n2);
    switch (answer.operation) {
      case "soma":
        console.log(operationSum(n1, n2));
        break;
      case "subtracao":
        console.log(operationSub(n1, n2));
        break;
      case "divisao":
        console.log(operationDiv(n1, n2));
        break;
      case "multiplicacao":
        console.log(operationMulti(n1, n2));
        break;
    }
  })
  .catch((err) => console.log(err));
