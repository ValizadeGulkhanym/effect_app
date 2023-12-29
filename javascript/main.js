function toggleButton(clickedButton) {
  var buttons = document.querySelectorAll(".mobile_package");
  buttons.forEach(function (button) {
    if (button === clickedButton) {
      button.classList.add("package_active");
      button.classList.remove("package_inactive");
    } else {
      button.classList.remove("package_active");
      button.classList.add("package_inactive");
    }
  });
}

$(document).ready(function () {
  $(".slider_inner").slick({
    dots: false,
    infinite: false,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  });
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 7, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
      slidesPerView: 4,
    },

    768: {
      // при 768px и выше
      direction: "vertical",
      slidesPerView: 4, // вертикальная прокрутка
    },
    991: {
      // при 768px и выше
      direction: "vertical",
      slidesPerView: 5, // вертикальная прокрутка
    },
    1400: {
      // при 768px и выше
      direction: "vertical",
      slidesPerView: 7, // вертикальная прокрутка
    },
  },
});
// Инициализация слайдера изображений
const sliderImages = new Swiper(".slider__images .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: {
    // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
  },
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: "vertical", // вертикальная прокрутка
    },
  },
});
// ADD TO FAVORITE
function toggleFavorite(button) {
  // Toggle the 'favorite-active' class on the button
  button.classList.toggle("favorite-active");
}

// Slick Slider

$(document).ready(function () {
  $(".slider_inner").slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//dropdown
$(document).ready(function () {
  $(".dropdown-submenu a.test").on("click", function (e) {
    $(this).next("ul").toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

// Function to handle card deletion
function deleteCard(deleteButton) {
  // Get the parent card element and remove it
  var card = deleteButton.closest(".home_effectcard");

  if (card) {
    console.log("Deleting card with id:", card.id);

    card.remove();
    var storedCards = JSON.parse(localStorage.getItem("cards")) || [];

    // Get the index of the deleted card
    var index = storedCards.findIndex(function (storedCard) {
      return storedCard.id === card.id; // Assuming each card has a unique identifier (id)
    });

    // Remove the deleted card
    if (index !== -1) {
      storedCards.splice(index, 1);

      // Update the local
      localStorage.setItem("cards", JSON.stringify(storedCards));
      console.log("Updated storedCards:", storedCards);
    }
  }
}

// Attach the deleteCard function to all delete buttons with the class 'delete_btn'
var deleteButtons = document.querySelectorAll(".delete_btn");
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    deleteCard(this);
  });
});

//add to cart function
function addToCart(productButton) {
  // Assuming you have some product data associated with the card
  var productCard = productButton.closest(".home_effectcard");
  var productName = productCard.querySelector(
    ".effectcarddescription p"
  ).textContent;
  var productPrice = productCard.querySelector(
    ".wk-product-price--current"
  ).textContent;

  // Create an object representing the product
  var product = {
    name: productName,
    price: productPrice,
    // Add other product details if needed
  };

  // Assume there is a global cart array to store added products
  // Initialize it if not already created
  if (!window.cart) {
    window.cart = [];
  }

  // Add the product to the cart array
  window.cart.push(product);

  // You can perform additional actions here, such as updating the UI, displaying a confirmation, etc.
  alert("Product added to the cart!");
}

// Attach the addToCart function to all add to cart buttons with the class 'add_to_cart_btn'
var addToCartButtons = document.querySelectorAll(".add_to_cart_btn");
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    addToCart(this);
  });
});

// ADD TO CART
function toggleDropdown(button) {
  var dropdownContent = button.nextElementSibling;
  dropdownContent.classList.toggle("active");
}
function closeDropdown(timesSpan) {
  var dropdownContent = timesSpan.parentElement;
  dropdownContent.classList.remove("active");
}

//sign in
function validatePassword(password) {
  // Customize these rules to match your password requirements
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  return (
    password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber
  );
}

