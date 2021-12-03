function multiplicarNumeros (...rest){
    let resultado = rest[0]    
    for(let i = 1; i < rest.length ; i++){
        
        resultado *= rest[i]
    }

    console.log(resultado)
}

multiplicarNumeros(2, 2, 2, 10)