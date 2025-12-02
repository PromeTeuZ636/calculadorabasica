// Variável global para acessar o elemento de resultado
const resultado = document.getElementById('resultado');

// 1. Função que insere números e operadores
function insert(num) {
    // Adiciona o valor do botão (num) ao conteúdo atual
    resultado.innerHTML += num;
}

// 2. Função que limpa todo o campo de resultado
function clean() {
    // Define o conteúdo como vazio
    resultado.innerHTML = '';
}

// 3. Função que apaga o último caractere (backspace)
function back() {
    // Pega a string atual
    let expressao = resultado.innerHTML;
    // Remove o último caractere usando slice(0, -1)
    resultado.innerHTML = expressao.substring(0, expressao.length - 1);
}

// 4. Função que calcula a expressão
function calcular() {
    let expressao = resultado.innerHTML;

    if (expressao) {
        try {
            // Usa a função eval() do JavaScript para avaliar a expressão.
            // O eval() é muito poderoso para calcular strings matemáticas.
            resultado.innerHTML = eval(expressao);
        } catch (e) {
            // Caso a expressão seja inválida (ex: 5++), exibe 'Erro'
            resultado.innerHTML = 'Erro!';
        }
    } else {
        // Se o campo estiver vazio e o usuário apertar '=', não faz nada
        resultado.innerHTML = '';
    }
}