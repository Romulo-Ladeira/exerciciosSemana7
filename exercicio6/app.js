let lista = document.getElementById("lista")

async function consultaCep(){
    const cep = "01001000" 
    const url = `https://viacep.com.br/ws/${cep}/json`

    const response = await fetch(url)
    const texto = await response.text()

    let item = document.createElement("li")

    item.innerHTML = texto

    lista.appendChild(item)
}

consultaCep()