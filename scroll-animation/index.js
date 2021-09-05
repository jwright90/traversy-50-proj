const scrollTrigger = window.innerHeight * 0.85;
const boxes = document.querySelectorAll('.box');

scrollBoxes();

function scrollBoxes() {
  boxes.forEach(box => {
    let boxTop = box.getBoundingClientRect().top;

    if (boxTop < scrollTrigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', scrollBoxes);