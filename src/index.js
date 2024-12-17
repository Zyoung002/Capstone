// submission page valildation

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import "./main.css";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC06mblU09i36sueyZaSi3OG8u3XqdC9XY",
  authDomain: "gallatin-county-feed.firebaseapp.com",
  projectId: "gallatin-county-feed",
  storageBucket: "gallatin-county-feed.firebasestorage.app",
  messagingSenderId: "599858024990",
  appId: "1:599858024990:web:b959a1fb7b655a82ffd40f",
  measurementId: "G-SYLMJ0CB34",
  //...
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let login = document.getElementById('login');

if (login !== null){
document.getElementById("login").addEventListener("submit",
  function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("logged in as: ", user.email);
        alert("Login successful!");
        window.location.href = "http://localhost:8080/landingtemp.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}
else {
  console.log("element does not exist");
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

let inputs = document.getElementById('inputs');
if (inputs !== null){
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

function addElement() {
  let datearray = localStorage.getItem("array");
  if (datearray === null) {
    datearray = [];
  } else {
    datearray = JSON.parse(datearray);
  }
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
    newDiv.textContent = arrayinput[i].date;
    document.getElementById("datecolumns").appendChild(newDiv);

    const newDiv2 = document.createElement("div");
    newDiv2.className = "addresscolumn";
    const targetdiv2 = document.getElementsByClassName("addresscolumn");
    newDiv2.textContent = arrayinput[i].address;
    document.getElementById("addresscolumns").appendChild(newDiv2);

    const newDiv3 = document.createElement("div");
    newDiv3.className = "summarycolumn";
    const targetdiv3 = document.getElementsByClassName("summarycolumn");
    newDiv3.textContent = arrayinput[i].summary;
    document.getElementById("summarycolumns").appendChild(newDiv3);
  }
};
}
else {
  console.log("this elements is not on this page");
}