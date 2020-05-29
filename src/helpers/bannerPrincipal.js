(() => {
  function atualizarBanner() {
    if(isMobile()) {
      $('section.banner__principal img').attr('src','src/assets/images/banner-principal-mobile.png')
    } else {
      $('section.banner__principal img').attr('src','src/assets/images/banner-principal.png')
    }
  }
  function isMobile() {
    return window.matchMedia("only screen and (max-width: 768px)").matches
  }

  $(window).resize(function(){
    atualizarBanner()
  })

  atualizarBanner()
})()