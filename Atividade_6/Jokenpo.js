function pc() {
    return parseInt(Math.random() * (4 - 1) + 1);
}

function play() {
    var escolha;
    if (document.getElementById("Escolha").value == "pedra" || document.getElementById("Escolha").value == "Pedra") {
        escolha = 1;
    } else if (document.getElementById("Escolha").value == "papel" || document.getElementById("Escolha").value == "Papel") {
        escolha = 2;
    } else if (document.getElementById("Escolha").value == "tesoura" || document.getElementById("Escolha").value == "Tesoura") {
        escolha = 3;
    }

    console.log(pc(), escolha);

    if (pc() === escolha) {
        document.getElementById("Ganhador").value = "Empate";
    } else if ((pc() == 1 && escolha == 3) || (pc() == 3 && escolha == 1)) {
        document.getElementById("Ganhador").value = "Pedra quebra tesoura";
    } else if ((pc() == 2 && escolha == 1) || (pc() == 1 && escolha == 2)) {
        document.getElementById("Ganhador").value = "Papel cobre pedra";
    } else if ((pc() == 3 && escolha == 2) || (pc() == 2 && escolha == 3)) {
        document.getElementById("Ganhador").value = "Tesoura corta papel";
    }
}
