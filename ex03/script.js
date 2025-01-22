function calculaiNSS() {
    const salario = parseFloat(document.getElementById('salario').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(salario) || salario <= 0) {
        resultado.innerHTML = '<span style="color: red;">Por favor insira seu salário corretamente.</span>';
        return;
    }

    let desconto = 0;

    if (salario <= 1212) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14;
    }

    const salarioFinal = salario - desconto;

    resultado.innerHTML = `
        <p>Desconto: R$ ${desconto.toFixed(2)}</p>
        <p>Salário Final: R$ ${salarioFinal.toFixed(2)}</p>
    `;
}