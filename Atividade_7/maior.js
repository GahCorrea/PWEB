function verifica() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    if ((num1 >= num2) && (num1 >= num3)) {
        alert("O maior número é: " + num1);
    } else if ((num2 >= num1) && (num2 >= num3)) {
        alert("O maior número é: " + num2);
    } else {
        alert("O maior número é: " + num3);
    }
    if (num1 == num2 || num1 == num3) {
        alert("O número que se repete é: " + num1);
    }
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('num1').focus();
}
