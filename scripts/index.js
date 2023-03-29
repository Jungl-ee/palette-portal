// Typer
window.ityped.init(document.querySelector('.display-text'),{
    strings: ['Create','Buy','Sell', 'Explore'],
    typeSpeed: 150,
    backSpeed: 200,
    backDelay: 3000,
    loop: true
})

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
    images.push(`../assets/img${i}.jpg`)
}

// shuffles images
images = images.sort((a, b) => 0.5 - Math.random());


arts.forEach((art, i) => {
    art.style.backgroundImage = `url(${images[i]})`;
})