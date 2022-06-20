
// let first = +prompt('Введите первое число');
// let second = +prompt('Введите второе число');

// // calculator.read;


let calculator = {

  read: function(first, second) {
    
    this.first = first;
    this.second = second;    
  },

  sum: function() {
    return this.first + this.second;
  },

  mul: function() {
    return this.first * this.second;
  },
}

// calculator.read();
// console.log(calculator);