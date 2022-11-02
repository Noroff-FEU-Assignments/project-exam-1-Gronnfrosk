const blogList = document.querySelector(".blogList");
const searchButton = document.querySelector(".search_button");
const more = document.querySelector("#more");
const url = "https://gronnfrosk.one/project//wp-json/wc/store/products";

async function renderBlogs(url) {
	const response = await fetch(url);
	const results = await response.json();

	results.forEach(function (blog) {
		blogList.innerHTML += `
        <div class="blogContainer">
            <a href="/html/specificblog.html?id=${blog.id}"><img src="${blog.images[0].src}" class="product-img"></a>
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
	renderBlogs(newUrl);
};

// more
more.onclick = function (event) {
	const newUrl = url + "?per_page=20";
	blogList.innerHTML = "";
	renderBlogs(newUrl);
	more.style.display = "none";
};
