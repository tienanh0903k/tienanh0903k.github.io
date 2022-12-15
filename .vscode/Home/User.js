// Custom
var custom = document.querySelectorAll(".custom__color"),
  btn_color = document.querySelectorAll(".btn__color"),
  paint = document.querySelector(".paint"),
  color_price = document.querySelectorAll(".color_price"),
  wheel_pic = document.querySelectorAll(".wheels__pic"),
  wheels = document.querySelector(".wheels"),
  wheels_price = document.querySelectorAll(".wheel_price"),
  price_colors = [0, 1100, 1000, 800, 1000, 800],
  price_wheels = [0, 2000, 1200],
  index_color = 0,
  price_df = 409744,
  price = document.querySelector(".total");

// custom paint
btn_color.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    custom[i].classList.add("custom__color-active");
    btn_color[i].classList.add("btn__color-active");

    if (i == 0) {
      paint.innerHTML = "Nero Helene";
      color_price[0].innerHTML = "Nero Helene";
      color_price[1].innerHTML = "+ $" + price_colors[i];
      index_color = i;
    }
    if (i == 1) {
      paint.innerHTML = "Bianco Monocerus";
      color_price[0].innerHTML = "Bianco Monocerus";
      color_price[1].innerHTML = "+ $" + price_colors[i];
      index_color = i;
    }

    if (i == 2) {
      paint.innerHTML = "Yellow";
      color_price[0].innerHTML = "Yellow";
      color_price[1].innerHTML = "+ $" + price_colors[i];
      index_color = i;
    }
    if (i == 3) {
      paint.innerHTML = "Green";
      color_price[0].innerHTML = "Green";
      color_price[1].innerHTML = "+ $" + price_colors[i];
      index_color = i;
    }
    if (i == 4) {
      paint.innerHTML = "Blu Astraeus";
      color_price[0].innerHTML = "Blu Astraeus";
      color_price[1].innerHTML = "+ $" + price_colors[i];
      index_color = i;
    }
    if (i == 5) {
      paint.innerHTML = "Rosso Mars";
      color_price[0].innerHTML = "Rosso Mars";
      color_price[1].innerHTML = "+ $" + price_colors[i];
      index_color = i;
    }
    custom.forEach((btn_remove, j) => {
      if (j != i) {
        btn_remove.classList.remove("custom__color-active");
      }
    });
    btn_color.forEach((btn_remove, j) => {
      if (j != i) {
        btn_remove.classList.remove("btn__color-active");
      }
    });
  });
});

// custom wheels

wheel_pic.forEach((pic, i) => {
  pic.addEventListener("click", function () {
    wheel_pic.forEach((e) => {
      e.classList.remove("pic");
    });
    if (i == 0) {
      wheels.innerHTML = "23 inch Basic";
      wheels_price[0].innerHTML = "23 inch Basic";
      wheels_price[1].innerHTML = "+ $" + price_wheels[i];
      price.innerHTML = price_df + price_wheels[i] + price_colors[index_color];
      wheel_pic[i].classList.add("pic");
    }
    if (i == 1) {
      wheels.innerHTML = "23 inch Carbon";
      wheels_price[0].innerHTML = "23 inch Carbon";
      wheels_price[1].innerHTML = "+ $" + price_wheels[i];
      price.innerHTML = price_df + price_wheels[i] + price_colors[index_color];
      wheel_pic[i].classList.add("pic");
    }
    if (i == 2) {
      wheels.innerHTML = "24 inch Innox";
      wheels_price[0].innerHTML = "24 inch Innox";
      wheels_price[1].innerHTML = "+ $" + price_wheels[i];
      price.innerHTML = price_df + price_wheels[i] + price_colors[index_color];
      wheel_pic[i].classList.add("pic");
    }
  });
});

// ==================== Information =========

