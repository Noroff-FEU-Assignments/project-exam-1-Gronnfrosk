const containerLatest = document.querySelector(".latest_post");

const url = "https://gronnfrosk.one/project/wp-json/wc/store/products";

async function renderBlogs(url) {
	const response = await fetch(url);
	const results = await response.json();

	results.forEach(function (blog) {
		containerLatest.innerHTML += `
        <div class="slider">
            <div class="blogContainer">
                <a href="/html/specificblog.html?id=${blog.id}"><img src="${blog.images[0].src}" class="product-img"></a>
                <p>${blog.attributes[0].terms[0].name}</p>
                <h3>${blog.name}</h3>
            </div>
        </div>    
        `;
	});
}
renderBlogs(url);
