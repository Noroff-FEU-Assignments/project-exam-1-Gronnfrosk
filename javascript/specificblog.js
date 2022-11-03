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
