// FUNDAMENTOS DE PROGRAMACIÓN - PRÁCTICA
// Nombre del estudiante: _________________
// Fecha: _________________

// ============================================
// SECCIÓN 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

/**
 * Ejercicio 1.1: Declarar variables (2 puntos)
 * Crea tres variables con tu información personal
 * @returns {Object} - Objeto con nombre, edad y carrera
 */
function miInformacion() {
  // TODO: Declara las variables nombre, edad y carrera
  // Ejemplo: const nombre = "Juan";
  
  const nombre = "Luis Gerardo Sanchez Mendoza";
  const edad = 99;
  const carrera = "TSU";
  
  return { nombre, edad, carrera };
}

/**
 * Ejercicio 1.2: Operaciones aritméticas básicas (3 puntos)
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {Object} - Objeto con suma, resta, multiplicación y división
 */
function operacionesBasicas(a, b) {
  // TODO: Calcula suma, resta, multiplicación y división de a y b
  
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = b !== 0 ? a / b : null;
  
  return { suma, resta, multiplicacion, division };
}

/**
 * Ejercicio 1.3: Área de un rectángulo (2 puntos)
 * @param {number} base - Base del rectángulo
 * @param {number} altura - Altura del rectángulo
 * @returns {number} - Área del rectángulo
 */
function areaRectangulo(base, altura) {
  // TODO: Calcula y retorna el área (base * altura)
  return base * altura;
}

/**
 * Ejercicio 1.4: Conversión de temperatura (3 puntos)
 * Convierte grados Celsius a Fahrenheit
 * Fórmula: F = C * 9/5 + 32
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} - Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
  // TODO: Implementa la conversión
  return celsius * 9/5 + 32;
}

// ============================================
// SECCIÓN 2: CONDICIONALES (15 puntos)
// ============================================

/**
 * Ejercicio 2.1: Número par o impar (3 puntos)
 * @param {number} numero - Número a evaluar
 * @returns {string} - "par" o "impar"
 */
function parOImpar(numero) {
  // TODO: Usa el operador % (módulo) para determinar si es par o impar
  // Pista: Un número es par si numero % 2 === 0
  return numero % 2 === 0 ? "par" : "impar";
}

/**
 * Ejercicio 2.2: Calificación (4 puntos)
 * @param {number} nota - Nota del 0 al 100
 * @returns {string} - "Aprobado" si nota >= 60, "Reprobado" si no
 */
function evaluarNota(nota) {
  // TODO: Implementa la lógica con if/else
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
} 

/**
 * Ejercicio 2.3: El mayor de tres números (4 puntos)
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @param {number} c - Tercer número
 * @returns {number} - El número mayor
 */
function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

/**
 * Ejercicio 2.4: Clasificación de edad (4 puntos)
 * @param {number} edad - Edad de la persona
 * @returns {string} - "menor" (0-17), "adulto" (18-64), "mayor" (65+)
 */
function clasificarEdad(edad) {
  // TODO: Implementa la clasificación con if/else if/else
}

// ============================================
// SECCIÓN 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

/**
 * Ejercicio 3.1: Factorial (5 puntos)
 * Calcula el factorial de un número (n! = n * (n-1) * (n-2) * ... * 1)
 * Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * @param {number} n - Número entero positivo
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  // TODO: Implementa usando un bucle for
}

/**
 * Ejercicio 3.2: Suma de números del 1 al n (4 puntos)
 * @param {number} n - Número límite
 * @returns {number} - Suma de 1 + 2 + 3 + ... + n
 */
function sumaHastaN(n) {
  // TODO: Usa un bucle para sumar todos los números desde 1 hasta n
}

/**
 * Ejercicio 3.3: Tabla de multiplicar (5 puntos)
 * @param {number} numero - Número para generar su tabla
 * @returns {Array} - Array con los resultados de numero x 1 hasta numero x 10
 * Ejemplo: tablaMultiplicar(3) debe retornar [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 */
