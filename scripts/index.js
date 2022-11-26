function getchilds() {
    let filho = document.querySelector(`#card-site`)
    console.log(filho)
    let imagem = filho.querySelector(`#imagem-card`)
    imagem.setAttribute('src', 'https://i.pinimg.com/736x/38/56/fd/3856fdf38a9ccfbd4505b6ac4d81d8d9.jpg')
    let divConteudo = filho.querySelector(`#conteudo-card`)
    let titulo = divConteudo.querySelector(`.card-title`)
    let subtitulo = divConteudo.querySelector(`.card-text`)
    titulo.innerHTML = 'funcionando'
    subtitulo.innerHTML = 'funcionando'
}

function indexContrutorPrincipais() {
    let div = document.querySelector(`#conteudo-corpo`)
    for (i = 0; i < 3; i++) {
        // contrutor do card
        let card = document.createElement("div")
        card.setAttribute('id', 'card-site')
        card.setAttribute('class', 'card col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 m-2')
        // contrutor da imagem
        let imagem = document.createElement("img")
        imagem.setAttribute('class', 'card-img-top')
        imagem.setAttribute('id', 'imagem-card')
        imagem.setAttribute('src', 'Imagens/download.jpg')
        imagem.setAttribute('alt', 'Imagem do site')
        // construtor do div-corpo
        let cardBody = document.createElement("div")
        cardBody.setAttribute('id', 'conteudo-card')
        cardBody.setAttribute('class', 'card-body')
        // construtor titulo
        let cardTitulo = document.createElement("h5")
        cardTitulo.setAttribute('class', 'card-title')
        cardTitulo.innerHTML = "Titulo"
        // construtor titulo
        let cardSubtitulo = document.createElement("p")
        cardSubtitulo.setAttribute('class', 'card-text text-truncate')
        cardSubtitulo.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        //adição de filhos
        div.appendChild(card)
        card.appendChild(imagem)
        card.appendChild(cardBody)
        cardBody.appendChild(cardTitulo)
        cardBody.appendChild(cardSubtitulo)
    }
    /* <div id="card-site" class="card col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 m-2">
        <img id="imagem-card" class="card-img-top" src="Imagens/download.jpg" alt="Imagem do site">
            <div id="conteudo-card" class="card-body">
                <h5 class="card-title">Site</h5>
                <p class="card-text text-truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
    </div> */
}