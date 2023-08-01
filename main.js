document.getElementById('calculate-button').addEventListener('click', function () {
  let dias = Number(document.getElementById('dias').value);
  let cuotas = Number(document.getElementById('cuotas').value);
  let importe = Number(document.getElementById('importe').value);


  let resultado = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);
  let Interes = (resultado * importe) / 100;
  let resultadoFinal = (Interes + importe) / cuotas;

  document.getElementById('result').textContent = `Resultado Final: ${resultadoFinal}`;
});

document.getElementById('boton-calcular-edad').addEventListener('click', function () {
  const fechaNacimiento = new Date(document.getElementById('edad').value);
  const fechaActual = new Date();

  // Calcula la diferencia en milisegundos entre la fecha actual y la fecha de nacimiento
  const diferenciaMilisegundos = fechaActual - fechaNacimiento;

  // Calcula la edad en años, usando el tiempo en milisegundos en un año promedio (365.25 días)
  const edadEnAnios = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));

  // Muestra el resultado en el elemento con id 'result-edad'
  document.getElementById('result-edad').textContent = `La edad es: ${edadEnAnios} años`;
});
/* let dias = Number(prompt("ingrese que dia es"))
let cuotas = Number(prompt("ingrese cuantas cuotas"))
let importe = Number(prompt("ingrese importe"))

let resultado = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);

let resultadoFinal = (resultado * importe) / 100
alert(resultadoFinal); */