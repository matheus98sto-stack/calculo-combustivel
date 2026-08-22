const containerResultado = document.getElementById('resultado-container');
const elementoValor = document.getElementById('valor-resultado');

export function exibirResultado(valorFormatado) {
    elementoValor.textContent = valorFormatado;
    containerResultado.classList.remove('oculto');
}

export function ocultarResultado() {
    containerResultado.classList.add('oculto');
    elementoValor.textContent = '';
}