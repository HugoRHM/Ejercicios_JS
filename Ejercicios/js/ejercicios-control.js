// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function puedeVotar(edad){
    if (edad >= 18) {
        console.log(`La persona de ${edad} años puede votar.`);
    } else {
        console.log(`La persona de ${edad} años no puede votar.`);
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function promedioCalificaciones(cali1, cali2, cali3, cali4){
    const promedio = (cali1 + cali2 + cali3 + cali4) / 4;
    if(promedio >= 7){
        console.log(`Aprobado`);
    } else {
        console.log(`Reprobado`);
    }
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function numeroPrimo(numero) {
    if (numero <= 1) {
        console.log(`Este número no es valido.`);
    } else if (numero <= 3) {
        console.log(`Este número es primo.`);
    } else if (numero % 2 === 0 || numero % 3 === 0) {
        console.log(`Este número no es primo.`);
    }
    // Desde 5 en adelante
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        console.log(`Este número no es primo.`);
      } else{
        console.log(`Este número es primo.`);
      }
    }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function numeroDivisible(numeroDiv){
    if(numeroDiv % 7 === 0 && numeroDiv % 8 === 0){
        console.log(`El número SI es divisible entre 7 y 8.`);
    } else{
        console.log(`El número NO es divisible entre 7 y 8.`);
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */


function numeroDivisible2(numeroDiv2){
    if(numeroDiv2 % 4 === 0 || numeroDiv2 % 9 === 0){
        console.log(`Verdadero.`);
    } else{
        console.log(`Falso.`);
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora(operacion, num1, num2) {
    let resultado;
    switch (operacion) {
      case 1:
        resultado = num1 + num2;
        break;
      case 2:
        resultado = num1 - num2;
        break;
      case 3:
        resultado = num1 * num2;
        break;
      case 4:
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = "No se puede dividir por cero";
        }
        break;
      default:
        resultado = "Operación no válida";
    }
    return resultado;
  }

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function recomendarPelicula(categoria) {
    let recomendacion;
    switch (categoria.toLowerCase()) {
      case "accion":
        recomendacion = "Misión Imposible";
        break;
      case "drama":
        recomendacion = "La La Land";
        break;
      case "comedia":
        recomendacion = "Super cool";
        break;
      case "romance":
        recomendacion = "Elemental";
        break;
      case "suspenso":
        recomendacion = "El Código Da Vinci";
        break;
      case "terror":
        recomendacion = "El Conjuro";
        break;
      default:
        recomendacion = "No tenemos recomendaciones para esta categoría.";
    }
    return recomendacion;
  }

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function cajeroATM(accion) {
    if (accion === 1) {
      console.log("Realizando retiro de dinero...");
    } else if (accion === 2) {
      console.log("Realizando transferencia de dinero...");
    } else if (accion === 3) {
      console.log("Realizando depósito de dinero...");
    } else if (accion === 4) {
      console.log("Realizando pago de servicios...");
    } else {
      console.log("Opción no válida. Por favor, elija una opción válida.");
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function convertirDivisa(cantidad, opcion) {
    let resultado;
    switch (opcion) {
      case 1:
        resultado = cantidad / 17.08;
        console.log(`El equivalente a dolares es ${resultado}.`) 
        break;
      case 2:
        resultado = cantidad / 18.24; 
        console.log(`El equivalente a euros es ${resultado}.`) 
        break;
      case 3:
        resultado = cantidad / 0.12; 
        console.log(`El equivalente a yenes japoneses es ${resultado}.`) 
        break;
      case 4:
        resultado = cantidad / 21.16; 
        console.log(`El equivalente a libra esterlina es ${resultado}.`) 
        break;
      case 5:
        resultado = cantidad / 19.02; 
        console.log(`El equivalente en franco suizo es ${resultado}.`) 
        break;
      default:
        resultado = "Opción no válida. Por favor, elija una opción válida.";
    }
    return resultado;
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function aplicarDescuento10(precio, codigoDescuento) {
    const codigoCorrecto = "DESCUENTO10";
    const porcentajeDescuento = 0.10; 
  
    if (codigoDescuento === codigoCorrecto) {
      const descuento = precio * porcentajeDescuento;
      const precioConDescuento = precio - descuento;
      console.log(`El precio con descuento es ${precioConDescuento}.`)
    } else {
        console.log(`El codigo de descuento es incorrecto.`)
    }
  }
































































