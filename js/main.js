let buttonScrol = document.getElementById("btn-scroll");
window.onscroll = function () {
  scrollUp();
};
function scrollUp() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScrol.style.display = "block";
  } else {
    buttonScrol.style.display = "none";
  }
}
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
