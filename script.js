
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  console.clear();
  console.log("called");
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countstr = count + "-";
  saveEl.textContent += countstr;
}

function reset() {
  count = 0;
  countEl.innerText = count;
  saveEl.textContent = "Previous Entries: ";
}
