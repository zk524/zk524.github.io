// const rank = require("index.json");
// console.log(rank);
// import fetch from "node-fetch";
// const fetch = require("node-fetch");

(async function () {
  const data = await fetch(
    "https://evm-golf.github.io/index/addition/gasrank.json"
  )
    .then((data) => data.json())
    .catch(() => []);
  console.log(data);
  const table = document.getElementById("table");
  const fragment = document.createDocumentFragment();
  data.forEach((d, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = index + 1;
    td2.innerText = `${d.user}: ${d.gas}`;
    td3.innerText = `${d.user}: ${d.length}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
})();
