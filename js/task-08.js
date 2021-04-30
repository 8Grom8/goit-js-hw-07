const ref = {
  inp: document.querySelector("input"),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

function createBoxes() {
  const amount = Number(ref.inp.value);

  let elements = [];
  for (let i = 1; i <= amount; i++) {
    const size = 30 + i * 10;
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = `rgb(${randomInterval(
      255,
      0
    )}, ${randomInterval(255, 0)}, ${randomInterval(255, 0)})`;

    element.classList.add("item");
    elements.push(element);
  }
  cleareBoxes(false);
  ref.boxes.append(...elements);
}

ref.btnRender.addEventListener("click", createBoxes);
ref.btnDestroy.addEventListener("click", cleareBoxes);

function cleareBoxes(bool = true) {
  ref.boxes.innerHTML = "";
  if (bool) ref.inp.value = 0;
}

function randomInterval(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInterval(255, 0));
console.log(randomInterval(255, 0));
console.log(randomInterval(255, 0));
