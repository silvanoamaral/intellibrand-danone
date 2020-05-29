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

  async function getProducts(token) {
    let resPrd = await fetch('https://locatestore.intellibrand.ai/products/', {
      method: 'get',
      headers: {
        'Authorization': token,
        'products': '8716900559006,8716900561757,8716900565441,8716900569821,7891025114888,8716900569869,8716900569845,7891025114895,7891025114901'
      }
    })

    let data = await resPrd.json()
    vitrine.update(data)
  }

  getToken()
  .then(data => getProducts(data.token))

  
})()