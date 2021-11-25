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

// menu

function showTriangle() {

    const square = document.getElementById("form-square");
    const triangle = document.getElementById("form-triangle");
    const btnTriangle = document.getElementById("triangle");    
    const btnSquare = document.getElementById("square");
    const iconTriangle = document.getElementById("icon-triangle");
    const iconBlackTriangle = document.getElementById("icon-Whitetriangle")
    const iconSquare = document.getElementById("icon-square");
    const iconBlackSquare = document.getElementById("icon-blackSquare");

    square.style.display = "none";
    triangle.style.display = "block";

    iconTriangle.style.display = "none";
    iconBlackTriangle.style.display = "block";
    btnTriangle.style.background = "#41B883",
    btnTriangle.style.color = "#fff",
    btnTriangle.style.border = "none";

    iconSquare.style.display = "none";
    iconBlackSquare.style.display = "block";
    btnSquare.style.background = "#fff";
    btnSquare.style.color = "#423F3F";
    btnSquare.style.border = "1px solid #D8DCE6";    
}

function showScuare() {

    const square = document.getElementById("form-square");
    const triangle = document.getElementById("form-triangle");
    const btnTriangle = document.getElementById("triangle");    
    const btnSquare = document.getElementById("square");
    const iconTriangle = document.getElementById("icon-triangle");
    const iconBlackTriangle = document.getElementById("icon-Whitetriangle")
    const iconSquare = document.getElementById("icon-square");
    const iconBlackSquare = document.getElementById("icon-blackSquare");

    square.style.display = "block";
    triangle.style.display = "none";

    iconTriangle.style.display = "block";
    iconBlackTriangle.style.display = "none";
    btnTriangle.style.background = "#fff",
    btnTriangle.style.color = "#423F3F",
    btnTriangle.style.border = "1px solid #D8DCE6";

    iconSquare.style.display = "block";
    iconBlackSquare.style.display = "none";
    btnSquare.style.background = "#41B883";
    btnSquare.style.color = "#fff";
    btnSquare.style.border = "none";    
}

// cuadrado

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

// cuadrado

// triangulo

function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("InputSideA").value; 
    const ladoB = document.getElementById("InputSideB").value;
    const base = document.getElementById("InputBase").value;
    const resultado = ladoA + ladoB + base;
    const perimetro = document.getElementById("perimetroTriangulo");

    perimetro.style.color = "#423F3F"

    document.getElementById("perimetroTriangulo").innerHTML = resultado;  
}

function calcularAreaTriangulo() {     
    const base = document.getElementById("InputBase").value;
    const altura = document.getElementById("InputHeight").value;
    const resultado = (base * altura) / 2;
    const area = document.getElementById("areaTriangulo");

    area.style.color = "#423F3F"

    document.getElementById("areaTriangulo").innerHTML = resultado;  
}

function resetInputTriangulo() {
    document.getElementById("InputSideA").value="";
    document.getElementById("InputSideB").value="";
    document.getElementById("InputBase").value="";
    document.getElementById("InputHeight").value="";
    

    const perimetro = document.getElementById("perimetroTriangulo");
    const area = document.getElementById("areaTriangulo");

    perimetro.style.color = "#fff";
    area.style.color = "#fff";
}