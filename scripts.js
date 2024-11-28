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
  if (date !== "" && address !== "" && summary !== "") {
    addElement();
  }
});

// manipulate Dom (adding to dom javascript) to add forget order, get submit by date,  and in future remove a row//
const datearray = [];

function addElement() {
  const newDiv = document.createElement("div");
  newDiv.className = "datecolumn";
  const targetdiv = document.getElementsByClassName("datecolumn");
  let date = document.getElementById("date");
  newDiv.textContent = date.value;
  document.getElementById("datecolumns").appendChild(newDiv);

  const newDiv2 = document.createElement("div");
  newDiv2.className = "addresscolumn";
  const targetdiv2 = document.getElementsByClassName("addresscolumn");
  let address = document.getElementById("address");
  newDiv2.textContent = address.value;
  document.getElementById("addresscolumns").appendChild(newDiv2);

  const newDiv3 = document.createElement("div");
  newDiv3.className = "summarycolumn";
  const targetdiv3 = document.getElementsByClassName("summarycolumn");
  let summary = document.getElementById("summary");
  newDiv3.textContent = summary.value;
  document.getElementById("summarycolumns").appendChild(newDiv3);

  let arrayinput = {
    date: document.getElementById("date").value,
    address: document.getElementById("address").value,
    summary: document.getElementById("summary").value,
  };
  datearray.push(arrayinput);
  console.log(datearray);
  localStorage.setItem("array", JSON.stringify(datearray));
}

window.onload = function addElement() {
  let datearray = localStorage.getItem("array");
  const arrayinput = JSON.parse(datearray);
  console.log(arrayinput);

 if (localStorage.getItem('array') !== null){   
 for (var i = 0; i < arrayinput.length; i++) {
    const date = arrayinput[i].date;
    const address = arrayinput[i].address;
    const summary = arrayinput[i].summary;
    console.log(date);
    console.log(address);
    console.log(summary);

    const newDiv = document.createElement("div");
    newDiv.className = "datecolumn";
    const targetdiv = document.getElementsByClassName("datecolumn");
    newDiv.textContent = (arrayinput[0].date);
    document.getElementById("datecolumns").appendChild(newDiv);

    const newDiv2 = document.createElement("div");
    newDiv2.className = "addresscolumn";
    const targetdiv2 = document.getElementsByClassName("addresscolumn");
    newDiv2.textContent = (arrayinput[0].address);
    document.getElementById("addresscolumns").appendChild(newDiv2);

    const newDiv3 = document.createElement("div");
    newDiv3.className = "summarycolumn";
    const targetdiv3 = document.getElementsByClassName("summarycolumn");
    newDiv3.textContent = (arrayinput[0].summary);
    document.getElementById("summarycolumns").appendChild(newDiv3);
  }
  }
  else {
    return null;
  }
}
