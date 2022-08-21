const link = document.getElementById('linkPlans');

link.addEventListener('click', goPlans);

function goPlans(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}