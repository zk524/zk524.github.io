// const rank = require("index.json");
// console.log(rank);
// import fetch from "node-fetch";
// const fetch = require("node-fetch");

(async function () {
  const data = await fetch(
    "https://raw.githubusercontent.com/zk524/zk524.github.io/golf/index.json"
  )
    .then((data) => data.json())
    .catch(() => []);
  const table = document.getElementById("table");
  const fragment = document.createDocumentFragment();
  data.forEach((d, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = index;
    td2.innerText = d.id;
    td3.innerText = d.rank;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
})();
