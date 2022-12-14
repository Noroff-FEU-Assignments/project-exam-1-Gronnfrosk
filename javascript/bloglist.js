const blogList = document.querySelector(".blogList");
const searchButton = document.querySelector(".search_button");
const more = document.querySelector("#more");
const url = "https://gronnfrosk.one/project/wp-json/wc/store/products";

async function renderBlogs(url) {
	const response = await fetch(url);
	const results = await response.json();

	results.forEach(function (blog) {
		blogList.innerHTML += `
        <div class="blogContainer">
            <a href="/html/specificblog.html?id=${blog.id}" text="A specific post"><img src="${blog.images[0].src}" class="product-img" alt="Post of Goldy"></a>
            <p>${blog.attributes[0].terms[0].name}</p>
            <h3>${blog.name}</h3>
        </div>
        `;
	});
}
renderBlogs(url);

// Filter
searchButton.onclick = function () {
	const searchInput = document.querySelector("#search_input").value;
	const newUrl = url + `?search=${searchInput}`;
	blogList.innerHTML = "";
	more.style.display = "none";
	if (searchInput === "") {
		more.style.display = "inline";
	}
	renderBlogs(newUrl);
};

// more
more.onclick = function (event) {
	const newUrl = url + "?per_page=15";
	blogList.innerHTML = "";
	renderBlogs(newUrl);
	more.style.display = "none";
};
