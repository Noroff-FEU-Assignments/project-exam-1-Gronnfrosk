const container = document.querySelector("#container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
parseInt(id);

const url = "https://gronnfrosk.one/project/wp-json/wc/store/products/" + id;

async function fetchBlog() {
	const response = await fetch(url);
	const results = await response.json();

	container.innerHTML += `<img src="${results.images[1].src}" alt="Dog picture" id="image" class="image" onclick="imageModal()">
                            <p class="date">${results.attributes[0].terms[0].name}</p>
                            <h1>${results.name}</h1>
                            <P>${results.description}</p>
                            `;
}
fetchBlog();

if (id === null) {
	location.href = "/index.html";
}

// Modal picture
function imageModal() {
	const image = document.querySelector("#image");
	if (image.classList.contains("image")) {
		image.classList.remove("image");
	} else if (image.classList.contains("")) {
		image.classList.add("image");
	} else {
		image.classList.add("image");
	}
}

// comments
function store() {
	const text = document.getElementById("text-area-first").value;
	const addComment = document.querySelector(".textSaved");

	addComment.innerHTML += `<p>${text}</p>`;

	fetch("https://gronnfrosk.one/project/wp-json/wp/v2/posts", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: "basic " + btoa("admin:M4GG t19d G8yT ixvh WIRO 1Nkz"),
		},
		body: JSON.stringify({
			title: text,
			content: "Comment: Yet another comment",
			status: "publish",
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}

// previous comments
const urlComments = "https://gronnfrosk.one/project/wp-json/wp/v2/posts";

async function fetchComments() {
	const addComment = document.querySelector(".comments");
	const response = await fetch(urlComments);
	const comments = await response.json();

	for (let i = 0; i < comments.length; i++) {
		addComment.innerHTML += `<div>${comments[i].title.rendered}</div>
								<p>Date: ${comments[i].date}</p>
                            `;
	}
}
fetchComments();
