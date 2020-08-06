(() => {
  const elementVitrine = document.querySelector('section.vitrine .container')
  const container = elementVitrine.querySelector('div')
  const vitrine = new VitrineView(container)

  function alterarOrdem(data) {
    const primeiro = data.filter(item => {
      if(item.ean === '7891025114901' || item.ean === '7891025114895' || item.ean === '7891025114888') return item
    })

    const segundo = data.filter(item => {
      if(item.ean === '8716900569821' || item.ean === '8716900569869' || item.ean === '8716900569845') return item
    })

    const terceiro = data.filter(item => {
      if(item.ean === '8716900559006' || item.ean === '8716900561757' || item.ean === '8716900565441') return item
    })

    return [
      ...primeiro,
      ...segundo,
      ...terceiro
    ]
  }

  async function getProducts(token) {
    const listProduct = '7891025114901,7891025114895,7891025114888,8716900569821,8716900569869,8716900569845,8716900559006,8716900561757,8716900565441'
    sessionStorage.setItem('tokenintellibrand', token)
    let resPrd = await fetch('https://locatestore.intellibrand.ai/products/', {
      method: 'get',
      headers: {
        'Authorization': token,
        'products': listProduct
      }
    })

    let data = await resPrd.json()
    vitrine.update(alterarOrdem(data.data))
  }

  const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkQnJhbmQiOjEzLCJpZENvbXBhbnkiOjI3LCJ1c2VyTmFtZSI6Ik51dHJpZHJpbmsifSwianRpIjoiYzkxMzVjM2YtZTBmMi00ZDhjLTgzNzgtMTMwZjgwMTNkMGM5IiwiaWF0IjoxNTk2NjMzNDg5LCJleHAiOjE1OTY2MzcwODl9.M6ZeTcnBwxfU5mChf-9aaEmytQojqkBFrtyr67OB5qM'
  getProducts(token)
  
})()