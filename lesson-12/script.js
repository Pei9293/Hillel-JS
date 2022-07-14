
const calc = new Calculator(100);

calc.add(10); // 110 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)
calc.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)
calc.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 30 записывает в this.base (в консоль ничего выводить не нужно)
calc.add('qwe'); // игнорируем все что не число и значение 30 не меняется
calc.get(); // 30 возвращаем значение



function Calculator(base) {
  this.base = base,
  this.add = function(num) {
      if (isNumberValidation(num)) {
          this.base += Number(num)
      }
  };
  this.sub = function(num) {
      if (isNumberValidation(num)) {
          this.base -= num
      }
  };
  this.set = function(num) {
      if (isNumberValidation(num)) {
          this.base = num
      }
  };
  this.get = function() {
      return this.get
  }
}

function isNumberValidation(num) {
  if (isNaN(num)) {
      return false
  } else {
      return true
  }
}

