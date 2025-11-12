## 🧮 Fundamentos de Programación - Práctica Final
## Fecha: 11 de Noviembre de 2025
## Alumno: Luis Gerardo Sánchez Mendoza

## -- 🎯 Objetivo de la Documentación -- 
El objetivo de este documento es registrar y explicar las soluciones desarrolladas durante la práctica final de Fundamentos de Programación.
Se incluyen todas las secciones y ejercicios realizados en clase, documentando el proceso, razonamiento y código correspondiente.
Además, se busca aplicar buenas prácticas de documentación técnica utilizando Markdown y control de versiones con Git y GitHub.

## 🧠 Ejercicios Realizados
## -- 🧩 SECCIÓN 1: Variables y Tipos de Datos
## --> Ejercicio 1.1 - Mi Información Personal
Enunciado:
Crear tres variables con el nombre, edad y carrera del alumno, y devolverlas en un objeto.
Código:
function miInformacion() {
  const nombre = "Luis Gerardo Sanchez Mendoza";
  const edad = 99;
  const carrera = "TSU";
  return { nombre, edad, carrera };
}

Procedimiento:
Se declaran tres variables (nombre, edad, carrera).
Se agrupan dentro de un objeto usando { nombre, edad, carrera }.
Se retorna el objeto.

## --> Ejercicio 1.2 - Operaciones Aritméticas Básicas
Enunciado:
Dadas dos variables a y b, calcular su suma, resta, multiplicación y división.
Código:
function operacionesBasicas(a, b) {
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = b !== 0 ? a / b : null;
  return { suma, resta, multiplicacion, division };
}

Procedimiento:
Se realizan operaciones básicas entre a y b.
Se evita la división entre cero usando un condicional.
Se devuelven los resultados dentro de un objeto.

## --> Ejercicio 1.3 - Área de un Rectángulo
Enunciado:
Calcular el área de un rectángulo dado su base y altura.
Código:
function areaRectangulo(base, altura) {
  return base * altura;
}

Procedimiento:
Se aplica la fórmula del área: base × altura.
Se retorna el resultado como número.
## --> Ejercicio 1.4 - Conversión de Temperatura
Enunciado:
Convertir grados Celsius a Fahrenheit con la fórmula F = C × 9/5 + 32.
Código:
function celsiusAFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

Procedimiento:
Se aplica directamente la fórmula de conversión.
El valor resultante se devuelve como número.

## --🧩 SECCIÓN 2: Condicionales
Ejercicio 2.1 - Número Par o Impar
Enunciado:
Determinar si un número es par o impar usando el operador módulo %.
Código:
function parOImpar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

Procedimiento:
Se evalúa si numero % 2 es igual a 0.
Si es verdadero, retorna "par", en caso contrario "impar".

## --> Ejercicio 2.2 - Calificación
Enunciado:
Dada una calificación (0–100), devolver "Aprobado" si es mayor o igual a 60, o "Reprobado" en caso contrario.
Código:
function evaluarNota(nota) {
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}

Procedimiento:
Se usa una estructura if/else para comparar la nota.
Si cumple la condición >= 60, se devuelve "Aprobado".
Si no, se devuelve "Reprobado".

## -->Ejercicio 2.3 - Mayor de Tres Números
Enunciado:
Identificar el número mayor entre tres valores dados.
Código:
function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

Procedimiento:
Se comparan los tres valores usando condiciones if y operadores lógicos &&.

## --> Ejercicio 2.4 - Clasificación de Edad
Enunciado:
Clasificar una edad en las categorías:
"menor" si 0–17
"adulto" si 18–64
"mayor" si 65+
Código:
function clasificarEdad(edad) {
  if (edad >= 0 && edad <= 17) return "menor";
  else if (edad >= 18 && edad <= 64) return "adulto";
  else if (edad >= 65) return "mayor";
  else return "edad inválida";
}

Procedimiento:
Se usan comparaciones múltiples en if/else if/else para determinar el rango.

## --🧩 SECCIÓN 3: Funciones y Bucles
Ejercicio 3.1 - Factorial
Código:
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

## --> Ejercicio 3.2 - Suma hasta N
Código:
function sumaHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

## --> Ejercicio 3.3 - Tabla de Multiplicar
Código:
function tablaMultiplicar(numero) {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }
  return tabla;
}

## --> Ejercicio 3.4 - Números Pares
Código:
function numerosPares(n) {
  const pares = [];
  for (let i = 2; i <= n; i += 2) {
    pares.push(i);
  }
  return pares;
}

## --🧩 SECCIÓN 4: Arrays
Ejercicio 4.1 - Suma de Elementos
function sumaArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

## --> Ejercicio 4.2 - Promedio de un Array
function promedioArray(numeros) {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

## --> Ejercicio 4.3 - Encontrar el Máximo
function encontrarMaximo(numeros) {
  if (numeros.length === 0) return 0;
  return Math.max(...numeros);
}

## --> Ejercicio 4.4 - Filtrar Mayores a un Valor
function filtrarMayores(numeros, limite) {
  const mayores = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      mayores.push(numeros[i]);
    }
  }
  return mayores;
}

## --> Ejercicio 4.5 - Invertir un Array
function invertirArray(arr) {
  return arr.slice().reverse();
}
## --🧩 SECCIÓN 5: Arrays Bidimensionales (Matrices)
## --> Ejercicio 5.1 - Crear una Matriz
function crearMatriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    matriz.push(fila);
  }
  return matriz;
}

## --> Ejercicio 5.2 - Suma de una Matriz
function sumaMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}

## --> Ejercicio 5.3 - Obtener una Fila
function obtenerFila(matriz, indiceFila) {
  if (indiceFila < 0 || indiceFila >= matriz.length) {
    return [];
  }
  return matriz[indiceFila];
}
## --> Ejercicio 5.4 - Obtener una Columna
function obtenerColumna(matriz, indiceColumna) {
  const columna = [];
  for (let i = 0; i < matriz.length; i++) {
    if (indiceColumna < matriz[i].length) {
      columna.push(matriz[i][indiceColumna]);
    }
  }
  return columna;
}

## --> Ejercicio 5.5 - Transponer una Matriz
function transponer(matriz) {
  const transpuesta = [];
  for (let i = 0; i < matriz[0].length; i++) {
    const fila = [];
    for (let j = 0; j < matriz.length; j++) {
      fila.push(matriz[j][i]);
    }
    transpuesta.push(fila);
  }
  return transpuesta;
}

## --✅ Conclusión ---
Esta práctica permitió reforzar los conceptos fundamentales de programación en JavaScript, desarrollando la habilidad de resolver problemas de álgebra mediante código estructurado.
Además, se aplicaron buenas prácticas de documentación y control de versiones con Git y GitHub, preparando el terreno para trabajos más complejos en programación y estructuras de datos.

## -👨‍💻 Luis Gerardo Sánchez Mendoza
## -📅 Tec de Software — 11 de Noviembre de 2025