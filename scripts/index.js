function sorteadorDados(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

function indexContrutorPrincipais() {
    let div = document.querySelector(`#conteudo-corpo`)
    data.sort(sorteadorDados('views')).reverse()
    for (i = 0; i < 3; i++) {

        // contrutor do card
        // trocado de div para a por acessibilidade
        let card = document.createElement("a")
        card.setAttribute('id', 'card-site')
        card.setAttribute('class', 'card col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 m-2')
        card.setAttribute('href', "proj.html?username="+data[i].username)
        card.setAttribute('style', 'text-decoration: none;')
        // card.setAttribute('onClick', 'window.open("proj.html?username='+data[i].username+'", "_self")')
        // card.setAttribute('style', 'cursor: pointer;')
        // contrutor da imagem
        let imagem = document.createElement("img")
        imagem.setAttribute('class', 'card-img-top')
        imagem.setAttribute('id', 'imagem-card')
        imagem.setAttribute('src', 'Imagens/PIIs/' + data[i].imagens[0])
        imagem.setAttribute('alt', 'Imagem do site')
        // construtor do div-corpo
        let cardBody = document.createElement("div")
        cardBody.setAttribute('id', 'conteudo-card')
        cardBody.setAttribute('class', 'card-body')
        cardBody.setAttribute('style', 'background-color:' + data[i]["cor-destaque"] + '; color:' + data[i]["cor-texto"] + ';')
        // construtor titulo
        let cardTitulo = document.createElement("h5")
        cardTitulo.setAttribute('class', 'card-title')
        cardTitulo.innerHTML = data[i].nome
        // construtor titulo
        let cardSubtitulo = document.createElement("p")
        cardSubtitulo.setAttribute('class', 'card-text text-truncate')
        cardSubtitulo.innerHTML = data[i].sinopse
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