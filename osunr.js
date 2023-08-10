const calcularInteres = () => {
    const genero = document.getElementById('genero').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dias = parseInt(document.getElementById('dias').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const importe = parseFloat(document.getElementById('importe').value);
    
    const edadMujer = 60;
    const edadHombre = 65;
  
    if (genero === "hombre" && edad < edadHombre) {
      const resultadoFinal = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);
      const interes = (resultadoFinal * importe) / 100;
      const total = importe + interes;
      document.getElementById('resultado').innerHTML = `El interés es: ${interes.toFixed(2)}<br>Total a pagar: ${total.toFixed(2)}`;
    } else if (genero === "mujer" && edad < edadMujer) {
      const resultadoFinal = (2.5 / 30) * (30 - dias) + (2.5 * cuotas);
      const interes = (resultadoFinal * importe) / 100;
      const total = importe + interes;
      document.getElementById('resultado').innerHTML = `El interés es: ${interes.toFixed(2)}<br>Total a pagar: ${total.toFixed(2)}`;
    } else {
      document.getElementById('resultado').innerHTML = "No puedes realizar financiación.";
    }
  };