function tablaMultiplicar(numero) {
  // TODO: Genera un array con la tabla de multiplicar
}

/**
 * Ejercicio 3.4: Números pares hasta n (6 puntos)
 * @param {number} n - Número límite
 * @returns {Array} - Array con todos los números pares desde 2 hasta n
 * Ejemplo: numerosPares(10) debe retornar [2, 4, 6, 8, 10]
 */
function numerosPares(n) {
  // TODO: Crea un array con todos los números pares hasta n
}

// ============================================
// SECCIÓN 4: ARRAYS (25 puntos)
// ============================================

/**
 * Ejercicio 4.1: Suma de elementos de un array (4 puntos)
 * @param {Array<number>} numeros - Array de números
 * @returns {number} - Suma de todos los elementos
 */
function sumaArray(numeros) {
  // TODO: Suma todos los elementos del array
}

/**
 * Ejercicio 4.2: Promedio de un array (5 puntos)
 * @param {Array<number>} numeros - Array de números
 * @returns {number} - Promedio de los números
 */
function promedioArray(numeros) {
  // TODO: Calcula el promedio (suma total / cantidad de elementos)
}

/**
 * Ejercicio 4.3: Encontrar el máximo (6 puntos)
 * @param {Array<number>} numeros - Array de números
 * @returns {number} - El número más grande del array
 */
function encontrarMaximo(numeros) {
  // TODO: Encuentra y retorna el número más grande
}

/**
 * Ejercicio 4.4: Filtrar números mayores a un valor (5 puntos)
 * @param {Array<number>} numeros - Array de números
 * @param {number} limite - Valor límite
 * @returns {Array<number>} - Nuevo array solo con números mayores al límite
 */
function filtrarMayores(numeros, limite) {
  // TODO: Crea un nuevo array con solo los números mayores al límite
}

/**
 * Ejercicio 4.5: Invertir un array (5 puntos)
 * @param {Array} arr - Array a invertir
 * @returns {Array} - Nuevo array con los elementos en orden inverso
 */
function invertirArray(arr) {
  // TODO: Invierte el orden de los elementos
}

// ============================================
// SECCIÓN 5: ARRAYS BIDIMENSIONALES (30 puntos)
// ============================================

/**
 * Ejercicio 5.1: Crear una matriz (6 puntos)
 * Crea una matriz de filas x columnas llena de ceros
 * @param {number} filas - Número de filas
 * @param {number} columnas - Número de columnas
 * @returns {Array<Array<number>>} - Matriz de ceros
 */
function crearMatriz(filas, columnas) {
  // TODO: Crea una matriz de filas x columnas llena de ceros
}

/**
 * Ejercicio 5.2: Suma de elementos de una matriz (6 puntos)
 * @param {Array<Array<number>>} matriz - Matriz de números
 * @returns {number} - Suma de todos los elementos
 */
function sumaMatriz(matriz) {
  // TODO: Suma todos los elementos de la matriz
}

/**
 * Ejercicio 5.3: Obtener una fila (5 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceFila - Índice de la fila (empezando en 0)
 * @returns {Array<number>} - La fila especificada
 */
function obtenerFila(matriz, indiceFila) {
  // TODO: Retorna la fila indicada
}

/**
 * Ejercicio 5.4: Obtener una columna (7 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceColumna - Índice de la columna (empezando en 0)
 * @returns {Array<number>} - Array con los elementos de la columna
 */
function obtenerColumna(matriz, indiceColumna) {
  // TODO: Extrae todos los elementos de la columna indicada
}

/**
 * Ejercicio 5.5: Transponer una matriz (6 puntos)
 * La transpuesta intercambia filas por columnas
 * @param {Array<Array<number>>} matriz - Matriz original
 * @returns {Array<Array<number>>} - Matriz transpuesta
 */
function transponer(matriz) {
  // TODO: Crea la matriz transpuesta
}

// ============================================
// NO MODIFIQUES ESTA LÍNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
