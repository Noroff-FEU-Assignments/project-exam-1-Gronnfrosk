const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
	event.preventDefault();

	if (checkLength(fullName.value, 4) === true) {
		fullNameError.style.display = "none";
	} else {
		fullNameError.style.display = "block";
	}

	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	if (checkLength(subject.value, 14) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	if (checkLength(message.value, 24) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}

	if (
		fullNameError.style.display === "none" &&
		emailError.style.display === "none" &&
		subjectError.style.display === "none" &&
		messageError.style.display === "none"
	) {
		alert("Thank you! Your message has been sent to Goldy.");
	}
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}

// Post data to Api
const formEl = document.querySelector(".contactForm");
form.addEventListener("submit", (event) => {
	const formData = new FormData(formEl);
	const data = Object.fromEntries(formData);
	console.log(data);
	fetch("https://gronnfrosk.one/project/wp-json/wp/v2/pages", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: "basic " + btoa("admin:M4GG t19d G8yT ixvh WIRO 1Nkz"),
		},
		body: JSON.stringify({
			title: "Yet another contact form",
			content: "Fullname: " + data.FullName + "<br>" + "email: " + data.Email + "<br>" + "Subject: " + data.Subject + "<br>" + "Message: " + data.Message,
			status: "publish",
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
});
