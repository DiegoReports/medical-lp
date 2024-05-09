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

/* FAQ */
const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach(item => {
  const faqBtn = item.querySelector('.faq__btn')

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open')
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill'
    const iconElement = faqBtn.querySelector('i')
    iconElement.classList = `${iconClass} text-2xl`
  })
})

/* SCROLL REVEAL ANIMATIONS */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600
  //reset: true //reseta a animação
})

// Hero
sr.reveal('.hero__text', { origin: 'top' })
sr.reveal('.hero__img')

// Stats
sr.reveal('.stats__item', {
  delay: 700,
  distance: '100px',
  interval: 100,
  origin: 'top'
})

// Services
sr.reveal('.services')
sr.reveal('.services__top')
sr.reveal('.services__item', {
  delay: 700,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})

// Appointments
sr.reveal('.appointment__title')
sr.reveal('.appointment__form')

// Testimonials
sr.reveal('.testimonial')
sr.reveal('.testimonial__container')

// Team
sr.reveal('.team__title')
sr.reveal('.team__slider')

// FAQ
sr.reveal('.faq__title')
sr.reveal('.faq__item', {
  delay: 500,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})

// Departments
sr.reveal('.departments__bg')
sr.reveal('.departments__container')

// Blog
sr.reveal('.blog__title')
sr.reveal('.blog__post', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})

// Brands
sr.reveal('.brands__logo', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})

// Newsletter
sr.reveal('.newsletter')
sr.reveal('.newsletter__container')

// Footer
sr.reveal('.footer__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom'
})

// Back to Top Btn
document.addEventListener('DOMContentLoaded', function () {
  const btnTop = document.getElementById('btnTop')

  btnTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  // Show Btn position Screen
  window.addEventListener('scroll', () => {
    // Verifica se o usuário está próximo do topo ou do final da página
    if (
      window.scrollY > 300 &&
      window.scrollY < document.body.offsetHeight - window.innerHeight - 300
    ) {
      btnTop.classList.add('visible')
      console.log('Botao visivel')
    } else {
      btnTop.classList.remove('visible')
      console.log('Botao oculto')
    }
  })
})
