function Tringulos() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);
    const resultado = document.getElementById('resultadoTriangulo');

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        resultado.innerHTML = '<span style="color: red;">Favor inserir lados validos.</span>';
        return;
    }

    if (a === b && b === c) {
        resultado.innerHTML = '<span style="color: green;">Equilatero</span>';
    } else if (a === b || b === c || a === c) {
        resultado.innerHTML = '<span style="color: orange;">Isosceles</span>';
    } else {
        resultado.innerHTML = '<span style="color: blue;">Escaleno</span>';
    }
}