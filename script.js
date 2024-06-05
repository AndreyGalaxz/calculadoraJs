const resultado = document.querySelector(".resultado");
const botoes = document.querySelectorAll(".botoes input"); 
const audioClick = document.querySelector("#audioClick");
let numeroAtual = null;
let numeroAntigo = null;
let numeroDiplay = null;
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
const checarOperador=(operador) => {
    if(operador == "AC") {
        limparDisplay();
    }
    
    if(numeroAtual == null || numeroAntigo == null) { // só uma parte foi preenchida
        operadorAntigo = operador; 
        numeroAntigo = numeroAtual;
        numeroAtual= null;
        adicionarDigito(operadorAntigo)
    
    } else {
        calcular(operadorAntigo); 
        operadorAtual = operador;
        
    }
}
const checarNumero = numero => {
    
    return /^[0-9,]$/.test(numero)
};

const calcular = (operador) => {
    switch (operador) {
        
        case "+/-":
                
            break;
        case "%":
            
            
            break;
        case "/":
            console.log("Botão / clicado");
            // Ação para o botão "/"
            break;
        case "*":
            console.log("Botão * clicado");
            // Ação para o botão "*"
            break;
        case "-":
            console.log("Botão - clicado");
            // Ação para o botão "-"
            break;
        case "+":   
            numeroDiplay = converterNumero(numeroAntigo) + converterNumero(numeroAtual); 
            limparDisplay(); 
            adicionarDigito(numeroDiplay); 


            break;
        case ",":
            console.log("Botão , clicado");
            // Ação para o botão ","
            break;
        case "=":
            console.log("Botão = clicado");
            // Ação para o botão "="
            break;
        default:
            console.log("Botão desconhecido clicado");
            // Ação para valores desconhecidos
            break;
    }
}


// funções mudança do display
const limparDisplay = () => {
    resultado.innerHTML="0";
    numeroAntigo = null;
    numeroAtual = null;
    operadorAtual = null;
}

const adicionarDigito = digito => {
    
    if (numeroAtual == null) {
        numeroAtual = digito;
    } else {
        numeroAtual += digito; 
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
