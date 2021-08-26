function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', toggle);
}

function toggle(event){
  let div = document.getElementById('text');
  div.hidden = ! div.hidden; 
}