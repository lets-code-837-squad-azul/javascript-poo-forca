class Usuario {
    constructor(nome, email) {
        this.nome = nome 
        this.email = email
        //  Contador de Vitórias e Derrotas
        //  ITEM #4
        this.vitorias = 0
        this.derrotas = 0
    }
};

function iniciaJogo() {
    //  ITEM #1 e #5
    let nome, email;
    while (true){
        nome = prompt("Digite seu nome:");
        email = prompt("Digite seu email:");
        if ((nome != '' && email != '') && (nome != null && email != null)) break;
        else alert('Nome ou e-mail inválido.');
    }

    const jogador = new Usuario(nome, email);
    
    //  ITEM #3
    const palavras = {
        educacao: ['escola', 'biblioteca', 'professor'],
        saude: ['hospital', 'medicamento', 'enfermeiro'],
        meio_ambiente: ['ecossistema', 'fauna', 'flora']
    };

    //  ITEM #5
    let tema;
    while (true){
        tema = prompt("Qual tema deseja jogar?\n1 - EDUCAÇÃO\n2 - SAÚDE\n3 - MEIO AMBIENTE");
        if (tema == 1 || tema == 2 || tema == 3) break;
        else alert('Opção invalida!!! Digite 1, 2 ou 3. ');
    }
    
    let palavra;
    if(tema == 1) {
        palavra = palavras.educacao[Math.floor(Math.random() * palavras.educacao.length)];
        console.log('Palavra do tema educação:', palavra);
    } else if(tema == 2) {
        palavra = palavras.saude[Math.floor(Math.random() * palavras.saude.length)];
        console.log('Palavra do tema saúde:', palavra);
    } else {
        palavra = palavras.meio_ambiente[Math.floor(Math.random() * palavras.meio_ambiente.length)];
        console.log('Palavra do tema meio ambiente:', palavra);
    }

    let forca = palavra.split('');
    let forca2 = Array(forca.length).fill("_");
    let letra;
    let erro = 0;
    let acertou = false;
    while(erro < 7) {
        //  Inserir validação nas entradas abaixo.
        //  TODO ITEM #5
        while (true){
            letra = prompt('Digite uma letra:');
            if (letra != null && letra.length == 1){  // adicionado verificação do null pois estava quebrando ao clicar no cancelar
                letra.toLowerCase();
                //W
                break;
            } else { alert('Digite um caracter de a-z')}
        }

        console.log('letra:', letra);
        for(let i = 0; i < forca.length; i++) {  // percorre a palavra letra por letra

            if(forca[i] == letra) {  // compara se a palavra contém a letra digitada
                console.log('acertou', letra);
                forca2[i] = letra;  //  adiciona a letra correta e no local correto
                acertou = true;  // flag para não contabilizar erro
                if(forca.join("") == forca2.join("")) erro = 8;  // verifica se a palavra está completa e finaliza
                console.log('forca2:', forca2);
            }
        }

        if(acertou == false) {
            console.log("Você errou!");
            console.log('Você usou: ', ++erro, " de 7 tentativas");
        }    
        acertou = false;  //  reseta a flag de erro
    }

    if(forca.join("") == forca2.join("")) {
        console.log("Você ganhou!");
        jogador.vitorias++;
    } else {
        console.log("Você perdeu!");
        jogador.derrotas++;
    }
    console.log(`Vitórias: ${jogador.vitorias}\nDerrotas: ${jogador.derrotas}`);
};

//  Loop infinito para jogar novamente até o usuário desejar sair
//  ITEM #2
let jogar = true;
let resposta;
while(jogar) {  //  Implicitamente: jogar == true

    iniciaJogo();

    //  ITEM #5
    while(resposta != 1 && resposta != 2) {
        resposta = prompt("Deseja jogar novamente?\n1 - SIM\n2 - NÃO");
        if (resposta == 2 ) jogar = false;
        else if (resposta == 1) break;
        else alert('Opção invalida!!! Digite 1 ou 2.');
    }
};
