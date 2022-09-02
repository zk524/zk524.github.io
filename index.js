(async function () {
  const [gasrank, lenrank, gasbest, lenbest] = await Promise.all([
    fetch("https://evm-golf.github.io/index/addition/gasrank.json")
      .then((data) => data.json())
      .catch(() => []),
    fetch("https://evm-golf.github.io/index/addition/lenrank.json")
      .then((data) => data.json())
      .catch(() => []),
    fetch("https://evm-golf.github.io/index/addition/gasbest.json")
      .then((data) => data.json())
      .catch(() => []),
    fetch("https://evm-golf.github.io/index/addition/lenbest.json")
      .then((data) => data.json())
      .catch(() => []),
  ]);
  const table = document.getElementById("table");
  const fragment = document.createDocumentFragment();
  const len = [gasrank, lenrank, gasbest, lenbest].reduce(
    (res, cur) => Math.max(cur.length, res),
    0
  );
  new Array(len).fill().forEach((_, index) => {
    const tr = document.createElement("tr");
    const _id = document.createElement("td");
    const _gasrank = document.createElement("td");
    const _lenrank = document.createElement("td");
    const _gasbest = document.createElement("td");
    const _lenbest = document.createElement("td");
    _id.innerText = index + 1;
    _gasrank.innerText =
      gasrank[index] === void 0
        ? ""
        : `${gasrank[index].user} : ${gasrank[index].gas} : ${gasrank[index].length}`;
    _lenrank.innerText =
      lenrank[index] === void 0
        ? ""
        : `${lenrank[index].user} : ${lenrank[index].gas} : ${lenrank[index].length}`;
    _gasbest.innerText =
      gasbest[index] === void 0
        ? ""
        : `${gasbest[index].user} : ${gasbest[index].gas} : ${gasbest[index].length}`;
    _lenbest.innerText =
      lenbest[index] === void 0
        ? ""
        : `${lenbest[index].user} : ${lenbest[index].gas} : ${lenbest[index].length}`;
    tr.appendChild(_id);
    tr.appendChild(_gasrank);
    tr.appendChild(_gasbest);
    tr.appendChild(_lenrank);
    tr.appendChild(_lenbest);
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
})();
