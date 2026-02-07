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
let difficulty = 'medium';
let shelvedCount = 0;
let gameRunning = false;
let spawnInterval = null;
let usedTitles = new Set();
let selectedDVD = null;
let draggedDVD = null;
let touchDragClone = null;
let touchStartPos = null;

const SHELVES_COUNT = 3;
const SLOTS_PER_SHELF = 4;
const MAX_FLOOR_DVDS = 5;
const TOTAL_DVDS = SHELVES_COUNT * SLOTS_PER_SHELF;

const DIFFICULTY_SETTINGS = {
    easy: { interval: 5000, multiplier: 1, label: 'Easy', color: '#4ecca3' },
    medium: { interval: 4000, multiplier: 2, label: 'Medium', color: '#ffc75f' },
    hard: { interval: 2500, multiplier: 4, label: 'Hard', color: '#ff6b6b' },
    insane: { interval: 1500, multiplier: 8, label: 'Insane', color: '#e94560' }
};

let dvdsSpawned = 0;

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
            slot.addEventListener('dragover', handleDragOver);
            slot.addEventListener('dragleave', handleDragLeave);
            slot.addEventListener('drop', handleDrop);

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
    dvd.draggable = true;

    const color = DVD_COLORS[Math.floor(Math.random() * DVD_COLORS.length)];
    dvd.style.background = `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -30)} 100%)`;
    dvd.dataset.bgColor = color;

    const spine = document.createElement('div');
    spine.className = 'dvd-spine';
    spine.textContent = title;
    spine.title = title;
    dvd.appendChild(spine);

    dvd.addEventListener('click', handleDVDClick);
    dvd.addEventListener('dragstart', handleDragStart);
    dvd.addEventListener('dragend', handleDragEnd);
    dvd.addEventListener('touchstart', handleTouchStart, { passive: false });
    dvd.addEventListener('touchmove', handleTouchMove, { passive: false });
    dvd.addEventListener('touchend', handleTouchEnd);

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

    // Don't spawn more DVDs than shelf slots
    if (dvdsSpawned >= TOTAL_DVDS) {
        clearInterval(spawnInterval);
        return;
    }

    const floor = document.getElementById('floorDvds');
    const currentCount = floor.children.length;

    if (currentCount >= MAX_FLOOR_DVDS) {
        gameOver('Too many DVDs on the floor!');
        return;
    }

    const availableTitles = MOVIE_TITLES.filter(t => !usedTitles.has(t));
    const title = availableTitles[Math.floor(Math.random() * availableTitles.length)];
    usedTitles.add(title);

    const dvd = createDVD(title);
    floor.appendChild(dvd);
    dvdsSpawned++;

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

    placeDVDInSlot(selectedDVD, this);
}

function placeDVDInSlot(dvd, slot) {
    const isFromFloor = dvd.closest('.floor-dvds') !== null;
    const sourceSlot = dvd.closest('.shelf-slot');

    const shelfIndex = parseInt(slot.dataset.shelfIndex);
    const slotIndex = parseInt(slot.dataset.slotIndex);
    const dvdSortKey = dvd.dataset.sortKey;

    // Calculate global position (shelf 0 slots 0-3 = positions 0-3, shelf 1 slots 0-3 = positions 4-7, etc.)
    const targetGlobalPos = shelfIndex * SLOTS_PER_SHELF + slotIndex;

    // Gather ALL DVDs from ALL shelves
    const allDvds = [];
    for (let s = 0; s < SHELVES_COUNT; s++) {
        const shelfSlots = document.querySelectorAll(`.shelf[data-shelf-index="${s}"] .shelf-slot`);
        shelfSlots.forEach((slotEl, idx) => {
            if (slotEl.children.length > 0 && slotEl.children[0].classList.contains('dvd')) {
                if (slotEl !== sourceSlot) {
                    allDvds.push({
                        globalIndex: s * SLOTS_PER_SHELF + idx,
                        sortKey: slotEl.children[0].dataset.sortKey
                    });
                }
            }
        });
    }

    // Add the DVD being placed
    allDvds.push({ globalIndex: targetGlobalPos, sortKey: dvdSortKey });
    allDvds.sort((a, b) => a.globalIndex - b.globalIndex);

    // Check if global order is alphabetical
    let isValid = true;
    for (let i = 0; i < allDvds.length - 1; i++) {
        if (allDvds[i].sortKey > allDvds[i + 1].sortKey) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        // DVD falls back to floor with animation
        fallBackToFloor(dvd, slot);
        if (selectedDVD) {
            selectedDVD.classList.remove('selected');
            selectedDVD = null;
        }
        return false;
    }

    const newDvd = createDVD(dvd.dataset.title);
    newDvd.style.background = `linear-gradient(135deg, ${dvd.dataset.bgColor} 0%, ${adjustColor(dvd.dataset.bgColor, -30)} 100%)`;
    newDvd.dataset.bgColor = dvd.dataset.bgColor;
    newDvd.classList.add('dvd-placed');

    slot.appendChild(newDvd);
    dvd.remove();

    if (selectedDVD === dvd) {
        selectedDVD = null;
    }

    if (isFromFloor) {
        score += 10 * DIFFICULTY_SETTINGS[difficulty].multiplier;
        shelvedCount++;
        updateStats();
        updateFloorCapacity();

        // Check for win - all DVDs spawned and floor is empty
        const floor = document.getElementById('floorDvds');
        if (dvdsSpawned >= TOTAL_DVDS && floor.children.length === 0) {
            gameWin();
            return true;
        }
    }

    return true;
}

