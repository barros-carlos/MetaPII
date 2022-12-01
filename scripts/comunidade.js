function sorteadorDados() {
    return function (a, b) {
        if (a.nome > b.nome) {
            return 1;
        } else if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    }
}

function comunidadeContrutorPrincipais() {
    let div = document.querySelector(`#conteudo-corpo`)
    var i = 0;
    data.sort(sorteadorDados()).forEach( site => {
        // contrutor do card
        // trocado de div para a por acessibilidade
        let card = document.createElement("a")
        card.setAttribute('id', 'card-site')
        card.setAttribute('class', 'card col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 m-2')
        card.setAttribute('href','proj.html?username='+site.username)
        card.setAttribute('style', 'text-decoration: none;')
        //card.setAttribute('onClick', 'window.open("proj.html?username='+site.username+'", "_self")')
        //card.setAttribute('style', 'cursor: pointer;')
        // contrutor da imagem
        let imagem = document.createElement("img")
        imagem.setAttribute('class', 'card-img-top')
        imagem.setAttribute('id', 'imagem-card')
        imagem.setAttribute('src', 'Imagens/PIIs/'+site.imagens[0])
        imagem.setAttribute('alt', 'Imagem do site')
        // construtor do div-corpo
        let cardBody = document.createElement("div")
        cardBody.setAttribute('id', 'conteudo-card')
        cardBody.setAttribute('class', 'card-body')
        cardBody.setAttribute('style', 'background-color:' + site["cor-destaque"] + '; color:' + site["cor-texto"] + ';')
        // construtor titulo
        let cardTitulo = document.createElement("h5")
        cardTitulo.setAttribute('class', 'card-title')
        cardTitulo.innerHTML = site.nome
        // construtor titulo
        let cardSubtitulo = document.createElement("p")
        cardSubtitulo.setAttribute('class', 'card-text text-truncate')
        cardSubtitulo.innerHTML = site.sinopse
        //adição de filhos
        div.appendChild(card)
        card.appendChild(imagem)
        card.appendChild(cardBody)
        cardBody.appendChild(cardTitulo)
        cardBody.appendChild(cardSubtitulo)
        
    })
    /* <div id="card-site" class="card col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 m-2">
        <img id="imagem-card" class="card-img-top" src="Imagens/download.jpg" alt="Imagem do site">
            <div id="conteudo-card" class="card-body">
                <h5 class="card-title">Site</h5>
                <p class="card-text text-truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
    </div> */
}