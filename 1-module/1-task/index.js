/* 

Натуральные числа - целые положительные

Первоначальные проверки должны быть:
1. Число положительное
2. Число целое
3. Проверка на максимально возможное число - 9007199254740991 
4. Для значений 1 и 0 - особое значение - 1

*/

function factorial(n) {

  let factorial;
  let multiple = 1;

  if ( Number.isInteger(n) && n >= 0 && n <= 9007199254740991 ) {
    if ( n === 0 || n === 1 ) {
          factorial = 1;
        }
        else {
          for ( i = 1; i <= n; i++) {
            multiple = multiple * i;
          }
          factorial = multiple;
        }    
  }
  
  else if ( n > 9007199254740991 ) {
    alert( "The number is too big" );
  } 
  
  else {
    alert( "The number is not natural" );
  }
  
return factorial;

}

/* 
Вопросы:

1. Как на практике выводят сообщения об ошибке? Не через alert же, а тоже возвращают? Как корректно возвращать вычисленное значение (факториала) и сообщение об ошибке (если должны быть предусмотрены сообщения об ошибке)?
2. Что можно оптимизировать и улучшить по коду?
3. Что не учтено при решении?

Спасибо

*/

