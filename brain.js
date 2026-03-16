document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('vocab-form');
    const dutchInput = document.getElementById('dutch-input');
    const frenchInput = document.getElementById('french-input');
    const vocabList = document.getElementById('vocab-list');
    const wordCountBadge = document.getElementById('word-count');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitIcon = document.getElementById('submit-icon');

    let editingId = null;

    // View Elements
    const tabList = document.getElementById('tab-list');
    const tabQuiz = document.getElementById('tab-quiz');
    const tabLibrary = document.getElementById('tab-library');
    const viewList = document.getElementById('view-list');
    const viewQuiz = document.getElementById('view-quiz');
    const viewLibrary = document.getElementById('view-library');

    // Quiz Elements
    const quizWordFr = document.getElementById('quiz-word-fr');
    const quizForm = document.getElementById('quiz-form');
    const quizAnswer = document.getElementById('quiz-answer');
    const btnNext = document.getElementById('btn-next');
    const flashcard = document.getElementById('flashcard');
    const flashcardBack = document.getElementById('flashcard-back');
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const correctionText = document.getElementById('correction-text');
    const quizStatus = document.getElementById('quiz-status');
    const themeSelect = document.getElementById('theme-select');

    // Library Elements
    const librarySearch = document.getElementById('library-search');

    let currentQuizWord = null;
    let quizWordPool = [];

    // Load vocabularies from localStorage
    let userVocabularies = JSON.parse(localStorage.getItem('selorVocab')) || [];
    
    // Load provided themes from vocabData (if exists)
    let preloadedThemes = typeof vocabData !== 'undefined' ? vocabData : [];

    // Initialize Theme Selector
    function initThemeSelector() {
        preloadedThemes.forEach((themeObj, index) => {
            const option = document.createElement('option');
            option.value = index.toString();
            option.textContent = `Thème : ${themeObj.theme} (${themeObj.words.length} mots)`;
            themeSelect.appendChild(option);
        });
    }
    
    // Call init
    initThemeSelector();

    // Theme select change event
    themeSelect.addEventListener('change', () => {
        startQuiz(); // restart quiz with new pool
    });

    // Form submit handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const dutchWord = dutchInput.value.trim();
        const frenchWord = frenchInput.value.trim();

        if (dutchWord && frenchWord) {
            if (editingId) {
                // Update existing
                const index = userVocabularies.findIndex(v => v.id === editingId);
                if (index !== -1) {
                    userVocabularies[index].nl = dutchWord;
                    userVocabularies[index].fr = frenchWord;
                }
                editingId = null;
                submitText.textContent = 'Ajouter le mot';
                submitIcon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
                submitBtn.style.background = '';
            } else {
                // Add new
                const newVocab = {
                    id: Date.now().toString(),
                    nl: dutchWord,
                    fr: frenchWord
                };
                userVocabularies.push(newVocab);
            }

            saveData();
            renderList();
            
            // Reset and focus
            form.reset();
            dutchInput.focus();
        }
    });

    // Delete item handler
    window.deleteVocab = (id) => {
        userVocabularies = userVocabularies.filter(v => v.id !== id);
        
        // If deleting the currently editing item, reset form
        if (editingId === id) {
            editingId = null;
            form.reset();
            submitText.textContent = 'Ajouter le mot';
            submitIcon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
            submitBtn.style.background = '';
        }
        
        saveData();
        renderList();
    };    

    // Edit item handler
    window.editVocab = (id) => {
        const vocab = userVocabularies.find(v => v.id === id);
        if (vocab) {
            dutchInput.value = vocab.nl;
            frenchInput.value = vocab.fr;
            editingId = id;
            submitText.textContent = 'Modifier le mot';
            // Pen icon
            submitIcon.innerHTML = '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>';
            submitBtn.style.background = 'var(--dutch-color)';
            dutchInput.focus();
        }
    };

    function saveData() {
        localStorage.setItem('selorVocab', JSON.stringify(userVocabularies));
        updateCount();
    }

    function updateCount() {
        wordCountBadge.textContent = userVocabularies.length;
    }

    function renderList() {
        vocabList.innerHTML = '';

        if (userVocabularies.length === 0) {
            vocabList.innerHTML = `
                <div class="empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                    <p>Votre liste est vide. Ajoutez votre premier mot !</p>
                </div>
            `;
            updateCount();
            return;
        }

        // Render from newest to oldest
        const reversedVocab = [...userVocabularies].reverse();

        reversedVocab.forEach(vocab => {
            const li = document.createElement('li');
            li.className = 'vocab-item';
            
            li.innerHTML = `
                <div class="word-pair">
                    <span class="word-nl">${escapeHTML(vocab.nl)}</span>
                    <span class="word-separator">↔</span>
                    <span class="word-fr">${escapeHTML(vocab.fr)}</span>
                </div>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editVocab('${vocab.id}')" title="Modifier">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button class="btn-delete" onclick="deleteVocab('${vocab.id}')" title="Supprimer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            `;
            
            vocabList.appendChild(li);
        });

        updateCount();
    }

    // --- Navigation Logic ---
    function switchTab(activeTab, activeView) {
        [tabList, tabQuiz, tabLibrary].forEach(t => t.classList.remove('active'));
        [viewList, viewQuiz, viewLibrary].forEach(v => v.style.display = 'none');
        
        activeTab.classList.add('active');
        activeView.style.display = 'block';
    }

    tabList.addEventListener('click', () => switchTab(tabList, viewList));

    tabQuiz.addEventListener('click', () => {
        switchTab(tabQuiz, viewQuiz);
        startQuiz();
    });

    tabLibrary.addEventListener('click', () => switchTab(tabLibrary, viewLibrary));

    // --- Library Logic ---
    function renderLibrary(searchQuery = '') {
        const container = document.getElementById('library-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        const query = searchQuery.toLowerCase().trim();
        
        let hasResults = false;
        
        preloadedThemes.forEach(themeObj => {
            // Filter words based on query
            const filteredWords = themeObj.words.filter(word => {
                if (!query) return true;
                return word.nl.toLowerCase().includes(query) || 
                       word.fr.toLowerCase().includes(query);
            });
            
            // Skip rendering theme if no matching words
            if (filteredWords.length === 0) return;
            
            hasResults = true;
            
            const block = document.createElement('div');
            block.className = 'theme-block';
            
            const title = document.createElement('h4');
            title.className = 'theme-title';
            
            // Show filtered count if searching, else total
            const countText = query 
                ? `${filteredWords.length} mot(s) trouvé(s)`
                : `${themeObj.words.length} mots`;
                
            title.textContent = `${themeObj.theme} (${countText})`;
            
            const ul = document.createElement('ul');
            ul.className = 'lib-word-list';
            
            filteredWords.forEach(word => {
                const li = document.createElement('li');
                li.className = 'lib-word-item';
                
                // Highlight matches if there's a query
                let nlText = escapeHTML(word.nl);
                let frText = escapeHTML(word.fr);
                
                if (query) {
                    const regex = new RegExp(`(${query})`, 'gi');
                    nlText = nlText.replace(regex, '<mark>$1</mark>');
                    frText = frText.replace(regex, '<mark>$1</mark>');
                }
                
                li.innerHTML = `
                    <span class="lib-word-nl">${nlText}</span>
                    <span class="lib-word-fr">${frText}</span>
                `;
                ul.appendChild(li);
            });
            
            block.appendChild(title);
            block.appendChild(ul);
            container.appendChild(block);
        });
        
        if (!hasResults) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>Aucun mot ne correspond à "${escapeHTML(query)}".</p>
                </div>`;
        }
    }

    renderLibrary();
    
    // Search event
    if (librarySearch) {
        librarySearch.addEventListener('input', (e) => {
            renderLibrary(e.target.value);
        });
    }

    // --- Quiz Logic ---
    function buildQuizPool() {
        let pool = [];
        const selection = themeSelect.value;
        
        if (selection === "all") {
            // Merge everything
            pool = [...userVocabularies];
            preloadedThemes.forEach(t => pool.push(...t.words));
        } else if (selection === "perso") {
            // Only user ones
            pool = [...userVocabularies];
        } else {
            // Specific PDF theme
            const themeIndex = parseInt(selection, 10);
            if (!isNaN(themeIndex) && preloadedThemes[themeIndex]) {
                pool = [...preloadedThemes[themeIndex].words];
            }
        }
        
        // Let's add IDs to all words in pool if missing to allow filtering
        return pool.map((w, idx) => ({
            ...w, 
            id: w.id || `preloaded_${idx}`
        }));
    }

    function startQuiz() {
        // Reset state
        resetFlashcard();
        
        quizWordPool = buildQuizPool();

        // Check if there are enough words
        if (quizWordPool.length === 0) {
            quizWordFr.textContent = "Vide";
            quizWordFr.style.fontSize = "1.5rem";
            quizWordFr.textContent = "Aucun mot dans ce thème !";
            quizForm.style.display = 'none';
            return;
        }

        quizForm.style.display = 'flex';
        quizWordFr.style.fontSize = ""; // reset

        // Pick random word
        // Prevent picking the same word twice in a row if possible
        let availableVocabs = quizWordPool;
        if (quizWordPool.length > 1 && currentQuizWord) {
            availableVocabs = quizWordPool.filter(v => v.id !== currentQuizWord.id);
        }

        const randomIndex = Math.floor(Math.random() * availableVocabs.length);
        currentQuizWord = availableVocabs[randomIndex];

        // Display french word on front
        quizWordFr.textContent = currentQuizWord.fr;
        
        // Focus input automatically
        setTimeout(() => quizAnswer.focus(), 100);
    }

    function resetFlashcard() {
        flashcard.classList.remove('flipped');
        quizAnswer.value = '';
        quizForm.style.display = 'flex';
        btnNext.style.display = 'none';
        quizStatus.textContent = '';
        flashcardBack.className = 'flashcard-back'; // reset classes
        quizAnswer.disabled = false;
        quizAnswer.focus();
    }

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!currentQuizWord) return;

        const userAnswer = quizAnswer.value.trim().toLowerCase();
        const correctAnswer = currentQuizWord.nl.trim().toLowerCase();

        // Basic string match (ignoring case and outer spaces)
        const isCorrect = userAnswer === correctAnswer;
        
        showQuizResult(isCorrect);
    });

    function showQuizResult(isCorrect) {
        // Disable input
        quizForm.style.display = 'none';
        quizAnswer.disabled = true;
        
        if (isCorrect) {
            flashcardBack.classList.add('correct');
            resultIcon.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
            resultTitle.textContent = "Bravo !";
            correctionText.innerHTML = `La traduction de "${currentQuizWord.fr}" est bien : <strong>${currentQuizWord.nl}</strong>`;
            quizStatus.textContent = "Bonne réponse ! ✨";
            quizStatus.className = "quiz-status status-correct";
        } else {
            flashcardBack.classList.add('incorrect');
            resultIcon.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
            resultTitle.textContent = "Oups !";
            correctionText.innerHTML = `La bonne traduction de "${currentQuizWord.fr}" était : <strong>${currentQuizWord.nl}</strong>`;
            quizStatus.textContent = "Faux ! 😅";
            quizStatus.className = "quiz-status status-incorrect";
        }

        // Flip the card
        flashcard.classList.add('flipped');
        
        // Show next button
        btnNext.style.display = 'block';
        btnNext.focus();
    }

    btnNext.addEventListener('click', () => {
        startQuiz();
    });

    // Utility to prevent XSS
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    // Initial render
    renderList();
});
