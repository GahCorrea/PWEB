function troca() {
    var text = document.getElementById('texto').value;
    if (document.getElementById('escolha1').checked) {
        alert("Sua mensagem em maiúscula fica: " + text.toUpperCase());
    }
    if (document.getElementById('escolha2').checked) {
        alert("Sua mensagem em minúscula fica: " + text.toLowerCase());
    }
    if (document.getElementById('escolha1').checked == false && document.getElementById('escolha2').checked == false) {
        alert("Escolha uma opção!");
    }
}
