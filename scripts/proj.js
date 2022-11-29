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

const params = new URLSearchParams(window.location.search);
const usernameGet = params.get('username');

function localizarJSONSite(username) {
    site = data.filter(site => site.username == username)
    return site[0]
}

function projConstrutorSite() {
    site = localizarJSONSite(usernameGet)
    titulo = document.querySelector(`#nome-site`)
    titulo.innerHTML = site.nome
    carrossel = document.querySelector(`.carousel-inner`)
    carrosselIndicator = document.querySelector(`.carousel-indicators`)
    var i = 0
    site.imagens.forEach(imagem => {
        if(i == 0){
            let div = document.createElement("div")
            div.setAttribute('class', 'carousel-item active')
            
            let img = document.createElement("img")
            img.setAttribute('class', 'd-block w-100')
            img.setAttribute('src', imagem)
            img.setAttribute('style', 'height: 400px; background-position:center center; background-repeat:no-repeat; object-fit: contain;')

            div.appendChild(img)
            carrossel.appendChild(div)

            let li = document.createElement("li")
            li.setAttribute('data-bs-target', '#carrossel')
            li.setAttribute('data-bs-slide-to', i)
            li.setAttribute('class', 'active')

            carrosselIndicator.appendChild(li)

        }
        else{
            let div = document.createElement("div")
            div.setAttribute('class', 'carousel-item')
            
            let img = document.createElement("img")
            img.setAttribute('class', 'd-block w-100')
            img.setAttribute('src', imagem)
            img.setAttribute('style', 'height: 400px; background-position:center center; background-repeat:no-repeat; object-fit: contain;')

            div.appendChild(img)
            carrossel.appendChild(div)

            let li = document.createElement("li")
            li.setAttribute('data-bs-target', '#carrossel')
            li.setAttribute('data-bs-slide-to', i)

            carrosselIndicator.appendChild(li)
        }
        i++
    });

    let ul = document.querySelector(`#nomes-site`)

    site.integrantes.forEach(nome => {
        
        let ol = document.createElement("ol")
        ol.setAttribute('class', 'list-group-item mx-5')
        ol.innerHTML = nome
        ul.appendChild(ol)
    })
    
    let descricao = document.querySelector(`#descricao`)
    descricao.innerHTML = site.descricao
        // <ul id="lista" class="list-group list-group-flush">
        // <li class="list-group-item">            
        // <li data-bs-target="#carrossel" data-bs-slide-to="0" class="active"></li>
        // < div class="carousel-item active" >
        //     <img class="d-block w-100" src="Imagens/banner_homepage.jpg" alt="First slide">
        //     </div>

}
