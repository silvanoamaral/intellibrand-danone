class FooterViews {
  constructor(elemento) {
    this._elemento = elemento
  }

  _template() {
    return `<div class="disclaimer">
      <div class="container">
        <p>Os produtos indicados não contém glúten</p>
        <p class="margin">Imagens ilustrativas</p>
        <p>*1.Gombart, Adrian F et al. “A Review of Micronutrients and the Immune System-Working in Harmony to Reduce the Risk of Infection.” Nutrients vol. 12,1 236. 16 Jan. 2020, doi:10.3390/nu12010236</p>
        <p>2.Barazzoni, Rocco et al. “ESPEN expert statements and practical guidance for nutritional management of individuals with SARS-CoV-2 infection.” Clinical nutrition (Edinburgh, Scotland), S0261-5614(20)30140-0. 31 Mar. 2020, doi:10.1016/j.clnu.2020.03.022</p>
        <p>3.Alwarawrah, Yazan et al. “Changes in Nutritional Status Impact Immune Cell Metabolism and Function.” Frontiers in immunology vol. 9 1055. 16 May. 2018, doi:10.3389/fimmu.2018.01055</p>
      </div>
    </div>
    <div class="container">
      <strong>Consulte sua nutricionista e/ou médico</strong>
      <img src="src/assets/images/imagen-footer.png" alt="imagen-footer" />
    </div>`
  }

  update() {
    this._elemento.innerHTML = this._template()
  }
}
