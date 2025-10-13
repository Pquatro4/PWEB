        var num1; 
        var num2;
        var adicao;
        var subtracao;
        var produto;
        var divisao;
        var resto;

        num1 = prompt("Número 1");
        num2 = prompt("Número 2");

        adicao = (parseFloat(num1)  + parseFloat(num2));
        subtracao = num1 - num2;
        produto = num1 * num2;
        divisao = num1 / num2;
        resto = num1 % num2;

        alert(" Número 1: " + num1 + "\n Número 2: " + num2 + "\n Adição: " + adicao + "\n Subtração: " + subtracao + "\n Produto: " + produto + "\n Divisão: " + divisao + "\n Resto: " + resto);