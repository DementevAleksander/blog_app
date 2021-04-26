import {Component} from '../core/component'

export class HeaderComponent extends Component {
  constructor(id) {
    super(id) //для корректного наследования от Component - вызываем родительский компонент.
  }

  init() {
    const btn = this.$el.querySelector('.js-header-start')
    btn.addEventListener('click', buttonHandler.bind(this)) //.bind(this) байндим функцию buttonHandler, чтобы в приватной части получать наследуемые функции.
  }
}

//привытные функции, только для этого файла.
function buttonHandler() {
  this.hide()
}