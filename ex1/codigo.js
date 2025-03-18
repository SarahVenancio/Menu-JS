function calcularHorasExtras() {
    // Obtém os valores inseridos pelo usuário
    let salario = parseFloat(document.getElementById('salario').value);
    let horasNormais = parseFloat(document.getElementById('horasNormais').value);
    let horasFinais = parseFloat(document.getElementById('horasFinais').value);
    
    // Verifica se os valores são válidos
    if (isNaN(salario) || isNaN(horasNormais) || isNaN(horasFinais)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
    // Calcula o valor da hora normal
    let valorHora = salario / 200;
    
    // Calcula o valor das horas extras
    let valorExtrasNormais = valorHora * horasNormais;
    let valorExtrasFinais = (valorHora * 1.5) * horasFinais; 
    
    // Soma os valores das horas extras
    let totalReceber = valorExtrasNormais + valorExtrasFinais;
    
    document.getElementById('resultado').innerText = `R$ ${totalReceber.toFixed(2)}`;
}