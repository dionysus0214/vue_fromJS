const tag = '[View]'

export default {
  init(el) {
    // element를 자신의 property로 가짐
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) {
    // event와 handler를 인자로 받음 -
    // 현재 가지고있는 element에서 특정 event가 발생했을 때 handler가 시행
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) {
    // 이벤트를 방출하는 함수
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}