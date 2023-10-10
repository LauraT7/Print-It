const slides = [
  {
    image: './assets/images/slideshow/slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
  },
  {
    image: './assets/images/slideshow/slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
  },
  {
    image: './assets/images/slideshow/slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
  },
  {
    image: './assets/images/slideshow/slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
  }
]

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
let currentIndex = 0

arrowLeft.addEventListener('click', function () {
  currentIndex--
 
  if (currentIndex < 0) {
    currentIndex = slides.length 
    - 1
  }
 
  carrouselImage.src = slides[currentIndex].image

  const tagLine = document.querySelector('#tag_line')
  tagLine.innerHTML = slides[currentIndex].tagLine

  const allDots = document.querySelectorAll('.dot')
  allDots.forEach(dot => dot.classList.remove('dot_selected'))

  const currentDot = document.querySelector(
    `.dot:nth-child(${currentIndex + 1})`
  )
  currentDot.classList.add('dot_selected')

})

//-----------------------------------------------

arrowRight.addEventListener('click', function () {
  currentIndex++
  if (currentIndex >= slides.length) {
    currentIndex = 0
  }
  const carrouselImage = document.querySelector('.carrousel_image')
  carrouselImage.src = slides[currentIndex].image

  const tagLine = document.querySelector('#tag_line')
  tagLine.innerHTML = slides[currentIndex].tagLine
  const allDots = document.querySelectorAll('.dot')
  allDots.forEach(dot => dot.classList.remove('dot_selected'))
  const currentDot = document.querySelector(
    `.dot:nth-child(${currentIndex + 1})`
  )
  currentDot.classList.add('dot_selected')
})
