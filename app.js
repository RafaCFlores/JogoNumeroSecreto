//let titulo = document.querySelector('h1');    maneira básica
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10.';



let tentativas = 0;
let numerosSorteados = [];
let qtd = 10;

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * qtd + 1);
    let qtdNumerosLista = numerosSorteados.length;

    if (qtdNumerosLista == qtd ) {

        numerosSorteados = [];
    };

    if (numerosSorteados.includes(numeroEscolhido)) {

        gerarNumeroAleatorio();
    } else {

        numerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
        
    };
    
   
    
    };


function verificarChute() {

    let chute =  document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    tentativas ++;

    if (chute == numeroSecreto) {

        limparCampo();

        document.getElementById("chute").setAttribute("disabled", true);

        document.getElementById("reiniciar").removeAttribute("disabled");

        
        exibeTextoNaTela("h1" , "Parabéns!");

        if (tentativas == 1 ) {
        exibeTextoNaTela("p" , "Você acertou na primeira tentativa!");
        };

        if (tentativas > 1 ) {
            exibeTextoNaTela("p" , "Você acertou usando " + tentativas + " tentativas.");
            };

            
    };
    
    if (chute > numeroSecreto) {

        exibeTextoNaTela("p" , "Você errou!!! Seu Chute foi maior que o Número Secreto.");
    };
    
    if (chute < numeroSecreto) {

        exibeTextoNaTela("p" , "Você errou!!! Seu Chute foi menor que o Número Secreto.");
    };

    limparCampo();

    };
      

function exibeTextoNaTela (tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

};


function limparCampo () {

    let chute =  document.querySelector('input');

    chute.value = "";

};


function reiniciarJogo() {

numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 0;
exibirMensagemInicial();
document.getElementById("chute").removeAttribute("disabled");
document.getElementById("reiniciar").setAttribute("disabled", true);

};


function exibirMensagemInicial() {

exibeTextoNaTela("h1" , "Jogo do Número Secreto");
exibeTextoNaTela("p" , "Escolha um número de 1 a 10 e divirta-se!");

};



exibirMensagemInicial();
document.getElementById("chute").removeAttribute("disabled");


numeroSecreto = gerarNumeroAleatorio();










