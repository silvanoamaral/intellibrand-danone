class LightBoxView {
  constructor(elemento) {
    this._elemento = elemento
  }

  _template(model) {
    return model.map(item => {
      return `<div class="lightbox">
        <div class="lightboxOverlay"></div>
        <div class="container">
          <div class="content">
            <div>
              <button class="btn__close">X</button>
              <div class="imagen">
                <img src="${item.images[0].urls.big}" alt="${item.name}" />
              </div>
              <div class="details">
                <h4>${item.name}</h4>
                <div class="size">
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
                        item.offers.map(seller => {
                          return `<li>
                            <span>
                              <img src="src/assets/images/logo-seller.png" alt="${seller.retailer}" />
                            </span>
                            <strong>R$ ${seller.price}</strong>
                            <p>Disponível</p>
                            <a href="">Comprar</a>
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
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      </div>`
    }).join('')
  }

  update(model) {
    $('body').append(this._template(model))
  }
}