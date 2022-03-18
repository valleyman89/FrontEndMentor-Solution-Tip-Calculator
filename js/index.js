function clearSplitter() {
  document.getElementById("tipTotal").innerText = "0";
  document.getElementById("resultTotal").innerText = "0";
}

window.onload = clearSplitter;

function calculateTip() {
  let bill = parseFloat(document.getElementById("inputBill").value);
  let people = parseInt(document.getElementById("inputPeople").value);

  if (document.getElementById("five").checked) {
    percent = 0.05;
  } else if (document.getElementById("ten").checked) {
    percent = 0.1;
  } else if (document.getElementById("fifteen").checked) {
    percent = 0.15;
  } else if (document.getElementById("twenty-five").checked) {
    percent = 0.25;
  } else if (document.getElementById("fifty").checked) {
    percent = 0.5;
  } else {
    percent = 0;
  }

  let tipPerPerson = ((bill * percent) / people).toFixed(2);
  let totalPerson = bill / people;
  let total = parseFloat(totalPerson) + parseFloat(tipPerPerson);

  document.getElementById("tipTotal").innerText = parseFloat(tipPerPerson);
  document.getElementById("resultTotal").innerText = total.toFixed(2);
}

calculateTip();
