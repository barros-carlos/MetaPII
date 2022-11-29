const data = [
    {
        "username": "BelleDoce",
        "nome": "BelleDoce",
        "sinopse": "Site de comercialização de perfumes importados.",
        "descricao": "Este projeto tem como objetivo a criação de uma plataforma para fins comerciais de produtos atuais do mercado de perfumes importados.",
        "integrantes": ["Ana Beatriz do Nascimento Schlink", "Bianca Aparecida Cardoso", "Pedro Camasmie Kobayashi", "Pedro Sadao Tsuji", "Victor de Oliveira Pimenta"],
        "cor-destaque": "#E5B27F",
        "cor-texto": "#231F20",
        "imagens": ["https://cdn.discordapp.com/attachments/789238474833788938/1046941676339470436/belleDoce1.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce2.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce3.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce4.jpg",
            "https://cdn.discordapp.com/attachments/789238474833788938/1046941676595318865/belleDoce5.jpg"],
        "views": 3
    },
    {
        "username": "MaonaRoda",
        "nome": "Mão na roda - pizzaria e chopperia",
        "sinopse": "Site de uma pizzaria ",
        "descricao": "O projeto tem o objetivo inicial de produzir um site para uma pizzaria física. A intenção em desenvolver este projeto é a de inovar a forma de realizar os pedidos de pizza e trazer diferenciais para o uso do sistema. ",
        "integrantes": ["Ana Luiza", "Jordana", "Helena", "Giovana"],
        "cor-destaque": "#000000",
        "cor-texto": "#FFFFFF",
        "imagens": ["https://cdn.discordapp.com/attachments/789238474833788938/1046943482356445225/maonaroda1.png"],
        "views": 5
    },
    {
        "username": "MauaEsports",
        "nome": "Mauá Esports",
        "sinopse": "#GoTigers",
        "descricao": "Projeto desenvolvido com o objetivo de facilitar as inscrições e maior reconhecimento da entidade Mauá Esports",
        "integrantes": ["Débora Witkowski", "Guilherme Ruiz da Silva", "Leonardo Cazotto Stuber", "Lucas Machado da Costa Pennone", "Rafael Ruiz da Silva"],
        "cor-destaque": "#081D3D",
        "cor-texto": "#FFF",
        "imagens": ["https://cdn.discordapp.com/attachments/789238474833788938/1047171864583209141/mauaesports2.PNG",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171865002651720/mauaesports1.png",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171865392730122/mauaesports3.PNG",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171865753419906/mauaesports4.PNG",
            "https://cdn.discordapp.com/attachments/789238474833788938/1047171866143502468/mauaesports5.PNG"],
        "views": 0
    }
]

const params = new URLSearchParams(window.location.search);
const username = params.get('username');

function localizarJSONSite(username){

}