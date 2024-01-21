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


  // Function to reinitialize the slider on tab change
  function refreshSlider() {
    $('.slider_inner').slick('refresh');
  }

  // Event listener for tab change
  $('.nav-pills-custom a').on('shown.bs.tab', function (e) {
    refreshSlider();
  });
});


// Инициализация превью слайдера
const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 6, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  // autoHeight: true,
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  loop: true, // Добавлено
  centeredSlides: true, // Добавлено
  freeMode: true,

  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
      slidesPerView: 4,
      spaceBetween: 20,
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
      slidesPerView: 6, // вертикальная прокрутка
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
  autoHeight: true,
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
  loop: true,
  centeredSlides: true,
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

// $(document).ready(function () {
//   $(".slider_inner").slick({
//     dots: true,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 6,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   });
// });


//dropdown
$(document).ready(function () {
  $(".dropdown-submenu a.test").on("click", function (e) {
    $(this).next("ul").toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

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
    errorMessages.textContent = "Şifrə 6 simvol böyük və kiçik hərflərdən və rəqəmdən ibarət olmalıdır!";
    errorMessages.style.border = "1px solid rgb(208, 46, 46)";
    errorMessages.style.backgroundColor = "#fff6f6";
    return;
  }

  // If all validations pass, submit the form or perform further actions
  errorMessages.textContent = "";
  alert("Login successful!");
  // Add additional logic here, such as submitting the form or redirecting the user.
}



// Function to handle card deletion
function deleteCard(deleteButton) {
  // Get the parent card element and remove it
  var card = deleteButton.closest('.home_effectcard');

  if (card) {
    console.log('Deleting card with id:', card.id);

    card.remove();
    var storedCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Get the index of the deleted card 
    var index = storedCards.findIndex(function (storedCard) {
      return storedCard.id === card.id; // Assuming each card has a unique identifier (id)
    });

    // Remove the deleted card 
    if (index !== -1) {
      storedCards.splice(index, 1);

      // Update the local
      localStorage.setItem('cards', JSON.stringify(storedCards));
      console.log('Updated storedCards:', storedCards);
    }
  }
}

// Attach the deleteCard function to all delete buttons with the class 'delete_btn'
var deleteButtons = document.querySelectorAll('.delete_btn');
deleteButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    deleteCard(this);
  });
});




//add to cart function
function addToCart(productButton) {
  // Assuming you have some product data associated with the card
  var productCard = productButton.closest('.home_effectcard');
  var productName = productCard.querySelector('.effectcarddescription p').textContent;
  var productPrice = productCard.querySelector('.wk-product-price--current').textContent;

  // Create an object representing the product
  var product = {
    name: productName,
    price: productPrice
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
  alert('Product added to the cart!');
}

// Attach the addToCart function to all add to cart buttons with the class 'add_to_cart_btn'
var addToCartButtons = document.querySelectorAll('.add_to_cart_btn');
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
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


// RATING STARS

// // To access the stars
// let stars = document.getElementsByClassName("star");
// let output = document.getElementById("output");

// // Funtion to update rating
// function gfg(n) {
//   remove();
//   for (let i = 0; i < n; i++) {
//     if (n == 1) cls = "one";
//     else if (n == 2) cls = "two";
//     else if (n == 3) cls = "three";
//     else if (n == 4) cls = "four";
//     else if (n == 5) cls = "five";
//     stars[i].className = "star " + cls;
//   }
//   output.innerText = "Rating is: " + n + "/5";
// }

// // To remove the pre-applied styling
// function remove() {
//   let i = 0;
//   while (i < 5) {
//     stars[i].className = "star";
//     i++;
//   }
// }




$(document).ready(function () {
  $('.with-submenu').click(function () {
    $(this).find('.blog_sidebar_submenu').slideToggle();
    $(this).toggleClass('active');

    // Update the arrow direction
    $(this)
      .find('.svg-arrow')
      .toggleClass('rotate-down', $(this).hasClass('active'));

    $(this)
      .siblings('.with-submenu')
      .removeClass('active')
      .find('.blog_sidebar_submenu')
      .slideUp();

    // Reset the arrow direction for other items
    $(this)
      .siblings('.with-submenu')
      .find('.svg-arrow')
      .removeClass('rotate-down');
  });
});




// SHOW RATED REVIEW MODAL

function showReviewModal(reviewModal) {

  // var stickyWrapper = $(".sticky_footer_cart_wrapper");
  // stickyWrapper.fadeOut(); // or use .hide() to hide instantly

  $(`#${reviewModal}`).removeClass("review-modal-show");
  $(`#${reviewModal}`).removeClass("fade");
  $("body").removeClass("modal-open");
  // Show the modal
  $(`#${reviewModal}`).addClass("review-modal-show");
  $(`#${reviewModal}`).addClass("fade");
  $(".review-backdrop").addClass("show");
  // modal-backdrop      .modal-backdrop.show
}
function closeReviewModal(reviewModal) {
  $(`#${reviewModal}`).removeClass("review-modal-show");
  $(`#${reviewModal}`).removeClass("fade");
  $("body").removeClass("modal-open");
  $(".review-backdrop").removeClass("show");
}


// END RATED REVIEW MODAL





//IMAGE UPLOAD STARTS

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
    img.style.width = "80px";
    img.style.height = "80px";

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

// IMAGE UPLOAD ENDS







// To access the stars and radio inputs
let stars = document.querySelectorAll(".add_your_star .star");
let radioInput = document.querySelector('input[name="starRating"]');

// Function to update rating
function gfg(n) {
  remove();
  for (let i = 0; i < n; i++) {
    let cls = getStarClass(i, n);
    if (stars[i]) {
      stars[i].classList.add(cls);
    }
  }

  // Update the value of the associated radio input
  radioInput.value = n;
}

// To remove the pre-applied styling
function remove() {
  stars.forEach((star) => {
    star.className = "star";
  });
}

// Helper function to get star class based on index and rating
function getStarClass(index, rating) {
  switch (rating) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    default:
      return "";
  }
}




