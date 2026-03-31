document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("vocab-form");
  const dutchInput = document.getElementById("dutch-input");
  const frenchInput = document.getElementById("french-input");
  const vocabList = document.getElementById("vocab-list");
  const wordCountBadge = document.getElementById("word-count");
  const submitBtn = document.getElementById("submit-btn");
  const submitText = document.getElementById("submit-text");
  const submitIcon = document.getElementById("submit-icon");

  let editingId = null;

  const tabList = document.getElementById("tab-list");
  const tabQuiz = document.getElementById("tab-quiz");
  const tabLibrary = document.getElementById("tab-library");
  const tabChat = document.getElementById("tab-chat");
  const viewList = document.getElementById("view-list");
  const viewQuiz = document.getElementById("view-quiz");
  const viewLibrary = document.getElementById("view-library");
  const viewChat = document.getElementById("view-chat");

  const quizWordFr = document.getElementById("quiz-word-fr");
  const quizForm = document.getElementById("quiz-form");
  const quizAnswer = document.getElementById("quiz-answer");
  const btnNext = document.getElementById("btn-next");
  const flashcard = document.getElementById("flashcard");
  const flashcardBack = document.getElementById("flashcard-back");
  const resultIcon = document.getElementById("result-icon");
  const resultTitle = document.getElementById("result-title");
  const correctionText = document.getElementById("correction-text");
  const quizStatus = document.getElementById("quiz-status");
  const themeSelect = document.getElementById("theme-select");
  const quizDirection = document.getElementById("quiz-direction");
  const quizProgressContainer = document.getElementById(
    "quiz-progress-container",
  );
  const quizProgressCurrent = document.getElementById("quiz-progress-current");
  const quizProgressTotal = document.getElementById("quiz-progress-total");
  const quizProgressFill = document.getElementById("quiz-progress-fill");
  const btnReviseMistakes = document.getElementById("btn-revise-mistakes");

  const librarySearch = document.getElementById("library-search");

  let currentQuizWord = null;
  let quizWordPool = [];
  let remainingQuizWords = [];
  let wordsDoneCount = 0;

  let mistakesSession =
    JSON.parse(localStorage.getItem("selorVocabMistakes")) || [];
  let isRevisingMistakes = false;

  let userVocabularies = JSON.parse(localStorage.getItem("selorVocab")) || [];

  let preloadedThemes = typeof vocabData !== "undefined" ? vocabData : [];

  function initThemeSelector() {
    if (!themeSelect) return;

    preloadedThemes.forEach((themeObj, index) => {
      const option = document.createElement("option");
      option.value = index.toString();
      option.textContent = `Thème : ${themeObj.theme} (${themeObj.words.length} mots)`;
      themeSelect.appendChild(option);
    });
  }

  initThemeSelector();

  if (themeSelect) {
    themeSelect.addEventListener("change", () => {
      isRevisingMistakes = false;
      resetQuizSession();
    });
  }

  quizDirection.addEventListener("change", () => {
    isRevisingMistakes = false;
    resetQuizSession();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dutchWord = dutchInput.value.trim();
    const frenchWord = frenchInput.value.trim();

    if (dutchWord && frenchWord) {
      if (editingId) {
        const index = userVocabularies.findIndex((v) => v.id === editingId);
        if (index !== -1) {
          userVocabularies[index].nl = dutchWord;
          userVocabularies[index].fr = frenchWord;
        }
        editingId = null;
        submitText.textContent = "Ajouter le mot";
        submitIcon.innerHTML =
          '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
        submitBtn.classList.remove("btn-edit-mode");
      } else {
        const newVocab = {
          id: Date.now().toString(),
          nl: dutchWord,
          fr: frenchWord,
        };
        userVocabularies.push(newVocab);
      }

      saveData();
      renderList();

      form.reset();
      dutchInput.focus();
    }
  });

  function deleteVocab(id) {
    userVocabularies = userVocabularies.filter((v) => v.id !== id);

    if (editingId === id) {
      editingId = null;
      form.reset();
      submitText.textContent = "Ajouter le mot";
      submitIcon.innerHTML =
        '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
      submitBtn.classList.remove("btn-edit-mode");
    }

    saveData();
    renderList();
  }

  function editVocab(id) {
    const vocab = userVocabularies.find((v) => v.id === id);
    if (vocab) {
      dutchInput.value = vocab.nl;
      frenchInput.value = vocab.fr;
      editingId = id;
      submitText.textContent = "Modifier le mot";
      submitIcon.innerHTML =
        '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>';
      submitBtn.classList.add("btn-edit-mode");
      dutchInput.focus();
    }
  }

  function saveData() {
    localStorage.setItem(
      "selorVocab",
      JSON.parse(JSON.stringify(userVocabularies)),
    );
    updateCount();
  }

  function saveMistakes() {
    localStorage.setItem("selorVocabMistakes", JSON.stringify(mistakesSession));
  }

  function updateCount() {
    wordCountBadge.textContent = userVocabularies.length;
  }

  function renderList() {
    vocabList.innerHTML = "";

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

    const reversedVocab = [...userVocabularies].reverse();

    reversedVocab.forEach((vocab) => {
      const li = document.createElement("li");
      li.className = "vocab-item";

      li.dataset.id = vocab.id;
      li.innerHTML = `
                <div class="word-pair">
                    <span class="word-nl">${escapeHTML(vocab.nl)}</span>
                    <span class="word-separator">↔</span>
                    <span class="word-fr">${escapeHTML(vocab.fr)}</span>
                </div>
                <div class="action-buttons">
                    <button class="btn-edit" data-action="edit" data-id="${vocab.id}" title="Modifier">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button class="btn-delete" data-action="delete" data-id="${vocab.id}" title="Supprimer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            `;

      vocabList.appendChild(li);
    });

    updateCount();
  }

  function switchTab(activeTab, activeView) {
    [tabList, tabQuiz, tabLibrary, tabChat].forEach((t) => t.classList.remove("active"));
    [viewList, viewQuiz, viewLibrary, viewChat].forEach(
      (v) => (v.style.display = "none"),
    );

    activeTab.classList.add("active");
    activeView.style.display = "block";
  }

  tabList.addEventListener("click", () => switchTab(tabList, viewList));

  tabQuiz.addEventListener("click", () => {
    switchTab(tabQuiz, viewQuiz);
    isRevisingMistakes = false;
    resetQuizSession();
  });

  tabLibrary.addEventListener("click", () =>
    switchTab(tabLibrary, viewLibrary),
  );

  tabChat.addEventListener("click", () => switchTab(tabChat, viewChat));

  function renderLibrary(searchQuery = "") {
    const container = document.getElementById("library-container");
    if (!container) return;

    container.innerHTML = "";

    const query = searchQuery.toLowerCase().trim();

    let hasResults = false;

    preloadedThemes.forEach((themeObj) => {
      const filteredWords = themeObj.words.filter((word) => {
        if (!query) return true;
        return (
          word.nl.toLowerCase().includes(query) ||
          word.fr.toLowerCase().includes(query)
        );
      });

      if (filteredWords.length === 0) return;

      hasResults = true;

      const block = document.createElement("div");
      block.className = "theme-block";

      const title = document.createElement("h4");
      title.className = "theme-title";

      const countText = query
        ? `${filteredWords.length} mot(s) trouvé(s)`
        : `${themeObj.words.length} mots`;

      title.textContent = `${themeObj.theme} (${countText})`;

      const ul = document.createElement("ul");
      ul.className = "lib-word-list";

      filteredWords.forEach((word) => {
        const li = document.createElement("li");
        li.className = "lib-word-item";

        let nlText = escapeHTML(word.nl);
        let frText = escapeHTML(word.fr);

        if (query) {
          const regex = new RegExp(`(${query})`, "gi");
          nlText = nlText.replace(regex, "<mark>$1</mark>");
          frText = frText.replace(regex, "<mark>$1</mark>");
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

  if (librarySearch) {
    librarySearch.addEventListener("input", (e) => {
      renderLibrary(e.target.value);
    });
  }

  function buildQuizPool() {
    let pool = [];
    if (!themeSelect) return pool;

    const selection = themeSelect.value;

    if (selection === "all") {
      pool = [...userVocabularies];
      preloadedThemes.forEach((t) => pool.push(...t.words));
    } else if (selection === "perso") {
      pool = [...userVocabularies];
    } else {
      const themeIndex = parseInt(selection, 10);
      if (!isNaN(themeIndex) && preloadedThemes[themeIndex]) {
        pool = [...preloadedThemes[themeIndex].words];
      }
    }

    return pool.map((w, idx) => ({
      ...w,
      id: w.id || `preloaded_${idx}`,
    }));
  }

  function resetQuizSession() {
    if (isRevisingMistakes && mistakesSession.length === 0) {
      isRevisingMistakes = false;
    }

    if (!isRevisingMistakes) {
      quizWordPool = buildQuizPool();
    } else {
      quizWordPool = [...mistakesSession];
    }

    remainingQuizWords = [...quizWordPool].sort(() => Math.random() - 0.5);
    wordsDoneCount = 0;

    saveMistakes();
    renderMistakes();

    updateProgressUI();
    nextQuizWord();
  }

  function updateProgressUI() {
    const total = quizWordPool.length;
    if (total === 0) {
      if (quizProgressContainer) quizProgressContainer.style.display = "none";
    } else {
      if (quizProgressContainer) quizProgressContainer.style.display = "flex";
      if (quizProgressCurrent) quizProgressCurrent.textContent = wordsDoneCount;
      if (quizProgressTotal) quizProgressTotal.textContent = total;

      if (quizProgressFill) {
        const percentage = Math.round((wordsDoneCount / total) * 100);
        quizProgressFill.style.width = percentage + "%";
      }
    }
  }

  function nextQuizWord() {
    resetFlashcard();

    if (quizWordPool.length === 0) {
      quizWordFr.textContent = "Vide";
      quizWordFr.style.fontSize = "1.5rem";
      quizWordFr.textContent = "Aucun mot dans ce thème !";
      quizForm.style.display = "none";
      quizStatus.textContent = "";
      quizStatus.className = "quiz-status";
      return;
    }

    if (remainingQuizWords.length === 0) {
      quizWordFr.style.fontSize = "1.5rem";
      quizWordFr.textContent = "Révision terminée ! Rechargement...";
      quizForm.style.display = "none";
      quizStatus.textContent = "Bravo, vous avez vu tous les mots ! 🎉";
      quizStatus.className = "quiz-status status-correct";

      setTimeout(() => {
        resetQuizSession();
      }, 2500);
      return;
    }

    quizForm.style.display = "flex";
    quizWordFr.style.fontSize = "";

    currentQuizWord = remainingQuizWords.pop();

    const direction = quizDirection.value;
    const isFrToNl = direction === "fr-nl";

    const cardLabel = flashcard.querySelector(".card-label");
    if (isFrToNl) {
      cardLabel.textContent = "Traduisez ce mot en Néerlandais :";
      quizAnswer.placeholder = "Votre réponse en NL...";
      quizWordFr.textContent = currentQuizWord.fr;
    } else {
      cardLabel.textContent = "Vertaal dit woord in het Frans :";
      quizAnswer.placeholder = "Votre réponse en FR...";
      quizWordFr.textContent = currentQuizWord.nl;
    }

    setTimeout(() => quizAnswer.focus(), 100);
  }

  function resetFlashcard() {
    flashcard.classList.remove("flipped");
    quizAnswer.value = "";
    quizForm.style.display = "flex";
    btnNext.style.display = "none";
    quizStatus.textContent = "";
    flashcardBack.className = "flashcard-back";
    quizAnswer.disabled = false;
    quizAnswer.focus();
  }

  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!currentQuizWord) return;

    const direction = quizDirection.value;
    const isFrToNl = direction === "fr-nl";

    const userAnswer = quizAnswer.value.trim().toLowerCase();
    const correctAnswer = (isFrToNl ? currentQuizWord.nl : currentQuizWord.fr)
      .trim()
      .toLowerCase();

    const isCorrect = userAnswer === correctAnswer;

    wordsDoneCount++;
    updateProgressUI();

    showQuizResult(isCorrect);
  });

  function showQuizResult(isCorrect) {
    quizForm.style.display = "none";
    quizAnswer.disabled = true;

    const direction = quizDirection.value;
    const isFrToNl = direction === "fr-nl";
    const sourceWord = isFrToNl ? currentQuizWord.fr : currentQuizWord.nl;
    const targetWord = isFrToNl ? currentQuizWord.nl : currentQuizWord.fr;

    if (isCorrect) {
      flashcardBack.classList.add("correct");
      resultIcon.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
      resultTitle.textContent = "Bravo !";
      correctionText.innerHTML = `La traduction de "${sourceWord}" est bien : <strong>${targetWord}</strong>`;
      quizStatus.textContent = "Bonne réponse ! ✨";
      quizStatus.className = "quiz-status status-correct";

      const mistakeIndex = mistakesSession.findIndex(
        (w) => w.id === currentQuizWord.id,
      );
      if (mistakeIndex !== -1) {
        mistakesSession.splice(mistakeIndex, 1);
        saveMistakes();
        renderMistakes();
      }
    } else {
      flashcardBack.classList.add("incorrect");
      resultIcon.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
      resultTitle.textContent = "Oups !";
      correctionText.innerHTML = `La bonne traduction de "${sourceWord}" était : <strong>${targetWord}</strong>`;
      quizStatus.textContent = "Faux ! 😅";
      quizStatus.className = "quiz-status status-incorrect";

      if (!mistakesSession.some((w) => w.id === currentQuizWord.id)) {
        mistakesSession.push(currentQuizWord);
        saveMistakes();
        renderMistakes();
      }
    }

    flashcard.classList.add("flipped");

    btnNext.style.display = "block";
    btnNext.focus();
  }

  btnNext.addEventListener("click", () => {
    nextQuizWord();
  });

  if (btnReviseMistakes) {
    btnReviseMistakes.addEventListener("click", () => {
      if (mistakesSession.length > 0) {
        isRevisingMistakes = true;
        resetQuizSession();
      }
    });
  }

  function renderMistakes() {
    const container = document.getElementById("mistakes-container");
    const list = document.getElementById("mistakes-list");
    if (!container || !list) return;

    if (mistakesSession.length === 0) {
      container.style.display = "none";
      return;
    }

    container.style.display = "block";
    list.innerHTML = "";

    mistakesSession.forEach((word) => {
      const li = document.createElement("li");
      li.className = "lib-word-item mistake-item";

      li.innerHTML = `
                <span class="lib-word-nl">${escapeHTML(word.nl)}</span>
                <span class="lib-word-fr">${escapeHTML(word.fr)}</span>
            `;
      list.appendChild(li);
    });
  }

  function escapeHTML(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[tag] || tag,
    );
  }

  renderList();
  renderMistakes();

  vocabList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const id = btn.dataset.id;
    if (btn.dataset.action === "edit") editVocab(id);
    if (btn.dataset.action === "delete") deleteVocab(id);
  });

  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  const btnChatHistory = document.getElementById("btn-chat-history");
  const btnCloseHistory = document.getElementById("btn-close-history");
  const chatHistorySidebar = document.getElementById("chat-history-sidebar");
  const btnNewChat = document.getElementById("btn-new-chat");
  const chatHistoryList = document.getElementById("chat-history-list");

  let chatSessions = JSON.parse(localStorage.getItem("selor_chat_sessions")) || [];
  let currentSessionId = null;

  function generateSessionId() {
    return 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function saveChatSessions() {
    localStorage.setItem("selor_chat_sessions", JSON.stringify(chatSessions));
    renderChatHistory();
  }

  function initChatSession() {
    if (chatSessions.length === 0) {
      createNewChat();
    } else {
      loadChat(chatSessions[0].id);
    }
  }

  function createNewChat() {
    const newSession = {
      id: generateSessionId(),
      title: "Nouvelle discussion",
      messages: []
    };
    chatSessions.unshift(newSession);
    saveChatSessions();
    loadChat(newSession.id);
  }

  function loadChat(sessionId) {
    currentSessionId = sessionId;
    const session = chatSessions.find(s => s.id === sessionId);
    chatMessages.innerHTML = ''; 
    
    if (session && session.messages.length > 0) {
      session.messages.forEach(msg => {
        appendChatMessageDOM(msg.text, msg.isUser, false);
      });
    } else {
      appendChatMessageDOM("Hallo! Je suis ton tuteur IA. Comment puis-je t'aider avec ton néerlandais aujourd'hui ?", false, false);
    }
    renderChatHistory();
    if (window.innerWidth <= 640) toggleSidebar(false);
  }

  function toggleSidebar(force) {
    if (typeof force === 'boolean') {
      if (force) chatHistorySidebar.classList.add("open");
      else chatHistorySidebar.classList.remove("open");
    } else {
      chatHistorySidebar.classList.toggle("open");
    }
  }

  if (btnChatHistory) btnChatHistory.addEventListener('click', toggleSidebar);
  if (btnCloseHistory) btnCloseHistory.addEventListener('click', () => toggleSidebar(false));
  if (btnNewChat) btnNewChat.addEventListener('click', createNewChat);

  function renderChatHistory() {
    if (!chatHistoryList) return;
    chatHistoryList.innerHTML = '';
    
    chatSessions.forEach(session => {
      const item = document.createElement("div");
      item.className = `chat-session-item ${session.id === currentSessionId ? 'active' : ''}`;
      
      const titleSpan = document.createElement("span");
      titleSpan.textContent = session.title;
      item.appendChild(titleSpan);
      
      item.addEventListener("click", () => loadChat(session.id));
      
      const delBtn = document.createElement("button");
      delBtn.className = "btn-delete-chat";
      delBtn.title = "Supprimer la discussion";
      delBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>';
      
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm("Voulez-vous vraiment supprimer cette discussion ?")) {
          chatSessions = chatSessions.filter(s => s.id !== session.id);
          saveChatSessions();
          if (chatSessions.length === 0) {
            createNewChat();
          } else if (session.id === currentSessionId) {
            loadChat(chatSessions[0].id);
          }
        }
      });
      
      item.appendChild(delBtn);
      chatHistoryList.appendChild(item);
    });
  }

  let AI_API_KEY = localStorage.getItem("selor_api_key") || "";

  const btnApiConfig = document.getElementById("btn-api-config");
  if (btnApiConfig) {
    btnApiConfig.addEventListener("click", () => {
      const key = prompt("Veuillez entrer votre clé API Groq (elle sera sauvegardée dans votre navigateur) :", AI_API_KEY);
      if (key !== null) {
        AI_API_KEY = key.trim();
        if (AI_API_KEY) {
          localStorage.setItem("selor_api_key", AI_API_KEY);
          alert("Clé API enregistrée avec succès !");
        } else {
          localStorage.removeItem("selor_api_key");
          alert("Clé API supprimée.");
        }
      }
    });
  }

  function appendChatMessage(text, isUser) {
    appendChatMessageDOM(text, isUser, true);
  }

  function appendChatMessageDOM(text, isUser, saveToStorage = true) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}`;
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (saveToStorage && currentSessionId) {
      const session = chatSessions.find(s => s.id === currentSessionId);
      if (session) {
        if (session.messages.length === 0 && isUser) {
            session.title = text.substring(0, 30) + (text.length > 30 ? "..." : "");
            renderChatHistory();
        }
        session.messages.push({ text, isUser });
        saveChatSessions();
      }
    }
  }

  function appendTypingIndicator() {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble-ai";
    bubble.id = "typing-indicator";
    bubble.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();
  }

  if (chatForm) {
    chatForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (!message) return;

      appendChatMessage(message, true);
      chatInput.value = "";
      
      appendTypingIndicator();

      if (!AI_API_KEY) {
        setTimeout(() => {
          removeTypingIndicator();
          appendChatMessage("Veuillez configurer votre clé d'API.", false);
        }, 1500);
        return;
      }

      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AI_API_KEY}`
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: "Tu es un tuteur amical pour un apprenant francophone qui étudie le néerlandais. Donne des réponses courtes et claires, corrige ses erreurs poliment et encourage-le." },
              { role: "user", content: message }
            ]
          })
        });
        
        const data = await response.json();
        removeTypingIndicator();
        
        if (data.choices && data.choices.length > 0) {
          appendChatMessage(data.choices[0].message.content, false);
        } else if (data.error) {
          appendChatMessage("Erreur API Groq (" + data.error.type + "): " + data.error.message, false);
          console.error("API Error Response:", data);
        } else {
          appendChatMessage("Désolé, je n'ai pas pu générer de réponse. (Aucune donnée renvoyée)", false);
          console.error("Unknown API Response:", data);
        }
      } catch (err) {
        removeTypingIndicator();
        appendChatMessage("Erreur réseau: impossible de contacter le tuteur IA.", false);
      }
    });
  }

  initChatSession();

});
