let addBtn = document.querySelector('.add-btn')

let modalCont = document.querySelector('.modal-cont')

let mainCont = document.querySelector('.main-cont')

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

    

})

//Generating a ticket
modalCont.addEventListener('keydown', function(e){
    let key = e.key;

    if(key == 'Shift'){
        createTicket() //this function will generate the ticket
        modalCont.style.display = 'none';
    }
})

function createTicket(){
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color"></div>
    <div class="ticket-id">dsafewrew</div>
    <div class="task-area">Buy Milk</div>`

    mainCont.appendChild(ticketCont);
}