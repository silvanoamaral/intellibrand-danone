(() => {
  let params = []
  const selectElement = document.querySelectorAll('select')
  selectElement.forEach(elemento => {
    elemento.addEventListener('change', event => {
      if(!event.target.value) {
        delete params[event.target.id]
      } else {
        params = {
          ...params,
          [event.target.id]: event.target.value
        }
      }

      if(Object.keys(params).length > 2) {
        const obter = new PlantasServico()
        obter.obterPlantas(params)
      }
    })
  })
})()