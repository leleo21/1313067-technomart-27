// MODAL FEEDBACK
var link = document.querySelector(".lost-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var form = document.querySelector(".modal-feedback form");
var feedbackName = document.querySelector("[name=name]");
var feedbackEmail = document.querySelector("[name=email]");
var feedbackMessage = document.querySelector("[name=feedback]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName) {
    feedbackName.value = storageName;

    if (storageEmail) {
      feedbackEmail.value = storageEmail;
      feedbackMessage.focus();
    } else {
      feedbackEmail.focus();
    }
  } else {
    feedbackName.focus;
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

// MODAL MAP
var mapLink = document.querySelector(".map");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});

// MODAL PURCHASE
var purchaseLink = document.querySelectorAll(".buy");
var bookmarksLink = document.querySelectorAll(".bookmark");
var purchaseModal = document.querySelector(".modal-purchase");
var purchaseClose = document.querySelector(".modal-purchase .modal-close");
var purchaseResume = document.querySelector(".continue-button");
var cart = document.querySelector(".cart");
var bookmarks = document.querySelector(".bookmarks");

for (var i = 0; i < purchaseLink.length; i++) {
  purchaseLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    purchaseModal.classList.add("modal-show");
    cart.classList.add("head-navigation-active");
  });
}

for (var i = 0; i < bookmarksLink.length; i++) {
  bookmarksLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarks.classList.add("head-navigation-active");
  });
}

purchaseClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  purchaseModal.classList.remove("modal-show");
});

purchaseResume.addEventListener("click", function(evt) {
  evt.preventDefault();
  purchaseModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (purchaseModal.classList.contains("modal-show")) {
      evt.preventDefault();
      purchaseModal.classList.remove("modal-show");
    }
  }
});