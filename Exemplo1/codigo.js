// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

// Essa função será chamada quando o botão "Somar" for clicado.
function somar(){
    // Obtém os valores dos campos de entrada n1 e n2 e converte-os em números.
    // Realiza a operação de soma e atribui o resultado ao campo de entrada res.
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number(n2.value)}<p>`
}

function subtrair(){
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}<p>`
}

function multiplicar(){
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}<p>`
}

function dividir(){
    res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}<p>`
}

function potencia() {
    let base = Number(n1.value);
    let expoente = Number(n2.value)
    let resultado = Math.pow(base, expoente);
    res.innerHTML += `<p>${base} elevado a ${expoente} é: ${resultado}</p>`
}

function raiz() {
    let num1 = Number(n1.value)
    let resultado1 = Math.sqrt(num1)
    let num2 = Number(n2.value)
    let resultado2 = Math.sqrt(num2)
    res.innerHTML += `<p>A raiz quadrada de ${num1} é: ${resultado1}
    <br>A raiz quadrada de ${num2} é: ${resultado2}
    </p>`;
}

function limpar(){
    location.reload()
}