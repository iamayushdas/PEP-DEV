let addBtn = document.querySelector('.add-btn')

let modalCont = document.querySelector('.modal-cont')

let addFlag = false;

addBtn.addEventListener('click', function(e){
    // display a modal
        // addFlag - true - modal display
        // addFlag - false - modal not display
    
    addFlag = !addFlag;

    if(addFlag){
        modalCont.style.display = 'flex'
    }else{
        modalCont.style.display = 'none'
    }

    // add a card

})