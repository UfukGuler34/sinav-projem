/* Sınav Projem – uygulama */
(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const L = window.LESSONS;
const LMAP = Object.fromEntries(L.map(l => [l.id, l]));
const Q = window.QUESTIONS_RAW.map((r, i) => ({id: "q" + i, m: r[0], q: r[1], o: r[2], a: r[3], e: r[4]}));
const C = window.CARDS_RAW.map((r, i) => ({id: "c" + i, m: r[0], f: r[1], b: r[2]}));
const main = $("#main");

/* ---------- tarih yardımcıları ---------- */
const pad = n => String(n).padStart(2, "0");
const iso = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const today = () => iso(new Date());
const parseD = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parseD(s); d.setDate(d.getDate() + n); return iso(d); };
const diffDays = (a, b) => Math.round((parseD(b) - parseD(a)) / 86400000);
const fmtD = s => parseD(s).toLocaleDateString("tr-TR", {day: "numeric", month: "long"});
const nf = (n, d=0) => Number(n).toLocaleString("tr-TR", {maximumFractionDigits: d, minimumFractionDigits: 0});
window.nf = nf;

/* ---------- durum ---------- */
const KEY = "sinavprojem.v1";
function fresh(){ const t = today(); return {v: 1, start: t, exam: addDays(t, 30), done: {}, q: {}, cards: {}, days: {}, theme: "auto", last: null, results: []}; }
let S;
try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch(e) { S = fresh(); }
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} updateBadges(); }
function bump(k, n=1){ const t = today(); S.days[t] = S.days[t] || {}; S.days[t][k] = (S.days[t][k] || 0) + n; }
function applyTheme(){ if (S.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", S.theme); }
applyTheme();

function toast(msg){ const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("on"), 1800); }
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const modNo = id => L.findIndex(l => l.id === id) + 1;

/* ---------- istatistik ---------- */
function modStats(m){
  const qs = Q.filter(q => q.m === m); let ans = 0, ok = 0;
  qs.forEach(q => { const r = S.q[q.id]; if (r) { ans++; if (r.last === "c") ok++; } });
  return {total: qs.length, ans, ok, pct: ans ? Math.round(ok / ans * 100) : null};
}
function dueCards(){ const t = today(); return C.filter(c => S.cards[c.id] && S.cards[c.id].due <= t); }
function newCards(){ return C.filter(c => !S.cards[c.id]); }
function updateBadges(){
  const n = dueCards().length, b = $("#dueCnt");
  if (n) { b.hidden = false; b.textContent = n; } else b.hidden = true;
  $$("#modNav a").forEach(a => a.classList.toggle("done", !!S.done[a.dataset.id]));
}

/* ---------- gezinme ---------- */
function buildNav(){
  $("#modNav").innerHTML = L.map((l, i) => `<a href="#/ders/${l.id}" data-id="${l.id}"><span class="no">${i + 1}</span><span class="dot">✓</span><span>${esc(l.title)}</span></a>`).join("");
}
buildNav();
$("#menuBtn").onclick = () => { $("#side").classList.add("open"); $("#scrim").classList.add("on"); };
$("#scrim").onclick = closeMenu;
function closeMenu(){ $("#side").classList.remove("open"); $("#scrim").classList.remove("on"); }
$("#searchForm").onsubmit = e => { e.preventDefault(); const v = $("#searchInput").value.trim(); if (v) location.hash = "#/ara?q=" + encodeURIComponent(v); };

let cleanup = null;
function route(){
  if (cleanup) { cleanup(); cleanup = null; }
  closeMenu();
  const h = location.hash.replace(/^#\/?/, "");
  const [path, qs] = h.split("?");
  const params = new URLSearchParams(qs || "");
  const parts = path.split("/").filter(Boolean);
  const r = parts[0] || "";
  $$("#mainNav a").forEach(a => a.classList.toggle("on", a.dataset.r === r));
  $$("#modNav a").forEach(a => a.classList.toggle("on", r === "ders" && a.dataset.id === parts[1]));
  window.scrollTo(0, 0);
  if (r === "") viewDash();
  else if (r === "ders" && LMAP[parts[1]]) viewLesson(parts[1], params.get("s"));
  else if (r === "test") viewTestSetup(params);
  else if (r === "kartlar") viewCards(params);
  else if (r === "hesap") viewCalc();
  else if (r === "formul") viewFormulas();
  else if (r === "ayarlar") viewSettings();
  else if (r === "ara") viewSearch(params.get("q") || "");
  else viewDash();
  updateBadges();
}
window.addEventListener("hashchange", route);

function mountWidgets(root){ $$("[data-w]", root).forEach(d => { const f = window.W && window.W[d.dataset.w]; if (f) { d.classList.add("w"); try { f(d); } catch(err) { console.error(d.dataset.w, err); } } }); }

/* ---------- PANEL ---------- */
function burnSVG(){
  const N = L.length, start = S.start, exam = S.exam, t = today();
  const span = Math.max(1, diffDays(start, exam));
  const planEnd = Math.max(1, span - Math.min(7, Math.floor(span / 4)));
  const W = window.innerWidth < 700 ? 440 : 900, H = 230, pl = 34, pr = 16, pt = 14, pb = 30;
  const x = d => pl + (W - pl - pr) * Math.min(span, Math.max(0, d)) / span;
  const y = v => pt + (H - pt - pb) * (1 - v / N);
  const doneDates = Object.values(S.done).sort();
  const elapsed = Math.min(span, Math.max(0, diffDays(start, t)));
  let pts = [[x(0), y(N)]];
  for (let d = 0; d <= elapsed; d++) {
    const day = addDays(start, d);
    const rem = N - doneDates.filter(x => x <= day).length;
    pts.push([x(d + 1), y(rem)]);
  }
  const path = "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i-1][0], pts[i][1] - pts[i-1][1]);
  let grid = "";
  for (let v = 0; v <= N; v += 6) grid += `<line class="axis" x1="${pl}" x2="${W - pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  const ticks = [0, Math.round(span / 2), span].map(d => `<text x="${x(d)}" y="${H - 8}" text-anchor="middle">${fmtD(addDays(start, d))}</text>`).join("");
  const ex = x(span), ey = y(0);
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Çalışma burndown grafiği">${grid}${ticks}
    <line class="plan" x1="${x(0)}" y1="${y(N)}" x2="${x(planEnd)}" y2="${y(0)}"/>
    <line class="today" x1="${x(elapsed + 1)}" x2="${x(elapsed + 1)}" y1="${pt}" y2="${H - pb}"/><text x="${x(elapsed + 1) + 4}" y="${pt + 10}" style="fill:var(--blue)">bugün</text>
    <path class="act draw" style="--len:${Math.ceil(len) + 2}" d="${path}"/>
    <path class="ms" d="M${ex} ${ey - 9} L${ex + 9} ${ey} L${ex} ${ey + 9} L${ex - 9} ${ey} Z"/>
    <text x="${x(planEnd)}" y="${y(0) - 10}" text-anchor="middle">Tekrar haftası</text>
  </svg>`;
}
function studySPI(){
  const N = L.length, span = Math.max(1, diffDays(S.start, S.exam));
  const planEnd = Math.max(1, span - Math.min(7, Math.floor(span / 4)));
  const el = Math.max(0, diffDays(S.start, today())) + 1;
  const pv = Math.min(N, N * el / planEnd), ev = Object.keys(S.done).length;
  return {pv, ev, spi: ev === 0 && el <= 1 ? null : ev / pv, planEnd};
}
function viewDash(){
  const left = diffDays(today(), S.exam);
  const sp = studySPI(); const done = Object.keys(S.done).length;
  const remainDays = Math.max(1, sp.planEnd - diffDays(S.start, today()));
  const perDay = Math.max(0, Math.ceil((L.length - done) / remainDays));
  const spiTxt = sp.spi === null ? "–" : nf(sp.spi, 2);
  const spiCls = sp.spi === null ? "" : sp.spi >= 1 ? "spi-good" : sp.spi >= .8 ? "spi-mid" : "spi-bad";
  const spiMsg = sp.spi === null ? "İlk dersi bitirince hesaplanır" : sp.spi >= 1 ? "Planın önündesin" : sp.spi >= .8 ? "Biraz gerideyiz, yetişir" : "Plan gerisinde, bugün iki ders dene";
  const next = L.find(l => !S.done[l.id]) || L[0];
  const lastL = S.last && LMAP[S.last] && !S.done[S.last] ? LMAP[S.last] : next;
  const due = dueCards().length, nw = newCards().length;
  const ansTotal = Object.keys(S.q).length, okTotal = Object.values(S.q).filter(r => r.last === "c").length;
  main.innerHTML = `<div class="view">
  <div class="panel hero1">
    <div class="hhead">
      <div><h1>Sınav projen</h1><p class="muted">Bu ayki çalışman da bir proje. Turuncu çizgi kalan derslerin, kesikli çizgi plan, elmas sınav günü.</p></div>
      <div class="kpis">
        <div class="kpi"><span class="big">${left >= 0 ? left : 0}</span><span class="lbl">gün kaldı<br>sınav ${fmtD(S.exam)}</span></div>
        <div class="kpi"><span class="big ${spiCls}">${spiTxt}</span><span class="lbl">çalışma SPI'ın<br>${spiMsg}</span></div>
        <div class="kpi"><span class="big">${ansTotal ? Math.round(okTotal / ansTotal * 100) + "%" : "–"}</span><span class="lbl">test başarın<br>${ansTotal}/${Q.length} soru çözüldü</span></div>
      </div>
    </div>
    <div class="burn">${burnSVG()}</div>
    <p class="muted" style="font-size:.85rem;margin:6px 0 0">SPI = tamamlanan ders (EV ${done}) / bugüne kadar planlanan (PV ${nf(sp.pv, 1)}). 1'in üstü planın önünde demek, tıpkı derslerdeki gibi.</p>
  </div>
  <div class="sechead"><h2>Bugün</h2><span class="muted">Hedef: günde ${perDay || 1} ders</span></div>
  <div class="today-row">
    <a class="act-card" href="#/ders/${lastL.id}"><span>${S.done[lastL.id] ? "Tekrar et" : "Kaldığın yerden"}</span><b>${modNo(lastL.id)}. ${esc(lastL.title)}</b><span>${lastL.mins} dakikalık okuma</span></a>
    <a class="act-card" href="#/kartlar?d=due"><span class="n">${due || nw}</span><b>${due ? "Tekrarı gelen kart" : "Yeni kart"}</b><span>${due ? "Unutmadan önce bir tur" : "Henüz başlamadığın kartlar"}</span></a>
    <a class="act-card" href="#/test?hizli=1"><span class="n">10</span><b>Hızlı test</b><span>Zayıf ve hiç çözmediğin sorulardan</span></a>
  </div>
  <div class="sechead"><h2>Konu hâkimiyeti</h2><span class="muted">Yüzde: o modülde son cevaplarının doğruluk oranı</span></div>
  <div class="panel"><div class="mastery">${L.map((l, i) => { const s = modStats(l.id); return `<a class="mrow" href="#/ders/${l.id}"><span class="mn">${S.done[l.id] ? '<span class="tick">✓</span>' : i + 1}</span><span><span class="mt">${esc(l.title)}</span><span class="bar"><i style="width:${s.ans ? s.ok / s.total * 100 : 0}%"></i></span></span><span class="pc">${s.pct === null ? "–" : s.pct + "%"}</span></a>`; }).join("")}</div></div>
  </div>`;
}

/* ---------- DERS ---------- */
function viewLesson(id, sec){
  const l = LMAP[id], i = modNo(id), prev = L[i - 2], next = L[i];
  S.last = id; save();
  const s = modStats(id);
  main.innerHTML = `<div class="view narrow"><div class="lhead">
    <div class="meta">Ders ${i} / ${L.length}, yaklaşık ${l.mins} dakika${S.done[id] ? ". Tamamlandı: " + fmtD(S.done[id]) : ""}</div>
    <h1>${esc(l.title)}</h1><p>${esc(l.short)}</p>
    <div class="toc">${l.sections.map((x, k) => `<a href="#" data-s="${k}">${esc(x.h)}</a>`).join("")}</div></div>
    ${l.sections.map((x, k) => `<section class="sec" id="s${k}"><h2><span class="sn">${i}.${k + 1}</span>${esc(x.h)}</h2>${x.html}</section>`).join("")}
    <div class="lfoot">
      <button class="btn donebtn ${S.done[id] ? "is" : ""}" id="doneBtn">${S.done[id] ? "✓ Tamamlandı" : "Dersi bitirdim"}</button>
      <div class="row">
        <a class="btn" href="#/test?m=${id}">Bu konudan test (${s.total})</a>
        <a class="btn" href="#/kartlar?m=${id}">Kartlar</a>
        ${next ? `<a class="btn pri" href="#/ders/${next.id}">Sonraki: ${esc(next.title)}</a>` : ""}
      </div>
    </div>
    ${prev ? `<p style="margin-top:12px"><a href="#/ders/${prev.id}">Önceki ders: ${esc(prev.title)}</a></p>` : ""}
  </div>`;
  $$(".toc a", main).forEach(a => a.onclick = e => { e.preventDefault(); $("#s" + a.dataset.s).scrollIntoView({behavior: "smooth"}); });
  $$(".sec table.t", main).forEach(t => { if (!t.parentElement.classList.contains("tw")) { const w = document.createElement("div"); w.className = "tw"; t.replaceWith(w); w.appendChild(t); } });
  $("#doneBtn").onclick = () => {
    if (S.done[id]) { delete S.done[id]; toast("İşaret kaldırıldı"); }
    else { S.done[id] = today(); bump("l"); toast("Harika, ders tamamlandı"); }
    save(); viewLesson(id);
  };
  mountWidgets(main);
  if (sec !== null && sec !== undefined) setTimeout(() => { const el = $("#s" + sec); if (el) el.scrollIntoView(); }, 60);
}

/* ---------- TEST ---------- */
let T = null;
function pickQuestions(mods, n, filter){
  let pool = Q.filter(q => mods.includes(q.m));
  if (filter === "yanlis") pool = pool.filter(q => S.q[q.id] && S.q[q.id].last === "w");
  if (filter === "yeni") pool = pool.filter(q => !S.q[q.id]);
  const pr = q => { const r = S.q[q.id]; if (!r) return 1; if (r.last === "w") return 0; return 2 + Math.min(r.c, 3); };
  pool = shuffle(pool).sort((a, b) => (pr(a) + Math.random() * 1.5) - (pr(b) + Math.random() * 1.5));
  return pool.slice(0, n === "all" ? pool.length : n);
}
function viewTestSetup(params){
  if (params.get("hizli")) { startTest(L.map(l => l.id), 10, "pratik", "akilli"); return; }
  const pre = params.get("m");
  let mods = pre ? [pre] : L.map(l => l.id), count = 20, mode = "pratik", filter = "akilli";
  const wrongN = Object.values(S.q).filter(r => r.last === "w").length;
  main.innerHTML = `<div class="view narrow"><h1>Test çöz</h1><p class="muted">Konuları ve modu seç. Pratik modda her sorudan sonra açıklamayı görürsün; sınav modunda süre işler ve sonuçlar sonda açıklanır.</p>
  <div class="panel" style="margin-top:16px">
    <h3>Konular</h3><div class="chips" id="mchips"><button class="chip" data-all>Tümü</button>${L.map((l, i) => `<button class="chip" data-m="${l.id}">${i + 1}. ${esc(l.title)}</button>`).join("")}</div>
    <h3 style="margin-top:20px">Soru sayısı</h3><div class="chips" id="nchips">${[10, 20, 40, 60, "all"].map(n => `<button class="chip" data-n="${n}">${n === "all" ? "Hepsi" : n}</button>`).join("")}</div>
    <h3 style="margin-top:20px">Hangi sorular?</h3><div class="chips" id="fchips">
      <button class="chip" data-f="akilli">Akıllı karışım</button><button class="chip" data-f="yeni">Hiç çözmediklerim</button><button class="chip" data-f="yanlis">Yanlış yaptıklarım (${wrongN})</button></div>
    <h3 style="margin-top:20px">Mod</h3><div class="chips" id="dchips"><button class="chip" data-d="pratik">Pratik: anında açıklama</button><button class="chip" data-d="sinav">Sınav provası: süreli</button></div>
    <p class="muted" id="avail" style="margin-top:18px"></p>
    <button class="btn pri" id="go">Teste başla</button>
  </div></div>`;
  const paint = () => {
    $$("#mchips [data-m]").forEach(b => b.classList.toggle("on", mods.includes(b.dataset.m)));
    $("#mchips [data-all]").classList.toggle("on", mods.length === L.length);
    $$("#nchips .chip").forEach(b => b.classList.toggle("on", String(count) === b.dataset.n));
    $$("#fchips .chip").forEach(b => b.classList.toggle("on", filter === b.dataset.f));
    $$("#dchips .chip").forEach(b => b.classList.toggle("on", mode === b.dataset.d));
    const n = pickQuestions(mods, "all", filter).length;
    $("#avail").textContent = `Bu seçimde ${n} soru var.` + (mode === "sinav" ? ` Süre: soru başına 75 saniye.` : "");
    $("#go").disabled = n === 0 || mods.length === 0;
  };
  $("#mchips").onclick = e => { const b = e.target.closest(".chip"); if (!b) return;
    if (b.hasAttribute("data-all")) mods = mods.length === L.length ? [] : L.map(l => l.id);
    else { const m = b.dataset.m; mods = mods.length === L.length ? [m] : mods.includes(m) ? mods.filter(x => x !== m) : mods.concat(m); }
    paint(); };
  $("#nchips").onclick = e => { const b = e.target.closest(".chip"); if (b) { count = b.dataset.n === "all" ? "all" : +b.dataset.n; paint(); } };
  $("#fchips").onclick = e => { const b = e.target.closest(".chip"); if (b) { filter = b.dataset.f; paint(); } };
  $("#dchips").onclick = e => { const b = e.target.closest(".chip"); if (b) { mode = b.dataset.d; paint(); } };
  $("#go").onclick = () => startTest(mods, count, mode, filter);
  paint();
}
function startTest(mods, n, mode, filter){
  const qs = pickQuestions(mods, n, filter).map(q => { const order = shuffle(q.o.map((_, i) => i)); return {q, order, pick: null}; });
  if (!qs.length) { toast("Bu seçimde soru yok"); return; }
  T = {qs, i: 0, mode, start: Date.now(), limit: qs.length * 75, finished: false};
  renderQ();
  if (mode === "sinav") {
    const iv = setInterval(() => { const el = $("#timer"); if (!T || T.finished) { clearInterval(iv); return; }
      const left = T.limit - Math.floor((Date.now() - T.start) / 1000);
      if (left <= 0) { clearInterval(iv); finishTest(); return; }
      if (el) { el.textContent = Math.floor(left / 60) + ":" + pad(left % 60); el.classList.toggle("low", left < 120); } }, 1000);
    cleanup = () => clearInterval(iv);
  }
  const onKey = e => {
    if (!T || T.finished || !$(".qcard")) return;
    if (e.target.tagName === "INPUT") return;
    const k = e.key.toLowerCase(); const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (idx >= 0 && idx < T.qs[T.i].order.length) { choose(idx); e.preventDefault(); }
    else if (e.key === "Enter" || e.key === "ArrowRight") { const nb = $("#nextQ"); if (nb && !nb.disabled) nb.click(); }
    else if (e.key === "ArrowLeft") { const pb = $("#prevQ"); if (pb) pb.click(); }
  };
  document.addEventListener("keydown", onKey);
  const prevC = cleanup; cleanup = () => { if (prevC) prevC(); document.removeEventListener("keydown", onKey); };
}
function choose(idx){
  const it = T.qs[T.i];
  if (T.mode === "pratik" && it.pick !== null) return;
  it.pick = idx;
  if (T.mode === "pratik") record(it);
  renderQ();
}
function record(it){
  const ok = it.order[it.pick] === it.q.a;
  const r = S.q[it.q.id] || {c: 0, w: 0};
  ok ? r.c++ : r.w++; r.last = ok ? "c" : "w"; S.q[it.q.id] = r; bump("q"); save();
}
function renderQ(){
  const it = T.qs[T.i], q = it.q, n = T.qs.length, revealed = T.mode === "pratik" && it.pick !== null;
  const letters = "ABCD";
  main.innerHTML = `<div class="view narrow"><div class="qcard">
    <div class="qtop"><span>Soru ${T.i + 1} / ${n}<span class="muted" style="margin-left:12px">${modNo(q.m)}. ${esc(LMAP[q.m].title)}</span></span>${T.mode === "sinav" ? `<span class="timer" id="timer"></span>` : `<span>Doğru: ${T.qs.filter(x => x.pick !== null && x.order[x.pick] === x.q.a).length}</span>`}</div>
    <div class="qprog"><i style="width:${(T.i + (it.pick !== null ? 1 : 0)) / n * 100}%"></i></div>
    <div class="qtext">${esc(q.q)}</div>
    <div class="opts">${it.order.map((oi, k) => { let cls = "";
      if (revealed) { if (oi === q.a) cls = "ok"; else if (k === it.pick) cls = "no"; }
      else if (k === it.pick) cls = "sel";
      return `<button class="opt ${cls}" data-k="${k}" ${revealed ? "disabled" : ""}><span class="k">${letters[k]}</span><span>${esc(q.o[oi])}</span></button>`; }).join("")}</div>
    ${revealed ? `<div class="expl"><b>${it.order[it.pick] === q.a ? "Doğru." : "Yanlış. Doğru cevap: " + esc(q.o[q.a])}</b><br>${esc(q.e)} <a href="#/ders/${q.m}">Dersi aç</a></div>` : ""}
    <div class="qnav">
      ${T.mode === "sinav" ? `<button class="btn ghost" id="prevQ" ${T.i === 0 ? "disabled" : ""}>Önceki</button>` : `<span class="kbd"><kbd>1</kbd>–<kbd>4</kbd> seç, <kbd>Enter</kbd> sonraki</span>`}
      <div class="row">${T.mode === "sinav" ? `<button class="btn" id="finQ">Sınavı bitir</button>` : `<button class="btn ghost" id="finQ">Bitir</button>`}
      <button class="btn pri" id="nextQ" ${T.mode === "pratik" && !revealed ? "disabled" : ""}>${T.i === n - 1 ? "Sonuçları gör" : "Sonraki"}</button></div>
    </div>
    ${T.mode === "sinav" ? `<div class="qgrid">${T.qs.map((x, k) => `<button data-g="${k}" class="${x.pick !== null ? "a" : ""} ${k === T.i ? "cur" : ""}">${k + 1}</button>`).join("")}</div>` : ""}
  </div></div>`;
  $$(".opt", main).forEach(b => b.onclick = () => choose(+b.dataset.k));
  $("#nextQ").onclick = () => { if (T.i < n - 1) { T.i++; renderQ(); } else finishTest(); };
  const pb = $("#prevQ"); if (pb) pb.onclick = () => { if (T.i > 0) { T.i--; renderQ(); } };
  $("#finQ").onclick = () => { const un = T.qs.filter(x => x.pick === null).length; if (T.mode === "sinav" && un && !confirmInline(un)) return; finishTest(); };
  $$(".qgrid button", main).forEach(b => b.onclick = () => { T.i = +b.dataset.g; renderQ(); });
  if (T.mode === "sinav") { const el = $("#timer"); const left = T.limit - Math.floor((Date.now() - T.start) / 1000); if (el) el.textContent = Math.floor(left / 60) + ":" + pad(Math.max(0, left % 60)); }
}
function confirmInline(un){
  const b = $("#finQ");
  if (b.dataset.sure) return true;
  b.dataset.sure = "1"; b.textContent = `${un} boş soru var, yine de bitir`; b.classList.add("amber");
  return false;
}
function finishTest(){
  if (!T || T.finished) return;
  T.finished = true;
  if (T.mode === "sinav") T.qs.forEach(it => { if (it.pick !== null) record(it); });
  const n = T.qs.length, ok = T.qs.filter(x => x.pick !== null && x.order[x.pick] === x.q.a).length;
  const pct = Math.round(ok / n * 100);
  S.results.push({d: today(), n, ok, mode: T.mode}); S.results = S.results.slice(-60); save();
  const byM = {}; T.qs.forEach(x => { const m = x.q.m; byM[m] = byM[m] || {n: 0, ok: 0}; byM[m].n++; if (x.pick !== null && x.order[x.pick] === x.q.a) byM[m].ok++; });
  const wrong = T.qs.filter(x => !(x.pick !== null && x.order[x.pick] === x.q.a));
  const C2 = 2 * Math.PI * 62;
  const msg = pct >= 80 ? "Sınav seviyesindesin." : pct >= 65 ? "İyi gidiyor; yanlışları bir tur daha çöz." : "Bu konuları dersten tekrar okuyup yeniden dene.";
  main.innerHTML = `<div class="view narrow"><div class="panel score">
    <svg class="ring" viewBox="0 0 150 150"><circle class="bg" cx="75" cy="75" r="62"/><circle class="fg" cx="75" cy="75" r="62" stroke-dasharray="${C2}" stroke-dashoffset="${C2}" transform="rotate(-90 75 75)" style="stroke:${pct >= 65 ? "var(--go)" : "var(--stop)"}"/><text x="75" y="86" text-anchor="middle">${pct}%</text></svg>
    <div><h1>${ok} / ${n} doğru</h1><p class="muted">${msg}${T.mode === "sinav" ? " Süre: " + Math.round((Date.now() - T.start) / 60000) + " dk." : ""}</p>
    <div class="row"><a class="btn pri" href="#/test">Yeni test</a>${wrong.length ? `<button class="btn" id="redo">Yanlışları tekrar çöz (${wrong.length})</button>` : ""}<a class="btn ghost" href="#/">Panel</a></div></div></div>
    <h2 style="margin-top:24px">Konulara göre</h2><div class="panel"><table class="t">${Object.entries(byM).map(([m, v]) => `<tr><td><a href="#/ders/${m}">${modNo(m)}. ${esc(LMAP[m].title)}</a></td><td style="text-align:right">${v.ok}/${v.n}</td></tr>`).join("")}</table></div>
    ${wrong.length ? `<h2 style="margin-top:24px">Yanlış veya boş bıraktıkların</h2>${wrong.map(x => `<div class="panel" style="margin-bottom:10px"><b>${esc(x.q.q)}</b><p style="margin:.4em 0 0">${x.pick !== null ? `<span style="color:var(--stop)">Senin cevabın: ${esc(x.q.o[x.order[x.pick]])}</span><br>` : ""}<span style="color:var(--go)">Doğru: ${esc(x.q.o[x.q.a])}</span></p><p class="muted" style="margin:.4em 0 0">${esc(x.q.e)}</p></div>`).join("")}` : ""}
  </div>`;
  requestAnimationFrame(() => setTimeout(() => { const fg = $(".ring .fg"); if (fg) fg.style.strokeDashoffset = C2 * (1 - pct / 100); }, 50));
  const rb = $("#redo"); if (rb) rb.onclick = () => { const ids = new Set(wrong.map(x => x.q.id)); const qs = Q.filter(q => ids.has(q.id)).map(q => ({q, order: shuffle(q.o.map((_, i) => i)), pick: null})); T = {qs: shuffle(qs), i: 0, mode: "pratik", start: Date.now(), limit: 0, finished: false}; renderQ(); };
}

/* ---------- KARTLAR ---------- */
const IV = [0, 1, 2, 4, 8, 16];
function viewCards(params){
  const m = params.get("m"), d = params.get("d");
  if (m || d) { startCards(m, d); return; }
  const due = dueCards().length, nw = newCards().length;
  const boxes = [1, 2, 3, 4, 5].map(b => C.filter(c => S.cards[c.id] && S.cards[c.id].b === b).length);
  main.innerHTML = `<div class="view narrow"><h1>Kartlar</h1>
  <p class="muted">Aralıklı tekrar: bildiğin kart daha seyrek, bilmediğin kart daha sık gelir. Kartı çevirmek için tıkla veya <kbd>Boşluk</kbd>; sonra kendini dürüstçe puanla.</p>
  <div class="grid2" style="margin:18px 0">
    <a class="act-card" href="#/kartlar?d=due"><span class="n">${due}</span><b>Tekrarı gelen kartlar</b><span>Bugün ve öncesine planlanmış</span></a>
    <a class="act-card" href="#/kartlar?d=new"><span class="n">${nw}</span><b>Yeni kartlar</b><span>Her turda en fazla 20</span></a>
  </div>
  <h3>Kutu durumu</h3><div class="boxes">${boxes.map((n, i) => `<div><b>${n}</b>${i + 1}. kutu<br><small>${IV[i + 1]} gün</small></div>`).join("")}</div>
  <h3 style="margin-top:22px">Konuya göre çalış</h3><div class="chips">${L.map((l, i) => `<a class="chip" href="#/kartlar?m=${l.id}">${i + 1}. ${esc(l.title)} (${C.filter(c => c.m === l.id).length})</a>`).join("")}</div></div>`;
}
function startCards(m, d){
  let deck;
  if (m) deck = shuffle(C.filter(c => c.m === m));
  else if (d === "new") deck = shuffle(newCards()).slice(0, 20);
  else { deck = shuffle(dueCards()); if (!deck.length) deck = shuffle(newCards()).slice(0, 20); }
  if (!deck.length) { main.innerHTML = `<div class="view narrow empty"><h2>Bugünlük kart kalmadı</h2><p>Yarın tekrar gelecekler. İstersen bir konunun tüm kartlarını çalışabilirsin.</p><a class="btn pri" href="#/kartlar">Kartlara dön</a></div>`; return; }
  let i = 0, flipped = false, seen = 0, known = 0;
  const render = () => {
    if (i >= deck.length) { main.innerHTML = `<div class="view narrow empty"><h2>Tur bitti</h2><p>${seen} kart çalıştın, ${known} tanesini bildin.</p><div class="row" style="justify-content:center"><a class="btn pri" href="#/kartlar">Kartlara dön</a><a class="btn" href="#/test?hizli=1">Hızlı test</a></div></div>`; return; }
    const c = deck[i];
    main.innerHTML = `<div class="view narrow"><div class="qtop"><span>${i + 1} / ${deck.length}</span><a href="#/kartlar">Turu bitir</a></div>
      <div class="fc"><div class="card ${flipped ? "flip" : ""}" id="card" tabindex="0" role="button" aria-label="Kartı çevir"><div class="in">
        <div class="face front"><span class="tag">${modNo(c.m)}. ${esc(LMAP[c.m].title)}</span><b>${esc(c.f)}</b><small style="margin-top:14px">çevirmek için tıkla</small></div>
        <div class="face back"><span class="tag">${esc(c.f)}</span>${esc(c.b)}</div></div></div>
      <div class="rate" ${flipped ? "" : "hidden"}>
        <button class="btn" data-r="0" style="border-color:var(--stop)">Bilmiyordum (1)</button>
        <button class="btn" data-r="1" style="border-color:var(--amber)">Zorlandım (2)</button>
        <button class="btn" data-r="2" style="border-color:var(--go)">Biliyordum (3)</button></div></div>
      <p class="kbd" style="text-align:center;margin-top:14px"><kbd>Boşluk</kbd> çevir, <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> puanla</p></div>`;
    $("#card").onclick = () => { flipped = !flipped; $("#card").classList.toggle("flip", flipped); $(".rate").hidden = !flipped; };
    $$(".rate .btn").forEach(b => b.onclick = () => rate(+b.dataset.r));
  };
  const rate = r => {
    const c = deck[i], st = S.cards[c.id] || {b: 1, due: today()};
    if (r === 0) { st.b = 1; st.due = today(); deck.push(c); }
    else if (r === 1) { st.b = Math.max(1, st.b); st.due = addDays(today(), 1); }
    else { st.b = Math.min(5, st.b + 1); st.due = addDays(today(), IV[st.b]); known++; }
    S.cards[c.id] = st; bump("c"); save(); seen++; i++; flipped = false; render();
  };
  const onKey = e => { if (!$("#card")) return;
    if (e.key === " ") { e.preventDefault(); $("#card").click(); }
    else if (flipped && "123".includes(e.key)) rate(+e.key - 1); };
  document.addEventListener("keydown", onKey);
  cleanup = () => document.removeEventListener("keydown", onKey);
  render();
}

/* ---------- HESAP ANTRENMANI ---------- */
const R = (a, b, s=1) => a + s * Math.floor(Math.random() * ((b - a) / s + 1));
const pick = a => a[Math.floor(Math.random() * a.length)];
function parseNum(v){
  v = String(v).trim().replace(/\s|TL|₺|%|gün|saat/gi, "");
  if (!v) return NaN;
  if (v.includes(",")) v = v.replace(/\./g, "").replace(",", ".");
  else if ((v.match(/\./g) || []).length > 1) v = v.replace(/\./g, "");
  else if (/^\d{1,3}\.\d{3}$/.test(v) && !v.startsWith("0.")) v = v.replace(".", "");
  return parseFloat(v);
}
const GEN = {
  evm(){
    const months = pick([8, 10, 12, 20, 24]), m = R(2, months - 2), bac = R(5, 50) * 100000;
    const plannedPct = Math.round(m / months * 100), donePct = Math.max(5, Math.min(95, plannedPct + R(-15, 10)));
    const pv = bac * m / months, ev = bac * donePct / 100, ac = Math.round(ev * (R(80, 130) / 100) / 10000) * 10000;
    const cpi = ev / ac, spi = ev / pv, eac = bac / cpi;
    const asks = [
      ["PV", pv, "PV = BAC × (geçen süre / toplam süre) = " + nf(bac) + " × " + m + "/" + months + " = " + nf(pv), 0],
      ["EV", ev, "EV = BAC × tamamlanan % = " + nf(bac) + " × %" + donePct + " = " + nf(ev), 0],
      ["CV", ev - ac, "CV = EV − AC = " + nf(ev) + " − " + nf(ac) + " = " + nf(ev - ac), 0],
      ["SV", ev - pv, "SV = EV − PV = " + nf(ev) + " − " + nf(pv) + " = " + nf(ev - pv), 0],
      ["CPI", cpi, "CPI = EV / AC = " + nf(ev) + " / " + nf(ac) + " = " + nf(cpi, 2), 2],
      ["SPI", spi, "SPI = EV / PV = " + nf(ev) + " / " + nf(pv) + " = " + nf(spi, 2), 2],
      ["EAC (performans böyle devam ederse)", eac, "EAC = BAC / CPI = " + nf(bac) + " / " + nf(cpi, 3) + " = " + nf(eac), 0],
      ["ETC (performans böyle devam ederse)", eac - ac, "EAC = BAC / CPI = " + nf(eac) + "; ETC = EAC − AC = " + nf(eac - ac), 0],
      ["VAC (performans böyle devam ederse)", bac - eac, "EAC = BAC/CPI = " + nf(eac) + "; VAC = BAC − EAC = " + nf(bac - eac), 0],
      ["TCPI (BAC'ye göre)", (bac - ev) / (bac - ac), "TCPI = (BAC − EV) / (BAC − AC) = " + nf(bac - ev) + " / " + nf(bac - ac) + " = " + nf((bac - ev) / (bac - ac), 2), 2]];
    const a = pick(asks);
    return {t: "Kazanılmış değer", q: `${months} aylık projenin bütçesi (BAC) ${nf(bac)} TL. ${m}. ayın sonundayız; plan doğrusal. İşin %${donePct}'i tamamlandı ve bugüne kadar ${nf(ac)} TL harcandı. <b>${a[0]}</b> kaçtır?`, ans: a[1], sol: a[2], dec: a[3]};
  },
  pert(){
    const o = R(2, 8), mm = o + R(1, 6), p = mm + R(2, 12);
    const a = pick([["PERT (beta) tahmini", (o + 4 * mm + p) / 6, `(tO + 4·tM + tP) / 6 = (${o} + 4×${mm} + ${p}) / 6 = ${nf((o + 4 * mm + p) / 6, 2)}`], ["üçgen dağılım tahmini", (o + mm + p) / 3, `(tO + tM + tP) / 3 = (${o} + ${mm} + ${p}) / 3 = ${nf((o + mm + p) / 3, 2)}`], ["PERT standart sapması", (p - o) / 6, `(tP − tO) / 6 = (${p} − ${o}) / 6 = ${nf((p - o) / 6, 2)}`]]);
    return {t: "Üç nokta tahmini", q: `Bir aktivite için iyimser ${o}, en olası ${mm}, kötümser ${p} gün tahmin edildi. <b>${a[0]}</b> kaç gündür?`, ans: a[1], sol: a[2], dec: 2};
  },
  kanal(){
    const n = R(3, 14), type = R(0, 2);
    if (type === 0) return {t: "İletişim kanalı", q: `Proje yöneticisi dahil ${n} kişilik ekipte kaç iletişim kanalı vardır?`, ans: n * (n - 1) / 2, sol: `n(n−1)/2 = ${n}×${n - 1}/2 = ${n * (n - 1) / 2}`, dec: 0};
    if (type === 1) return {t: "İletişim kanalı", q: `Proje yöneticisi <b>hariç</b> ${n} kişilik ekip var. Kaç iletişim kanalı vardır?`, ans: (n + 1) * n / 2, sol: `PY'yi ekle: n = ${n + 1}. ${n + 1}×${n}/2 = ${(n + 1) * n / 2}`, dec: 0};
    const k = R(1, 4), a = n * (n - 1) / 2, b = (n + k) * (n + k - 1) / 2;
    return {t: "İletişim kanalı", q: `PY dahil ${n} kişilik ekibe ${k} kişi katılıyor. İletişim kanalı sayısı <b>kaç artar</b>?`, ans: b - a, sol: `Önce ${a}, sonra ${n + k}×${n + k - 1}/2 = ${b}. Artış = ${b - a}`, dec: 0};
  },
  emv(){
    const k = R(2, 3), rs = [];
    for (let i = 0; i < k; i++) { const opp = Math.random() < .3; rs.push({p: R(1, 9) * 10, v: R(2, 50) * 10000 * (opp ? 1 : -1)}); }
    const tot = rs.reduce((s, r) => s + r.p / 100 * r.v, 0);
    return {t: "Beklenen parasal değer", q: `Riskler: ${rs.map(r => `${r.v < 0 ? "tehdit" : "fırsat"} %${r.p} olasılık, ${r.v < 0 ? "−" : "+"}${nf(Math.abs(r.v))} TL etki`).join("; ")}. Toplam <b>EMV</b> kaç TL'dir? (Tehdit negatif)`, ans: tot, sol: rs.map(r => `${r.p / 100} × ${nf(r.v)} = ${nf(r.p / 100 * r.v)}`).join(" ; ") + ` → toplam ${nf(tot)}`, dec: 0};
  },
  bolluk(){
    const a = R(2, 8), b = R(2, 10), c = R(2, 12), d = R(2, 8);
    const p1 = a + b + d, p2 = a + c + d, cp = Math.max(p1, p2);
    const ask = pick(["cp", "fb", "fc"]);
    const base = `Ağ: A(${a}) → B(${b}) → D(${d}) ve A(${a}) → C(${c}) → D(${d}). Sayılar gün.`;
    if (ask === "cp") return {t: "Kritik yol", q: base + ` Proje süresi (kritik yol uzunluğu) kaç gündür?`, ans: cp, sol: `A-B-D = ${p1}, A-C-D = ${p2}; en uzun = ${cp}`, dec: 0};
    const isB = ask === "fb", fl = isB ? cp - p1 : cp - p2;
    return {t: "Bolluk", q: base + ` <b>${isB ? "B" : "C"}</b> aktivitesinin toplam bolluğu kaç gündür?`, ans: fl, sol: `A-B-D = ${p1}, A-C-D = ${p2}. Kritik ${cp}. ${isB ? "B" : "C"} sadece kendi yolunda: ${cp} − ${isB ? p1 : p2} = ${fl}`, dec: 0};
  },
  butce(){
    const act = R(20, 200) * 1000, cr = Math.round(act * R(5, 15) / 100 / 1000) * 1000, mr = Math.round(act * R(3, 10) / 100 / 1000) * 1000;
    const isB = Math.random() < .5;
    return {t: "Bütçe ve yedekler", q: `Aktivite maliyetleri toplamı ${nf(act)} TL, beklenmedik durum yedeği ${nf(cr)} TL, yönetim yedeği ${nf(mr)} TL. <b>${isB ? "Proje bütçesi" : "Maliyet temel çizgisi"}</b> kaç TL'dir?`, ans: isB ? act + cr + mr : act + cr, sol: isB ? `Bütçe = ${nf(act)} + ${nf(cr)} + ${nf(mr)} = ${nf(act + cr + mr)}` : `Temel çizgi = aktivite + beklenmedik durum = ${nf(act + cr)} (yönetim yedeği dahil değil)`, dec: 0};
  }
};
const GENNAMES = {evm: "Kazanılmış değer", pert: "PERT", kanal: "İletişim kanalı", emv: "EMV", bolluk: "Kritik yol / bolluk", butce: "Bütçe"};
function viewCalc(){
  let kinds = Object.keys(GEN), cur = null, streak = 0, tot = 0, okc = 0;
  main.innerHTML = `<div class="view narrow"><h1>Hesap antrenmanı</h1><p class="muted">Her seferinde yeni rakamlarla sınırsız soru. Cevabı Türkçe yazımla girebilirsin: 1.250.000 veya 0,85.</p>
    <div class="tabs" id="ctabs"><button class="on" data-t="drill">Antrenman</button><button data-t="tools">Hesap makineleri</button></div>
    <div id="drill"><div class="chips" id="kchips">${Object.keys(GEN).map(k => `<button class="chip on" data-k="${k}">${GENNAMES[k]}</button>`).join("")}</div>
      <div class="qcard" style="margin-top:14px"><div class="qtop"><span id="ctype"></span><span id="cscore"></span></div><div class="qtext" id="cq" style="font-size:1.12rem"></div>
      <form id="cform" class="row"><input id="cin" type="text" inputmode="decimal" autocomplete="off" placeholder="Cevabın" style="flex:1;min-width:160px;font-size:1.1rem;padding:10px 12px"><button class="btn pri">Kontrol et</button><button type="button" class="btn ghost" id="cskip">Çözümü göster</button></form>
      <div id="cout"></div></div></div>
    <div id="tools" hidden><div data-w="evm"></div><div data-w="pert"></div><div data-w="channels"></div><div data-w="emv"></div><div data-w="cpm"></div></div></div>`;
  const next = () => { cur = GEN[pick(kinds)](); $("#ctype").textContent = cur.t; $("#cq").innerHTML = cur.q; $("#cin").value = ""; $("#cout").innerHTML = ""; $("#cin").focus(); };
  const show = (ok, given) => {
    $("#cout").innerHTML = `<div class="expl" style="border-color:${ok ? "var(--go)" : "var(--stop)"}"><b>${ok ? "Doğru." : given ? "Olmadı." : "Çözüm"}</b> Cevap: <b>${nf(cur.ans, cur.dec)}</b><br>${cur.sol}<div style="margin-top:10px"><button class="btn pri sm" id="cnext">Yeni soru</button></div></div>`;
    $("#cnext").onclick = next; $("#cscore").textContent = `${okc}/${tot} doğru, seri ${streak}`;
  };
  $("#cform").onsubmit = e => { e.preventDefault(); if ($("#cout").innerHTML) { next(); return; }
    const v = parseNum($("#cin").value); if (isNaN(v)) { toast("Sayı gir"); return; }
    const tol = cur.dec >= 2 ? 0.015 : Math.max(1, Math.abs(cur.ans) * 0.005);
    const ok = Math.abs(v - cur.ans) <= tol; tot++; if (ok) { okc++; streak++; } else streak = 0; bump("h"); save(); show(ok, true); };
  $("#cskip").onclick = () => { tot++; streak = 0; show(false, false); };
  $("#kchips").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; const k = b.dataset.k;
    kinds = kinds.includes(k) ? (kinds.length > 1 ? kinds.filter(x => x !== k) : kinds) : kinds.concat(k);
    $$("#kchips .chip").forEach(c => c.classList.toggle("on", kinds.includes(c.dataset.k))); next(); };
  $("#ctabs").onclick = e => { const b = e.target.closest("button"); if (!b) return; $$("#ctabs button").forEach(x => x.classList.toggle("on", x === b));
    $("#drill").hidden = b.dataset.t !== "drill"; $("#tools").hidden = b.dataset.t !== "tools";
    if (b.dataset.t === "tools" && !$("#tools").dataset.m) { $("#tools").dataset.m = 1; mountWidgets($("#tools")); } };
  next();
}

/* ---------- FORMÜL KAĞIDI ---------- */
function viewFormulas(){
  const F = (t, f, n) => `<h3>${t}</h3><div class="formula">${f}</div>${n ? `<p class="muted">${n}</p>` : ""}`;
  main.innerHTML = `<div class="view narrow formsheet"><div class="row" style="justify-content:space-between"><h1>Formül kağıdı</h1><button class="btn noprint" onclick="window.print()">Yazdır</button></div>
  <p class="muted">Sınavdan önceki akşam bir kez yazdırıp üstünden geç. Mor işaretli olanlar ders notunda yok, PMI standardından eklendi.</p>
  <div class="panel">
  ${F("Kazanılmış değer: temel", "PV = BAC × planlanan %<br>EV = BAC × tamamlanan %<br>AC = verilir", "PV ve EV bütçe rakamıyla hesaplanır.")}
  ${F("Varyanslar ve indeksler", "CV = EV − AC &nbsp;&nbsp; SV = EV − PV<br>CPI = EV / AC &nbsp;&nbsp; SPI = EV / PV", "Negatif veya 1'den küçük: kötü. Hepsi EV ile başlar.")}
  ${F("Tamamlanmadaki tahmin (EAC)", "Tipik: EAC = BAC / CPI<br>Tek seferlik aşım: EAC = AC + (BAC − EV)<br>Yeni tahmin: EAC = AC + aşağıdan yukarı ETC<br>CPI ve SPI birlikte: EAC = AC + (BAC − EV) / (CPI × SPI)")}
  ${F("TCPI", "BAC hedefse: (BAC − EV) / (BAC − AC)<br>EAC hedefse: (BAC − EV) / (EAC − AC)", "&gt; 1 zor, = 1 aynen devam, &lt; 1 kolay.")}
  ${F('ETC ve VAC <span class="badge">PMI ek</span>', "ETC = EAC − AC<br>VAC = BAC − EAC")}
  ${F("Üç nokta tahmini", "Üçgen: (tO + tM + tP) / 3<br>PERT: (tO + 4tM + tP) / 6<br>σ = (tP − tO) / 6")}
  ${F("Kritik yol (ders kuralı, 1. gün)", "EF = ES + süre − 1 &nbsp;&nbsp; Ardıl ES = öncül EF + 1<br>LS = LF − süre + 1 &nbsp;&nbsp; Toplam bolluk = LS − ES<br>Serbest bolluk = ardılın en erken ES'i − EF − 1")}
  ${F("İletişim kanalı", "n (n − 1) / 2", "n = PY dahil kişi sayısı.")}
  ${F("Beklenen parasal değer", "EMV = Σ (olasılık × etki)", "Tehdit negatif, fırsat pozitif.")}
  ${F("Bütçe katmanları", "Maliyet temel çizgisi = aktivite maliyetleri + beklenmedik durum yedeği<br>Bütçe = maliyet temel çizgisi + yönetim yedeği")}
  ${F("Temel çizgiler", "Kapsam = kapsam bildirimi + WBS + WBS sözlüğü (onaylı)<br>Kapsam + zaman + maliyet temel çizgileri = performans ölçüm temel çizgisi")}
  ${F("Efor ve süre", "Süre = efor / kaynak sayısı", "Azalan getiriler kanunu nedeniyle her zaman doğrusal değildir.")}
  ${F("Puanlama tablosu", "Ağırlıklı puan = ağırlık % × puan; toplam en yüksek olan seçilir")}
  ${F("Finansal seçim", "NPV, IRR, ROI, ROA, ROACE, fayda/maliyet: büyük olan<br>Geri ödeme süresi: kısa olan")}
  </div></div>`;
}

/* ---------- ARAMA ---------- */
function viewSearch(q){
  $("#searchInput").value = q;
  const norm = s => s.toLocaleLowerCase("tr-TR");
  const nq = norm(q), strip = h => h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const mark = (t) => { const i = norm(t).indexOf(nq); if (i < 0) return esc(t.slice(0, 160)); const a = Math.max(0, i - 60); return (a ? "…" : "") + esc(t.slice(a, i)) + "<mark>" + esc(t.slice(i, i + q.length)) + "</mark>" + esc(t.slice(i + q.length, i + q.length + 100)) + "…"; };
  const res = [];
  L.forEach(l => l.sections.forEach((s, k) => { const t = strip(s.html); if (norm(s.h + " " + t).includes(nq)) res.push(`<a href="#/ders/${l.id}?s=${k}"><b>${esc(s.h)}</b><small>${modNo(l.id)}. ${esc(l.title)}</small><span class="muted">${mark(t)}</span></a>`); }));
  const cr = C.filter(c => norm(c.f + " " + c.b).includes(nq)).slice(0, 12).map(c => `<a href="#/kartlar?m=${c.m}"><b>${esc(c.f)}</b><span class="muted">${esc(c.b)}</span></a>`);
  main.innerHTML = `<div class="view narrow srch-res"><h1>"${esc(q)}" için sonuçlar</h1>
  ${res.length ? `<h3>Derslerde (${res.length})</h3>` + res.join("") : `<p class="muted">Derslerde eşleşme yok. Kısaltmayı veya Türkçe karşılığını dene (örneğin "bolluk", "yedek").</p>`}
  ${cr.length ? `<h3 style="margin-top:20px">Kartlarda</h3>` + cr.join("") : ""}</div>`;
}

/* ---------- AYARLAR ---------- */
function viewSettings(){
  const days = Object.keys(S.days).length;
  main.innerHTML = `<div class="view narrow"><h1>Ayarlar</h1>
  <div class="panel"><h3>Takvim</h3><div class="row"><label>Başlangıç <input type="date" id="sd" value="${S.start}"></label><label>Sınav günü <input type="date" id="ed" value="${S.exam}"></label><button class="btn pri" id="saveD">Kaydet</button></div>
  <p class="muted">Panel grafiğindeki plan çizgisi, sınavdan önceki son haftayı tekrar için boş bırakır.</p></div>
  <div class="panel" style="margin-top:14px"><h3>Görünüm</h3><div class="chips" id="th">${[["auto", "Sistemle aynı"], ["light", "Açık"], ["dark", "Koyu"]].map(([k, t]) => `<button class="chip ${S.theme === k ? "on" : ""}" data-t="${k}">${t}</button>`).join("")}</div></div>
  <div class="panel" style="margin-top:14px"><h3>İlerleme yedeği</h3><p class="muted">İlerlemen bu tarayıcıda saklanır (${days} çalışma günü kaydı). Başka bir tarayıcıya veya bilgisayara taşımak için dışa aktar.</p>
  <div class="row"><button class="btn" id="exp">Dışa aktar (.json)</button><label class="btn" style="flex-direction:row">İçe aktar<input type="file" id="imp" accept=".json" hidden></label><button class="btn ghost" id="rst" style="color:var(--stop)">Tüm ilerlemeyi sil</button></div></div>
  <div class="panel" style="margin-top:14px"><h3>Kaynaklar</h3><p class="muted">İçerik, kursun 2026 PMBOK 8 ders notlarından hazırlandı. "PMI ek" etiketli bilgiler PMI'ın yayınlarından ve standart formüllerinden eklendi. Yeni PMP sınavı için PMI'ın <a href="https://www.pmi.org/certifications/project-management-pmp/new-exam" target="_blank" rel="noopener">yeni sınav sayfasına</a> bak.</p></div></div>`;
  $("#saveD").onclick = () => { const s = $("#sd").value, e = $("#ed").value; if (!s || !e || e <= s) { toast("Sınav günü başlangıçtan sonra olmalı"); return; } S.start = s; S.exam = e; save(); toast("Takvim kaydedildi"); };
  $("#th").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; S.theme = b.dataset.t; save(); applyTheme(); viewSettings(); };
  $("#exp").onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 1)], {type: "application/json"})); a.download = "sinav-projem-" + today() + ".json"; a.click(); };
  $("#imp").onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { try { S = Object.assign(fresh(), JSON.parse(t)); save(); applyTheme(); toast("İlerleme yüklendi"); viewSettings(); } catch(err) { toast("Dosya okunamadı"); } }); };
  $("#rst").onclick = e => { const b = e.currentTarget; if (!b.dataset.sure) { b.dataset.sure = 1; b.textContent = "Emin misin? Tekrar bas"; return; } S = fresh(); save(); applyTheme(); toast("İlerleme sıfırlandı"); viewSettings(); };
}

route();
})();