function handleDragStart(e) {
    draggedDVD = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.title);

    if (selectedDVD && selectedDVD !== this) {
        selectedDVD.classList.remove('selected');
    }
    selectedDVD = null;
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedDVD = null;
    document.querySelectorAll('.shelf-slot.drag-over').forEach(slot => {
        slot.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    if (!draggedDVD) return;
    if (this.children.length > 0) return;

    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    if (!draggedDVD || this.children.length > 0) return;

    placeDVDInSlot(draggedDVD, this);
    draggedDVD = null;
}

function handleTouchStart(e) {
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    touchStartPos = { x: touch.clientX, y: touch.clientY };
}

function handleTouchMove(e) {
    if (!touchStartPos || e.touches.length !== 1) return;

    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - touchStartPos.x);
    const dy = Math.abs(touch.clientY - touchStartPos.y);

    if (dx > 10 || dy > 10) {
        e.preventDefault();

        if (!touchDragClone) {
            draggedDVD = this;
            this.classList.add('dragging');

            touchDragClone = this.cloneNode(true);
            touchDragClone.classList.add('touch-drag-clone');
            touchDragClone.style.position = 'fixed';
            touchDragClone.style.pointerEvents = 'none';
            touchDragClone.style.zIndex = '1000';
            touchDragClone.style.width = this.offsetWidth + 'px';
            touchDragClone.style.height = this.offsetHeight + 'px';
            touchDragClone.style.opacity = '0.85';
            document.body.appendChild(touchDragClone);

            if (selectedDVD && selectedDVD !== this) {
                selectedDVD.classList.remove('selected');
            }
            selectedDVD = null;
        }

        touchDragClone.style.left = (touch.clientX - touchDragClone.offsetWidth / 2) + 'px';
        touchDragClone.style.top = (touch.clientY - touchDragClone.offsetHeight / 2) + 'px';

        document.querySelectorAll('.shelf-slot.drag-over').forEach(slot => {
            slot.classList.remove('drag-over');
        });

        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        const slotBelow = elementBelow?.closest('.shelf-slot');
        if (slotBelow && slotBelow.children.length === 0) {
            slotBelow.classList.add('drag-over');
        }
    }
}

function handleTouchEnd(e) {
    if (touchDragClone) {
        const touch = e.changedTouches[0];
        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        const slotBelow = elementBelow?.closest('.shelf-slot');

        if (slotBelow && slotBelow.children.length === 0 && draggedDVD) {
            placeDVDInSlot(draggedDVD, slotBelow);
        }

        document.querySelectorAll('.shelf-slot.drag-over').forEach(slot => {
            slot.classList.remove('drag-over');
        });

        touchDragClone.remove();
        touchDragClone = null;

        if (draggedDVD) {
            draggedDVD.classList.remove('dragging');
            draggedDVD = null;
        }

        touchStartPos = null;
        e.preventDefault();
        return;
    }

    touchStartPos = null;

    if (!draggedDVD) {
        handleDVDClick.call(this, e);
    }
}

