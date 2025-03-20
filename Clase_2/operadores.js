let numero=6

console.log(numero<7)
console.log(numero == '6')
console.log(numero === '6')

console.log(5>10 && 15<20)
console.log(5>10 || 20>15)
console.log(5<10 && 20<15 || 20<3)

//operadores ternarios
let esta_lloviendo = true
esta_lloviendo ? console.log("Esta lloviendo") : console.log("No esta lloviendo")

//longitud
let nombre_completo = " Dino Amieva"
console.log(nombre_completo.length)
//acceso a index de caracteres
console.log(nombre_completo[6])
console.log(nombre_completo.slice(1,7))

let mensaje_largo = "Hola como estas, espero que estes bien"
console.log(mensaje_largo)
//reemplazar caracteres
console.log(mensaje_largo.replace('Amieva','Garza'))
let nombre_remplazo = nombre_completo.replace('Amieva','Garza')
console.log(nombre_ccompleto.includes('Amieva'))
let opcion=0
switch (opcion){
    case 1:
        console.log("Entraste a la opcion 1")
        break;
    case 2:
        console.log("Entraste a la opcion 2")
        break;
    default:
        console.log("Opcion no valida")
        break;
}
