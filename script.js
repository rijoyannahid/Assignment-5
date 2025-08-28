// ---- State ----
let coins = 100;
let hearts = 0;
let copies = 0;

// ---- Elements ----
const $ = (q, ctx=document) => ctx.querySelector(q);
const $$ = (q, ctx=document) => Array.from(ctx.querySelectorAll(q));

const coinsEl  = $('#coinsCount');
const heartsEl = $('#heartsCount');
const copyEl   = $('#copyCount');
const historyList = $('#historyList');

// ---- Helpers ----
const nowTime = () =>
  new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'});

const updateStats = () => {
  coinsEl.textContent  = coins;
  heartsEl.textContent = hearts;
  copyEl.textContent   = copies;
};



// ---- Heart toggle (increments/decrements navbar count) ----
$$('.card-heart').forEach(btn => {
  btn.addEventListener('click', () => {
    const active = btn.classList.toggle('active');
    hearts += active ? 1 : -1;
    if (hearts < 0) hearts = 0;
    updateStats();
  });
});



// ---- Copy button ----
$$('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const card = e.currentTarget.closest('.card');
    const number = card.dataset.number;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(number);
      }
      alert(`Hotline ${number} copied to clipboard ✅`);
      copies += 1;
      updateStats();
    } catch {
      alert(`Copy failed. Number: ${number}`);
    }
  });
});

// ---- Call button ----
$$('.call-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.closest('.card');
    const service = card.dataset.service;
    const number  = card.dataset.number;

    if (coins < 20) {
      alert('Not enough coins to make a call. Need at least 20 coins.');
      return;
    }

    coins -= 20;
    updateStats();

    alert(`Calling ${service} at ${number} ...`);



     // Add to history (with exact time)
    const li = document.createElement('li');
    li.className = 'history-item';
    li.innerHTML = `
      <div>
        <div class="name">${service}</div>
        <div class="number">${number}</div>
      </div>
      <div class="time">${nowTime()}</div>
    `;
    historyList.prepend(li);
  });
});

// ---- Clear history ----
$('#clearHistory').addEventListener('click', () => {
  historyList.innerHTML = '';
});

// ---- Copy pill (top-right) shows count on click (no side-effects) ----
$('#copyPill').addEventListener('click', () => {
  alert(`Total copies: ${copies}`);
});

// ---- init ----
updateStats();