var write = document.querySelector(".button-write");
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storage = localStorage.getItem("fullname");
write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    fullname.value = storage;
    email.focus();
    } else {
    	fullname.focus();
    }
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
if (!fullname.value || !email.value || !message.value) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
	console.log("Нужно ввести имя, почту и сообщение");
	} else {
		localStorage.setItem("fullname", fullname.value);
	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});