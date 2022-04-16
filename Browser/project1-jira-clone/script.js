let addBtn = document.querySelector('.add-btn')

let removeBtn = document.querySelector('.remove-btn')

let modalCont = document.querySelector('.modal-cont')

let mainCont = document.querySelector('.main-cont')

let colors = ['lightpink', 'lightblue', 'lightgreen', 'black']

let modalPriorityColor = colors[colors.length - 1]

let allPriorityColor = document.querySelectorAll('.priority-color');

let addFlag = false;

let removeFlag = false;

let textAreaCont = document.querySelector('.textarea-cont')

let lockClass = 'fa-lock';

let unlockClass = 'fa-lock-open';

let toolBoxColors = document.querySelectorAll('.color');

let ticketArr = []

// filter tickets wrt colors

for(let i  = 0; i<toolBoxColors.length; i++){
    toolBoxColors[i].addEventListener('click', function(e){
        let currentToolBoxColor = toolBoxColors[i].classList[0];
        // console.log(currentToolBoxColor);

        let filteredTickets = ticketArr.filter(function(ticketObj){
            return currentToolBoxColor === ticketObj.ticketColor
        })

        // remove previous tickets
        let allTickets = document.querySelectorAll('.ticket-cont')

        for(let i = 0; i<allTickets.length; i++){
            allTickets[i].remove()
        }

        filteredTickets.forEach(function(filteredObj){
            createTicket(filteredObj.ticketColor, filteredObj.ticketText, filteredObj.ticketId)
        })
    })

    toolBoxColors[i].addEventListener('dblclick', function(e){
        let allTickets = document.querySelectorAll('.ticket-cont')

        for(let i = 0; i<allTickets.length; i++){
            allTickets[i].remove()
        }

        ticketArr.forEach(function(ticketObj){
            createTicket(ticketObj.ticketColor, ticketObj.ticketText, ticketObj.ticketId)
        })
    })
}

//local storage get all tickets

if(localStorage.getItem('tickets')){
    ticketArr = JSON.parse(localStorage.getItem('tickets'))
    ticketArr.forEach(function(ticket){
        createTicket(ticket.ticketColor, ticket.ticketText, ticket.ticketId)
    })
}

addBtn.addEventListener('click', function (e) {
    // display a modal
    // addFlag - true - modal display
    // addFlag - false - modal not display

    addFlag = !addFlag;

    if (addFlag) {
        modalCont.style.display = 'flex'
    } else {
        modalCont.style.display = 'none'
    }
})

// changing Priority color
allPriorityColor.forEach(function (colorElem) {
    colorElem.addEventListener('click', function (e) {
        //click krne k baad jitne bhi div h unse active class hata do taaki koi active na rahe 
        allPriorityColor.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove('active')
        })
        // fir selected element pr active class lga do
        colorElem.classList.add('active')

        modalPriorityColor = colorElem.classList[0];
    })
})

//Generating a ticket
modalCont.addEventListener('keydown', function (e) {
    let key = e.key;

    if (key == 'Shift') {
        createTicket(modalPriorityColor, textAreaCont.value) //this function will generate the ticket
        modalCont.style.display = 'none';
        textAreaCont.value = '';
        addFlag = false;
    }
})


function createTicket(ticketColor, ticketText, ticketId) {
    let id = ticketId || shortid()
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')

    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">id-${id}
            <div class="ticket-lock">
            <i class="fa-solid ${lockClass}"></i>
        </div></div>
            <div class="task-area">${ticketText}

    </div>`

    mainCont.appendChild(ticketCont);

    handleRemoval(ticketCont);

    handleLock(ticketCont)

    handleColor(ticketCont)

    if(!ticketId){
        ticketArr.push({ticketColor, ticketText, ticketId:id})
        localStorage.setItem('tickets', JSON.stringify(ticketArr))
    }

}

removeBtn.addEventListener('click', function () {
    removeFlag = !removeFlag;
    if (removeFlag) {
        removeBtn.style.backgroundColor = 'crimson';
        removeBtn.style.borderRadius = '4px';
    } else {
        removeBtn.style.backgroundColor = '';
    }
})

function handleRemoval(ticket) {
    ticket.addEventListener('click', function () {
        if (removeFlag == true) {
            ticket.remove();
        }
    })
}


// LOCK and UNLOCK tickets

function handleLock(ticket){
    let ticketLockElem = ticket.querySelector('.ticket-lock')

    let ticketLock = ticketLockElem.children[0];

    let ticketTaskArea = ticket.querySelector('.task-area')

    ticketLock.addEventListener('click', function(e){
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass)
            ticketLock.classList.add(unlockClass)
            ticketTaskArea.setAttribute('contentEditable', 'true')
  
        }else{
            ticketLock.classList.remove(unlockClass)
            ticketLock.classList.add(lockClass)
            ticketTaskArea.setAttribute('contentEditable', 'false') 
        }
    })
}


function handleColor(ticket){
    let ticketColorBand = ticket.querySelector('.ticket-color')

    ticketColorBand.addEventListener('click', function(e){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = colors.findIndex(function(color){
            return currentTicketColor === color
        })

        currentTicketColorIdx++

        let newTicketColorIdx = currentTicketColorIdx%colors.length;

        let newTicketColor = colors[newTicketColorIdx]

        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(newTicketColor)

    })
}