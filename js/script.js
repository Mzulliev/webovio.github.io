const sliderContainer = document.querySelector('.slideshow-container');
const slider = () => {
    sliderContainer.classList.toggle('slider-active');
}
setInterval(slider, 10000);

const burgerBtn = document.querySelector('#burger');
const navigation = document.querySelector('nav ul')
const clickButton = () => {
    burgerBtn.classList.toggle('burger-active');
    navigation.classList.toggle('nav-active');
    
}
burgerBtn.addEventListener('click', clickButton);
