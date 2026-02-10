// Movie poster paths (local images)
const MOVIE_POSTERS = {
    "The Shawshank Redemption": "images/posters/The_Shawshank_Redemption.jpg",
    "The Godfather": "images/posters/The_Godfather.jpg",
    "The Dark Knight": "images/posters/The_Dark_Knight.jpg",
    "Pulp Fiction": "images/posters/Pulp_Fiction.jpg",
    "Forrest Gump": "images/posters/Forrest_Gump.jpg",
    "Inception": "images/posters/Inception.jpg",
    "The Matrix": "images/posters/The_Matrix.jpg",
    "Goodfellas": "images/posters/Goodfellas.jpg",
    "Fight Club": "images/posters/Fight_Club.jpg",
    "The Silence of the Lambs": "images/posters/The_Silence_of_the_Lambs.jpg",
    "Se7en": "images/posters/Se7en.jpg",
    "The Usual Suspects": "images/posters/The_Usual_Suspects.jpg",
    "Memento": "images/posters/Memento.jpg",
    "The Prestige": "images/posters/The_Prestige.jpg",
    "The Departed": "images/posters/The_Departed.jpg",
    "Gladiator": "images/posters/Gladiator.jpg",
    "Braveheart": "images/posters/Braveheart.jpg",
    "The Green Mile": "images/posters/The_Green_Mile.jpg",
    "Saving Private Ryan": "images/posters/Saving_Private_Ryan.jpg",
    "Schindlers List": "images/posters/Schindlers_List.jpg",
    "Interstellar": "images/posters/Interstellar.jpg",
    "The Pianist": "images/posters/The_Pianist.jpg",
    "Whiplash": "images/posters/Whiplash.jpg",
    "Django Unchained": "images/posters/Django_Unchained.jpg",
    "The Wolf of Wall Street": "images/posters/The_Wolf_of_Wall_Street.jpg",
    "American History X": "images/posters/American_History_X.jpg",
    "Casablanca": "images/posters/Casablanca.jpg",
    "City of God": "images/posters/City_of_God.jpg",
    "Alien": "images/posters/Alien.jpg",
    "Aliens": "images/posters/Aliens.jpg",
    "Terminator 2": "images/posters/Terminator_2.jpg",
    "The Terminator": "images/posters/The_Terminator.jpg",
    "Back to the Future": "images/posters/Back_to_the_Future.jpg",
    "Raiders of the Lost Ark": "images/posters/Raiders_of_the_Lost_Ark.jpg",
    "Star Wars": "images/posters/Star_Wars.jpg",
    "The Empire Strikes Back": "images/posters/The_Empire_Strikes_Back.jpg",
    "Jurassic Park": "images/posters/Jurassic_Park.jpg",
    "ET": "images/posters/ET.jpg",
    "Jaws": "images/posters/Jaws.jpg",
    "Rocky": "images/posters/Rocky.jpg",
    "Die Hard": "images/posters/Die_Hard.jpg",
    "Predator": "images/posters/Predator.jpg",
    "RoboCop": "images/posters/RoboCop.jpg",
    "Blade Runner": "images/posters/Blade_Runner.jpg",
    "Total Recall": "images/posters/Total_Recall.jpg",
    "The Thing": "images/posters/The_Thing.jpg",
    "Scarface": "images/posters/Scarface.jpg",
    "Heat": "images/posters/Heat.jpg",
    "Casino": "images/posters/Casino.jpg",
    "The Godfather Part II": "images/posters/The_Godfather_Part_II.jpg",
    "Apocalypse Now": "images/posters/Apocalypse_Now.jpg",
    "Full Metal Jacket": "images/posters/Full_Metal_Jacket.jpg",
    "Platoon": "images/posters/Platoon.jpg",
    "The Deer Hunter": "images/posters/The_Deer_Hunter.jpg",
    "Taxi Driver": "images/posters/Taxi_Driver.jpg",
    "Raging Bull": "images/posters/Raging_Bull.jpg",
    "The Exorcist": "images/posters/The_Exorcist.jpg",
    "Halloween": "images/posters/Halloween.jpg",
    "A Nightmare on Elm Street": "images/posters/A_Nightmare_on_Elm_Street.jpg",
    "Friday the 13th": "images/posters/Friday_the_13th.jpg",
    "The Shining": "images/posters/The_Shining.jpg",
    "Psycho": "images/posters/Psycho.jpg",
    "Vertigo": "images/posters/Vertigo.jpg",
    "Rear Window": "images/posters/Rear_Window.jpg",
    "North by Northwest": "images/posters/North_by_Northwest.jpg",
    "Chinatown": "images/posters/Chinatown.jpg",
    "One Flew Over the Cuckoos Nest": "images/posters/One_Flew_Over_the_Cuckoos_Nest.jpg",
    "A Clockwork Orange": "images/posters/A_Clockwork_Orange.jpg",
    "2001 A Space Odyssey": "images/posters/2001_A_Space_Odyssey.jpg",
    "Dr Strangelove": "images/posters/Dr_Strangelove.jpg",
    "The Big Lebowski": "images/posters/The_Big_Lebowski.jpg",
    "Fargo": "images/posters/Fargo.jpg",
    "No Country for Old Men": "images/posters/No_Country_for_Old_Men.jpg",
    "There Will Be Blood": "images/posters/There_Will_Be_Blood.jpg",
    "Magnolia": "images/posters/Magnolia.jpg",
    "Boogie Nights": "images/posters/Boogie_Nights.jpg",
    "Reservoir Dogs": "images/posters/Reservoir_Dogs.jpg",
    "Kill Bill": "images/posters/Kill_Bill.jpg",
    "Inglourious Basterds": "images/posters/Inglourious_Basterds.jpg",
    "The Hateful Eight": "images/posters/The_Hateful_Eight.jpg",
    "Once Upon a Time in Hollywood": "images/posters/Once_Upon_a_Time_in_Hollywood.jpg",
    "Zodiac": "images/posters/Zodiac.jpg",
    "Gone Girl": "images/posters/Gone_Girl.jpg",
    "The Social Network": "images/posters/The_Social_Network.jpg",
    "Moneyball": "images/posters/Moneyball.jpg",
    "The Curious Case of Benjamin Button": "images/posters/The_Curious_Case_of_Benjamin_Button.jpg",
    "Avatar": "images/posters/Avatar.jpg",
    "Titanic": "images/posters/Titanic.jpg",
    "The Avengers": "images/posters/The_Avengers.jpg",
    "Iron Man": "images/posters/Iron_Man.jpg",
    "Spider-Man": "images/posters/Spider-Man.jpg",
    "Batman Begins": "images/posters/Batman_Begins.jpg",
    "Superman": "images/posters/Superman.jpg",
    "Wonder Woman": "images/posters/Wonder_Woman.jpg",
    "Aquaman": "images/posters/Aquaman.jpg",
    "Guardians of the Galaxy": "images/posters/Guardians_of_the_Galaxy.jpg",
    "Thor": "images/posters/Thor.jpg",
    "Captain America": "images/posters/Captain_America.jpg",
    "Black Panther": "images/posters/Black_Panther.jpg",
    "Deadpool": "images/posters/Deadpool.jpg",
    "Logan": "images/posters/Logan.jpg",
    "X-Men": "images/posters/X-Men.jpg",
    "The Wolverine": "images/posters/The_Wolverine.jpg",
    "Fantastic Four": "images/posters/Fantastic_Four.jpg",
    "Hulk": "images/posters/Hulk.jpg",
    "Ant-Man": "images/posters/Ant-Man.jpg",
    "Doctor Strange": "images/posters/Doctor_Strange.jpg",
    "Shrek": "images/posters/Shrek.jpg",
    "Toy Story": "images/posters/Toy_Story.jpg",
    "Finding Nemo": "images/posters/Finding_Nemo.jpg",
    "The Incredibles": "images/posters/The_Incredibles.jpg",
    "Monsters Inc": "images/posters/Monsters_Inc.jpg",
    "Up": "images/posters/Up.jpg",
    "Wall-E": "images/posters/Wall-E.jpg",
    "Ratatouille": "images/posters/Ratatouille.jpg",
    "Coco": "images/posters/Coco.jpg",
    "Inside Out": "images/posters/Inside_Out.jpg",
    "Frozen": "images/posters/Frozen.jpg",
    "Moana": "images/posters/Moana.jpg",
    "Zootopia": "images/posters/Zootopia.jpg",
    "Big Hero 6": "images/posters/Big_Hero_6.jpg",
    "Tangled": "images/posters/Tangled.jpg",
    "Brave": "images/posters/Brave.jpg",
    "Cars": "images/posters/Cars.jpg",
    "A Bugs Life": "images/posters/A_Bugs_Life.jpg",
    "The Lion King": "images/posters/The_Lion_King.jpg",
    "Aladdin": "images/posters/Aladdin.jpg",
    "Beauty and the Beast": "images/posters/Beauty_and_the_Beast.jpg",
    "The Little Mermaid": "images/posters/The_Little_Mermaid.jpg",
    "Mulan": "images/posters/Mulan.jpg",
    "Pocahontas": "images/posters/Pocahontas.jpg",
    "Hercules": "images/posters/Hercules.jpg",
    "Tarzan": "images/posters/Tarzan.jpg",
    "Lilo and Stitch": "images/posters/Lilo_and_Stitch.jpg",
    "The Nightmare Before Christmas": "images/posters/The_Nightmare_Before_Christmas.jpg",
    "Coraline": "images/posters/Coraline.jpg",
    "ParaNorman": "images/posters/ParaNorman.jpg",
    "Spirited Away": "images/posters/Spirited_Away.jpg",
    "My Neighbor Totoro": "images/posters/My_Neighbor_Totoro.jpg",
    "Princess Mononoke": "images/posters/Princess_Mononoke.jpg",
    "Howls Moving Castle": "images/posters/Howls_Moving_Castle.jpg",
    "Akira": "images/posters/Akira.jpg",
    "Ghost in the Shell": "images/posters/Ghost_in_the_Shell.jpg",
    "Your Name": "images/posters/Your_Name.jpg",
    "The Truman Show": "images/posters/The_Truman_Show.jpg",
    "Eternal Sunshine of the Spotless Mind": "images/posters/Eternal_Sunshine_of_the_Spotless_Mind.jpg"
};

