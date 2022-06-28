function showSalary(users, age) {

  let ageFilter = users.filter( (user) => {

      return user.age <= age;
  });


  let userBalance = ageFilter.map( (person) => {
      return `${person.name}, ${person.balance}`;
  });

  let strUserBalance = userBalance.join("\n");

  return strUserBalance;

}
