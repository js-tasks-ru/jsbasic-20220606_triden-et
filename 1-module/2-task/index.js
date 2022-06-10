/**
 Требования:
 1. имя не пустое (не null)
 2. без пробелов
 3. минимум 4 символа.
 
 * Эту функцию трогать не нужно
*/

function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  
  let validUserName;

  if ( name === null || name.length < 4 || name.includes( ' ' ) === true ) {
    validUserName = false;    
  }
  else {
    validUserName = true;
  }

  return validUserName;

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
