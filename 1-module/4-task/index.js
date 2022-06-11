/*
Первоначальные проверки:
  
  1. Предполагаем, что работаем только со строками без преобразования
  2. Переданные данные - строка
  3. Возвращает true, если строка содержит '1xBet' или 'XXX'
  4. Не имеет значение пустая строка или нет
  
*/

function checkSpam(str) {

  let strIsSpam;
  let lowstr = str.toLowerCase();
  
  if ( typeof str === 'string') {

    if ( lowstr.includes('1xbet') || lowstr.includes('xxx') ) { // от трех иксов

      strIsSpam = true;  
    }
    else {
      strIsSpam = false;
    }

  }
  else {
    strIsSpam = 'It is not a string';
  }

return strIsSpam;

}