function validateEmail(email) {
  // Use a regular expression to check if the email is valid
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validateLogin() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMessages = document.getElementById("errorMessages");

  // Validate email
  if (!validateEmail(emailInput.value)) {
    console.log("Invalid email");
    errorMessages.textContent = "Düzgün email ünvanı daxil edin.";
    errorMessages.style.border = "1px solid rgb(208, 46, 46)";
    errorMessages.style.backgroundColor = "#fff6f6";
    errorMessages.style.paddingBlock = "10px";
    return;
  }

  // Validate password
  if (!validatePassword(passwordInput.value)) {
    console.log("Invalid password");
    errorMessages.textContent =
      "Şifrə 6 simvol böyük və kiçik hərflərdən və rəqəmdən ibarət olmalıdır!";
    errorMessages.style.border = "1px solid rgb(208, 46, 46)";
    errorMessages.style.backgroundColor = "#fff6f6";
    return;
  }

  // If all validations pass, submit the form or perform further actions
  errorMessages.textContent = "";
  alert("Login successful!");
  // Add additional logic here, such as submitting the form or redirecting the user.
}

//sign up

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#signup_form");
  var errorMessages = document.querySelector("#error-message");
  var passwordStrength = document.querySelector("#password-strength");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var validationPassed = validateSignupForm();

    if (validationPassed) {
      // If all validations pass, you can submit the form or perform further actions
      // For this example, we'll display a success message
      errorMessages.textContent = "Account created successfully!";
      errorMessages.style.color = "#2ecc71";
    }
  });

  function validateSignupForm() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Reset error message and password strength
    errorMessages.textContent = "";
    passwordStrength.textContent = "";

    var isValid = true;

    if (!firstNameInput.value.trim()) {
      showError("First name cannot be empty...");
      isValid = false;
    }

    if (!lastNameInput.value.trim()) {
      showError("Last name cannot be empty...");
      isValid = false;
    }

    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
      showError("Invalid email format...");
      isValid = false;
    }

    var passwordResult = zxcvbn(passwordInput.value);
    if (passwordResult.score < 3) {
      showError(
        "Password is not strong enough. Please choose a stronger password."
      );
      isValid = false;
    }

    return isValid;
  }

  function showError(message) {
    errorMessages.textContent = message;
    errorMessages.style.border = "1px solid rgb(208, 46, 46)";
    errorMessages.style.backgroundColor = "#fff6f6";
    errorMessages.style.color = "rgb(208, 46, 46)";
  }

  function isValidEmail(email) {
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(emailPattern);
  }

  passwordInput.addEventListener("input", function () {
    var passwordResult = zxcvbn(passwordInput.value);
    passwordStrength.textContent =
      "Password strength: " + getPasswordStrengthLabel(passwordResult.score);
    passwordStrength.className =
      "password-strength " + getPasswordStrengthClass(passwordResult.score);
  });

  function getPasswordStrengthLabel(score) {
    switch (score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  }

  function getPasswordStrengthClass(score) {
    switch (score) {
      case 0:
        return "weak";
      case 1:
        return "weak";
      case 2:
        return "fair";
      case 3:
        return "good";
      case 4:
        return "strong";
      default:
        return "";
    }
  }
});

//reset
function validateForm() {
  document.getElementById("errorMessages").innerHTML = "";
  var email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    var errorMessage = document.getElementById("errorMessages");
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.border = "1px solid rgb(169, 25, 26)";
    errorMessage.style.color = "rgb(169, 25, 26)";
    errorMessage.style.backgroundColor = "#fff6f6";

    return;
  }
  alert("Password reset email sent to " + email);
  document.getElementById("login_form").reset();
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

$(document).ready(function () {
  $(".with-submenu").click(function () {
    $(this).find(".blog_sidebar_submenu").slideToggle();
    $(this).toggleClass("active");

    // Update the arrow direction
    $(this)
      .find(".svg-arrow")
      .toggleClass("rotate-down", $(this).hasClass("active"));

    $(this)
      .siblings(".with-submenu")
      .removeClass("active")
      .find(".blog_sidebar_submenu")
      .slideUp();

    // Reset the arrow direction for other items
    $(this)
      .siblings(".with-submenu")
      .find(".svg-arrow")
      .removeClass("rotate-down");
  });
});





//IMAGE UPLOAD
const imageInput = document.getElementById("fileInput");
const imageContainer = document.getElementById("image-container");
const uploadedImages = [];

