const resultado = document.querySelector(".resultado");
const botoes = document.querySelectorAll(".botoes input"); 
const audioClick = document.querySelector("#audioClick");
let numeroAtual = null;
let numeroAntigo = null;
let numeroDisplay = null;
let numeroNovo = null;
let operadorAtual = null;
let operadorAntigo = null;
let operadoAtivo = false;  

// listener

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        tocarAudio();

        if(checarNumero(botao.value)) { // verifica qual número é
            adicionarDigito(botao.value);

        } else { // se não for número, verifica qual operador é 
            checarOperador(botao.value);
        }

    })
});



// funções logica da calculadora
const converterNumero = (numero) => {return parseFloat(numero)}

const checarNumeroPreenchido = (numero) => {
    if(numero!=null) {return true} else {return false} 
}
const checarOperador=(operador) => {
    if(/^[=/%]$/.test(operador) || operador == "AC" || operador == "+/-") {
        console.log("operador não pode ser adicionado")
    }else if(resultado.innerHTML != "") {

        if(/^[+-/*]$/.test(resultado.innerHTML)) {
            console.log("operador já adicionado")
        } else {
            adicionarDigito(operador)
        }
    
    }
    
     
    
}





const checarNumero = numero => {return /^[0-9,]$/.test(numero)};

const calcular = (operador) => {
    switch (operador) {
        case "AC": 
            limparDisplay();
            console.log("ac clicado, tela limpa")
        break;
        case "+":   
            numeroDisplay = converterNumero(numeroAntigo) + converterNumero(numeroAtual); 
            limparDisplay(); 
            adicionarDigito(numeroDisplay); 
            
            break;
    }
}


// funções mudança do display
const limparDisplay = () => {
    resultado.innerHTML="0";
    numeroAntigo = null;
    numeroAtual = null;
    operadorAtual = null;
    numeroDisplay = null; 
}

const adicionarDigito = digito => {
    if(checarNumero(digito)) {
        if(numeroAtual == null) {
            numeroAtual = digito
        } else {
            numeroAtual += digito;
        }
    }
    if(resultado.innerHTML == "0") {
        resultado.innerHTML ="";
    }
    
    resultado.innerHTML += digito; 
}


// demais
const tocarAudio= ()=> {
    audioClick.play();
}
