const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numerAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numerAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src= data.image;
        imagem.alt = data.name;
        nomeDoPersonagem,innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;

    });
}

botao.onclick = pegarPersonagem;