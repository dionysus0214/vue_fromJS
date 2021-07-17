const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://www.chungjungone.com/knowhow/images/blog/recipe/r220_20161122/1.jpg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://lh3.googleusercontent.com/proxy/Yu7wjvcewtzrPeLdWCSismrk6yas5m4qh8U6GQc-iC34YR_kDUVtDEkNtRo9aGRWTgdp46qnRw8An-B7OVQQ_aP_HCoTenom2RUmBiNouME8U0U-nSU'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}