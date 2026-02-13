document.addEventListener("DOMContentLoaded", (e) => {
  let submit = document.querySelector("input[type='submit'");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let operator = document.getElementById("operator").value;
    
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "*":
        result = num1 * num2;
        break;
    }

    document.getElementById("result").textContent = String(result);


    
  })
});