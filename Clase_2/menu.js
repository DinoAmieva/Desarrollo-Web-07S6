const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para preguntar al usuario
function pregunta(pregunta) {
    return new Promise(resolve => {
        readline.question(pregunta, respuesta => {
            resolve(respuesta);
        });
    });
}

// Función principal async para poder usar await
async function menuPrincipal() {
    let opcion;
    do {
        console.clear(); // Limpia consola
        console.log(`
        === MENÚ PRINCIPAL ===
        1. If (Verificar número par/impar)
        2. For (Contar del 1 al número ingresado)
        3. Do While (Sumar números hasta llegar a 10)
        4. Suma (Sumar dos números)
        5. Potencia (Calcular potencia de un número)
        6. Array (Crear y mostrar array)
        7. Salir
        `);

        opcion = parseInt(await pregunta('Seleccione una opción: '));

        switch(opcion) {
            case 1:
                // If - Número es par o impar
                const numero = parseInt(await pregunta('Ingrese un número: '));
                console.log(numero % 2 === 0 ? 
                    `${numero} es par` : 
                    `${numero} es impar`);
                break;

            case 2:
                // For - Contar hasta el número ingresado
                const limite = parseInt(await pregunta('Ingrese hasta qué número contar: '));
                let resultado = '';
                for(let i = 1; i <= limite; i++) {
                    resultado += i + ' ';
                }
                console.log('Conteo:', resultado);
                break;

            case 3:
                // Do While - Sumar números hasta llegar a 10
                let suma = 0;
                let contador = 0;
                do {
                    contador++;
                    suma += contador;
                    console.log(`Suma actual: ${suma}`);
                } while(suma < 10);
                console.log(`Se necesitaron ${contador} números para superar 100`);
                break;

            case 4:
                // Suma de dos números
                const num1 = parseFloat(await pregunta('Ingrese el primer número: '));
                const num2 = parseFloat(await pregunta('Ingrese el segundo número: '));
                console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
                break;

            case 5:
                // Potencia de un numero
                const base = parseFloat(await pregunta('Ingrese la base: '));
                const exponente = parseInt(await pregunta('Ingrese el exponente: '));
                const potencia = Math.pow(base, exponente);
                console.log(`${base} elevado a la ${exponente} es: ${potencia}`);
                break;

            case 6:
                // Array
                const array = [];
                const cantidad = parseInt(await pregunta('¿Cuántos elementos desea agregar al array? '));
                for(let i = 0; i < cantidad; i++) {
                    const elemento = await pregunta(`Ingrese el elemento ${i + 1}: `);
                    array.push(elemento);
                }
                console.log('Array creado:', array.join(', '));
                break;

            case 7:
                console.log('¡Gracias por usar el programa!');
                readline.close();
                return;

            default:
                console.log('Opción no válida');
        }
        
        await pregunta('\nPresione Enter para continuar...');
    } while(opcion !== 7);
}

// Ejecutar el menú
menuPrincipal();