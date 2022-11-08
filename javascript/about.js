const title = document.querySelector(".profile_title");
const image = document.querySelector(".profile_image");
const titleProfile = document.querySelector(".title_profile");
const profileList = document.querySelector(".list");
const aboutMe = document.querySelector(".about_me_container");
const url = "https://gronnfrosk.one/project/wp-json/wc/store/products?per_page=20";

async function renderAbout(url) {
	const response = await fetch(url);
	const about = await response.json();

	title.innerHTML = `
    <h1>${about[15].attributes[0].terms[0].name}</h1>
    `;
	image.innerHTML = `
	<img src="${about[15].images[0].src}" alt="Profile picture of Goldy">
	`;
	titleProfile.innerHTML = `
	<h2>${about[15].attributes[4].name}</h2>`;
	profileList.innerHTML = `
	<ul>
    <li><b>${about[15].attributes[0].name}: </b>${about[15].attributes[0].terms[0].name} </li>
    <li><b>${about[15].attributes[1].name}: </b>${about[15].attributes[1].terms[0].name} </li>
    <li><b>${about[15].attributes[2].name}: </b>${about[15].attributes[2].terms[0].name} </li>
    <li><b>${about[15].attributes[3].name}: </b>${about[15].attributes[3].terms[0].name} </li>
    </ul>
	`;
	aboutMe.innerHTML = `
	<h2>${about[15].attributes[4].terms[0].name}</h2>
	<p>${about[15].description}</p>
	`;
}
renderAbout(url);
