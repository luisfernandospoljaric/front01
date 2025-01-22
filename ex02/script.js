function calculo(){
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let salarioFamilia = 0;

    if (salario < 2000)
        salarioFamilia = filhos*45;
    
    salario = salario + salarioFamilia

    resultado.innerHTML = `Salario Família R$ ${salarioFamilia} <br> Salário Final R$ ${salario}`
}