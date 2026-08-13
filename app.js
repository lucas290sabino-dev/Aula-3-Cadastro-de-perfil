'use strict'

const botaoCadastrar= document.getElementById('cadastrar')

function criarCard(nome, cargo, url){

    const card = document.createElement('div')
    card.className = 'card'


    const cardImagem= document.createElement('img')
    cardImagem.className= 'card-imagem'
    cardImagem.src = url


    const cardNome = document.createElement('h2')
    cardNome.className = 'card-nome'
    cardNome.textContent = nome
    
    const cardCargo = document.createElement('h3')
    cardCargo.className = 'card-cargo'
    cardCargo.textContent = cargo

    card.append(cardImagem, cardNome , cardCargo)

    return card 

}

function cadastrarCard (){
    const containerCards = document.getElementById('container-cards')

    const caixaNome = document.getElementById('nome')
    const caixaCargo = document.getElementById('cargo')
    const caixaImagem = document.getElementById('imagem')

    const card = criarCard(caixaNome.value, caixaCargo.value, caixaImagem.value)

    containerCards.append(card)
}

botaoCadastrar.addEventListener('click',cadastrarCard)