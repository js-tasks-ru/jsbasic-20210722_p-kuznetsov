function makeFriendsList(friends) {
 let ul = document.createElement('ul');
 for (let elem of friends){
   ul.insertAdjacentHTML('beforeend', `<li> ${elem.firstName} ${elem.lastName}</li>`)
 }
 return ul;
}
