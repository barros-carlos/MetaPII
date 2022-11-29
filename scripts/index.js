const data = [
    {
        "username": "BelleDoce",
        "nome": "BelleDoce",
        "sinopse": "Site de comercialização de perfumes importados.",
        "descricao": "Este projeto tem como objetivo a criação de uma plataforma para fins comerciais de produtos atuais do mercado de perfumes importados.",
        "integrantes": [
            "Ana Beatriz do Nascimento Schlink",
            "Bianca Aparecida Cardoso",
            "Pedro Camasmie Kobayashi",
            "Pedro Sadao Tsuji",
            "Victor de Oliveira Pimenta"
        ],
        "cor-destaque": "#E5B27F",
        "cor-texto": "#231F20",
        "imagens": [
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676339470436/belleDoce1.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce2.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce3.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce4.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce5.jpg"
        ],
        "views": 0
    },
    {
        "username": "MaonaRoda",
        "nome": "Mão na roda - pizzaria e chopperia",
        "sinopse": "Site de uma pizzaria ",
        "descricao": "O projeto tem o objetivo inicial de produzir um site para uma pizzaria física. A intenção em desenvolver este projeto é a de inovar a forma de realizar os pedidos de pizza e trazer diferenciais para o uso do sistema. ",
        "integrantes": [
            "Ana Luiza",
            "Jordana",
            "Helena",
            "Giovana"
        ],
        "cor-destaque": "#000000",
        "cor-texto": "#FFFFFF",
        "imagens": [
            "https://cdn.discordapp.com/attachments/789238474833788938/1046943482356445225/maonaroda1.png"
        ],
        "views": 0
    },
    {
        "username": "MauaEsports",
        "nome": "Mauá Esports",
        "sinopse": "#GoTigers",
        "descricao": "Projeto desenvolvido com o objetivo de facilitar as inscrições e maior reconhecimento da entidade Mauá Esports",
        "integrantes": [
            "Débora Witkowski",
            "Guilherme Ruiz da Silva",
            "Leonardo Cazotto Stuber",
            "Lucas Machado da Costa Pennone",
            "Rafael Ruiz da Silva"
        ],
        "cor-destaque": "#081D3D",
        "cor-texto": "#FFF",
        "imagens": [
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171864583209141/mauaesports2.PNG",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171865002651720/mauaesports1.png",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171865392730122/mauaesports3.PNG",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171865753419906/mauaesports4.PNG",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171866143502468/mauaesports5.PNG"
        ],
        "views": 0
    },
    {
        "username": "HotSite Rap Tap",
        "nome": "RapTap",
        "sinopse": "Conheça RapTap",
        "descricao": "Um site com o intuito de divulgar o melhor jogo clicker do mundo RapTap e ainda combater o suicídio, apoiando o setembro amarelo.",
        "integrantes": [
            "Diogo Carvalho Bernardini",
            "Fernando Freitas de Oliveira",
            "Guilherme Toffanelli Ghenaim",
            "Othavio Carvalho Losovoi",
            "Pedro Alvez Borges",
            "Raul Monteiro de Sousa Carvalho"
        ],
        "cor-destaque": "#A81256",
        "cor-texto": "#FFFEFE",
        "imagens": [
            "https://cdn.discordapp.com/attachments/789238474833788938/1047255179482910801/raptap1.png",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047255180145594429/raptap2.png",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047255179814240336/raptap3.png"
        ],
        "views": 0
    },
    {
        "username": "CronicasdeGenshin",
        "nome": "Crônicas de Genshin",
        "sinopse": "Um blog sobre Genshin Impact para você se manter atualizado sobre novidades do jogo",
        "descricao": "Estamos criando um blog sobre o jogo &#34Genshin Impact&#34 para jogadores novos e mais experientes que tenham interesse em se manter atualizado nas novidades do jogo, guias para criar os melhores times e curiosidades sobre o jogo.",
        "integrantes": [
            "Guilherme Nascimento",
            "Bianca Ferreira",
            "Anderson Hideki"
        ],
        "cor-destaque": "#185388FF",
        "cor-texto": "#",
        "imagens": [
            "https://cdn.discordapp.com/attachments/789238474833788938/1047258050291044452/CronicasdeGenshin1.png",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047258050697887864/CronicasdeGenshin2.png",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047258051012477038/CronicasdeGenshin3.png"
        ],
        "views": 0
    }
]

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
        let card = document.createElement("div")
        card.setAttribute('id', 'card-site')
        card.setAttribute('class', 'card col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 m-2')
        card.setAttribute('onClick', 'window.open("proj.html?username='+data[i].username+'", "_self")')
        // contrutor da imagem
        let imagem = document.createElement("img")
        imagem.setAttribute('class', 'card-img-top')
        imagem.setAttribute('id', 'imagem-card')
        imagem.setAttribute('src', data[i].imagens[0])
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