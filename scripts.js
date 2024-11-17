const date = document.getElementById("date");

date.addEventListener("change", (event) => {
  const selectedDate = event.target.value;
  let date = document.getElementById("date").value;
  console.log(date);
});
// code capture form submission with out page turn over and log it out//

let postsubmit = document.getElementById("inputs");

postsubmit.addEventListener("submit", (d) => {
  let date = document.getElementById("date");
  let address = document.getElementById("address");
  let summary = document.getElementById("summary");
});

// submission page validation//

document.getElementById("inputs").addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const dateError = document.getElementById("dateError");

  if (date === "") {
    dateError.style.display = "inline";
    event.preventDefault();
  } else {
    dateError.style.display = "none";
  }

  const address = document.getElementById("address").value;
  const addressError = document.getElementById("addressError");

  if (address === "") {
    addressError.style.display = "inline";
    event.preventDefault();
  } else {
    addressError.style.display = "none";
  }
  const summary = document.getElementById("summary").value;
  const summaryError = document.getElementById("summaryError");

  if (summary === "") {
    summaryError.style.display = "inline";
    event.preventDefault();
  } else {
    summaryError.style.display = "none";
  }

  addElement();
});

// manipulate Dom (adding to dom javascript) to add forget order, get submit by date,  and in future remove a row//

function addElement() {
  const newDiv = document.createElement("div");
  newElement = newDiv;
  newElement.className = "datecolumn";
  const targetdiv = document.getElementsByClassName("datecolumn");
  let date = document.getElementById("date");
  newDiv.textContent = date.value;
  document.getElementById("datecolumns").appendChild(newDiv);

  const newDiv2 = document.createElement("div");
  newElement2 = newDiv2;
  newElement2.className = "addresscolumn";
  const targetdiv2 = document.getElementsByClassName("addresscolumn");
  let address = document.getElementById("address");
  newDiv2.textContent = address.value;
  document.getElementById("addresscolumns").appendChild(newDiv2);

  const newDiv3 = document.createElement("div");
  newElement3 = newDiv3;
  newElement3.className = "summarycolumn";
  const targetdiv3 = document.getElementsByClassName("summarycolumn");
  let summary = document.getElementById("summary");
  newDiv3.textContent = summary.value;
  document.getElementById("summarycolumns").appendChild(newDiv3);
}
