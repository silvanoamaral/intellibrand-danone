(() => {
  const elementVitrine = document.querySelector('section.vitrine .container')
  const container = elementVitrine.querySelector('div')
  var vitrine = new VitrineView(container)

  async function getToken() {
    vitrine.loading()
    const data = JSON.stringify({
      "email": "danone@intellibrand.ai",
      "password": "9DXODD6l6P"
    })

    let response = await fetch('https://locatestore.intellibrand.ai/auth', {
      method: 'post',
      body: data,
      headers: { 'Content-type': 'application/json' }
    })
    
    if(response.status !== 200) {
      console.error('Falha ao tentar acessar o token.', res)
    }

    let res = await response.json()
    return res
  }//fim getToken

  function alterarOrdem(data) {
    const primeiraLista = '7891025114901,7891025114895,7891025114888'
    const segundaLista = '8716900569821,8716900569869,8716900569845'
    const terceiraLista = '8716900559006,8716900561757,8716900565441'

    var primeiro = data.filter(item => {
      if(item.ean === '7891025114901' || item.ean === '7891025114895' || item.ean === '7891025114888') return item
    })

    var segundo = data.filter(item => {
      if(item.ean === '8716900569821' || item.ean === '8716900569869' || item.ean === '8716900569845') return item
    })

    var terceiro = data.filter(item => {
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

  getToken()
  .then(data => getProducts(data.token))

  
})()