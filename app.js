function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")

    let inputSearch = document.getElementById("input-search").value.toLowerCase()
if (inputSearch == 0) {
    section.innerHTML = ""
    return 
}
    let resultados = ""
    let titulo = ""
    let descriçao = ""
    let tags = ""
   
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descriçao = dado.descriçao.toLowerCase()
        tags = dado.tags.toLowerCase()
        inputSearch = inputSearch.toLowerCase()
       
        if (titulo.includes(inputSearch) || descriçao.includes(inputSearch) || tags.includes(inputSearch)) {
            
            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#">${dado.titulo}</a>
                    </h2>
                     <img src= ${dado.img} alt="#" class="image-anime">
                    <div class="descricao-geral">
                     <p class="descricao-meta" id="descricao">${dado.descriçao}</p>
                    <p class="descricao-meta" id="descricao-cap">${dado.capitulos}</p>
                    </div>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                    
                </div>
        `
            }
    }
        if (!resultados){
            section.innerHTML = "<p>nenhum anime encontrado</p>"
        }else{
            section.innerHTML = resultados
         }
    
}


