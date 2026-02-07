const MOVIE_TITLES = [
    "The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction",
    "Forrest Gump", "Inception", "The Matrix", "Goodfellas", "Fight Club",
    "The Silence of the Lambs", "Se7en", "The Usual Suspects", "Memento",
    "The Prestige", "The Departed", "Gladiator", "Braveheart", "The Green Mile",
    "Saving Private Ryan", "Schindler's List", "Interstellar", "The Pianist",
    "Whiplash", "Django Unchained", "The Wolf of Wall Street", "American History X",
    "Casablanca", "City of God", "Alien", "Aliens", "Terminator 2", "The Terminator",
    "Back to the Future", "Raiders of the Lost Ark", "Star Wars", "The Empire Strikes Back",
    "Jurassic Park", "E.T.", "Jaws", "Rocky", "Die Hard", "Predator", "RoboCop",
    "Blade Runner", "Total Recall", "The Thing", "Scarface", "Heat", "Casino",
    "Goodfellas", "The Godfather Part II", "Apocalypse Now", "Full Metal Jacket",
    "Platoon", "The Deer Hunter", "Taxi Driver", "Raging Bull", "The Exorcist",
    "Halloween", "A Nightmare on Elm Street", "Friday the 13th", "The Shining",
    "Psycho", "Vertigo", "Rear Window", "North by Northwest", "Chinatown",
    "One Flew Over the Cuckoo's Nest", "A Clockwork Orange", "2001: A Space Odyssey",
    "Dr. Strangelove", "The Big Lebowski", "Fargo", "No Country for Old Men",
    "There Will Be Blood", "Magnolia", "Boogie Nights", "Reservoir Dogs",
    "Kill Bill", "Inglourious Basterds", "The Hateful Eight", "Once Upon a Time in Hollywood",
    "Zodiac", "Gone Girl", "The Social Network", "Moneyball", "The Curious Case of Benjamin Button",
    "Avatar", "Titanic", "The Avengers", "Iron Man", "Spider-Man", "Batman Begins",
    "Superman", "Wonder Woman", "Aquaman", "Guardians of the Galaxy", "Thor",
    "Captain America", "Black Panther", "Deadpool", "Logan", "X-Men",
    "The Wolverine", "Fantastic Four", "Hulk", "Ant-Man", "Doctor Strange",
    "Shrek", "Toy Story", "Finding Nemo", "The Incredibles", "Monsters Inc",
    "Up", "Wall-E", "Ratatouille", "Coco", "Inside Out", "Frozen", "Moana",
    "Zootopia", "Big Hero 6", "Tangled", "Brave", "Cars", "A Bug's Life",
    "The Lion King", "Aladdin", "Beauty and the Beast", "The Little Mermaid",
    "Mulan", "Pocahontas", "Hercules", "Tarzan", "Lilo and Stitch",
    "The Nightmare Before Christmas", "Coraline", "ParaNorman", "Kubo",
    "Spirited Away", "My Neighbor Totoro", "Princess Mononoke", "Howl's Moving Castle",
    "Akira", "Ghost in the Shell", "Your Name", "Weathering with You"
];

let score = 0;
let level = 1;
let shelvedCount = 0;
let gameRunning = false;
let spawnInterval = null;
let usedTitles = new Set();
let selectedDVD = null;

const SHELVES_COUNT = 3;
const SLOTS_PER_SHELF = 4;
const MAX_FLOOR_DVDS = 5;
const TOLERANCE = 3;

const DVD_COLORS = [
    '#e94560', '#0f3460', '#4ecca3', '#ff6b6b', '#845ec2',
    '#2c73d2', '#ff9671', '#ffc75f', '#f9f871', '#00c9a7',
    '#c34a36', '#008f7a', '#d65db1', '#ff6f91'
];

function getSortKey(title) {
    return title.replace(/^The\s+/i, '').toLowerCase();
}

function generateShelves() {
    const unit = document.getElementById('shelvingUnit');
    unit.innerHTML = '';

    for (let i = 0; i < SHELVES_COUNT; i++) {
        const shelf = document.createElement('div');
        shelf.className = 'shelf';
        shelf.dataset.shelfIndex = i;

        for (let j = 0; j < SLOTS_PER_SHELF; j++) {
            const slot = document.createElement('div');
            slot.className = 'shelf-slot';
            slot.dataset.shelfIndex = i;
            slot.dataset.slotIndex = j;

            slot.addEventListener('click', handleSlotClick);
            slot.addEventListener('touchend', handleSlotClick);

            shelf.appendChild(slot);
        }

        unit.appendChild(shelf);
    }
}

function createDVD(title) {
    const dvd = document.createElement('div');
    dvd.className = 'dvd';
    dvd.dataset.title = title;
    dvd.dataset.sortKey = getSortKey(title);

    const color = DVD_COLORS[Math.floor(Math.random() * DVD_COLORS.length)];
    dvd.style.background = `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -30)} 100%)`;

    const spine = document.createElement('div');
    spine.className = 'dvd-spine';
    spine.textContent = title;
    spine.title = title;
    dvd.appendChild(spine);

    dvd.addEventListener('click', handleDVDClick);
    dvd.addEventListener('touchend', handleDVDClick);

    return dvd;
}

function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function spawnDVD() {
    if (!gameRunning) return;

    const floor = document.getElementById('floorDvds');
    const currentCount = floor.children.length;

    if (currentCount >= MAX_FLOOR_DVDS) {
        gameOver('Too many DVDs on the floor!');
        return;
    }

    let availableTitles = MOVIE_TITLES.filter(t => !usedTitles.has(t));
    if (availableTitles.length === 0) {
        usedTitles.clear();
        availableTitles = MOVIE_TITLES;
    }

    const title = availableTitles[Math.floor(Math.random() * availableTitles.length)];
    usedTitles.add(title);

    const dvd = createDVD(title);
    floor.appendChild(dvd);

    updateFloorCapacity();
}

