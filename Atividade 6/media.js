        /* VARIAVEIS GLOBAIS */

        var nome;
        var nota1; 
        var nota2;
        var nota3;
        var nota4;
        var resultado;

        nome = prompt("Qual é o seu nome?");
        nota1 = prompt("Nota 1");
        nota2 = prompt("Nota 2");
        nota3 = prompt("Nota 3");
        nota4 = prompt("Nota 4");

        resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

        alert(" Aluno: " + nome + "\n Nota 1: " + nota1 + "\n Nota 2: " + nota2 + 
            "\n Nota 3: " + nota3 + "\n Nota 4: " + nota4 + "\n Média: " + resultado);