const MOVIE_TITLES = Object.keys(MOVIE_POSTERS);

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
let pendingDropDVD = null;
let dropCountdownInterval = null;
let dvdDropInProgress = false;
let dropPhaseResting = true;

function unshelve() {
    score = Math.max(0, score - 10 * DIFFICULTY_SETTINGS[difficulty].multiplier);
    shelvedCount--;
    updateStats();
}

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
    return title.replace(/^(The|A|An)\s+/i, '').toLowerCase();
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

    const posterPath = MOVIE_POSTERS[title];
    if (posterPath) {
        dvd.style.backgroundImage = `url(${posterPath})`;
        dvd.style.backgroundSize = 'cover';
        dvd.style.backgroundPosition = 'center';
        dvd.dataset.posterPath = posterPath;
    } else {
        const color = DVD_COLORS[Math.floor(Math.random() * DVD_COLORS.length)];
        dvd.style.background = `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -30)} 100%)`;
        dvd.dataset.bgColor = color;
    }

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

    // Once all DVDs are spawned, drop a random one from the shelves instead
    if (dvdsSpawned >= TOTAL_DVDS) {
        dropRandomShelfDVD();
        return;
    }

    const floor = document.getElementById('floorDvds');
    const currentCount = floor.children.length;

    if (currentCount > MAX_FLOOR_DVDS) {
        gameOver('Too many DVDs on the floor!');
        return;
    }

    const availableTitles = MOVIE_TITLES.filter(t => !usedTitles.has(t));
    const title = availableTitles[Math.floor(Math.random() * availableTitles.length)];
    usedTitles.add(title);

    const dvd = createDVD(title);
    dvd.classList.add('dvd-spawn');
    dvd.addEventListener('animationend', () => dvd.classList.remove('dvd-spawn'), { once: true });
    floor.appendChild(dvd);
    dvdsSpawned++;

    // Flash a $ emoji on the new DVD
    const flash = document.createElement('div');
    flash.className = 'spawn-flash';
    flash.textContent = '$';
    dvd.appendChild(flash);
    flash.addEventListener('animationend', () => flash.remove(), { once: true });

    updateFloorCapacity();

    if (floor.children.length > MAX_FLOOR_DVDS) {
        gameOver('Too many DVDs on the floor!');
    }
}

