class CalculadoraInteres {
  constructor() {
    this.genero = document.getElementById('genero').value;
    this.edad = parseInt(document.getElementById('edad').value);
    this.dias = parseInt(document.getElementById('dias').value);
    this.cuotas = parseInt(document.getElementById('cuotas').value);
    this.importe = parseFloat(document.getElementById('importe').value);
  }

  calcularInteres() {
    let resultadoFinal = 0;
    let interes = 0;
    let total = 0;

    if (this.genero === "hombre" && this.edad < edadHombre) {
      resultadoFinal = (this.cuotas / 30) * (30 - this.dias) + this.calcularTotalInteres();
      interes = (resultadoFinal * this.importe) / 100;
      total = this.importe + interes;
      this.mostrarResultado(interes, total);
    } else if (this.genero === "mujer" && this.edad < edadMujer) {
      resultadoFinal = (2.5 / 30) * (30 - this.dias) + this.calcularTotalInteres();
      interes = (resultadoFinal * this.importe) / 100;
      total = this.importe + interes;
      this.mostrarResultado(interes, total);
    } else {
      this.mostrarResultado("No puedes realizar financiación.");
    }
  }

  calcularTotalInteres() {
    return this.cuotas * this.cuotas;
  }

  mostrarResultado(interes, total) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El interés es: ${interes.toFixed(2)}<br>Total a pagar: ${total.toFixed(2)}`;
  }
}

// Uso de la clase
const edadHombre = 65 // Debes definir esta variable
const edadMujer = 60 // Debes definir esta variable

const calculadora = new CalculadoraInteres();
calculadora.calcularInteres();



  

