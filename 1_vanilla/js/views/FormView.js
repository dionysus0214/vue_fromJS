import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  // HTML element를 주입받아서 내부적으로 속성으로 가짐
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

FormView.showResetBtn = function(show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function() { // 이벤트 바인딩
  this.on('submit', e=> e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyup = function(e) {
  const enter = 13 // enterkey는 키값이 13
  this.showResetBtn(this.inputEl.value.length) // 입력값이 있을 때만 버튼 보임
  if(!this.inputEl.value.length) this.emit('@reset')
  if(e.keyCode !== enter) return 
  this.emit('@submit', {input: this.inputEl.value}) // MainController에 입력값 전송
}

FormView.onClickReset = function() {
  this.emit('@reset') // MainController에 reset 이벤트 전달
  this.showResetBtn(false) // reset 버튼 사라짐
}

FormView.setValue = function(value = '') {
  this.inputEl.value = value;
  this.showResetBtn(this.inputEl.value.length)
}

export default FormView