function dropRandomShelfDVD() {
    if (!gameRunning) return;

    // Drop the previously warned DVD, then rest
    if (pendingDropDVD) {
        const dvd = pendingDropDVD;
        const slot = dvd.closest('.shelf-slot');
        clearDropWarning();

        if (slot) {
            dvdDropInProgress = true;
            executeDrop(dvd, slot);
        }

        dropPhaseResting = true;
        return;
    }

    // Rest phase: skip one interval before warning
    if (dropPhaseResting) {
        dropPhaseResting = false;
        return;
    }

    // Warn phase: pick and warn the next DVD
    warnNextDrop();
}

function warnNextDrop() {
    const shelfDvds = [];
    for (let s = 0; s < SHELVES_COUNT; s++) {
        const slots = document.querySelectorAll(`.shelf[data-shelf-index="${s}"] .shelf-slot`);
        slots.forEach(slot => {
            if (slot.children.length > 0 && slot.children[0].classList.contains('dvd')) {
                shelfDvds.push(slot.children[0]);
            }
        });
    }

    if (shelfDvds.length === 0) return;

    const dvd = shelfDvds[Math.floor(Math.random() * shelfDvds.length)];
    pendingDropDVD = dvd;

    dvd.classList.add('dvd-warning');

    const intervalMs = DIFFICULTY_SETTINGS[difficulty].interval;
    let secondsLeft = Math.ceil(intervalMs / 1000);

    const countdown = document.createElement('div');
    countdown.className = 'drop-countdown';
    countdown.textContent = secondsLeft;
    countdown.style.setProperty('--countdown-duration', (intervalMs / 1000) + 's');
    dvd.appendChild(countdown);

    dropCountdownInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft > 0) {
            countdown.textContent = secondsLeft;
        }
    }, 1000);
}

