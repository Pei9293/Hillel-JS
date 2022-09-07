const CONTACT_ITEM_CLASS = 'contact-item'
const DELETE_BTN_CLASS = 'deleteBtn'
const EDIT_BTN_CLASS = 'editBtn'
const MODAL_SELECTOR = '#dialog-form';
const NEW_CONTACT = {
    name: '',
    surname: '',
    number: '',
    id: '',
  };

const $contactList = $('.contact-list');
const $addContactBtn = $('#create-contact')
const $inputName = $('#name');
const $inputSurname = $('#surname');
const $inputNumber = $('#number');
const $inputId = $('#id');
const $form = $(`${MODAL_SELECTOR} form`)[0];
const $modal = $(MODAL_SELECTOR).dialog({
    autoOpen: false,
    modal: true,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    },
    buttons: {
      Save: () => {
        const contact = checkContact();
  
        if (contact.id) {
          updateContact(contact.id, contact);
        } else {
          createContact(contact);
        }
  
        closeModal();
      },
      Cancel: closeModal
    },
    close: closeModal
})

$addContactBtn.on('click', onAddContactBtnClick);
$contactList.on('click', `.${DELETE_BTN_CLASS}`, onDeleteBtnClick);
$contactList.on('click', `.${EDIT_BTN_CLASS}`, onEditBtnClick);
$('form').on('submit', onFormSubmit)

ContactApi.getContactList().then(renderContactList);

function onAddContactBtnClick() {
    openModal(NEW_CONTACT);
}

function onDeleteBtnClick(e) {
    const $contactItem = getContactItem(e.target);
    const contactItemId = getContactItemId($contactItem)

    ContactApi.delete(contactItemId);
    $contactItem.remove();
}

function onEditBtnClick(e) {
    const $contactItem = getContactItem(e.target);
    const contactItemId = getContactItemId($contactItem);
    ContactApi.getContact(contactItemId).then(res => openModal(res));
}

function onFormSubmit(e) {
    e.preventDefault();
}

function openModal(contact) {
    fillForm(contact);
    $modal.dialog('open');
}
  
function closeModal() {
    $modal.dialog('close');
}
  
function fillForm(contact) {
    $form.id.value = contact.id;
    $form.name.value = contact.name;
    $form.surname.value = contact.surname;
    $form.number.value = contact.number;
}

function checkContact() {
    if ($inputName.val() === '' || $inputSurname.val() === '' || $inputNumber.val() === '') {
        throw new Error('Can not create new contact with empty fields')
    } else {
        return getContact()
    }
}

function getContact() {
    return {
        name: $inputName.val(),
        surname: $inputSurname.val(),
        number: $inputNumber.val(),
        id: $inputId.val()
    }
}

function renderContactList(list) {
    const html = list.map(generateContactHtml);

    $contactList.html(html);
}

function renderContactItem(contact) {
    const newContactHtml = generateContactHtml(contact);
    $contactList.append(newContactHtml);
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

function getContactItem(el) {
    return $(el.closest(`.${CONTACT_ITEM_CLASS}`));
}

function getContactItemId($contactItem) {
    return $contactItem.data('id')
}

function createContact(contact) {
    ContactApi
      .create(contact)
      .then(renderContactItem)
}

function updateContact(id, contact) {
    const $contactItemEl =  $(`li[data-id=${id}]`);
    ContactApi.edit(id, contact)
    .then(res => $contactItemEl.replaceWith(generateContactHtml(res)))
}