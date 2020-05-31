class LightBoxView {
  constructor(elemento) {
    this._elemento = elemento
  }

  formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL'
  })

  atualizaPrice (price) {
    return price.toString().replace('.',',')
  }

  _template(model) {
    return `<div class="lightbox">
        <div class="lightboxOverlay"></div>
        <div class="container">
          <div class="content">
            <div>
              <button class="btn__close">X</button>
              <div class="imagen">
                <img src="${model.images[0].urls.big}" alt="${model.name}" />
              </div>
              <div class="details">
                <h4>${model.name}</h4>
                <div class="size" style="display:none">
                  <strong class="title">Tamanhos:</strong>
                  <div>
                    <button>350g</button>
                    <button class="active">700g</button>
                  </div>
                </div>
                <div class="sellers">
                  <strong class="title">Onde comprar:</strong>
                  <div>
                    <ul>
                      ${
                        model.offers.map(seller => {
                          return `<li>
                            <span>
                              <img src="${seller.retailerLogo}" alt="${seller.retailer}" />
                            </span>
                            <strong data-price="${seller.price}">
                             ${this.atualizaPrice(seller.price)}
                            </strong>
                            <p>${seller.available ? 'Disponível' : 'Indisponível'} </p>
                            <a href="${seller.url}" target="_blank">Comprar</a>
                          </li>`
                        }).join('')
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="descrition">
              <strong>Descrição</strong>
              <p>${model.description}</p>
            </div>
          </div>
        </div>
      </div>`
  }

  update(model) {
    $('body').append(this._template(model))
  }
}
