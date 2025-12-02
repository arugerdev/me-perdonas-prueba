var clickSnd = new Audio("./click.mp3");
var confettiSnd = new Audio("./confetti.mp3");

const jsConfetti = new JSConfetti()

const confettiBtn = document.querySelector('.confetti')
const noBtn = document.querySelector('.no')
const siBtn = document.querySelector('.si')
const q_img = document.querySelector('.image')
const q_text = document.querySelector('.question')

noBtn.addEventListener('mouseover', function () {
  const x = Math.random() * (0.9 - 0.1)
  this.style.position = 'absolute'
  this.style.top = x * window.innerHeight + "px"
  this.style.left = Math.random() * (0.9 - 0.1) * window.innerWidth + "px"
  console.log(x)
});


window.addEventListener('click', function () {
  clickSnd.currentTime = 0
  clickSnd.play()
})

siBtn.addEventListener('click', () => {
  q_text.textContent = "Gracias! Yo tambien te quiero ♥"
  q_img.src = './happy.jpg'

  noBtn.style.display = "none"
  siBtn.style.display = "none"
  confettiBtn.style.display = "flex"
  jsConfetti.addConfetti()

  confettiSnd.play()

  document.title = "Te quiero ♥"
})
confettiBtn.addEventListener('click', () => {
  jsConfetti.addConfetti()
  confettiSnd.play()
})