function updateFloorCapacity() {
    const floor = document.getElementById('floorDvds');
    const capacity = document.getElementById('floorCapacity');
    const count = floor.children.length;

    capacity.textContent = `${count} / ${MAX_FLOOR_DVDS}`;

    if (count >= MAX_FLOOR_DVDS - 1) {
        capacity.classList.add('warning');
    } else {
        capacity.classList.remove('warning');
    }
}

function handleDVDClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.closest('.floor-dvds')) return;

    if (selectedDVD) {
        selectedDVD.classList.remove('selected');
    }

    if (selectedDVD === this) {
        selectedDVD = null;
    } else {
        selectedDVD = this;
        this.classList.add('selected');
    }
}

function handleSlotClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!selectedDVD || this.children.length > 0) return;

    const shelfIndex = parseInt(this.dataset.shelfIndex);
    const slotIndex = parseInt(this.dataset.slotIndex);
    const dvdSortKey = selectedDVD.dataset.sortKey;

    const shelf = document.querySelectorAll(`.shelf[data-shelf-index="${shelfIndex}"] .shelf-slot`);
    const dvdsOnShelf = [];

    shelf.forEach((slot, idx) => {
        if (slot.children.length > 0 && slot.children[0].classList.contains('dvd')) {
            dvdsOnShelf.push({
                index: idx,
                sortKey: slot.children[0].dataset.sortKey
            });
        }
    });

    dvdsOnShelf.push({ index: slotIndex, sortKey: dvdSortKey });
    dvdsOnShelf.sort((a, b) => a.index - b.index);

    let isValid = true;
    let errorDistance = 0;

    for (let i = 0; i < dvdsOnShelf.length - 1; i++) {
        if (dvdsOnShelf[i].sortKey > dvdsOnShelf[i + 1].sortKey) {
            isValid = false;
            const sorted = [...dvdsOnShelf].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
            const actualPos = dvdsOnShelf.findIndex(d => d.sortKey === dvdSortKey);
            const correctPos = sorted.findIndex(d => d.sortKey === dvdSortKey);
            errorDistance = Math.abs(actualPos - correctPos);
            break;
        }
    }

    if (!isValid && errorDistance > TOLERANCE) {
        collapseShelf(shelfIndex);
        selectedDVD.classList.remove('selected');
        selectedDVD = null;
        return;
    }

    const dvdClone = selectedDVD.cloneNode(true);
    dvdClone.classList.remove('selected');
    dvdClone.classList.add('dvd-placed');
    dvdClone.style.cursor = 'default';

    this.appendChild(dvdClone);
    selectedDVD.remove();
    selectedDVD = null;

    if (isValid) {
        score += 10 * level;
    } else {
        score += 5 * level;
    }

    shelvedCount++;
    updateStats();
    updateFloorCapacity();

    if (shelvedCount % 10 === 0) {
        levelUp();
    }
}

function collapseShelf(shelfIndex) {
    const shelf = document.querySelector(`.shelf[data-shelf-index="${shelfIndex}"]`);
    const slots = shelf.querySelectorAll('.shelf-slot');
    const floor = document.getElementById('floorDvds');

    let dvdsCollapsed = 0;

    slots.forEach(slot => {
        if (slot.children.length > 0 && slot.children[0].classList.contains('dvd')) {
            const dvd = slot.children[0];
            dvd.classList.add('shelf-collapse');

            setTimeout(() => {
                const newDvd = createDVD(dvd.dataset.title);
                floor.appendChild(newDvd);
                dvd.remove();
                updateFloorCapacity();

                if (floor.children.length >= MAX_FLOOR_DVDS) {
                    gameOver('Shelf collapsed - floor overflow!');
                }
            }, 500);

            dvdsCollapsed++;
        }
    });

    score = Math.max(0, score - 50 * dvdsCollapsed);
    updateStats();
}

function levelUp() {
    level++;
    updateStats();

    clearInterval(spawnInterval);
    const newInterval = Math.max(1500, 4000 - (level * 300));
    spawnInterval = setInterval(spawnDVD, newInterval);
}

function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
}

function gameOver(reason) {
    gameRunning = false;
    clearInterval(spawnInterval);

    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOverReason').textContent = reason;
    document.getElementById('gameOverOverlay').classList.add('active');
}

function startGame() {
    document.getElementById('startOverlay').classList.add('hidden');
    document.getElementById('gameHeader').classList.add('game-active');
    resetGame();
    gameRunning = true;

    spawnDVD();
    spawnInterval = setInterval(spawnDVD, 4000);
}

function resetGame() {
    score = 0;
    level = 1;
    shelvedCount = 0;
    usedTitles.clear();
    selectedDVD = null;

    generateShelves();
    document.getElementById('floorDvds').innerHTML = '';
    updateStats();
    updateFloorCapacity();
}

function restartGame() {
    document.getElementById('gameOverOverlay').classList.remove('active');
    resetGame();
    gameRunning = true;
    spawnDVD();
    spawnInterval = setInterval(spawnDVD, 4000);
}

document.addEventListener('click', (e) => {
    if (selectedDVD && !e.target.closest('.dvd') && !e.target.closest('.shelf-slot')) {
        selectedDVD.classList.remove('selected');
        selectedDVD = null;
    }
});

generateShelves();
