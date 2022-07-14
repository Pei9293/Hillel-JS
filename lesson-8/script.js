// function num(base) {
//   const originBase = base;

//   return {
//     inc: () => {
//       ++base;
//     },
//     dec: () => {
//       --base
//     },
//     get: () => base,
//     reset: () => {
//       base = originBase
//     },

//   };
// }


const baseAdd10 = num(10);
const baseAdd100 = num(100);
const baseAdd1000 = num(1000);


function createCalculator(base) {
  // implement
}

const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10); // 120
calculator.sub(20); // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()) // 40



function createCalculator(base) {
  return {
      add: (addNum) => {
          if (!isNaN(addNum)) {
              base += addNum;
          }
      },
      sub: (subNum) => {
          if (!isNaN(subNum)) {
              base -= subNum;
          }
      },
      set: () => {
          do {
              base = Number(prompt('Enter  Number', 5))
          } while (isNaN(base));
      },
      get: () => base,
  };
}

const calculator = createCalculator(Number(prompt('Enter  Number', 5)));

function createCalculator(base) {
  if(!isNumber(num)) {
    base = 0;
  }
  function add(num) {
    if(isNumber(num)) {
      base += num
    }
  }
  function sub(num) {
    if(isNumber(num)) {
      base -= num
    }
  }
  return {
    add,
  }
  function isNumber(num) {
    return !isNaN(num);
  }
  };



// const calculator = createCalculator(Number(prompt('Choose base Number', 5)));