function adicionarTarefa() {
    let campo = document.getElementById("tarefa");
    let texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let novaTarefa = document.createElement("li");

    novaTarefa.innerText = texto;

    novaTarefa.onclick = function() {
        novaTarefa.remove();
    };

    document.getElementById("lista").appendChild(novaTarefa);

    campo.value = "";
}
