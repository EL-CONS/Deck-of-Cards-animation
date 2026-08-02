document.getElementById('radio0').checked = true;

    const cardPool = [
        { img: "var(--img-cons)", tier: "tier-5" },
        { img: "var(--img-chofis)", tier: "tier-5" },
        { img: "var(--img-carlos)", tier: "tier-5" },
        { img: "var(--img-coquin)", tier: "tier-5" },
        
        { img: "var(--img-error-de-tipo)", tier: "tier-4" },
        { img: "var(--img-inyeccion-sql)", tier: "tier-4" },
        { img: "var(--img-out-of-bounds)", tier: "tier-4" },
        { img: "var(--img-sytanx-error)", tier: "tier-4" },

        { img: "var(--img-cplusplus)", tier: "tier-3" },
        { img: "var(--img-java)", tier: "tier-3" },
        { img: "var(--img-python)", tier: "tier-3" },
        { img: "var(--img-bash)", tier: "tier-3" }
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
                const moveY = (window.innerHeight * 0.50) - (rect.top + rect.height / 2); 
                
            
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