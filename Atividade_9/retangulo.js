function retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    
    this.calculaArea = function () {
        var area = this.base * this.altura;
        alert("A Área do Retângulo é: " + area);
    }
}

var ret = new retangulo(9, 24);
ret.calculaArea();