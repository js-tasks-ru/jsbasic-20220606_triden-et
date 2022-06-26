function camelize(str) {
  let arr = str.split('-');

  let fooUpperLetter = (strg) => {
      let upperString = strg.slice(0, 1).toUpperCase() + strg.slice(1);
      return upperString;
  }

  let arrToUppCase = arr.map(fooUpperLetter);

  let arrAllUpperCase = arrToUppCase.join('');

  let strCamelize;

  if (str.slice(0, 1) === '-') {
    strCamelize = arrAllUpperCase;
  } else {
    strCamelize = arrAllUpperCase.slice(0, 1).toLowerCase() + arrAllUpperCase.slice(1);
  }

  return strCamelize;
}