function clearDropWarning() {
    if (dropCountdownInterval) {
        clearInterval(dropCountdownInterval);
        dropCountdownInterval = null;
    }
    if (pendingDropDVD) {
        pendingDropDVD.classList.remove('dvd-warning');
        const countdown = pendingDropDVD.querySelector('.drop-countdown');
        if (countdown) countdown.remove();
        pendingDropDVD = null;
    }
}

function executeDrop(dvd, slot) {
    const floor = document.getElementById('floorDvds');
    const slotRect = slot.getBoundingClientRect();
    const floorRect = floor.getBoundingClientRect();
    const title = dvd.dataset.title;
    const bgColor = dvd.dataset.bgColor;
    const posterPath = dvd.dataset.posterPath;

    // Hide original immediately
    dvd.style.visibility = 'hidden';

    // Build a fresh element for the animation (avoid cloneNode issues)
    const fallingDvd = document.createElement('div');
    fallingDvd.style.position = 'fixed';
    fallingDvd.style.left = slotRect.left + (slotRect.width / 2) - 35 + 'px';
    fallingDvd.style.top = slotRect.top + 'px';
    fallingDvd.style.width = '70px';
    fallingDvd.style.height = slotRect.height * 0.85 + 'px';
    fallingDvd.style.zIndex = '500';
    fallingDvd.style.pointerEvents = 'none';
    fallingDvd.style.borderRadius = '4px';
    fallingDvd.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.4)';
    fallingDvd.style.overflow = 'hidden';
    fallingDvd.style.display = 'flex';
    fallingDvd.style.alignItems = 'center';
    fallingDvd.style.justifyContent = 'center';

    if (posterPath) {
        fallingDvd.style.backgroundImage = `url(${posterPath})`;
        fallingDvd.style.backgroundSize = 'cover';
        fallingDvd.style.backgroundPosition = 'center';
    } else if (bgColor) {
        fallingDvd.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${adjustColor(bgColor, -30)} 100%)`;
    }

    const spine = document.createElement('div');
    spine.className = 'dvd-spine';
    spine.textContent = title;
    fallingDvd.appendChild(spine);

    const fallDistance = floorRect.top - slotRect.top;
    fallingDvd.style.setProperty('--fall-distance', fallDistance + 'px');

    document.body.appendChild(fallingDvd);
    // Force reflow before adding animation class
    fallingDvd.offsetHeight;
    fallingDvd.classList.add('dvd-falling');

    unshelve();

    setTimeout(() => {
        fallingDvd.remove();
        dvdDropInProgress = false;

        if (!gameRunning) return;

        const newDvd = createDVD(title);
        if (bgColor) {
            newDvd.style.background = `linear-gradient(135deg, ${bgColor} 0%, ${adjustColor(bgColor, -30)} 100%)`;
            newDvd.dataset.bgColor = bgColor;
        }
        floor.appendChild(newDvd);
        dvd.remove();
        updateFloorCapacity();

        if (floor.children.length > MAX_FLOOR_DVDS) {
            gameOver('Too many DVDs on the floor!');
        }
    }, 600);
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
    // Preserve original styling (createDVD handles poster automatically, but fallback color needs copying)
    if (dvd.dataset.bgColor) {
        newDvd.style.background = `linear-gradient(135deg, ${dvd.dataset.bgColor} 0%, ${adjustColor(dvd.dataset.bgColor, -30)} 100%)`;
        newDvd.dataset.bgColor = dvd.dataset.bgColor;
    }
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

        const floor = document.getElementById('floorDvds');

        // Check for win - all DVDs spawned, floor is empty, and no drop in progress
        if (dvdsSpawned >= TOTAL_DVDS && floor.children.length === 0 && !dvdDropInProgress) {
            gameWin();
            return true;
        }

        // Spawn immediately when floor is empty instead of waiting for timer
        if (floor.children.length === 0 && dvdsSpawned < TOTAL_DVDS && spawnInterval) {
            clearInterval(spawnInterval);
            spawnDVD();
            const intervalMs = DIFFICULTY_SETTINGS[difficulty].interval;
            spawnInterval = setInterval(spawnDVD, intervalMs);
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
    const sourceSlot = dvd.closest('.shelf-slot');

    // Animate from the DVD's current position, not the target slot
    const animateFrom = (!isFromFloor && sourceSlot) ? sourceSlot : slot;
    const slotRect = animateFrom.getBoundingClientRect();
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

    // Hide original during animation
    dvd.style.visibility = 'hidden';

    if (!isFromFloor) {
        unshelve();
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
            // Preserve original styling (createDVD handles poster automatically, but fallback color needs copying)
            if (dvd.dataset.bgColor) {
                newDvd.style.background = `linear-gradient(135deg, ${dvd.dataset.bgColor} 0%, ${adjustColor(dvd.dataset.bgColor, -30)} 100%)`;
                newDvd.dataset.bgColor = dvd.dataset.bgColor;
            }
            floor.appendChild(newDvd);
            dvd.remove();
        }

        updateFloorCapacity();

        if (floor.children.length > MAX_FLOOR_DVDS) {
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
    clearDropWarning();

    document.getElementById('gameOverTitle').textContent = 'GAME OVER';
    document.getElementById('finalScore').textContent = score;
    const gameOverDiff = document.getElementById('gameOverDifficulty');
    gameOverDiff.textContent = DIFFICULTY_SETTINGS[difficulty].label;
    gameOverDiff.style.color = DIFFICULTY_SETTINGS[difficulty].color;
    document.getElementById('gameOverReason').textContent = reason;
    document.getElementById('gameOverOverlay').classList.add('active');

    posthog.capture('dvd_game_lost', { difficulty, score, reason, dvds_shelved: shelvedCount });
}

function gameWin() {
    gameRunning = false;
    clearInterval(spawnInterval);
    clearDropWarning();

    if (difficulty === 'insane') score = 1000;

    document.getElementById('gameOverTitle').textContent = 'WIN!';
    document.getElementById('finalScore').textContent = score;
    const gameOverDiff = document.getElementById('gameOverDifficulty');
    gameOverDiff.textContent = DIFFICULTY_SETTINGS[difficulty].label;
    gameOverDiff.style.color = DIFFICULTY_SETTINGS[difficulty].color;
    document.getElementById('gameOverReason').textContent = 'You organized all the DVDs!';

    posthog.capture('dvd_game_won', { difficulty, score });

    const overlay = document.getElementById('gameOverOverlay');
    overlay.classList.add('active', 'win');
    spawnConfetti(overlay);
}

function shareScore() {
    const isWin = document.getElementById('gameOverTitle').textContent === 'WIN!';
    const diffLabel = DIFFICULTY_SETTINGS[difficulty].label;

    // Build shelf visualization
    let shelfEmojis = '';
    for (let s = 0; s < SHELVES_COUNT; s++) {
        const slots = document.querySelectorAll(`.shelf[data-shelf-index="${s}"] .shelf-slot`);
        slots.forEach(slot => {
            shelfEmojis += slot.children.length > 0 ? '🟩' : '🟥';
        });
        if (s < SHELVES_COUNT - 1) shelfEmojis += '\n';
    }

    const text = isWin
        ? `💿 DVD Organization Simulator 💿\n\n${shelfEmojis}\nLevel: ${diffLabel} | Score: ${score} 🏆\n\nhttps://DVD-Shelf-Game.timcieplowski.com`
        : `💿 DVD Organization Simulator 💿\n\n${shelfEmojis}\nLevel: ${diffLabel} | Score: ${score}\n\nhttps://DVD-Shelf-Game.timcieplowski.com`;

    posthog.capture('dvd_share_score_copied', { difficulty, score, result: isWin ? 'win' : 'loss' });

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.share-btn');
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Share';
            btn.classList.remove('copied');
        }, 2000);
    });
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

    posthog.capture('dvd_game_started', { difficulty });

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
    clearDropWarning();
    dvdDropInProgress = false;
    dropPhaseResting = true;

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

