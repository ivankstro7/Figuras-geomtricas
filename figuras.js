// Código del cuadrado

console.group("cuadrados");

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el area del cuadrado es: " + areaCuadrado + "cm2");

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();

// Código del triángulo

console.group("triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("los lados del triángulo miden: " + ladoTriangulo1 + "cm," + " " + ladoTriangulo2 + "cm," + " " + baseTriangulo + "cm")

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triángulo es: " + areaTriangulo + "cm2");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del circulo
console.group("circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("pi es: " + PI);

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// interaccion con HTML

function calcularPerimetro() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const resultado = perimetroCuadrado(value);
    const perimetro = document.getElementById("perimetro");

    perimetro.style.color = "#423F3F";

    document.getElementById("perimetro").innerHTML = resultado;  
}

function calcularArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value
    const resultado = areaCuadrado(value);
    const area = document.getElementById("area");

    area.style.color = "#423F3F";

    document.getElementById("area").innerHTML = resultado;  
}

function resetInput() {
    document.getElementById("InputCuadrado").value="";
    const perimetro = document.getElementById("perimetro");
    const area = document.getElementById("area");

    perimetro.style.color = "#fff";
    area.style.color = "#fff";
}
