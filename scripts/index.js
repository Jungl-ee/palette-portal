// Typer
window.ityped.init(document.querySelector('.display-text'), {
    strings: ['Create', 'Buy', 'Sell', 'Explore'],
    typeSpeed: 150,
    backSpeed: 200,
    backDelay: 3000,
    loop: true
})

// Search Bar
let suggestions = [
    'modern art',
    'realistic art',
    'Leonardo Da Vinci',
    'Vincent van Gogh',
    'Pablo Picasso',
    'Rembrandt',
    'Johannes Vermeer',
    'renault',
    'remembrance'
];
let toggle = false; // Toggle for search bar focus handeling
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            // Added onclick handler to li tag
            return data = `<li onclick="suggestionOnClickHandler(this)">${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(value) {

}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function hideBar(element) {
    if (toggle) {
        // clicking anywhere on page tries to hide the search bar
        // but not if toggle is true, sets toggle to false
        toggle = false;
        return;
    }
    // if toggle is false, hides the search bar
    searchWrapper.classList.remove("active");
}

function showBar() {
    searchWrapper.classList.add("active");
    // Toggles on focus indicating that search bar was clicked by the user
    toggle = true;

}

// Arts height adjust
const arts = document.querySelectorAll('.art');

arts.forEach(art => {
    art.style.height = art.clientWidth + 'px';
})

addEventListener("resize", () => {
    arts.forEach(art => {
        art.style.height = art.clientWidth + 'px';
    })
})

// Image inserter
let images = [];
for (let i = 1; i <= 6; i++) {
    images.push(`../static/assets/img${i}.jpg`)
}

// shuffles images
images = images.sort((a, b) => 0.5 - Math.random());


arts.forEach((art, i) => {
    art.style.backgroundImage = `url(${images[i]})`;
})

function suggestionOnClickHandler(element) {
    // Set input box value to the clicked li element
    inputBox.value = element.textContent;
    searchWrapper.classList.remove("active");
}