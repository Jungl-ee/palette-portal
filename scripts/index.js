const arts = document.querySelectorAll('.art');

addEventListener("resize", () => {
    arts.forEach(art => {
        art.style.height = art.clientWidth + 'px';
    })
})