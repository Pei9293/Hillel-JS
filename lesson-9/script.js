const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')

btn.addEventListener('click', (e) => {
    console.log(input.value)

    result.innerHTML += `<li>${input.value}</li>`
    input.value = ''
})


// document.children[0].children[1].children[0].children[0].children[0].children[1]
// <li>​…​</li>​

// Find

// document.querySelector('.hello')
// document.querySelectorAll('.hello')
// document.querySelector('#fifthEl').closest('.container');


// .value
// .className
// .classList
// .dataset
// .style
// .attributes 
// .setAttribute()


// console.log(ul.textContent);
// console.log(ul.innerText); // не используем
// console.log(ul.innerHTML);


// ul.append(liEl); // el, text
// ul.appendChild(liEl);// el


// let liEl = document.createElement('li');

// liEl.textContent = '7 элемент';
// ul.append(liEl);

// liEl.remove()



// const input = document.querySelector('#inputComment')
// const ul = document.querySelector('ul')
// const li = document.querySelector('#sixEl')
// const button = document.querySelector('#btn')
// const user = document.querySelector('#user')

// button.addEventListener('click', onButtonClick)

// function onButtonClick() {
    // document.querySelector('#btn').textContent = 'Clicked';

    // console.log(document.querySelector('#inputComment').value);

    // document.querySelector('#inputComment').value = 'XXX'

    // document.querySelector('#user').textContent = 'Harry Potter';
    // document.querySelector('#user').classList.add('red', 'font');

    // user.textContent = 'Harry Potter';
    // user.classList.add('red', 'font');

    // ul.style.display = 'none';

//     ul.classList.toggle('hide');
// }


