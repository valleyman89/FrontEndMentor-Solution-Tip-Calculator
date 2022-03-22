let percent = 0;
document.getElementById("tipTotal").innerText = "0";
document.getElementById("resultTotal").innerText = "0";

function switchError(state) {
  let peopleError = document.getElementById("inputPeople");

  if (state === 1) {
    document.getElementById("error").innerText = "Can't be zero";
    peopleError.classList.add("input--error");
  } else {
    document.getElementById("error").innerText = "";
    peopleError.classList.remove("input--error");
  }
}

document.getElementById("reset").addEventListener("click", (event) => {
  switchError(0);
  document.getElementById("inputBill").value = "";
  document.getElementById("inputPeople").value = "";
  document.getElementById("tipTotal").innerText = "0";
  document.getElementById("resultTotal").innerText = "0";
});

document.getElementById("tip").addEventListener("click", (event) => {
  let bill = parseFloat(document.getElementById("inputBill").value);
  let people = parseInt(document.getElementById("inputPeople").value);
  let percent = parseFloat(event.target.value / 100);
  if (people === 0) {
    switchError(1);
  } else {
    switchError(0);
    // tip per person
    let tip = (document.getElementById("tipTotal").innerText = (
      (bill * percent) /
      people
    ).toFixed(2));

    // total per person
    let total = bill / people + parseFloat(tip);
    document.getElementById("resultTotal").innerText = parseFloat(
      parseFloat(total).toFixed(2)
    );
  }
});
