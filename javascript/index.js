const containerLatest = document.querySelector(".latest_post");

const url = "https://gronnfrosk.one/project/wp-json/wc/store/products?per_page=12";

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

// slideshow list
const slideContainer = document.querySelector("#latest_post");
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

prevButton.onclick = () => {
	slideContainer.scrollLeft -= 290;
};

nextButton.onclick = () => {
	slideContainer.scrollLeft += 290;
};
