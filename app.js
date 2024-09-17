function printTable() {
  let tableNumber = Number(document.getElementById("tableNum").value);
  let startFrom = Number(document.getElementById("start-from").value);
  let EndTo = Number(document.getElementById("end-to").value);
  let table = document.getElementById("table");

  for (let i = startFrom; i <= EndTo; i++) {
    table.innerText += `${tableNumber} x ${i} = ${tableNumber * i}\n`;
  }
}

function reset() {
  document.getElementById("tableNum").value = "";
  document.getElementById("start-from").value = "";
  document.getElementById("end-to").value = "";
  document.getElementById("table").innerText = "";
}