// STICKY DETAILS ADD TO CART STARTS
$(document).ready(function () {
  var stickyWrapper = $(".sticky_footer_cart_wrapper");
  var showAfterScroll = 100; // Adjust this value to your desired scroll amount

  // Initially hide the sticky wrapper
  stickyWrapper.hide();

  $(window).scroll(function () {
    var scrolled = window.pageYOffset;

    // if (scrolled > showAfterScroll && !$('.basket_modal').hasClass('show') && !$('.review-modal').hasClass('review-modal-show')) {
    if (scrolled > showAfterScroll) {
      //  alert('yes')
      stickyWrapper.fadeIn(); // or use .show() for instant visibility
    } else {
      stickyWrapper.fadeOut(); // or use .hide() to hide instantly
    }
  });
});


// STICKY ADD TO CART
$(document).ready(function () {



  $(".sticky-add .styled-select").click(function () {

    var container = $(this).next(".sticky-add .options-container");
    var spaceAbove = $(window).scrollTop();
    var spaceBelow = $(window).height() - ($(this).offset().top - $(window).scrollTop());

    if (spaceBelow > spaceAbove) {
      container.css({ top: "100%", bottom: "auto" });
    } else {
      container.css({ top: "auto", bottom: "100%" });
    }

    container.slideToggle();
  });

  $(".sticky-add .options-container div").click(function () {
    $(".sticky-add .options-container div").removeClass("active");

    var selectedValue = $(this).text();
    var selectedName = $(this).attr('name')
    $(this).addClass("active");
    $(".styled-select span").text(selectedValue);
    $(".styled-select span").attr('name', selectedName);
    $(".options-container").slideUp();
  });

  $(window).scroll(function () {

    $(".sticky-add .options-container").slideUp();
  });
});




// SLIDER HIGHTS

function setHeights() {
  // Get all the image elements inside the slider__images
  var images = document.querySelectorAll('.slider__images .swiper-slide img');

  // Find the maximum height among all images
  var maxHeight = 0;
  images.forEach(function (image) {
    var imageHeight = image.clientHeight;
    if (imageHeight > maxHeight) {
      maxHeight = imageHeight;
    }
  });

  // Set the height of the slider__images to the maximum height
  var sliderImages = document.querySelector('.slider__images');
  sliderImages.style.height = maxHeight + 'px';

  // Set the height of the slider__thumbs to slider__images height - 96px
  var sliderThumbs = document.querySelector('.slider__thumbs');
  sliderThumbs.style.height = (maxHeight - 96) + 'px';
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Initial call to set heights
  setHeights();
});

// Event listener for window resize
window.addEventListener('resize', setHeights);

// Event listener for images load
window.addEventListener('load', setHeights);