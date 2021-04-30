const ref = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    spanValue: document.querySelector('#value')
}
let counter = 0;
ref.btnDecrement.addEventListener('click',(e) => {
    counter -=1
    ref.spanValue.textContent = counter});

ref.btnIncrement.addEventListener('click',(e) => {
    counter +=1
    ref.spanValue.textContent = counter});