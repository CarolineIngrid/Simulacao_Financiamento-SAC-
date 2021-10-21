var tbody = document.querySelector("tbody");

function simulacao() {
  //pegando dados usuario
  var valor = parseFloat(document.getElementById("inputvalor").value);
  var prazoAnos = parseInt(document.getElementById("inputprazoAnos").value);
  var jurosAno = parseFloat(document.getElementById("inputjurosAno").value);
  //cálculo prazo meses
  var resultadoprazoMeses = prazoAnos * 12;

  // cálculo juros ao mês
  var resultadojurosMes = (1 + jurosAno) ** (1 / 12) - 1;

  //cálculo juros
  var jurosTotal = (valor - +(contador * amortizacao)) * resultadojurosMes;

  //amortizacao
  var amortizacao = valor / resultadoprazoMeses;

  // imprimindo os resultados
  document.getElementById("inputresultadojurosMes").value = resultadojurosMes.toFixed(8);
  document.getElementById("inputresultadoprazoMeses").value = resultadoprazoMeses;

  // repitição colocando os valores dentro da table com children

  for (var contador = 0; contador < 5; contador++) {
    var saldoDevedor =  valor - contador * amortizacao;
    var  jurosTotal = saldoDevedor * resultadojurosMes;
    var tr = tbody.children[contador];
    tr.children[1].textContent = amortizacao;
    // amortizacao.toFixed(2);
    tr.children[2].textContent = jurosTotal.toFixed(2);
    tr.children[3].textContent = (amortizacao + jurosTotal).toFixed(2); //Total na tabela
  }

  var jurosAcumulado = 0;
  for (var i = 0; i < resultadoprazoMeses; i++) {
    var saldoDevedor = valor - contador * amortizacao;
    var  jurosTotal = saldoDevedor * resultadojurosMes;
    jurosAcumulado += jurosTotal;
  }
  document.getElementById("inputresultadojurosAcumulado").value = jurosAcumulado.toFixed(2);
}



