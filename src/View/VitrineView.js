class VitrineView {
  constructor(elemento) {
    this._elemento = elemento
  }

  _template(model) {
    return `<div class="list">
    <div>
    ${
      model.map(item => {
        return `<div class="card">
        <div class="image">
          <img src="${item.images[0].urls.small}" alt="${item.name}">
        </div>
        <p>${item.name}</p>
        <button data-ean="${item.ean}">ESCOLHA O MELHOR PREÇO</button>
      </div>`
      }).join('')
    }</div>
    </div>`
  }

  removeLoading() {
    if(document.querySelector('.loading')) {
      $('.loading').remove()
    }
  }

  loading() {
    $(this._elemento).append(`<div class="loading">Aguarde...</div>`)
  }

  error() {
    this._elemento.innerHTML = `<div class="box__error">
      <div class="mensage">
        <strong>No results yet… </strong>
        <p>Use the filters above to find the plant that best fits your environment :)</p>
      </div>
      <div>
        <img src="/src/assets/images/illustration.svg" alt="No results yet" />
      </div>
    </div>`
    this.removeLoading()
  }

  update(model) {
    this.removeLoading()
    var obj = model.data
    $(this._elemento).append(this._template(obj.slice(0,3)))
    $(this._elemento).append(this._template(obj.slice(3,6)))
    $(this._elemento).append(this._template(obj.slice(6)))
  }
}