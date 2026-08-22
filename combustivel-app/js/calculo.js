/**
 * Calcula o custo total da viagem.
 * Fórmula: (Distância / Consumo) * Preço
 */
export function calcularCustoViagem(distancia, consumo, preco) {
    if (consumo <= 0) throw new Error("O consumo deve ser maior que zero.");
    
    const litrosNecessarios = distancia / consumo;
    const custoTotal = litrosNecessarios * preco;
    
    return custoTotal;
}

/**
 * Formata um número para o padrão de moeda brasileiro (Real).
 */
export function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}