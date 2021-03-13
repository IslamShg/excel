export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    $el.focus().addClass(TableSelection.className)
    this.group.push($el)
    this.current = $el
  }

  clear() {
    this.group.forEach(elem => elem.removeClass(TableSelection.className))
    this.group = []
  }
 
  selectGroup($group = []) {
    this.clear()

    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }
}