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