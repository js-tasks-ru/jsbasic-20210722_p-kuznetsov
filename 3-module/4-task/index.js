function showSalary(users, age) {
  let filteredArray = users.filter(user => user.age <= age);
  let result = filteredArray.map(myUser=> myUser.name + ', ' + myUser.balance);
  return result.join('\n');
}
