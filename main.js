//================ RATING CHOOSE ================//
const submitRating = document.querySelector('.submit__button'),
    // // ratingForm = document.querySelector('.ratingForm'),
    button = document.querySelectorAll(".btn"),
    bxRating = document.querySelector('.boxRating'),
    bxResult = document.querySelector('.boxResult'),
    txtRating = document.querySelector('.text__result span')


button.forEach((Element) => {
    Element.addEventListener("click", () => {
        if (button.style.color = "var(--Light-Grey)") {
            txtRating.innerHTML = `${Element.value}`
        }
        else {
            txtRating.innerHTML = ''
        }
    })
})

submitRating.addEventListener("click", function clicked() {
    if (txtRating.innerHTML.trim() === '') {
        alert("Please assign a rating, then click submit.");
    } else {
        bxRating.classList.add('hide'),
            bxResult.classList.remove('hide')
    }
})