function mergeFiles() {
  const fileInput1 = document.getElementById("imageInput");
  const fileInput2 = document.getElementById("imageInput2");

  if (fileInput2.files.length !== 0) {
    const mergedFiles = Array.from(fileInput1.files).concat(
      Array.from(fileInput2.files)
    );

    const mergedFileInput = document.createElement("input");
    mergedFileInput.type = "file";
    mergedFileInput.setAttribute("id", "imageInput");
    mergedFileInput.setAttribute("name", "images");
    mergedFileInput.setAttribute("accept", "image/*");

    const newFileList = new DataTransfer();
    mergedFiles.forEach((file) => newFileList.items.add(file));

    mergedFileInput.files = newFileList.files;
    fileInput2.files = mergedFileInput.files;

    fileInput1.parentNode.replaceChild(mergedFileInput, fileInput1);
  } else {
    console.log("erkim");
    fileInput2.files = fileInput1.files;
    console.log(fileInput2.files);
  }
}

if (imageInput) {
  imageInput.addEventListener("change", handleFileSelect);

  function handleFileSelect(event) {
    const files = event.target.files;

    for (const file of files) {
      if (file.type.startsWith("image/")) {
        displayImage(file);
        uploadedImages.push(file);
        console.log(imageInput.files);
        console.log(uploadedImages);
      }
    }

    const mergedFileInput = document.createElement("input");
    const mergedFiles = Array.from(uploadedImages);
    mergedFileInput.type = "file";
    mergedFileInput.multiple = true;
    mergedFileInput.setAttribute("id", "imageInput");
    mergedFileInput.setAttribute("name", "images");
    mergedFileInput.setAttribute("accept", "image/*");

    const newFileList = new DataTransfer();
    mergedFiles.forEach((file) => newFileList.items.add(file));
    mergedFileInput.files = newFileList.files;
    imageInput.files = mergedFileInput.files;
    console.log("imageInput.files");
    console.log(imageInput.files);
  }
}

function displayImage(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const img = document.createElement("img");
    img.src = e.target.result;
    img.style.width = "100px";
    img.style.height = "100px";

    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-buttons");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "❌";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", () => deleteImage(imageWrapper, file));

    actionButtons.appendChild(deleteBtn);
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(actionButtons);
    imageContainer.appendChild(imageWrapper);
    document.getElementsByName("mainImage")[0].checked = true;
  };

  reader.readAsDataURL(file);
}

function deleteImage(imageWrapper, file) {
  imageContainer.removeChild(imageWrapper);

  const index = uploadedImages.indexOf(file);
  if (index !== -1) {
    uploadedImages.splice(index, 1);
    console.log(uploadedImages);
    updateImageInputFiles();
  }
}

function updateImageInputFiles() {
  const newFileList = new DataTransfer();
  uploadedImages.forEach((file) => newFileList.items.add(file));
  imageInput.files = newFileList.files;

  console.log("Updated imageInput.files:");
  console.log(imageInput.files);
}

const smsCodeInput = document.getElementById("sms-code");

function checkAndShowModal() {
  var phoneValue = $("#phone").val().trim();
  console.log(phoneValue);

  if (phoneValue !== "") {
    $("#yourModalId").show();
    countdown.style.display = "none";

    var timeElement = document.getElementById("countdownFirst");

    if (timeElement) {
      var timeArray = timeElement.innerText.split(":");
      var minutes = parseInt(timeArray[0]);
      var seconds = parseInt(timeArray[1]);

      var countdownInterval = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
          clearInterval(countdownInterval);
        } else {
          seconds = seconds === 0 ? 59 : seconds - 1;
          minutes = seconds === 59 ? minutes - 1 : minutes;

          var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
          var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
          timeElement.innerText = formattedMinutes + ":" + formattedSeconds;
        }
      }, 1000);
    }
  } else {
    console.log(
      "Phone number is empty. Show an error message or take appropriate action."
    );
  }
}

function closeModal() {
  $("#yourModalId").hide();
  if (smsCodeInput) {
    smsCodeInput.value = "";
    smsCodeInput.focus();
  } else {
    console.error("Input field with ID 'sms-code' not found");
  }
}
