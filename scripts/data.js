function pesquisaPagina(){
    site = document.querySelector(`#input-pesquisa`)
    window.open("pesquisa.html?username="+site.value)
}

data = [
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
        "imagens": ['belleDoce1.jpg',
            'belleDoce2.jpg', 'belleDoce3.jpg',
            'belleDoce4.jpg', 'belleDoce5.jpg',],
        "views": 0
    },
    {
        "username": "MaonaRoda",
        "nome": "Mão na roda - pizzaria e chopperia",
        "sinopse": "Praticidade na hora de pedir a sua refeição.",
        "descricao": "Site de uma pizzaria onde é possível ter acesso ao cardápio e realizar pedidos online.",
        "integrantes": [
            "Ana Luiza",
            "Jordana",
            "Helena",
            "Giovana"
        ],
        "cor-destaque": "#000000",
        "cor-texto": "#FFFFFF",
        "imagens": ['maonaroda2.png', 'maonaroda3.png', 'maonaroda4.png'],
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
        "imagens": ['mauaesports1.png',
            'mauaesports2.png', 'mauaesports3.png',
            'mauaesports4.png', 'mauaesports5.png'
        ],
        "views": 1
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
        "imagens": ['raptap1.png', 'raptap2.png', 'raptap3.png'],
        "views": 2
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
        "imagens": ['CronicasdeGenshin1.png', 'CronicasdeGenshin2.png', 'CronicasdeGenshin3.png'],
        "views": 0
    },
    {
        "username": "Copastats",
        "nome": "Copastats",
        "sinopse": "Um site para se informar sobre a Copa de 2022",
        "descricao": "O CopaStats é um website sobre a Copa de 2022 que apresenta ao usuário informações como: jogos, classificações, seleções, jogadores, fórum e cadastro/login. Os dados são dinâmicos e obtidos através da API-football.",
        "integrantes": ['Daniel Briquez', 'Felipe Ariel', 'Mateus Martins', 'Victor Moraes'
        ],
        "cor-destaque": "rgba(0,0,100,255)",
        "cor-texto": "#FFF",
        "imagens": ['Copastats1.png', 'Copastats2.png', 'Copastats3.png', 'Copastats4.png'],
        "views": 0
    },
    {
        "username": "Horizontes",
        "nome": "Projeto Horizontes",
        "sinopse": "A solidariedade é o sentimento que melhor expressa respeito pela dignidade humana.",
        "descricao": "Um site para um projeto social onde incentivos ações solidárias convidando o usuário a se juntar a nós ou participar fazendo doações sejam elas monetárias ou não.",
        "integrantes": [
            'Jamilly Nogueira Anacleto',
            'Gabriel Martins',
            'Cecília Isola Garcia',
            'Tiago José Nicolau dos Santos',
            'Leonardo Moraes'
        ],
        "cor-destaque": "#020253",
        "cor-texto": "#FFF",
        "imagens": ['Horizontes1.jpeg', 'Horizontes2.png', 'Horizontes3.jpeg'],
        "views": 0
    },
    {
        "username": "GottinBier",
        "nome": "GÖTTIN BIER",
        "sinopse": "O site da maior cervejaria de Mauá",
        "descricao": "Projeto criação de um site para uma cervejaria em Mauá, conhecida como Gottin Bier. Utilizamos os conhecimentos adquiridos na faculdade para prover uma melhor experiencia visual  e útil ao usuário. Fornecendo um cardápio dinâmico e responsivo, além de propiciar informações como um blog na área principal.",
        "integrantes": ['Caio Faria Suzuki Costa ',
            'Lucca Leça Aggio',
            'Pietro Vival Soto',
            'Pedro Guilherme Toloni Luxenani',
            'Pedro Orefice Folkmann'
        ],
        "cor-destaque": "#F2DA91",
        "cor-texto": "#231F20",
        "imagens": ['GottinBier1.png', 'GottinBier2.png', 'GottinBier3.png', 'GottinBier3.png'],
        "views": 1
    },
    {
        "username": "Findly",
        "nome": "Findly",
        "sinopse": "Buscamos facilitar o seu aprendizado",
        "descricao": "Tal projeto, tem como intuito, facilitar o meio de aprendizado dos alunos de Ciência da Computação do IMT, a partir da possibilitação de realizar alguma pergunta sobre algumas matérias do curso e essas perguntas serem respondidas",
        "integrantes": [
            'Cadu Dias',
            'Rafael Alves Carrasco',
            'Felipe Kenji Oshiro',
            'Gabriel São Bento Messias Dos Santos'
        ],
        "cor-destaque": "#292E33",
        "cor-texto": "#FFF",
        "imagens": ['Findly1.png', 'Findly2.png'],
        "views": 0
    },
    {
        "username": "metapii",
        "nome": "Meta PII",
        "sinopse": "Projeto de projetos",
        "descricao": "Projeto que tem o objetivo de unificar os sites dos projetos integradores interdisciplinares.<br> Com o objetivo de mostrar para qualquer um que visitar o site para ver como ficou os projetos.",
        "integrantes": ['Bruno Teruya',
            'Carlos Barros',
            'Eduardo Cunha',
            'Gabriel Renault',
            'Gustavo Hiromoto',
            'Lucas Machado'
        ],
        "cor-destaque": "#FECD1E",
        "cor-texto": "#020202",
        "imagens": ['metapii1.png', 'metapii2.png', 'metapii3.png', 'metapii4.png'],
        "views": 0
    }
]
