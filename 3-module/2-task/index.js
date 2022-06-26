function filterRange(arr, a, b) {

  let rangerArr = arr.filter( (num) => {

      return num >= a && num <= b;

  });


  console.log(rangerArr);
  return rangerArr;
}
