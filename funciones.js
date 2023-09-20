/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */


/**CALCULAR EL PERIMETRO DE UN CIRCULO */
// Función para calcular el perímetro de un círculo
function calcularPerimetroCirculo(radio) {
    // Definimos el valor de Pi (π)
    const PI = 3.1415;
    // Calculamos el perímetro usando la fórmula
    const perimetro = 2 * PI * radio;   
    console.log(`El perímetro es: ${perimetro}`);
  }

  /**CALCULAR EL AREA DE UN RECTANGULO */
  function calcularAreaRectangulo(base, altura){
    const baseRectangulo = base;
    const alturaRectangulo = altura;
    const area = base * altura; 
    console.log(`El área del rectángulo es: ${area}`);
  }

  /**CALCULAR EL CUADRADO DE UN NÚMERO */
  function cuadradoNumero(numero){
    const cuadrado = numero * numero;
    console.log(`El cuadrado del número que ingresaste es: ${cuadrado}`);
  }

  /**CALCULAR LA CONVERSIÓN DE °C A °F*/
  function conversionTemperatura(grados){
    const farenheit = (grados * 1.8) + 32;
    console.log(`La transformación de °C a °F es: ${farenheit}`);
  }

  /**CALCULAR EL VALOR DEL VOLTAJE DADAS LA RESISTIVIDAD Y LA CORRIENTE*/
  function calcularVoltaje(resistividad, corriente){
    const resis = resistividad;
    const corr = corriente;
    const voltaje = resis * corr; 
    console.log(`El valor del voltaje es: ${voltaje}`);
  }

  /**CALCULAR VOLUMEN DE UNA ESFERA */
  function volumenEsfera(esferaRadio){
    const PI = 3.1415;
    const volumen = (3/4) * (PI) * (esferaRadio**3);
    console.log(`El volumen de la esfera es: ${volumen}`);
  }
  