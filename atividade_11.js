let salario=parseInt(1001)

if (salario<=500){
    salarioNovo=salario*1.15 // aumento de 15%
} else if (salario>500 && salario<=1000) {
    salarioNovo=salario*1.125 // aumento de 12,5%
} else {
    salarioNovo=salario*1.1 // aumento de 10%
}
console.log(salarioNovo.toFixed(2))