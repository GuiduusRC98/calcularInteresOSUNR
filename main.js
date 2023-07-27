document.getElementById('calculate-button').addEventListener('click', function() {
    let dias = Number(document.getElementById('dias').value);
    let cuotas = Number(document.getElementById('cuotas').value);
    let importe = Number(document.getElementById('importe').value);
  
    let resultado = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);
    let resultadoFinal = (resultado * importe) / 100;
  
    document.getElementById('result').textContent = `Resultado Final: ${resultadoFinal}`;
  });
  

/* let dias = Number(prompt("ingrese que dia es"))
let cuotas = Number(prompt("ingrese cuantas cuotas"))
let importe = Number(prompt("ingrese importe"))

let resultado = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);

let resultadoFinal = (resultado * importe) / 100
alert(resultadoFinal); */