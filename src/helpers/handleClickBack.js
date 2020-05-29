(() => {
  const btn = document.querySelector('button.btn__back')
  btn.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }))
})()