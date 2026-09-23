let valorDaCompra = 300;
let selecioneUmaRegiao = "Sul";
let valorFrete;
let valorTotal;

    console.log("---------------------")
    console.log("Escolha a sua região")
    console.log("---------------------")
    console.log("Sudeste");
    console.log("Sul");
    console.log("Centro-Oeste");
    console.log("Nordeste");
    console.log("Norte");

    console.log("");

switch (selecioneUmaRegiao) {
    case "Sudeste":
        valorFrete = 10;
        break;

    case "Sul":
        valorFrete = 15;
        break;

    case "Centro-Oeste":
        valorFrete = 20;
        break;

    case "Nordeste":
        valorFrete = 25;
        break;

    case "Norte":
        valorFrete = 30;
        break;

        default:
            console.log("Regiao Invalida");
            valorFrete = "Selecione uma Região.";
}
console.log("");

  if (valorDaCompra > 299)
  {
    valorFrete = 0;
    console.log("FRETE GRATS")
    valorTotal = valorDaCompra;
    
  } else{
    valorTotal = valorDaCompra + valorFrete;  
    console.log(`O VALOR TOTAL É DE: ${valorTotal}`)
  }
console.log("");
console.log(`Valor da compra: R$ ${valorDaCompra}`);
console.log(`Região: ${selecioneUmaRegiao}`);
console.log("");
console.log(`Frete: R$ ${valorFrete}`);
console.log(`Total: R$ ${valorTotal}`);