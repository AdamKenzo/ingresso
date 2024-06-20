
function comprar() {
    //Indentificar que tipo de ingresso é e sua quantidade
    let quantidade = document.getElementById('qtd').value;
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    
    //Pegar a quantidade disponível de cada tipo
    let quantidadePista = document.getElementById('qtd-pista').textContent;
    let quantidadeSuperior = document.getElementById('qtd-superior').textContent;
    let quantidadeInferior = document.getElementById('qtd-inferior').textContent;
    

    //Alertar se que acabaram o ingresso
    

    //subtrair a quantidade especifica pelo quantidade especifica
    if (tipoIngresso == 'inferior') {
        if (quantidade > quantidadeInferior) {
            alert(`Quantidade indisponível para ${tipoIngresso}!`);
            return;
        }
        quantidadeInferior = parseInt(quantidadeInferior - quantidade);
        document.getElementById('qtd-inferior').innerHTML = `<span id="qtd-pista">${quantidadeInferior}</span>`;
    } else if (tipoIngresso == 'superior') {
        if (quantidade > quantidadeSuperior) {
            alert(`Quantidade indisponível para ${tipoIngresso}!`);
            return;
        }
        quantidadeSuperior = parseInt(quantidadeSuperior - quantidade);
        document.getElementById('qtd-superior').innerHTML = `<span id="qtd-pista">${quantidadeSuperior}</span>`;
    } else if (tipoIngresso == 'pista') {
        if (quantidade > quantidadePista) {
            alert(`Quantidade indisponível para ${tipoIngresso}!`);
            return;
        }
        quantidadePista = parseInt(quantidadePista - quantidade);
        document.getElementById('qtd-pista').innerHTML = `<span id="qtd-pista">${quantidadePista}</span>`;
    }


    






}
