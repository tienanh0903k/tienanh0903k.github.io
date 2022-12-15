//js for img slide
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
var info = document.querySelectorAll(".info");
let index = 1;
// function change image slider by btn
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  info.forEach((in4) => {
    in4.classList.remove("info__active");
  });
  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
  info[manual].classList.add("info__active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    index = i;
  });
});

//Open menu burger cấp 3
var content__burger = document.querySelectorAll(".content__burger3");
var btn__burger3 = document.querySelectorAll(".btn__burger3");

btn__burger3.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    content__burger[i].classList.toggle("content__burger3-active");
    content__burger.forEach((btn_remove, j) => {
      if (j != i) {
        btn_remove.classList.remove("content__burger3-active");
      }
    });
  });
});

// function auto play image slider
var repeat = function () {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      info.forEach((in4) => {
        in4.classList.remove("info__active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      info[i].classList.add("info__active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

//JS for show

function unshowback(Class__parent, Class__add) {
  let remove = document.querySelector("." + Class__parent);
  remove.classList.remove(Class__add);

  let burger3 = document.querySelectorAll(".content__burger3").forEach((e) => {
    e.classList.remove("content__burger3-active");
  });
}
function Show(Class__parent, Class__add) {
  let toggle = document.querySelector("." + Class__parent);
  toggle.classList.toggle(Class__add);
}

// Hàm Show Tên logo
var text = document.querySelector(".text");
text.addEventListener("mouseover", () => {
  text.classList.remove("hidden");
});
text.addEventListener("mouseout", () => {
  text.classList.add("hidden");
});

//  Hàm nếu đăng nhập rồi thì vào user , không thì vào login
function user() {
  let signed = JSON.parse(localStorage.getItem("signed"));
  if (signed == null || signed == false) {
    window.location = "../Home/login.html";
  } else window.location = "../Home/User.html";
}

//Dieu huong content user

function defaultOn(div) {
  user();
  localStorage.setItem("defaultOn", div);
}
// Log out
var logout = document.getElementById("logout");
window.onload = function () {
  let signed = JSON.parse(localStorage.getItem("signed"));
  if (signed == null || signed == false) {
    logout.style.display = "none";
  }
};
logout.addEventListener("click", (e) => {
  localStorage.setItem("signed", false);
  window.location = "../Home/Login.html";
});
