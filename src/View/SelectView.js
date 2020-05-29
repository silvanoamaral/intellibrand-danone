class SelectView {
  constructor(elemento) {
    this._elemento = elemento
  }

  _template(model) {
    return model.map(item => {
      return `<div>
        <div class="icone">
          <img src="/src/assets/images/${item.icone}.svg" alt="${item.titulo}" />
        </div>
        <p>${item.titulo}</p>
        <select id="${item.nome}">
          <option value="">Select...</option>
          ${item.opcoes.map(opc => `<option value="${opc}">${opc}</option>`) }
        </select>
      </div>`
    }).join('')
  }

  update(model) {
    this._elemento.innerHTML = this._template(model)
  }
}