/*
Первоначальные проверки:
  
  1. Предполагаем, что работаем только со строками без преобразования
  2. Переданные данные - строка
  3. При пустой строке возвращается пустая строка
  4. Минимальная длина строки - 1 символ
  5. Максимальная длина игнорируется
  
*/

function ucFirst(str) {

  let resultStr;

  if ( typeof str === 'string' ) {

    if (str.length === 0) {
      resultStr = str;
    } 
    else if (str.length === 1) {
      resultStr = str.toUpperCase();
    } 
    else {
      resultStr = str.toUpperCase().slice(0, 1) + str.slice(1, str.length);
    }
  }

  else {
    resultStr = "Значение не является строкой";
  }

return resultStr;

}

/* 

Буду рада советам и замечаниям

Спасибо

*/
