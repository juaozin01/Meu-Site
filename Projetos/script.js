function somar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
function subtrair() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
function multiplicar() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
function dividir() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = numero1 / numero2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
function limpar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerText = "Resultado:";
}