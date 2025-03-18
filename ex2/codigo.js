function calcularNovoSalario() {
    // Captura o valor digitado pelo usuário
    let salario = parseFloat(document.getElementById("salario").value);
    
    // Verifica se o valor inserido é válido
    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }
    
    let percentualAumento;
    
    // Verifica em qual faixa salarial o funcionário se encontra
    if (salario <= 1200) {
        percentualAumento = 0.16; // 16%
    } else if (salario <= 2100) {
        percentualAumento = 0.13; // 13%
    } else if (salario <= 3000) {
        percentualAumento = 0.10; // 10%
    } else {
        percentualAumento = 0.05; // 5%
    }
    
    // Calcula o novo salário
    let novoSalario = salario + (salario * percentualAumento);
    
    // Exibe o novo salário na tela
    document.getElementById("resultado").innerText = "O novo salário é: R$ " + novoSalario.toFixed(2);
}