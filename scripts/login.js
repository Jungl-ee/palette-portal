const background = document.getElementById('background');
const size = 50;
let rows, columns;

let colors = [
    '#FFFAFA',
    '#FF0800',
    '#FF8000',
    '#FFD700',
    '#C0FF00',
    '#00CCFF',
    '#0000FF',
    '#FF1493',
    '#4B0082',
    '#1B1B1B'
]

colors = colors.sort((a, b) => 0.5 - Math.random());

let count = -1;

const handleOnClick = index => {
    count += 1;

    anime({
        targets: '.tile',
        backgroundColor: colors[count % (colors.length)],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

function createTile(index) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.onclick = e => handleOnClick(index);
    return tile;
}

function createTiles(number) {
    Array.from(Array(number)).map((tile, index) => {
        background.appendChild(createTile(index));
    })
}

function createGrid() {
    background.innerHTML = "";

    rows = Math.floor(window.innerHeight / size);
    columns = Math.floor(window.innerWidth / size);

    background.style.setProperty('--rows', rows);
    background.style.setProperty('--columns', columns);
    
    createTiles(rows*columns);
}

window.onload = createGrid;
window.onresize = createGrid;
