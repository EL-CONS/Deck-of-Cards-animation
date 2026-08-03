document.getElementById('radio0').checked = true;

    const cardPool = [
        { img: "var(--img-cons)", tier: "tier-5" ,desc:"",hp: 80, atk: 60, def: 99, spd: 60, ability: "DOPA-MINE: each cup of coffee consumed increases speed by 100pts, while lowering hp by 10pts"},
        { img: "var(--img-chofis)", tier: "tier-5" ,desc:"",hp: 100, atk: 100, def: 100, spd: 100, ability: "SAFEGUARD: gains a 75pts shield every turn"},
        { img: "var(--img-carlos)", tier: "tier-5" ,desc:"",hp: 150, atk: 100, def: 100, spd: 100, ability: "AUDIOPHILE: Listening to apex twin wile playing this cards doubles its defense."},
        { img: "var(--img-coquin)", tier: "tier-5" ,desc:"Cómo te caeria una coquita zero?",hp: 100, atk: 50, def: 120, spd: 60, ability: "PRO-CASTINATOR: gains 40pts of attack every turn. "},
        { img: "var(--img-cesar)", tier: "tier-5" ,desc:"",hp:70, atk: 100, def: 100, spd: 100, ability: ""},
        { img: "var(--img-horacio)", tier: "tier-5" ,desc:"",hp: 65, atk: 100, def: 100, spd: 100, ability: "THE CHOSSEN ONE: when dying, this card revives with 100 pts on each stat."},
        { img: "var(--img-borange)", tier: "tier-5" ,desc:"inside joke ",hp: 300, atk: 500, def: 0, spd: 10, ability: "CARRIAGE: chose another 5-star card and increase its speed and defense by 100pts, this effect doubles if COQUIN is chossen."},
        { img: "var(--img-joan)", tier: "tier-5" ,desc:" ",hp: 300, atk: 50, def: 100, spd: 100, ability: "ABARE: if this cards is atacked, it return 50% of damage taken."},
        { img: "var(--img-owen)", tier: "tier-5" ,desc:"saquenme de guaymas",hp: 100, atk: 100, def: 100, spd: 100, ability: "DENIAL OF SERVICE: every turn a random card in the oponents deck becomes unplayable for the rest of the game."},
        
        
        { img: "var(--img-error-de-tipo)", tier: "tier-4" ,desc:" == != === ",hp: 100, atk: 100, def: 100, spd: 100, ability: "Type Coercion: Converts enemy defense to its current hp."},
        { img: "var(--img-inyeccion-sql)", tier: "tier-4" ,desc:"Always sanitize your database inputs.",hp: 100, atk: 100, def: 100, spd: 100, ability: "Bypass: Ignores enemy shields and attacks directly."},
        { img: "var(--img-out-of-bounds)", tier: "tier-4" ,desc:"the thing you are looking for is not here",hp: 100, atk: 100, def: 100, spd: 100, ability: "Buffer Overflow: Overwrites adjacent memory, corrupting enemy stats randomly."},
        { img: "var(--img-sytanx-error)", tier: "tier-4" ,desc:"You forgot the semicolon.",hp: 100, atk: 100, def: 100, spd: 100, ability: "Halt: Skips the enemy's next turn."},

        { img: "var(--img-cplusplus)", tier: "tier-3",desc:"Makes it harder to shoot yourself in the foot, but when you do it blows your whole leg off." ,hp: 100, atk: 100, def: 100, spd: 100, ability: "Manual Memory: High risk, high reward damage."},
        { img: "var(--img-java)", tier: "tier-3" ,desc:"Write once, debug anywhere.",hp: 100, atk: 100, def: 100, spd: 100, ability: "Garbage Collector: Recovers 10% HP for 3 turns."},
        { img: "var(--img-python)", tier: "tier-3" ,desc:"Executable pseudocode.",hp: 100, atk: 100, def: 100, spd: 100, ability: "Import Module: Adapts to any element."},
        { img: "var(--img-bash)", tier: "tier-3" ,desc:"To err is human, to really foul things up requires root privileges.",hp: 100, atk: 100, def: 100, spd: 100, ability: "Pipe: Redirects an attack back to them."}
        /* 
        
        // --- LENGUAJES ---
        { img: "var(--img-javascript)", tier: "tier-3" ,desc:"Where '1' + 1 = '11' but '1' - 1 = 0.""}
        { img: "var(--img-c)", tier: "tier-3", desc: "Playing with pointers is like juggling flaming chainsaws." },
        { img: "var(--img-html)", tier: "tier-3", desc: "No, it is not a programming language." },
        { img: "var(--img-php)", tier: "tier-3", desc: "A fractal of bad design, running 70% of the web." },
        { img: "var(--img-rust)", tier: "tier-3", desc: "The compiler is your strict but loving parent." },
        
        // --- CONCEPTOS Y ERRORES ---
        { img: "var(--img-strict-eq)", tier: "tier-4", desc: "== is for friends, === is for business [negocios]." },
        { img: "var(--img-regex)", tier: "tier-4", desc: "You had a problem and used Regex. Now you have two problems." },
        { img: "var(--img-recursion)", tier: "tier-4", desc: "To understand recursion , you must first understand recursion." },
        { img: "var(--img-memory-leak)", tier: "tier-4", desc: "Chrome needs more RAM." },

        // --- HERRAMIENTAS Y CULTURA ---
        { img: "var(--img-stackoverflow)", tier: "tier-4", desc: "Copy-paste driven development." },
        { img: "var(--img-git)", tier: "tier-4", desc: "In case of fire: git commit, git push, leave building." },
        { img: "var(--img-npm)", tier: "tier-4", desc: "node_modules: The heaviest object in the known universe." },
        { img: "var(--img-turing)", tier: "tier-4", desc: "It can compute anything, given infinite time and infinite tape."" },
        { img: "var(--img-css)", tier: "tier-4", desc: "Centering a div: the hardest problem in computer science." }
         */
        
    ];

    function rollRarity() {
        const rand = Math.random() * 100; 
        if (rand <= 9) return "tier-5"; 
        else if (rand <= 40) return "tier-4"; 
        else return "tier-3"; 
    }

    const drawnCards = [];
    for (let i = 0; i < 9; i++) {
        const targetTier = rollRarity();
        const availableCards = cardPool.filter(card => card.tier === targetTier);
        
        if (availableCards.length === 0) {
            availableCards.push(...cardPool.filter(card => card.tier === "tier-3"));
        }
        
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        drawnCards.push(availableCards[randomIndex]);
    }

    drawnCards.forEach((cardData, index) => {
        const cardElement = document.getElementById(`card${9 - index}`); 
        const miniCardElement = document.getElementById(`mini-card${9 - index}`); 
        
        if (cardElement && cardData) {
            cardElement.classList.remove('tier-3', 'tier-4', 'tier-5');
            cardElement.classList.add(cardData.tier);
            cardElement.style.backgroundImage = cardData.img;
        }

        if (miniCardElement && cardData) {
            miniCardElement.style.backgroundImage = cardData.img;
            miniCardElement.classList.add(cardData.tier); 
            miniCardElement.innerHTML = `
                <div class="card-stats-side">
                    <span>HP: ${cardData.hp} ATK: ${cardData.atk}</span>
                    <span>DEF: ${cardData.def} SPD: ${cardData.spd}</span>
                </div>
                <div class="card-desc-bottom">
                    <div class="ability-text">${cardData.ability}</div>
                    <div class="flavor-text">"${cardData.desc}"</div>
                </div>
            `;
        }
    });

    const deckContainer = document.querySelector('.deck-container');
    const radios = document.querySelectorAll('input[type="radio"]');
    const rerollBtn = document.getElementById('reroll-button');
    const counterDisplay = document.getElementById('card-counter');

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            deckContainer.style.pointerEvents = 'none';
            
            deckContainer.classList.remove('tilt-effect');
            void deckContainer.offsetWidth; 
            deckContainer.classList.add('tilt-effect');
            
            setTimeout(() => {
                deckContainer.style.pointerEvents = 'auto';
            }, 600); 
            
            const currentDraw = e.target.id.replace('radio', '');
            if(currentDraw<=9){
                counterDisplay.textContent = `${currentDraw}/9`;
            }

            if (e.target.id === 'radio10') {
                rerollBtn.classList.add('visible');
            }
        });
    });



    const miniCardsList = document.querySelectorAll('.mini-card');

    function unzoomAll() {
        miniCardsList.forEach(card => card.classList.remove('zoomed'));
    }

   miniCardsList.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            if (card.classList.contains('zoomed')) {
                history.back();
            } else {
                const anyZoomed = document.querySelector('.mini-card.zoomed');
                unzoomAll();
                
            
                const rect = card.getBoundingClientRect();
                const moveX = (window.innerWidth / 2) - (rect.left + rect.width / 2);
                const moveY = (window.innerHeight * 0.40) - (rect.top + rect.height / 2); 
                
            
                card.style.setProperty('--move-x', `${moveX}px`);
                card.style.setProperty('--move-y', `${moveY}px`);
                
                card.classList.add('zoomed');
                
                if (!anyZoomed) {
                    history.pushState({ zoom: true }, "");
                }
            }
        });
    });

    
    document.addEventListener('click', () => {
        const anyZoomed = document.querySelector('.mini-card.zoomed');
        if (anyZoomed) {

            if (history.state && history.state.zoom) {
                history.back(); 
            } else {
                unzoomAll();
            }
        }
    });

    window.addEventListener('popstate', () => {
        unzoomAll();
    });