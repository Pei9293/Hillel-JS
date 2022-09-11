import StudentsApi from './studentsApi';
import $ from 'jquery';
import './style.css';
import scriptStyle from './script.m.css';

const STUDENT_ITEM_CLASS = 'student-item';
const DELETE_BTN_CLASS = 'deleteBtn';

const $studentList = $('.students-list');
const $addStudentForm = $('#create-student');
const $studentNameInput = $('#name');

$addStudentForm.on('submit', onFormSubmit);
$studentList.on('click', `.${DELETE_BTN_CLASS}`, onDeleteBtnClick);
$studentList.on('focusout',`.${scriptStyle.mark}` ,onInputFocusOut);

StudentsApi.getStudentsList().then(renderStudentsList);

function onFormSubmit(e) {
    e.preventDefault();
    const newStudent = getStudent();

    if (newStudent.name === null | newStudent.name === undefined | newStudent.name === '') {
    alert('Empty field')
    return
    }

    StudentsApi.create(newStudent)
    .then(newStudent => {
        renderStudentItem(newStudent);
        clearForm();
    });
}

function onDeleteBtnClick(e) {
    const $studentItem = getStudentItem(e.target);
    const studentItemId = getStudentItemId($studentItem)
    
    StudentsApi.delete(studentItemId);
    $studentItem.remove();
}

function onInputFocusOut(e) {
    const $studentItem = getStudentItem(e.target);
    const studentItemId = getStudentItemId($studentItem);

    const editedMarksArr = getEditedMarksArr($studentItem);
    StudentsApi.edit(studentItemId, {marks: editedMarksArr})
}

function getEditedMarksArr(el) {
    const arr = [];
    for (let i = 2; i < 12; i++) {
        arr.push(el.find(`:nth-child(${i})`).val())
    };
    return arr
}

function getStudent() {
    return newStudent = {
        name: $studentNameInput.val(),
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }
}

function getStudentItem(el) {
    return $(el.closest(`.${STUDENT_ITEM_CLASS}`));
}

function getStudentItemId($studentItem) {
    return $studentItem.data('id')
}

function renderStudentsList(list) {
    const html = list.map(generateStudentHtml);

    $studentList.html(html);
}

function renderStudentItem(student) {
    const newStudentHtml = generateStudentHtml(student);

    $studentList.append(newStudentHtml);
}

function generateStudentHtml(student) {
    return `
        <li class="${STUDENT_ITEM_CLASS}" data-id ="${student.id}">
            <span class="${scriptStyle.name}">${student.name}</span>
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[0]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[1]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[2]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[3]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[4]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[5]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[6]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[7]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[8]}">
            <input type="text" class="${scriptStyle.mark}" value="${student.marks[9]}">
            <button class="deleteBtn">Delete</button>
        </li>
    `;
}

function clearForm() {
    $addStudentForm[0].reset();
}