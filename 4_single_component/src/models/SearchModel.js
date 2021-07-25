const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://www.chungjungone.com/knowhow/images/blog/recipe/r220_20161122/1.jpg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://t1.daumcdn.net/liveboard/dailylife/ad3a67207e844273af5ada5dd17e6fe7.jpg'
  }
]

export default {
  list() {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}