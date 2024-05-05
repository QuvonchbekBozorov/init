const btn1 = document.querySelector(`.btn1`);
const btn2 = document.querySelector(`.btn2`);
const btn3 = document.querySelector(`.btn3`);
const div1 = document.querySelector(`.div1`);
const div2 = document.querySelector(`.div2`);
const div3 = document.querySelector(`.div3`);


const katta = document.querySelector(`.katta`);

btn1.addEventListener(`click`, () => {
    btn1.classList.add(`x`)
    btn2.classList.remove(`x`)
    btn3.classList.remove(`x`)
})
btn2.addEventListener(`click`, () => {
    btn1.classList.remove(`x`)
    btn2.classList.add(`x`)
    btn3.classList.remove(`x`)
})
btn3.addEventListener(`click`, () => {
    btn1.classList.remove(`x`)
    btn2.classList.remove(`x`)
    btn3.classList.add(`x`)
})