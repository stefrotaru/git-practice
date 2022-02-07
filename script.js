let ul = document.querySelector("ul");


const stories = [
	"Story 1",
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
