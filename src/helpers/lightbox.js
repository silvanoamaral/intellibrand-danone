(() => {
  //Evento para abrir ligtbox
  $(document).on('click touchstart','section.vitrine .card button', function() {
    var ean = $(this).attr('data-ean')

    obterDetalhesProd(ean)
    $("html, body").animate({ scrollTop: 0 }, 600)
  })
  
  //Evento clique para fechar ligthbox
  function closeLigthbox() {
    $('.lightbox').remove()
  }
  $(document).on('click touchstart','.lightbox button.btn__close', function() {
    closeLigthbox()
  })
  $(document).on('click touchstart','.lightbox .lightboxOverlay', function() {
    closeLigthbox()
  })

  //Evento para selecionar tamanhos
  $(document).on('click touchstart','.lightbox .size>div button', function() {
    $('.lightbox .size>div button').removeClass('active')
    $(this).addClass('active')
  })
})()