let n: number = 0;
let i: number = 0;
let v1: number[] = new Array(n);
let v2: number[] = new Array(n);
let vSuma: number[] = new Array(n);

function cargarValores(v: number[], n: number) {
  for (i = 0; i < n; i++) {
    v[i] = Number(
      prompt("ingrese el numero que ira en la posicion " + (i + 1))
    );
  }
}
function sumar(v1: number[], v2: number[], vSuma: number[], n: number) {
  let i: number;
  for (i = 0; i < n; i++) {
    vSuma[i] = v1[i] + v2[i];
  }
}
function mostrarArreglo(v: number[], n: number) {
  let i: number;
  for (i = 0; i < n; i++) {
    console.log("se cargo el numero: " + v[i], "en la posicion: " + i);
  }
}
function cargarN(a: number) {
  a = Number(prompt("ingrese la longitud del arreglo"));
  if (a <= 0) {
    console.log("usted ingreso un valor no permitido");
  } else {
    n = a;
  }

  console.log("longitud del arreglo deseada por el usuario: " + n);
}

alert(
  "usted esta por ejecutar una calculadora de los elementos de cada posicion de un ARRAY ¿desea proceder?"
);
alert(
  "usted esta por cargar el valor de N (longitud del array) ¿desea proceder?"
);
cargarN(n);
alert("usted esta por cargar los valores de V1 ¿desea proceder?");
console.log("carga V1 : OK");
cargarValores(v1, n);
mostrarArreglo(v1, n);
alert("usted esta por cargar los valores de V2 ¿desea proceder?");
console.log("carga V2 : OK");
cargarValores(v2, n);
mostrarArreglo(v2, n);
alert(
  "se esta por ejecutar la suma de los elementos de cada una de las posiciones de V1 y V2 ¿desea proceder?"
);
console.log("proceso de SUMA : OK");
sumar(v1, v2, vSuma, n);
console.log(
  "la suma de los elementos de cada una de las posiciones de V1: " + v1,
  " y V2: " + v2,
  "es: " + vSuma
);
console.log("づ￣ 3￣)づ fin del programa (っ◕‿◕)っ");
