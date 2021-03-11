import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize'
import {shouldResize} from './table.functions';
import {TableSelection} from './TableSelection';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
    this.$root = $root
  }

  toHTML() {
    return createTable(20)
  } 

  init() {
    super.init()

     this.selection = new TableSelection()
  }

  onMousedown(event) { 
    if (shouldResize(event)) {
      resizeHandler(event, this.$root)
    }   
  }
} 