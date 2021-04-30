const inputElem = document.querySelector('input[type="text"]');
const dataLength = inputElem.getAttribute('data-length');


inputElem.addEventListener ('input', validateParams);

function validateParams(e){
   
    if(e.target.value.length === +dataLength){
        updateClass('valid','invalid')
               
    }
    else{
        updateClass('invalid','valid')
        
    }
    
}
function updateClass(addClass, remClass){

    inputElem.classList.add(addClass);
    inputElem.classList.remove(remClass);

}




// inputElem.addEventListener('blur', e => {
//     if(){
//         inputElem.classList.add('error');
//     }
// })

// inputElem.addEventListener('focus', e => {
//     if(){
//         inputElem.classList.add('error');
//     }
// })