const calcularInteres = () => {
    const genero = document.getElementById('genero').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dias = parseInt(document.getElementById('dias').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const importe = parseFloat(document.getElementById('importe').value);
    let edadHombre = 65;
    let edadMujer = 60; 

  
    if (genero === "hombre" && edad < edadHombre) {
      const resultadoFinal = (9 / 30) * (30 - dias) + (9 * cuotas);
      const interes = (resultadoFinal * importe) / 100;
      const total = importe + interes;
      const cadaCuota = total / cuotas;
      document.getElementById('resultado').innerHTML = `El Total es:${total.toFixed(2)}<br>El interés total es:${interes.toFixed(2)}<br>Cada cuota es:${cadaCuota.toFixed(2)}`;
    } else if (genero === "mujer" && edad < edadMujer) {
      const resultadoFinal = (9 / 30) * (30 - dias) + (9 * cuotas);
      const interes = (resultadoFinal * importe) / 100;
      const total = importe + interes;
      const cadaCuota = total / cuotas;
      document.getElementById('resultado').innerHTML = `El Total es:${total.toFixed(2)}<br>El interés total es:${interes.toFixed(2)}<br>Cada cuota es:${cadaCuota.toFixed(2)}`;
    } else {
      document.getElementById('resultado').innerHTML = "No puedes realizar financiación.";
    }
  }


  

