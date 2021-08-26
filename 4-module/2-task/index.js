function makeDiagonalRed(table) {
  for (let row of table.rows){
    for (let cell of row.cells){
      if (cell.cellIndex === row.rowIndex){
        cell.style.backgroundColor = 'red';
      } 
    }
  }
}
