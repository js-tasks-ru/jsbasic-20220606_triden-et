/*
Первоначальные проверки:
  
  1. Предполагаем, что работаем только со строками без преобразования
  2. Переданные данные - строка
  3. Возвращается та же строка, если усечение не требуется
  4. Возвращается усеченная строка, если длина исходной строки больше maxlength
  
*/

function truncate(str, maxlength) {

  let resultStr;

  (str.length <= maxlength) ? resultStr = str : resultStr = str.slice(0, maxlength - 1) + "…";


  return resultStr;
  // console.log(str.length);
  // console.log(resultStr);

}


truncate('обрезаем символы строки', 4);