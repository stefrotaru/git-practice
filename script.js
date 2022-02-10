let ul = document.querySelector("ul");


const stories = [
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"Story 2",
	"Story 3",
	"Story 4",
	"Story 5",
	"Story 6",
	"Story 7",
	"Story 8",
	"Story 9",
	"Story 10",
];

// Choosing a random story from the stories variable
function randomNews(){
	let randomNmbr = Math.floor(Math.random() * stories.length);
	return randomNmbr
};

// Adding a random story to the page
function displayNews(){
	let selectedArt = stories[randomNews()];
	var newsText = document.createElement("div");
	newsText.appendChild(document.createTextNode(selectedArt));
	ul.appendChild(newsText);
};

displayNews();
