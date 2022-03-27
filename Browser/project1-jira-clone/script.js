let addBtn = document.querySelector('.add-btn')

let modalCont = document.querySelector('.modal-cont')

let mainCont = document.querySelector('.main-cont')

let colors = ['lightpink', 'lightblue', 'lightgreen', 'black']

let modalPriorityColor= colors[colors.length - 1]

let allPriorityColor = document.querySelectorAll('.priority-color');

let addFlag = false;

let textAreaCont = document.querySelector('.textarea-cont')

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

// changing Priority color
allPriorityColor.forEach(function(colorElem){
    colorElem.addEventListener('click', function(e){
        //click krne k baad jitne bhi div h unse active class hata do taaki koi active na rahe 
        allPriorityColor.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove('active')
        })
        // fir selected element pr active class lga do
        colorElem.classList.add('active')

        modalPriorityColor = colorElem.classList[0];
    })
})

//Generating a ticket
modalCont.addEventListener('keydown', function(e){
    let key = e.key;

    if(key == 'Shift'){
        createTicket(modalPriorityColor, textAreaCont.value) //this function will generate the ticket
        modalCont.style.display = 'none';
        addFlag = false;
    }
})

function createTicket(ticketColor, ticketText){
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">dsafewrew</div>
    <div class="task-area">${ticketText}</div>`

    mainCont.appendChild(ticketCont);
}