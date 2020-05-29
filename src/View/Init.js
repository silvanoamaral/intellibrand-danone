(() => {  
  const select = new SelectView(document.querySelector('.box__select'))
  const data = new OpcoesSelect()
  select.update(data.opcoesSelect)  
})()