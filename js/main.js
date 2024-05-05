// mobile nav
const mobileNav = document.querySelector('.mnav')
const closeBtn = document.querySelector('.mnav__close-btn')
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon')

const navOpenedClass = 'left-0'
const navClosedClass = '-left-[300px]'
const arrowLeftClass = 'ri-arrow-left-s-line'
const arrowRightClass = 'ri-arrow-right-s-line'

/* closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navOpenedClass)) {
    // Verifica se o menu está aberto
    mobileNav.classList.toggle(navOpenedClass) // Fecha o menu
    closeBtnIcn.classList.toggle(arrowLeftClass) // Altera o ícone do botão
    closeBtnIcn.classList.toggle(arrowRightClass)
  } else {
    mobileNav.classList.toggle(navOpenedClass) // Abre o menu
    closeBtnIcn.classList.toggle(arrowLeftClass) // Altera o ícone do botão
    closeBtnIcn.classList.toggle(arrowRightClass)
  }
}) */

closeBtn.addEventListener('click', () => {
  mobileNav.classList.toggle(navOpenedClass) // Alternar entre abrir e fechar o menu
  if (mobileNav.classList.contains(navClosedClass)) {
    closeBtnIcn.classList.toggle(arrowLeftClass)
    closeBtnIcn.classList.toggle(arrowRightClass)
  }
})

/* SWIPER */

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
