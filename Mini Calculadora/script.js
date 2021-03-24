function Operacao(operacao) {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    
    var resultOP
    var result
    if (operacao == "divi") {
      resultOP = num1 / num2 
      result = "A operação "+ num1 +" / "+ num2 +" = "+ resultOP
    } else if (operacao == "soma") {
      resultOP = num1 + num2
      result = "A operação "+ num1 +" + "+ num2 +" = "+ resultOP
    } else if (operacao == "subi") {
      resultOP = num1 - num2
      result = "A operação "+ num1 +" - "+ num2 +" = "+ resultOP
    } else if (operacao == "mult") {
      resultOP = num1 * num2
      result = "A operação "+ num1 +" * "+ num2 +" = "+ resultOP
    }
    
    document.getElementById("result").innerHTML = result
  }