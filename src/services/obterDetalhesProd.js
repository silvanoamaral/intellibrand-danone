const container = document.querySelector('body')
var eleBody = new LightBoxView(container)

async function obterDetalhesProd(ean) {
  var token = sessionStorage.getItem('tokenintellibrand')

  var resPrd = await fetch(`https://locatestore.intellibrand.ai/product/${ean}`, {
    method: 'get',
    headers: { 'Authorization': token }
  })

  var obj = await resPrd.json()
  eleBody.update(obj.data)
}
