let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
	popup.style.display = 'flex';
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
	main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
});

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".open-btn");
  const popup = document.getElementById("popup");
  const popupContentContainer = document.getElementById("popup-content-container");
  const closeBtn = document.getElementById("close-btn");
  
  openBtn.addEventListener("click", function () {
    // Fetch content from popup.html using AJAX or other methods
    fetch("popup.html")
      .then(response => response.text())
      .then(content => {
        popupContentContainer.innerHTML = content;
        popup.style.display = "block";
      })
      .catch(error => console.error("Error fetching content:", error));
  });
  
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
  
  // You can also close the popup if clicking outside of it
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

