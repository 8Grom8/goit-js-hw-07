let input = document.getElementById('name-input');
let output = document.getElementById('name-output');

input.oninput = () => output.textContent = input.value || "Незнакомец";