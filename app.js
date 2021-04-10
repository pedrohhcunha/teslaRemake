const btns = document.querySelectorAll('.prevImg')
const cars = document.querySelector('.first-section')

btns.forEach(element => {
    element.addEventListener('click', () => {
        cars.classList.remove('um')
        cars.classList.remove('dois')
        cars.classList.remove('tres')
        cars.classList.remove('quatro')
        cars.classList.add(element.getAttribute('data-class'))
    })
});