const params = new URLSearchParams(window.location.search);
const usernameGet = params.get('username');

function localizarJSONSite(username) {
    site = data.filter(site => site.username == username)
    return site[0]
}

function projConstrutorSite() {
    site = localizarJSONSite(usernameGet)
    if(site){
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
                img.setAttribute('src', 'Imagens/PIIs/'+imagem)
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
                img.setAttribute('src', 'Imagens/PIIs/'+imagem)
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
    else{
        conteudo = document.querySelector(`#conteudo`)
        conteudo.classList.add('d-none')
        erro = document.querySelector(`#erro`)
        erro.classList.remove('d-none')
    }

}
