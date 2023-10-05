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
      document.getElementById('resultado').innerHTML = `El Total es:<strong>${total.toFixed(2)}</strong><br>El interés total es:<strong>${interes.toFixed(2)}</strong><br>Cada cuota es:<strong>${cadaCuota.toFixed(2)}</strong><br>Interes mensual:<strong>${resultadoFinal.toFixed(2)}</strong>`;
    } else if (genero === "mujer" && edad < edadMujer) {
      const resultadoFinal = (9 / 30) * (30 - dias) + (9 * cuotas);
      const interes = (resultadoFinal * importe) / 100;
      const total = importe + interes;
      const cadaCuota = total / cuotas;
      document.getElementById('resultado').innerHTML = `El Total es:<strong>${total.toFixed(2)}</strong><br>El interés total es:<strong>${interes.toFixed(2)}</strong><br>Cada cuota es:<strong>${cadaCuota.toFixed(2)}</strong><br>Interes mensual:<strong>${resultadoFinal.toFixed(2)}</strong>`;
    } else {
      document.getElementById('resultado').innerHTML = "No puedes realizar financiación.";
    }
  }


  

