function validarDados() {

    // usando a posicao no formulario
    if (document.forms.contato.elements[1].value == "" || document.forms.contato.elements[1].length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.contato.elements[1].focus();
    } else {
        // usando o nome no formulario
        if (document.forms.contato.elements["emailUsuario"].value == "" || document.forms.contato.elements["emailUsuario"].value.indexOf('@') == -1 || document.forms.contato.elements["emailUsuario"].value.indexOf('.') == -1) {
            alert("Preencha campo E-MAIL corretamente!");
            document.forms.contato.elements.emailUsuario.focus();
        } else {
            //usando o nome no formulario de maneira direta
            if (document.forms.contato.elements.comentario.value == "" || document.forms.contato.elements.comentario.value.length < 20) {
                alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
                document.getElementById("comentario").focus();
            } else {
                if (document.forms.contato.elements.enao.checked) {
                    alert("Volte sempre à esta página!");
                } else {
                    alert("Que bom que você voltou a visitar esta página!");
                }
            }
        }
    }
}
