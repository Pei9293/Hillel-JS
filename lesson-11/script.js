const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector(ADD_BTN_CLASS);

addButton.addEventListener('click', onButtonClick);
ul.addEventListener('click', onClick)


function onButtonClick() {
    let message = getMessage(input)
    if (message !== '') {
        addHtmlElementLI(message)
        input.value = ''
        style.display = 'none'
    } else {
        alert('Error')
    }
}

function getMessage(input) {
    return input.value
}

function addHtmlElementLI(message) {
    const toDoItemTemplateHTML = `
    <li class="toDoItem">
        <span>${message}</span>
        <button class="deleteBtn">delete</button>
    </li>
    `
    ul.insertAdjacentHTML('beforeend', toDoItemTemplateHTML)
  }
    

function onClick(e) {
    const toDoItem = getToDoItem(e.target);
    if (toDoItem) {
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            ul.removeChild(toDoItem)
            return;
        }
        toDoItem.classList.toggle(DONE_TODO_ITEM_CLASS)
    }
}

function getToDoItem(el) {
    return el.closest(TODO_ITEM_CLASS);
}