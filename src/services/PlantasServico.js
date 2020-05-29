class PlantasServico {

  obterPlantas(params) {
    const elementVitrine = document.querySelector('section.vitrine')
    const container = elementVitrine.querySelector('.container')
    const vitrine = new VitrineView(container)
    vitrine.loading()

    window.scrollTo({
      top: elementVitrine.offsetTop - 100,
      behavior: 'smooth',
    })

    if(Object.keys(params)) {
      let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&')

      fetch(`api/plantas?${query}`)
      .then(res => res.json())
      .then(data => {
        if(Object.keys(data).length)
          vitrine.update(data)
        else
          vitrine.error()
      })
    }
  }
}