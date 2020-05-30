(() => {
  //Evento para abrir ligtbox
  $(document).on('click','section.vitrine .card button', function() {
    var ean = $(this).attr('data-ean')

    obterDetalhesProd(ean)
    $("html, body").animate({ scrollTop: 0 }, 600)
  })
  
  //Evento clique para fechar ligthbox
  function closeLigthbox() {
    $('.lightbox').addClass('hide')
  }
  $(document).on('click','.lightbox button.btn__close', function() {
    closeLigthbox()
  })
  $(document).on('click','.lightbox .lightboxOverlay', function() {
    closeLigthbox()
  })

  //Evento para selecionar tamanhos
  $(document).on('click','.lightbox .size>div button', function() {
    $('.lightbox .size>div button').removeClass('active')
    $(this).addClass('active')
  })
})()