alert(factorial(getNumber()))

function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
      } else {
        return n * factorial(n - 1);
    }
}

function getNumber() {
    let number
    do {
        number = Number(prompt('Enter number', 3))
    } while (isNaN(number) ||  number < 0);
    return number
}