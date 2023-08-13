//togle class active hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// togle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// togle class active untuk shoping
const shopBut = document.querySelector(".shoping-card");
document.querySelector("#shoping-card-button").onclick = (e) => {
  shopBut.classList.toggle("active");
  e.preventDefault();
};

//klik diluar element

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const shopbutt = document.querySelector("#shoping-card-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shopbutt.contains(e.target) && !shopBut.contains(e.target)) {
    shopBut.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// tombol close modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar container modal cuma untuk satu lement yang bisa
// const modal = document.querySelector("#item-detail-modal");
// window.onclick = (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// };

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