function showSet(set, put) {
  // Hiển thị mục chỉnh sửa thông tin
  var show = document.querySelector("." + set);
  var input = document.querySelectorAll("." + put);
  input.forEach((e) => {
    e.classList.add("none");
  });
  show.style.display = "block";
}
function unshowSet(set, put) {
  // Ẩn mục chỉnh sửa thông tin
  var show = document.querySelector("." + set);
  var input = document.querySelectorAll("." + put);
  input.forEach((e) => {
    e.classList.remove("none");
  });
  show.style.display = "none";
  location.reload();
}
function displayInvalid(e) {
  // Hiển thị Lỗi input
  var parent = e.parentElement;
  var display = parent.parentElement.querySelector(".error");
  parent.classList.add("invalid");
  parent.classList.remove("valid");
  display.innerText = "Information is invalid";
}
function displayValid(e) {
  // ẨN Lỗi input
  var parent = e.parentElement;
  var display = parent.parentElement.querySelector(".error");
  parent.classList.add("valid");
  parent.classList.remove("invalid");
  display.innerText = "";
}

var email = document.getElementById("email"),
  phone = document.getElementById("phone"),
  bank = document.getElementById("bank"),
  emailValue = email.value.trim(),
  phoneValue = phone.value.trim(),
  bankValue = bank.value.trim();
// Biến giá trị

function checkName() {
  //Check thông tin tên
  event.preventDefault();
  var fname = document.getElementById("fname"),
    lname = document.getElementById("lname"),
    fnameValue = fname.value.trim(),
    lnameValue = lname.value.trim(),
    error = true;

  if (!fnameValue) {
    displayInvalid(fname);
    error = true;
  } else {
    displayValid(fname);
    window.localStorage.setItem("fname", fnameValue);
    error = false;
  }
  if (!lnameValue) {
    displayInvalid(lname);
    error = true;
  } else {
    displayValid(lname);
    window.localStorage.setItem("lname", lnameValue);
    error = false;
  }
  if (error == false) alert("Update Successful");
}

function checkDate() {
  //Check thông tin ngày tháng năm sinh và giới tính
  event.preventDefault();
  var day = document.getElementById("day"),
    month = document.getElementById("month"),
    year = document.getElementById("year"),
    gender = document.querySelector("input[type='radio']:checked"),
    dValue = day.value,
    mValue = month.value,
    yValue = year.value,
    error = true;

  if (!dValue || dValue > 31 || dValue < 1) {
    displayInvalid(day);
    error = true;
  } else {
    displayValid(day);
    window.localStorage.setItem("day", dValue);
    error = false;
  }
  if (!mValue || mValue > 12 || mValue < 1) {
    displayInvalid(month);
    error = true;
  } else {
    displayValid(month);
    window.localStorage.setItem("month", mValue);
    error = false;
  }
  if (!yValue || yValue < 1900) {
    displayInvalid(year);
    error = true;
  } else {
    displayValid(year);
    window.localStorage.setItem("year", yValue);
    error = false;
  }
  if (gender == undefined || gender == null) {
    window.localStorage.setItem("gender", "Don't want to say");
  } else {
    window.localStorage.setItem("gender", gender.value);
  }
  if (error == false) alert("Update Successful");
}

function CheckAddress() {
  //Check thông tin tên
  event.preventDefault();
  var address = document.getElementById("address"),
    country = document.getElementById("country"),
    addressValue = address.value,
    countryValue = country.value,
    error = true;

  if (!addressValue) {
    displayInvalid(address);
    error = true;
  } else {
    displayValid(address);
    window.localStorage.setItem("address", addressValue);
    error = false;
  }
  if (!countryValue) {
    displayInvalid(country);
    error = true;
  } else {
    displayValid(country);
    window.localStorage.setItem("country", countryValue);
    error = false;
  }
  if (error == false) alert("Update Successful");
}

function checkContact() {
  event.preventDefault();
  var email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    bank = document.getElementById("bank"),
    emailValue = email.value.trim(),
    phoneValue = phone.value.trim(),
    bankValue = bank.value.trim(),
    error = true;

  if (
    !emailValue ||
    !emailValue.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    displayInvalid(email);
    error = true;
  } else {
    displayValid(email);
    window.localStorage.setItem("email", emailValue);
    error = false;
  }
  if (!phoneValue || phoneValue.length != 10) {
    displayInvalid(phone);
    error = true;
  } else {
    displayValid(phone);
    window.localStorage.setItem("phone", phoneValue);
    error = false;
  }
  if (!bankValue || bankValue.length > 17) {
    displayInvalid(bank);
    error = true;
  } else {
    displayValid(bank);
    window.localStorage.setItem("bank", bankValue);
    error = false;
  }
  if (error == false) alert("Update Successful");
}
// Set thong tin ten hien thi
function mainname() {
  var fname = localStorage.getItem("fname"),
    lname = localStorage.getItem("lname"),
    mainname = document.querySelector(".mainname"),
    fullname = document.querySelector(".fullname");

  if (fname == null && lname == null) {
    mainname.innerHTML = "User";
    fullname.innerHTML = "User";
  } else {
    mainname.innerHTML = lname;
    fullname.innerHTML = fname + " " + lname;
  }
}
mainname();

