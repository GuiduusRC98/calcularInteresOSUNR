const calcularInteres = () => {
    const diasActual = parseInt(document.getElementById('dias').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const importe = parseFloat(document.getElementById('importe').value);
    const diasTotal = parseFloat(document.getElementById('diasTotal').value);
      const resultadoFinal = (9 / 30) * (diasTotal - diasActual) + (9 * cuotas);
      const interes = (resultadoFinal * importe) / 100;
      const total = importe + interes;
      const cadaCuota = total / cuotas;
      const interesMensual = resultadoFinal / cuotas;
      document.getElementById('resultado').innerHTML = `El Total es:<strong>${total.toFixed(2)}</strong><hr><br>El interés total es:<strong>${interes.toFixed(2)}</strong><hr><br>Cada cuota es:<strong>${cadaCuota.toFixed(2)}</strong><hr><br>Interes total:<strong>${resultadoFinal.toFixed(2)}</strong><hr><br>Interes mensual:<strong>${interesMensual.toFixed(2)}</strong>`;

  }


  