// Debug: fast-forward to end-game state (11 shelved, 1 on floor)
// Usage: run fastForward() in browser console during a game
function fastForward() {
    const titles = [...MOVIE_TITLES].sort(() => Math.random() - 0.5).slice(0, TOTAL_DVDS);
    const floorTitle = titles.pop();
    titles.sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)));

    document.getElementById('floorDvds').innerHTML = '';
    generateShelves();
    usedTitles.clear();
    titles.concat(floorTitle).forEach(t => usedTitles.add(t));
    dvdsSpawned = TOTAL_DVDS;
    clearInterval(spawnInterval);
    clearDropWarning();
    dropPhaseResting = true;

    const slots = document.querySelectorAll('.shelf-slot');
    titles.forEach((title, i) => {
        const dvd = createDVD(title);
        slots[i].appendChild(dvd);
    });

    const floorDvd = createDVD(floorTitle);
    document.getElementById('floorDvds').appendChild(floorDvd);

    shelvedCount = 11;
    score = 11 * 10 * DIFFICULTY_SETTINGS[difficulty].multiplier;
    updateStats();
    updateFloorCapacity();

    const intervalMs = DIFFICULTY_SETTINGS[difficulty].interval;
    spawnInterval = setInterval(spawnDVD, intervalMs);
}

generateShelves();
