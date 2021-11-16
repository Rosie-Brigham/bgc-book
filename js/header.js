const carosels = document.querySelectorAll('header h1, header h2')

const fadeInTimeline = gsap.timeline()

fadeInTimeline
  .set(carosels, { opacity : 0})
  .to(carosels, { opacity : 1, delay : 1, stagger: 1, duration: 3 })

carosels.forEach(carosel => {
  const spanTag = carosel.querySelector('span')
  const spanWidth = spanTag.clientWidth

  for (let i = 0; i < 20; i = i + 1) {
    carosel.appendChild(spanTag.cloneNode(true))
  }

  const movementTimeline = gsap.timeline({
    repeat: -1
  })

  movementTimeline
    .set(carosel, { x: 0})
    .to(carosel, { x: spanWidth * -1, duration: 6, ease: "linear" })
})
