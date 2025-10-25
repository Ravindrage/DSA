   const btn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });


    // Function to render cards
function renderCards(lang) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = ''; // Clear previous
  flashcards.forEach(card => {
    const cardHTML = `
      <div class="card">
        <div class="card-inner">
          <div class="card-front ${card.colorFront}">
            <h2 class="text-xl font-bold ${card.colorTitle} mb-2">${card[lang].title}</h2>
            <p class="${card.colorShort}">${card[lang].short}</p>
          </div>
          <div class="card-back ${card.colorBack}">
            <p>${card[lang].back}</p>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Initial render in English
renderCards('en');

// Language change event
document.getElementById('langSelect').addEventListener('change', (e) => {
  const lang = e.target.value;
  if(lang === 'en'){
    document.getElementById('siteTitle').textContent = "📘 DSA Flashcards";
    document.getElementById('siteSubtitle').textContent = "Big O, Big Ω, and Big Θ Notation";
  } else if(lang === 'mrw'){
    document.getElementById('siteTitle').textContent = "📘 DSA Flashcards (मारवाड़ी)";
    document.getElementById('siteSubtitle').textContent = "Big O, Big Ω, और Big Θ नोटेशन";
  }
  renderCards(lang);
});
