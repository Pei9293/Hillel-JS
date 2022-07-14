const p = document.querySelector('p');
const contactList = document.querySelector('.contact list');
const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#last-name');
const inputNumber = document.querySelector('#number');
const addContactBtn = document.querySelector('#addContactBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const contactListItemTemplate = document.querySelector('#contact-list__item-template');


addContactBtn.addEventListener('click', onButtonClick);
contactList.addEventListener('click', onDeleteBtnClick);

function onButtonClick() {
    if (inputName.value !== '' && inputLastName.value !== '' && !isNaN(inputNumber.value)) {
        p.style.display = 'none';
        addContactItem()
        inputName.value = '';
        inputLastName.value = '';
        inputNumber.value = '';
    } else alert('Write correct field')
}

function addContactItem() {
    const contactListItemTwmplateHTML = contactListItemTemplate
    .innerHTML.replace('{name}', inputName.value)
    .replace('{LastName}', inputLastName.value)
    .replace('{Number}', inputNumber.value);  

    contactList.insertAdjacentHTML("beforeend",contactListItemTwmplateHTML)
}


function getContactListItem(el) {
    return el.closest('.contact-item');
}