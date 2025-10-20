    
        var opcao;
        var opcaoaleatoria; 
        var random;
while (opcao != "Pare") {
    if (opcao == "Pare") {
            break;
    }
        opcao = prompt("Escolha uma opção: \n Pedra \n Papel \n Tesoura");

        opcaoaleatoria = Math.floor(Math.random() * 3);

        switch (opcaoaleatoria) { 
            case 0:
                random = "Pedra";
                break;  
            case 1:    
                random = "Papel";
                break;
            case 2:
                random = "Tesoura";
                break;
        }
if (opcao == random) {
    alert("A opção do computador foi: " + random + "\nEmpate!");
} else if ((opcao == "Pedra" && random == "Tesoura") || (opcao == "Papel" && random == "Pedra") 
    || (opcao == "Tesoura" && random == "Papel")) {
    alert("A opção do computador foi: " + random + "\nVocê ganhou!");
} else {
    alert("A opção do computador foi: " + random + "\nVocê perdeu!");
}
}