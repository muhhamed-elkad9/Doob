let lia = document.querySelectorAll(".navbar-nav .nav-item .nav-link")

lia.forEach((li) => {
  li.addEventListener("click", removeActive)
})

function removeActive() {
  lia.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
