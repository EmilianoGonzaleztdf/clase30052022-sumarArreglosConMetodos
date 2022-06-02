let n: number = 3;
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

console.log("cargando V1");
cargarValores(v1, n);
console.log("cargando V2");
cargarValores(v2, n);
console.log("ejecuntando suma");
sumar(v1, v2, vSuma, n);
