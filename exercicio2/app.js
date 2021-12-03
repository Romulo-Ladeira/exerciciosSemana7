function concateArrays (array1, array2){
    
    let  novoArray = [...array1, ...array2]

    console.log(novoArray)
}

concateArrays([3, 5, 7], [7, 90, 1, 6])