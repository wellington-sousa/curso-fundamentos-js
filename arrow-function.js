


const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(soma(1,2))
console.log(apresentarArrow("wellington"))

// arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}