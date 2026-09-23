document.getElementById("calcular").addEventListener("click", function () {

let valorDaCompra = document.querySelector("#valorDaCompra").value; 
let selecioneUmaRegiao = document.querySelector("#selecioneUmaRegiao").value;
let valorFrete;
let valorTotal;

switch (selecioneUmaRegiao) {
    case "Sudeste":
        valorFrete = 10.00;
        break;

    case "Sul":
        valorFrete = 15.00;
        break;

    case "Centro-Oeste":
        valorFrete = 20.00;
        break;

    case "Nordeste":
        valorFrete = 25.00;
        break;

    case "Norte":
        valorFrete = 30.00;
        break;

        default:
            alert("Regiao Invalida");
            valorFrete = "Selecione uma Região.";
}

if (valorDaCompra > 299)

  {
    valorFrete = 0;
    valorTotal = valorDaCompra;
    document.querySelector(".centerCard2").innerHTML = `<div class="resultadoDeCalculo">
   <div class="resultadoDeCalculo">
   
        <div class="frete">  

            <div>
                <img src="imagens/caminhao-logo.png">
            </div>
           
            <div>
                <p>Frete</p>
                <h2>R$ ${valorFrete.toFixed(2)}</h2>
              </div>

        </div>

        <div class="frete">
            
            <div>
                <img src="imagens/icone-resultado.PNG">
            </div>
            <div>
                <p>Total da compra</p>
                <h2 id="total">R$ ${valorTotal}</h2>
                       
            </div>
        
        </div>
  
   </div>
   
    <div class="prontoParaEnvio">
       
        <div>
             <img src="imagens/ChatGPT Image 23 de set. de 2026, 03_31_29.PNG">
        </div>

        <div>
             <h2>Pronto para envio!</h2>    
             <small>Seu pedido será entregue com segurança.</small>
   
        </div>
        
    </div>
   `

    
  } else{
    valorTotal = (parseFloat(valorDaCompra) + valorFrete).toFixed(2);
   document.querySelector(".centerCard2").innerHTML = 
   `<div class="resultadoDeCalculo">
   
        <div class="frete">  

            <div>
                <img src="imagens/caminhao-logo.png">
            </div>
           
            <div>
                <p>Frete</p>
                <h2>R$ ${valorFrete.toFixed(2)}</h2>
              </div>

        </div>

        <div class="frete">
            
            <div>
                <img src="imagens/icone-resultado.PNG">
            </div>
            <div>
                <p>Total da compra</p>
                <h2 id="total">R$ ${valorTotal}</h2>
                       
            </div>
        
        </div>
  
   </div>
   
    <div class="prontoParaEnvio">
       
        <div>
             <img src="imagens/ChatGPT Image 23 de set. de 2026, 03_31_29.PNG">
        </div>

        <div>
             <h2>Pronto para envio!</h2>    
             <small>Seu pedido será entregue com segurança.</small>
   
        </div>
        
    </div>
   `
  }
})

