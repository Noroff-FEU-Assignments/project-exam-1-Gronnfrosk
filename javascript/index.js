// home page cover
const header = document.querySelector(".header");
const headerImage = document.querySelector(".image_header");
const slogan = document.querySelector(".slogan_title");
const headerUrl = "https://gronnfrosk.one/project/wp-json/wc/store/products?per_page=20";

async function renderHeader(headerUrl) {
	const response = await fetch(headerUrl);
	const content = await response.json();

	header.innerHTML = `
    <h1>${content[16].description}</h1>
    `;
	headerImage.innerHTML = `
    <img src="${content[16].images[0].src}" alt="The golden retriever Goldy standing on stones" class="home_page" />
    `;
	slogan.innerHTML = `
    <h2>${content[16].attributes[0].terms[0].name}</h2>
    `;
}
renderHeader(headerUrl);

// slideshow list
const containerLatest = document.querySelector(".latest_post");
const slideContainer = document.querySelector("#latest_post");
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");
const url = "https://gronnfrosk.one/project/wp-json/wc/store/products";

async function renderBlogs(url) {
	const response = await fetch(url);
	const results = await response.json();

	results.forEach(function (blog) {
		containerLatest.innerHTML += `
        <div class="slider">
            <div class="blogContainer">
                <a href="/html/specificblog.html?id=${blog.id}"><img src="${blog.images[0].src}" class="product-img">
                    <p>${blog.attributes[0].terms[0].name}</p>
                    <h3>${blog.name}</h3>
                </a>
            </div>
        </div>    
        `;
	});
}
renderBlogs(url);

prevButton.onclick = () => {
	slideContainer.scrollLeft -= 290;
};

nextButton.onclick = () => {
	slideContainer.scrollLeft += 290;
};

// Favorite list
const fav = document.querySelector("#favorites");
const otherUrl = "https://gronnfrosk.one/project/wp-json/wp/v2/media";

async function renderFavorite(otherUrl) {
	const response = await fetch(otherUrl);
	const favorites = await response.json();

	fav.innerHTML += `
		    <div class="favorites-container">    
                <img src="${favorites[5].source_url}" alt="Goldy's favorite toy bone">
                <img src="${favorites[6].source_url}" alt="Goldy's favorite snack, called fresh kisses">
                <img src="${favorites[7].source_url}" alt="Goldy's best dog friend">
            </div>`;
}
renderFavorite(otherUrl);
