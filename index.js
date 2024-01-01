const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn'); 
const containerEl = document.getElementById('container');
let selectedRating = '';


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (event) => {
          removeActive();
          selectedRating = event.target.innerText || event.target.parentNode.innerText;
          event.target.classList.add('active');
          event.target.parentNode.classList.add('active');
    });
});

btnEl.addEventListener('click', () => {
    if(selectedRating !== ''){
        containerEl.innerHTML = `
        <strong>Thank you for your feedback!</strong>
        <br>
        <br>
        <strong>You have rated us ${selectedRating}</strong>
        <p>I'll use your feedback to improve my projects.</p>`;
    }
});

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    });
}