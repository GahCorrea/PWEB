var quebrada = false;

function mudaJanela(tipo) {
    if (!quebrada) {
        document.getElementById("janela").src = "./" + tipo + ".jpg";

        if (tipo == 'janela_aberta') {
            obj.innerHTML = "Janela Aberta";
        } else if (tipo == 'janela_fechada') {
            obj.innerHTML = "Janela Fehcada";
        }

        if (tipo == 'janela_quebrada') {
            quebrada = true;
            obj.innerHTML = "Janela Quebrada";
        }
    }
}
