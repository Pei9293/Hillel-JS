let result = question_1() + question_2() + question_3() + question_4() + question_5()
alert(`вы набрали ${result} баллов из 50`)

function question_1() {
    let answer_1 = prompt('Сколько будет 2+2')
    if (answer_1 === '4') {
        return 10
    } return 0
}

function question_2() {
    let answer_1 = prompt('Солнце встает на востоке?')
    if (answer_1 === 'да') {
        return 10
    } return 0
}

function question_3() {
    let answer_1 = prompt('Сколько будет 5 / 0?')
    if (answer_1 === 'бесконечность') {
        return 10
    } return 0
}

function question_4() {
    let answer_1 = prompt('Какого цвета небо?')
    if (answer_1 === 'голубого') {
        return 10
    } return 0
}

function question_5() {
    let answer_1 = prompt('Какой правильный ответ на «Главный вопрос жизни, вселенной и всего такого»')
    if (answer_1 === '42') {
        return 10
    } return 0
}