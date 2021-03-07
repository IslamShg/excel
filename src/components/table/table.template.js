const CODES = {
  A: 65,
  Z: 90   
}

function toCell() {
  return /*html*/ `
    <div class="cell" contenteditable=""></div>
  `
}

function toColumn(col) {
  return /*html*/ `
    <div class="column">${col}</div>  
  `
}

function createRow(index, content) {
  return /*html*/`
    <div class="row">
      <div class="row-info">${index ? index : ''}</div>
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
      
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
        
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}