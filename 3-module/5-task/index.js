function getMinMax(str) {
  let arr = str.split(' ');

  let isNumber = (strg) => {
      if ( isNaN(strg) === false ) {
          // console.log(str);
      return +strg;
      }
  }

  let arrMap = arr.map(isNumber);
  let arrFilter = arrMap.filter( stg => stg !== undefined );

  let maxValueOfArr = Math.max.apply(null, arrFilter);
  let minValueOfArr = Math.min.apply(null, arrFilter);

  let result = {
      min: minValueOfArr,
      max: maxValueOfArr,
  }

  return result;

  }
