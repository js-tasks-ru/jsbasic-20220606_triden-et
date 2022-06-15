function sumSalary(salaries) {
  let teamSalaries = 0;

  for (key in salaries) {

      if (typeof salaries[key] === "number" && salaries[key] > 0 && salaries[key] !== Infinity) {

              teamSalaries = teamSalaries + salaries[key];
      }
  }
  
    return teamSalaries; 
}
