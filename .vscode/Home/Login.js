var vid = document.getElementById("vid1");
vid.volume = 0.1;

// ===============HÀM THÔNG BÁO LỖI===========================
function showInvalid(input, message) {
  let parent = input.parentElement;
  let mes = parent.querySelector(".mes");
  mes.classList.add("mes_invalid");
  mes.innerHTML = message;
}
//=============== HÀM ẨN THÔNG BÁO LỖI ===========================
function showSuccess(input) {
  let parent = input.parentElement;
  let mes = parent.querySelector(".mes");
  mes.classList.remove("mes_invalid");
  mes.classList.add("mes_valid");
  mes.innerHTML = "";
}

//===============HÀM CHECK LỖI===========================
function checkInvalid(array) {
  var isInvalid = false;
  var regexBlank = /\s/g;
  array.forEach((element) => {
    var value = element.value.trim();
    if (!value) {
      showInvalid(element, "This field is required");
      isInvalid = true;
    } else if (value.match(regexBlank)) {
      showInvalid(element, "This field haven't got blank space");
      isInvalid = true;
    } else showSuccess(element);
  });

  return isInvalid;
}

//Ham check thong tin forgot password
var forgot = document.getElementById("forgot__send");
forgot.addEventListener("click", (e) => {
  event.preventDefault();
  var input = document.getElementById("forgot"),
    input_value = input.value.trim();
  if (!input_value) {
    showInvalid(input, "Email is required");
  } else if (
    !input_value.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    showInvalid(input, "Email is invalid!");
  } else {
    showSuccess(input);
    location.reload();
  }
});

// Hàm check login valid
function checkLogin(us, ps) {
  var isInvalid = false;
  if (us.value.trim() != localStorage.getItem("username")) {
    isInvalid = true;
  } else {
    showSuccess(us);
    isInvalid = false;
  }
  if (ps.value.trim() != localStorage.getItem("password")) {
    showInvalid(ps, "Enter a valid username or password and try again!");
    isInvalid = true;
  } else {
    showSuccess(ps);
    isInvalid = false;
  }
  if (
    us.value.trim() == localStorage.getItem("username") &&
    ps.value.trim() == localStorage.getItem("password")
  ) {
    isInvalid = false;
  }
  return isInvalid;
}

//=================== SIGN IN ===========================
var signin = document.getElementById("signin");
signin.addEventListener("click", (e) => {
  event.preventDefault();
  var username_signin = document.getElementById("user"),
    password_signin = document.getElementById("password");
  var isInvalid1 = checkInvalid([username_signin, password_signin]);

  if (isInvalid1 == false) {
    var isInvalid2 = checkLogin(username_signin, password_signin);
    if (isInvalid2 == false) {
      window.location = "../Home/User.html";
      localStorage.setItem("signed", true);
    }
  }
});

// ==================== SIGN UP ===================
var signup = document.getElementById("signup");
signup.addEventListener("click", (e) => {
  var username_signup = document.getElementById("user__signup"),
    password_signup = document.getElementById("password__signup"),
    passwordcf_signup = document.getElementById("confirm__password");
  event.preventDefault();

  var isInvalid = checkInvalid([
    user__signup,
    password__signup,
    passwordcf_signup,
  ]);

  if (isInvalid == false) {
    window.localStorage.setItem("username", username_signup.value.trim());
    window.localStorage.setItem("password", password_signup.value.trim());

    alert("Create Account Successful");
  }
});
