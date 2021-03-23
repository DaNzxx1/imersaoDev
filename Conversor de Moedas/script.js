function Converter() {
    var valorReal = document.getElementById('valor').value
    var valorDolar = parseFloat(valorReal) * 5.51
    
    document.getElementById('result').innerHTML = "O valor é R$" + valorDolar.toFixed(2)
  }