//Chuyển trang
var user_display = document.querySelector(".user__right");
var options = document.querySelectorAll(".op");
var ctrl2 = document.querySelectorAll(".ctrl2");

options.forEach((x) => {
  //Them và xóa class act trong options

  x.addEventListener("click", (e) => {
    options.forEach((y) => {
      y.classList.remove("act");
    });
    x.classList.add("act"); //act
  });
});

function actHomeuser() {
  var user_display = document.querySelector(".user__right");
  user_display.classList.remove(
    "active_homeuser",
    "active_info",
    "active_custom"
  );
  user_display.classList.add("active_homeuser");
}
function actInfo() {
  var user_display = document.querySelector(".user__right");
  var ctrl2 = document.querySelectorAll(".ctrl2");

  var fname = localStorage.getItem("fname"),
    lname = localStorage.getItem("lname"),
    day = localStorage.getItem("day"),
    month = localStorage.getItem("month"),
    year = localStorage.getItem("year"),
    gender = localStorage.getItem("gender"),
    address = localStorage.getItem("address"),
    country = localStorage.getItem("country"),
    email = localStorage.getItem("email"),
    phone = localStorage.getItem("phone"),
    bank = localStorage.getItem("bank");
  user_display.classList.remove(
    "active_homeuser",
    "active_info",
    "active_custom"
  );
  user_display.classList.add("active_info");
  // inner info vào trang
  for (var i = 0; i < ctrl2.length; i++) {
    if (i == 0) {
      if (fname == null && lname == null) {
        ctrl2[i].innerHTML = "Update your infomation ";
      } else ctrl2[i].innerHTML = fname + " " + lname;
    }

    if (i == 1) {
      if (day == null || month == null || year == null) {
        ctrl2[i].innerHTML = "Update your infomation ";
      } else ctrl2[i].innerHTML = month + " " + day + ", " + year;
    }

    if (i == 2) {
      if (gender == null) ctrl2[i].innerHTML = "Update your infomation ";
      else ctrl2[i].innerHTML = gender;
    }
    if (i == 3) {
      if (address == null) ctrl2[i].innerHTML = "Update your infomation ";
      else ctrl2[i].innerHTML = address;
    }
    if (i == 4) {
      if (country == null) ctrl2[i].innerHTML = "Update your infomation ";
      else ctrl2[i].innerHTML = country;
    }
    if (i == 5) {
      if (email == null) ctrl2[i].innerHTML = "Update your infomation ";
      else ctrl2[i].innerHTML = email;
    }
    if (i == 6) {
      if (phone == null) ctrl2[i].innerHTML = "Update your infomation ";
      else ctrl2[i].innerHTML = phone;
    }
    if (i == 7) {
      if (bank == null) ctrl2[i].innerHTML = "Update your infomation ";
      else ctrl2[i].innerHTML = bank;
    }
  }
}
function actCustom() {
  var user_display = document.querySelector(".user__right");

  user_display.classList.remove(
    "active_homeuser",
    "active_info",
    "active_custom"
  );
  user_display.classList.add("active_custom");
}

// =================== Log out =================
var logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  localStorage.setItem("signed", false);
  window.location = "../Home/Login.html";
});

window.onload = function () {
  let defaultOn = localStorage.getItem("defaultOn"),
    options = document.querySelectorAll(".op");

  if (defaultOn == "active_info") {
    actInfo();
    localStorage.removeItem("defaultOn");
    for (const key in options) {
      if (key == 1) {
        options[key].classList.add("act");
      } else options[key].classList.remove("act");
    }
  } else if (defaultOn == "active_custom") {
    actCustom();
    localStorage.removeItem("defaultOn");
    for (const key in options) {
      if (key == 2) {
        options[key].classList.add("act");
      } else options[key].classList.remove("act");
    }
  }
};
