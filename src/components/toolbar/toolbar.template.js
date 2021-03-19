function toButton(button) {
  const meta = `
  data-type="button"
  data-value='${JSON.stringify(button.value)}'
  `
  return `
    <div 
      class="button ${button.active ? 'active' : ''}"
      ${meta}
    >
      <i 
        class="material-icons" 
        ${meta}
        >${button.icon}</i>
    </div>
  `
}

export function createToolbar(s) {
  const buttons = [
    { 
      value: {textAlign: 'left'},
      icon: 'format_align_left',
      active: s['textAlign'] === 'left'
    },
    {
      value: {textAlign: 'center'},
      icon: 'format_align_center',
      active: s['textAlign'] === 'center'
    },
    {
      value: {textAlign: 'right'},
      icon: 'format_align_right',
      active: s['textAlign'] === 'right'
    },
    {
      value: {fontWeight: s['fontWeight'] === 'bold' ? 'normal' : 'bold'},
      icon: 'format_bold',
      active: s['fontWeight'] === 'bold'
    },
    {
      value: {fontStyle: s['fontStyle'] === 'normal' ? 'italic' : 'normal'},
      icon: 'format_italic',
      active: s['fontStyle'] === 'italic'
    },
    {
      value: {
        textDecoration: s['textDecoration'] === 'none' 
        ? 'underline' 
        : 'none'
      },
      icon: 'format_underline',
      active: s['textDecoration'] === 'underline'
    }
  ]
  return buttons.map(toButton).join('')
}