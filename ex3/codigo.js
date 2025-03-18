function calcularCusto() {
    // Captura os valores digitados pelo usuário
    let funcionarios = parseInt(document.getElementById("funcionarios").value);
    let dias = parseInt(document.getElementById("dias").value);
    
    // Verifica se os valores inseridos são válidos
    if (isNaN(funcionarios) || funcionarios <= 0 || isNaN(dias) || dias <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }
    
    let valorPorPessoa;
    
    // Determina o valor por pessoa de acordo com a tabela
    if (funcionarios < 50) {
        valorPorPessoa = 4.50;
    } else if (funcionarios < 100) {
        valorPorPessoa = 4.10;
    } else if (funcionarios < 150) {
        valorPorPessoa = 3.80;
    } else {
        valorPorPessoa = 3.60;
    }
    
    // Calcula o custo total
    let custoTotal = funcionarios * dias * valorPorPessoa;
    
    // Exibe o resultado na tela
    document.getElementById("resultado").innerText = "O custo total mensal é: R$ " + custoTotal.toFixed(2);
}