function fallBackToFloor(dvd, slot) {
    const floor = document.getElementById('floorDvds');
    const isFromFloor = dvd.closest('.floor-dvds') !== null;

    // Get positions for animation
    const slotRect = slot.getBoundingClientRect();
    const floorRect = floor.getBoundingClientRect();

    // Create a falling clone for the animation
    const fallingDvd = dvd.cloneNode(true);
    fallingDvd.classList.add('dvd-falling');
    fallingDvd.style.position = 'fixed';
    fallingDvd.style.left = slotRect.left + (slotRect.width / 2) - 35 + 'px';
    fallingDvd.style.top = slotRect.top + 'px';
    fallingDvd.style.width = '70px';
    fallingDvd.style.height = slotRect.height * 0.85 + 'px';
    fallingDvd.style.zIndex = '500';
    fallingDvd.style.pointerEvents = 'none';

    // Set the fall distance as CSS variable
    const fallDistance = floorRect.top - slotRect.top;
    fallingDvd.style.setProperty('--fall-distance', fallDistance + 'px');

    document.body.appendChild(fallingDvd);

    // Hide original if from floor during animation
    if (isFromFloor) {
        dvd.style.visibility = 'hidden';
    }

    // After animation, add DVD back to floor
    setTimeout(() => {
        fallingDvd.remove();

        if (isFromFloor) {
            dvd.style.visibility = 'visible';
            dvd.classList.remove('selected');
        } else {
            // DVD was from a shelf slot, create new one on floor
            const newDvd = createDVD(dvd.dataset.title);
            newDvd.style.background = `linear-gradient(135deg, ${dvd.dataset.bgColor} 0%, ${adjustColor(dvd.dataset.bgColor, -30)} 100%)`;
            newDvd.dataset.bgColor = dvd.dataset.bgColor;
            floor.appendChild(newDvd);
            dvd.remove();
        }

        updateFloorCapacity();

        if (floor.children.length >= MAX_FLOOR_DVDS) {
            gameOver('Too many DVDs on the floor!');
        }
    }, 600);
}

function updateStats() {
    document.getElementById('score').textContent = score;
    const diffDisplay = document.getElementById('difficultyDisplay');
    diffDisplay.textContent = DIFFICULTY_SETTINGS[difficulty].label;
    diffDisplay.style.background = DIFFICULTY_SETTINGS[difficulty].color;
}

function gameOver(reason) {
    gameRunning = false;
    clearInterval(spawnInterval);

    document.getElementById('gameOverTitle').textContent = 'GAME OVER';
    document.getElementById('finalScore').textContent = score;
    const gameOverDiff = document.getElementById('gameOverDifficulty');
    gameOverDiff.textContent = DIFFICULTY_SETTINGS[difficulty].label;
    gameOverDiff.style.color = DIFFICULTY_SETTINGS[difficulty].color;
    document.getElementById('gameOverReason').textContent = reason;
    document.getElementById('gameOverOverlay').classList.add('active');
}

function gameWin() {
    gameRunning = false;
    clearInterval(spawnInterval);

    document.getElementById('gameOverTitle').textContent = 'WIN!';
    document.getElementById('finalScore').textContent = score;
    const gameOverDiff = document.getElementById('gameOverDifficulty');
    gameOverDiff.textContent = DIFFICULTY_SETTINGS[difficulty].label;
    gameOverDiff.style.color = DIFFICULTY_SETTINGS[difficulty].color;
    document.getElementById('gameOverReason').textContent = 'You organized all the DVDs!';

    const overlay = document.getElementById('gameOverOverlay');
    overlay.classList.add('active', 'win');
    spawnConfetti(overlay);
}

function spawnConfetti(container) {
    const emojis = ['🎬', '🎥', '🎞️', '🍿', '📀', '⭐', '🏆', '🎭', '📽️', '🎦'];
    const emojiCount = 30;

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'falling-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = -30 + 'px';
        emoji.style.animationDelay = Math.random() * 2.5 + 's';
        emoji.style.animationDuration = (3 + Math.random() * 2) + 's';
        emoji.style.fontSize = (32 + Math.random() * 24) + 'px';

        container.appendChild(emoji);
    }
}

function goToHome() {
    gameRunning = false;
    clearInterval(spawnInterval);
    const overlay = document.getElementById('gameOverOverlay');
    overlay.classList.remove('active', 'win');
    overlay.querySelectorAll('.falling-emoji').forEach(c => c.remove());
    document.getElementById('gameHeader').classList.remove('game-active');
    document.getElementById('startOverlay').classList.remove('hidden');
    resetGame();
}

function startGame(selectedDifficulty) {
    difficulty = selectedDifficulty || 'medium';
    document.getElementById('startOverlay').classList.add('hidden');
    document.getElementById('gameHeader').classList.add('game-active');
    resetGame();
    gameRunning = true;

    const intervalMs = DIFFICULTY_SETTINGS[difficulty].interval;
    spawnDVD();
    spawnInterval = setInterval(spawnDVD, intervalMs);
}

function resetGame() {
    score = 0;
    shelvedCount = 0;
    dvdsSpawned = 0;
    usedTitles.clear();
    selectedDVD = null;

    generateShelves();
    document.getElementById('floorDvds').innerHTML = '';
    updateStats();
    updateFloorCapacity();
}

document.addEventListener('click', (e) => {
    if (selectedDVD && !e.target.closest('.dvd') && !e.target.closest('.shelf-slot')) {
        selectedDVD.classList.remove('selected');
        selectedDVD = null;
    }
});

generateShelves();
