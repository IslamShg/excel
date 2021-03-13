const CODES = {
  A: 65,
  Z: 90   
}

function toCell(row) {
  return function(_, col) {
    return /*html*/ `
      <div  
        class="cell" 
        contenteditable
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}" 
      ></div>
    `
  }
}

function toColumn(col, index) {
  return /*html*/ `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>  
  `
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return /*html*/`
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
} 

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount) 
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
  rows.push(createRow(null, cols)) //info row
      
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('')
    
    rows.push(createRow(row + 1, cells)) // push cells
  }

  return rows.join('')
}