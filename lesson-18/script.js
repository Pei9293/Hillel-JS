const CONTACT_ITEM_CLASS = 'contact-item'
const DELETE_BTN_CLASS = 'deleteBtn'
const EDIT_BTN_CLASS = 'editBtn'

const contactList = document.querySelector('.contact-list');
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputPhoneNumber = document.querySelector('#phone-number');
const contactForm = document.querySelector('#contact-list-form');

contactForm.addEventListener('submit', onContactFormSubmit);
contactList.addEventListener('click', onContactListClick);

ContactApi.getContactList().then(renderContactList);

function onContactFormSubmit(e) {
    e.preventDefault();
    
    const newContact = getContact();

    if (newContact.name == '' || newContact.surname == '' || newContact.number == '') {
    alert('Empty field')
    return}

    ContactApi.create(newContact)
    .then(newContact => {
        renderContactItem(newContact);
        clearForm();
    });
}

function onContactListClick(e) {
    const contactItem = getContactItem(e.target);
    if (contactItem) {
        const contactItemId = getContactItemId(contactItem)

        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            ContactApi.delete(contactItemId)
            .then(contactList.removeChild(contactItem))
            return;
        }

        if (e.target.classList.contains(EDIT_BTN_CLASS)) {
            ContactApi.edit(contactItemId, getChanges())
            .then(ContactApi.request(contactItemId))
            .then(res => contactItem.outerHTML = generateContactHtml(res))
            return;
        }
    }
}

function getChanges() {
    const editedName = prompt('Write down new name')
    const editedSurname = prompt('Write down new surname')
    const editedNumber = prompt('Write down new number')
    if (editedName !== '' && editedSurname !== '' && editedNumber !== '') {
        return {
        name: editedName,
        surname: editedSurname,
        number: editedNumber
        }
    }
    alert('Can not edit contact with empty fields');
}

function renderContactList(list) {
    const html = list.map(generateContactHtml).join('');

    contactList.insertAdjacentHTML('beforeend', html);
}

function renderContactItem(contact) {
    const newContactHtml = generateContactHtml(contact);
    contactList.insertAdjacentHTML('beforeend', newContactHtml);
}

function generateContactHtml(contact) {
    return `
        <li class="contact-item" data-id ="${contact.id}">
            <span class="contact-item-el name">${contact.name}</span>
            <span class="contact-item-el surname">${contact.surname}</span>
            <span class="contact-item-el number">${contact.number}</span>
            <button class="deleteBtn">Delete</button>
            <button class="editBtn">Edit</button>
        </li>
    `;
}

function getContact() {
    return {
        name: inputName.value,
        surname: inputSurname.value,
        number: inputPhoneNumber.value,
    };
}

function getContactItem(el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`);
}

function getContactItemId(contactItem) {
    return contactItem.dataset.id
}

function clearForm() {
    contactForm.reset();
}