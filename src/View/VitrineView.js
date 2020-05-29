class VitrineView {
  constructor(elemento) {
    this._elemento = elemento
  }

  _template(model) {
    return `<div class="title">
      <img src="/src/assets/images/result-pick.svg" alt="result-pick" />
      <img src="/src/assets/images/result-our-picks-for-you.svg" alt="result-our-picks-for-you" />          
    </div>
    <div class="result">
    ${
      model.map(item => {
        return `<div class="card">
          <div class="image">
            <img src="${item.url}" alt="${item.name}" />
          </div>
          <div>
            <strong>${item.name}</strong>
            <div class="info">
              <div>
                <strong>$${item.price}</strong>
              </div>
              <div class="icones">
                <img src="/src/assets/images/PetCard.svg" alt="" />
                <img src="/src/assets/images/HighSunCard.svg" alt="" />
                <img src="/src/assets/images/HighSun.svg" alt="" />
              </div>
            </div>
          </div>
        </div>`
      }).join('')
    }</div>`
  }

  removeHide() {
    if(document.querySelector('.vitrine.hide')) {
      document.querySelector('.vitrine').classList.remove('hide')
    }
  }

  loading() {
    this._elemento.innerHTML = `<div class="loading">Aguarde...</div>`
    this.removeHide()
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
    this.removeHide()
  }

  update(model) {
    this.removeHide()    
    this._elemento.innerHTML = this._template(model)
  }
}