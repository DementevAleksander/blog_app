export class Component { //основные возможности для других компанентов. Наследуемся от этого класса.
  constructor(id) { //id - корневой блок какого-либо компонента (например,   <ul class="tabs" id="navigation"></ul>).
    this.$el = document.getElementById(id) //$el - приватная переменная. $ прописываем для переменных, когда в переменную складываются DOM-элементы.
    this.init()
  }

  init() {}

  hide() {
    this.$el.classList.add('hide')
  }

  show() {
    this.$el.classList.remove('hide')
  }
}