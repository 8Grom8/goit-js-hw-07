const inputRef = document.getElementById("font-size-control");

const text = document.querySelector("#text");

inputRef.addEventListener("input", () => {
  const sizeText = inputRef.value;
  text.style.fontSize = sizeText + "px";
});
