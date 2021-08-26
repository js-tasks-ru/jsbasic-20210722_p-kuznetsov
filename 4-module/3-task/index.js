function highlight(table) {
  let tBody = table.tBodies[0];
  for (let row of tBody.rows){
    let available = row.cells[3].dataset['available'];
    if (available !== undefined) {
      if (available === 'true'){ 
        row.classList.add('available');
      }
      else if (available === 'false') {
        row.classList.add('unavailable');
      }
    }
    else{
      row.hidden = true;
    }
    if (row.cells[2].innerHTML === 'm') {
      row.classList.add('male');
    }
    else{
      row.classList.add('female');
    }
    if (Number(row.cells[1].innerHTML) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
  
}

