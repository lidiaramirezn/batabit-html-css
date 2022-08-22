const link = document.getElementById('linkPlans');
/* const sliderPlans = document.getElementById('slider-plans');
const withItemPlan = document.querySelector('.plans__slide').clientWidth ;
const plansNext = document.getElementById('plans-next'); */

link.addEventListener('click', goPlans);
// plansNext.style.left = `${withItemPlan+withItemPlan/3+20}px`;

function goPlans(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

function scrollHorizontal(slider, left) {
  slider.scrollBy({
    top: 0,
    left,
    behavior: "smooth"
  });
}