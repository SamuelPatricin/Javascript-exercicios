function calcular() {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, insira duas notas válidas.");
        return;
    }

    var media = (nota1 + nota2) / 2;
    var resultadoDiv = document.getElementById("resultado");

    if (media >= 6) {
        resultadoDiv.innerText = "APROVADO com média: " + media.toFixed(2);
        resultadoDiv.style.color = "blue";
    } else {
        resultadoDiv.innerText = "REPROVADO com média: " + media.toFixed(2);
        resultadoDiv.style.color = "red";
    }
}