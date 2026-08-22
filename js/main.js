import { calcularCustoViagem, formatarMoeda } from './calculo.js';
import { exibirResultado, ocultarResultado } from './ui.js';

const form = document.getElementById('form-combustivel');

form.addEventListener('submit', (evento) => {
    // Evita que a página recarregue ao enviar o formulário
    evento.preventDefault();

    // Coleta os valores digitados no HTML
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const preco = parseFloat(document.getElementById('preco').value);

    try {
        // Lógica de negócio
        const custo = calcularCustoViagem(distancia, consumo, preco);
        const custoFormatado = formatarMoeda(custo);
        
        // Atualiza a interface
        exibirResultado(custoFormatado);
    } catch (erro) {
        alert("Erro no cálculo: " + erro.message);
        ocultarResultado();
    }
});