function euNaoEspero(){
    aguarda5Segundos()
    console.log("Eu não espero")
}

function euEspero(){
    aguarda5Segundos()
    .then(() =>console.log("Eu  espero"))
    
}



async function aguarda5Segundos() {
    await new Promise(resolve => setTimeout(resolve, 5000)); // 3 sec
    console.log("Função diz: Terminei!")
}

euNaoEspero()
euEspero()