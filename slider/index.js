let positionSlide = 0;
let slidersVisible = 3;
const slidersBrowse = 1;
const wrapperSlider = document.getElementById('wrapper-slider');
const sliderImgBox = document.getElementById('slider-img-box');
const slidersImg = document.querySelectorAll('.slider-img');
const slidersImgCount = slidersImg.length;
const slidersImgWidth = wrapperSlider.clientWidth / slidersVisible;
const movePositionSlide = slidersBrowse * slidersImgWidth;

const btnPreviousSlider = document.getElementById('btn-previous_slider');
const btnNextSlider = document.getElementById('btn-next_slider');

slidersImg.forEach((slider) => {
    slider.style.minWidth = `${slidersImgWidth}px`;
})

btnNextSlider.addEventListener('click', () => {
    const slidersImgLeft = slidersImgCount - (Math.abs(positionSlide) + slidersVisible * slidersImgWidth) / slidersImgWidth;

    positionSlide -= slidersImgLeft >= slidersBrowse ? movePositionSlide : slidersImgLeft * slidersImgWidth;
    setPosition();
    checkBtns();
})

btnPreviousSlider.addEventListener('click', () => {
    const slidersImgLeft = Math.abs(positionSlide) / slidersImgWidth;

    positionSlide += slidersImgLeft >= slidersBrowse ? movePositionSlide : slidersImgLeft * slidersImgWidth;
    setPosition();
    checkBtns();
})

const setPosition = () => {
    sliderImgBox.style.transform = `translateX(${positionSlide}px)`;
}

const checkBtns = () => {
    btnNextSlider.disabled = positionSlide <= -(slidersImgCount - slidersBrowse) * slidersImgWidth;
    btnPreviousSliderdisabled = positionSlide === 0;
}
