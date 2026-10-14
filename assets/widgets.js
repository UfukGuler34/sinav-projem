/* Etkileşimli ders bileşenleri */
(function(){
"use strict";
const W = window.W = {};
const $ = (s, r) => r.querySelector(s), $$ = (s, r) => Array.from(r.querySelectorAll(s));
const nf = (n, d=0) => Number(n).toLocaleString("tr-TR", {maximumFractionDigits: d});
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const title = (el, t) => { el.insertAdjacentHTML("afterbegin", `<div class="wt">${t}</div>`); };

/* sıralama oyunu */
function orderGame(el, t, items, done){
  title(el, t);
  el.insertAdjacentHTML("beforeend", `<p class="muted" style="margin:0 0 8px">Doğru sırayla tıkla.</p><div class="slots">${items.map(() => "<span></span>").join("")}</div><div class="ordgame">${shuffle(items).map(x => `<button>${esc(x)}</button>`).join("")}</div><div class="out" hidden></div><button class="btn sm" style="margin-top:8px">Karıştır</button>`);
  let pos = 0;
  const reset = () => { pos = 0; $$(".slots span", el).forEach(s => { s.textContent = ""; s.className = ""; }); const og = $(".ordgame", el); og.innerHTML = shuffle(items).map(x => `<button>${esc(x)}</button>`).join(""); bind(); $(".out", el).hidden = true; };
  const bind = () => $$(".ordgame button", el).forEach(b => b.onclick = () => {
    if (b.classList.contains("used")) return;
    const s = $$(".slots span", el)[pos]; s.textContent = b.textContent; b.classList.add("used");
    s.className = b.textContent === items[pos] ? "ok" : "no"; pos++;
    if (pos === items.length) { const ok = $$(".slots span.ok", el).length === items.length; const o = $(".out", el); o.hidden = false; o.innerHTML = ok ? "<b>Tam isabet.</b> " + (done || "") : "Doğru sıra: " + items.map(esc).join(" → "); }
  });
  $(".btn.sm", el).onclick = reset; bind();
}
W.chain = el => orderGame(el, "Zinciri kur", ["Çıktı", "Getiri", "Fayda", "Değer"], "Teslimat değişim yaratır, değişim kazanım, kazanım değer.");
W.change = el => orderGame(el, "Değişiklik sürecini sırala", ["Değişiklik isteği", "Etki analizi", "Olası çözümler", "Kabul / red kararı", "Risk analizi ve güncellemeler", "Temel çizgi kontrolü"], "Reddedilirse: red sebebiyle birlikte değişiklik kaydı oluşturulur.");

/* tecrübe üçgeni */
W.triangle = el => {
  title(el, "PMI Tecrübe Üçgeni");
  el.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 360 300" style="max-width:380px;margin:auto">
  <circle cx="180" cy="170" r="128" fill="var(--blue-soft)" stroke="var(--line)"/>
  <polygon points="180,60 290,240 70,240" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <text x="112" y="150" transform="rotate(-58 112 150)" text-anchor="middle" font-size="13" font-weight="700" fill="var(--blue)">Çalışma yöntemleri</text>
  <text x="248" y="150" transform="rotate(58 248 150)" text-anchor="middle" font-size="13" font-weight="700" fill="var(--stop)">Yönetim becerileri</text>
  <text x="180" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="var(--violet)">İş bilgisi</text>
  <text x="180" y="190" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">Sonuçlar</text>
  <text x="180" y="30" text-anchor="middle" font-size="12" fill="var(--ink-2)">Sosyal sorumluluklar (çevreleyen halka)</text></svg>`);
};

/* prensip kartları */
W.principles = el => {
  title(el, "Kartı çevir, amacı hatırla");
  const P = [["Bütüncül yaklaşım", "Projeyi organizasyonla ilişkili bir sistem olarak gör; kararların diğer ekiplere ve uzun vadeye etkisini düşün."], ["Değere odaklanın", "Çıktıya değil faydaya bak; değer üretmeyen işleri azalt."], ["Kaliteyi entegre edin", "Kaliteyi son kontrolde değil işin içinde kur; hatayı oluşmadan önle."], ["Hesap verebilir lider", "Sorumluluk al, güven oluştur, etik davran, takımı destekle."], ["Sürdürülebilirlik", "Çevresel, sosyal ve uzun vadeli kurumsal etkiyi tüm alanlara kat."], ["Güçlendirilmiş kültür", "Karar verebilen, inisiyatif alan, öğrenen ve güvenle çalışan ekip."]];
  el.insertAdjacentHTML("beforeend", `<div class="tiles">${P.map((p, i) => `<button class="tile"><div class="in"><div class="fa"><small>Prensip ${i + 1}</small><b>${p[0]}</b></div><div class="ba">${p[1]}</div></div></button>`).join("")}</div>`);
  $$(".tile", el).forEach(t => t.onclick = () => t.classList.toggle("on"));
};

/* yaşam döngüleri */
W.lifecycles = el => {
  title(el, "Teslimatlar zamana nasıl yayılır?");
  const D = {
    "Öngörülü": {rows: [["Analiz", 0, 2], ["Tasarım", 2, 2], ["Geliştirme", 4, 3], ["Test", 7, 2], ["Teslim", 9, 1, 1]], t: "Tek büyük teslimat en sonda. Değişiklik geç ve pahalı."},
    "Artırımlı": {rows: [["Parça 1", 0, 3, 1], ["Parça 2", 3, 3, 1], ["Parça 3", 6, 3, 1], ["Parça 4", 9, 1, 1]], t: "Her parça bitince teslim edilir; değer erken başlar."},
    "Tekrarlı": {rows: [["Prototip", 0, 2], ["Geri bildirim", 2, 1], ["Prototip 2", 3, 2], ["Geri bildirim", 5, 1], ["Son ürün", 6, 4, 1]], t: "Her tur ürünü yeniden şekillendirir; teslimat sonda olabilir."},
    "Adaptif": {rows: [["Sprint 1", 0, 2, 1], ["Sprint 2", 2, 2, 1], ["Sprint 3", 4, 2, 1], ["Sprint 4", 6, 2, 1], ["Sprint 5", 8, 2, 1]], t: "Her sprint hem çalışan bir parça teslim eder hem geri bildirimle yönü düzeltir."}};
  el.insertAdjacentHTML("beforeend", `<div class="tabs">${Object.keys(D).map((k, i) => `<button class="${i ? "" : "on"}">${k}</button>`).join("")}</div><div class="gantt" style="--u:10%"></div><div class="out"></div>`);
  const show = k => { $(".gantt", el).innerHTML = D[k].rows.map(r => `<div class="gr" style="grid-template-columns:96px 1fr"><span>${r[0]}</span><div class="track"><div class="bar ${r[3] ? "crit" : ""}" style="left:${r[1] * 10}%;width:${r[2] * 10}%">${r[3] ? "teslim" : ""}</div></div></div>`).join(""); $(".out", el).textContent = D[k].t; };
  $$(".tabs button", el).forEach(b => b.onclick = () => { $$(".tabs button", el).forEach(x => x.classList.toggle("on", x === b)); show(b.textContent); });
  show("Öngörülü");
};

/* Stacey */
W.stacey = el => {
  title(el, "Projeni yerleştir");
  el.insertAdjacentHTML("beforeend", `<div class="fgrid" style="grid-template-columns:1fr 1fr"><label>Gereksinim belirsizliği <input type="range" min="0" max="100" value="20" data-a="r"></label><label>Teknik belirsizlik <input type="range" min="0" max="100" value="20" data-a="t"></label></div>
  <svg viewBox="0 0 300 200" style="max-width:420px;margin:10px auto"><defs><clipPath id="stc"><rect x="30" y="10" width="260" height="160"/></clipPath></defs>
  <g clip-path="url(#stc)"><rect x="30" y="10" width="260" height="160" fill="var(--stop-soft)"/><ellipse cx="30" cy="170" rx="325" ry="200" fill="var(--amber-soft)"/><ellipse cx="30" cy="170" rx="195" ry="120" fill="var(--blue-soft)"/><ellipse cx="30" cy="170" rx="91" ry="56" fill="var(--go-soft)"/></g>
  <rect x="30" y="10" width="260" height="160" fill="none" stroke="var(--line)"/>
  <text x="38" y="160" font-size="10" fill="var(--ink)">Basit</text><text x="110" y="150" font-size="10" fill="var(--ink)">Karışık</text><text x="170" y="110" font-size="10" fill="var(--ink)">Karmaşık</text><text x="255" y="28" font-size="10" fill="var(--ink)">Kaos</text>
  <text x="160" y="190" font-size="10" text-anchor="middle" fill="var(--ink-2)">Teknik belirsizlik →</text><text x="14" y="90" font-size="10" text-anchor="middle" fill="var(--ink-2)" transform="rotate(-90 14 90)">Gereksinim belirsizliği →</text>
  <circle r="7" fill="var(--ink)" id="dotS"/></svg><div class="out"></div>`);
  const upd = () => {
    const r = +$("[data-a=r]", el).value, t = +$("[data-a=t]", el).value, s = Math.hypot(r, t);
    $("#dotS", el).setAttribute("cx", 30 + t * 2.6); $("#dotS", el).setAttribute("cy", 170 - r * 1.6);
    const z = s < 35 ? ["Basit", "Gereksinim net, çözüm belli → <b>Öngörücü (waterfall)</b>"] : s < 75 ? ["Karışık", "Büyük ölçüde belli, uzmanlık gerekiyor → <b>Öngörücü veya hibrit</b>"] : s < 125 ? ["Karmaşık", "Öğrenerek ilerlenir → <b>Uyarlanabilir (Agile)</b>"] : ["Kaos", "Ne problem ne çözüm belli → <b>Önce krizi yönet</b>, sonra çevik/hibrit"];
    $(".out", el).innerHTML = `<b>${z[0]}:</b> ${z[1]}`;
  };
  $$("input", el).forEach(i => i.oninput = upd); upd();
};

/* scrum döngüsü */
W.scrumcycle = el => {
  title(el, "Bir sprintin akışı");
  el.insertAdjacentHTML("beforeend", `<div class="flow"><span><b>Product Backlog</b><small>öncelik sıralı</small></span><span><b>Sprint Planlama</b><small>hedef + seçim</small></span><span><b>Sprint Backlog</b></span><span><b>Sprint</b><small>her gün Daily Scrum</small></span><span><b>Increment</b><small>çalışan parça</small></span><span><b>Review</b><small>ürün, geri bildirim</small></span><span><b>Retrospective</b><small>süreç</small></span></div><p class="muted" style="margin:0">Review'dan çıkan geri bildirimler Product Backlog'a döner ve döngü yeniden başlar.</p>`);
};

/* burndown / burnup */
W.burn = el => {
  title(el, "Burndown ve burnup");
  el.insertAdjacentHTML("beforeend", `<div class="tabs"><button class="on" data-k="down">Burndown</button><button data-k="up">Burnup</button></div><svg viewBox="0 0 420 200"></svg><div class="out"></div>`);
  const act = [40, 37, 35, 30, 28, 22, 18, 13, 8, 3, 0];
  const draw = k => {
    const x = i => 40 + i * 36, y = v => 175 - v * 4;
    const pts = k === "down" ? act : act.map(v => 40 - v), plan = k === "down" ? [40, 0] : [0, 40];
    $("svg", el).innerHTML = `<line x1="40" y1="175" x2="400" y2="175" stroke="var(--line)"/><line x1="40" y1="15" x2="40" y2="175" stroke="var(--line)"/>
    <line x1="${x(0)}" y1="${y(plan[0])}" x2="${x(10)}" y2="${y(plan[1])}" stroke="var(--ink-3)" stroke-dasharray="5 5" stroke-width="2"/>
    <polyline fill="none" stroke="var(--amber)" stroke-width="3" points="${pts.map((v, i) => x(i) + "," + y(v)).join(" ")}"/>
    ${pts.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="3" fill="var(--amber)"/>`).join("")}
    <text x="10" y="20" font-size="10" fill="var(--ink-3)">${k === "down" ? "Kalan" : "Biten"}</text><text x="400" y="192" font-size="10" text-anchor="end" fill="var(--ink-3)">Gün →</text>`;
    $(".out", el).innerHTML = k === "down" ? "Kalan puan 40'tan 0'a iniyor. Turuncu çizgi kesikli planın <b>altında</b>: ekip öndedir." : "Biten puan 0'dan 40'a çıkıyor. Turuncu çizgi planın <b>üstünde</b>: ekip öndedir.";
  };
  $$(".tabs button", el).forEach(b => b.onclick = () => { $$(".tabs button", el).forEach(z => z.classList.toggle("on", z === b)); draw(b.dataset.k); });
  draw("down");
};

/* 40 süreç haritası */
const DOM = ["Yönetişim", "Kapsam", "Zaman Çizelgesi", "Finans", "Paydaşlar", "Kaynaklar", "Risk"];
const FOC = ["Başlatma", "Planlama", "Yürütme", "İzleme ve Kontrol", "Kapanış"];
const PROC = {
  "Yönetişim": [["Proje ya da fazın başlatılması"], ["Proje planlarının entegrasyonu ve hizalanması", "Kaynak tedariğinin planlanması"], ["Proje yürütmesinin yönetilmesi", "Kalite güvencesinin yönetilmesi", "Proje bilgi birikiminin yönetilmesi"], ["Proje performansının izlenmesi ve kontrolü", "Değişikliklerin değerlendirilmesi ve uygulanması"], ["Projenin ya da fazın kapatılması"]],
  "Kapsam": [[], ["Kapsam yönetiminin planlanması", "Gereksinimlerin belirlenmesi ve analizi", "Kapsamın tanımlanması", "Kapsam yapısının oluşturulması"], [], ["Kapsamın izlenmesi ve kontrolü", "Kapsamın doğrulanması"], []],
  "Zaman Çizelgesi": [[], ["Zaman çizelgesi yönetiminin planlanması", "Zaman çizelgesinin geliştirilmesi"], [], ["Zaman çizelgesinin izlenmesi ve kontrolü"], []],
  "Finans": [[], ["Finans yönetiminin planlanması", "Maliyetlerin tahmin edilmesi", "Bütçenin geliştirilmesi"], [], ["Finansalların izlenmesi ve kontrolü"], []],
  "Paydaşlar": [["Paydaşların belirlenmesi"], ["Paydaş katılımının planlanması", "İletişim yönetiminin planlanması"], ["Paydaş katılımının yönetilmesi", "İletişimin yönetilmesi"], ["Paydaş katılımının izlenmesi", "İletişimin izlenmesi"], []],
  "Kaynaklar": [[], ["Kaynak yönetiminin planlanması", "Kaynakların tahmin edilmesi"], ["Kaynakların sağlanması", "Takıma liderlik edilmesi"], ["Kaynakların izlenmesi ve kontrolü"], []],
  "Risk": [[], ["Risk yönetiminin planlanması", "Risklerin tanımlanması", "Risk analizinin gerçekleştirilmesi", "Risk yanıtlarının planlanması"], ["Risk yanıtlarının uygulanması"], ["Risklerin izlenmesi"], []]};
W.matrix = el => {
  title(el, "40 süreç: alan × odak alanı");
  const all = []; DOM.forEach(d => PROC[d].forEach((ps, f) => ps.forEach(p => all.push([p, d, f]))));
  el.insertAdjacentHTML("beforeend", `<div class="row" style="margin-bottom:10px"><button class="btn sm pri" data-a="quiz">Kendini sına</button><button class="btn sm" data-a="show" hidden>Haritayı göster</button><span class="muted" data-a="msg">Toplam ${all.length} süreç. Bir sürece tıkla.</span></div>
  <div class="tw"><div class="mx"><div></div>${FOC.map(f => `<div class="h">${f}</div>`).join("")}${DOM.map(d => `<div class="h">${d}</div>${PROC[d].map((ps, f) => `<div class="c" data-d="${d}" data-f="${f}">${ps.map(p => `<span class="p">${p}</span>`).join("")}</div>`).join("")}`).join("")}</div></div>`);
  const mx = $(".mx", el), msg = $("[data-a=msg]", el); let cur = null, score = 0, n = 0;
  mx.onclick = e => {
    const p = e.target.closest(".p"), c = e.target.closest(".c");
    if (cur && c) { n++; const ok = c.dataset.d === cur[1] && +c.dataset.f === cur[2]; if (ok) score++;
      const right = $$(".c", mx).find(x => x.dataset.d === cur[1] && +x.dataset.f === cur[2]);
      c.classList.add(ok ? "ok" : "no"); right.classList.add("ok");
      msg.innerHTML = `${ok ? "<b>Doğru.</b>" : "<b>Değil.</b>"} "${cur[0]}" → ${cur[1]} / ${FOC[cur[2]]}. Skor ${score}/${n}`;
      setTimeout(() => { $$(".c", mx).forEach(x => x.classList.remove("ok", "no")); ask(); }, 1500); return; }
    if (p && !cur) { $$(".p", mx).forEach(x => x.classList.toggle("sel", x === p)); const cc = p.parentElement; msg.innerHTML = `<b>${p.textContent}</b>: ${cc.dataset.d} alanı, ${FOC[cc.dataset.f]} odak alanı.`; }
  };
  const ask = () => { cur = all[Math.floor(Math.random() * all.length)]; msg.innerHTML = `Bu süreç nerede? <b>${cur[0]}</b>`; };
  $("[data-a=quiz]", el).onclick = () => { mx.classList.add("hide"); $$(".c", mx).forEach(c => c.classList.add("q")); $("[data-a=quiz]", el).hidden = true; $("[data-a=show]", el).hidden = false; score = 0; n = 0; ask(); };
  $("[data-a=show]", el).onclick = () => { cur = null; mx.classList.remove("hide"); $$(".c", mx).forEach(c => c.classList.remove("q", "ok", "no")); $("[data-a=quiz]", el).hidden = false; $("[data-a=show]", el).hidden = true; msg.textContent = `Toplam ${all.length} süreç. Bir sürece tıkla.`; };
};

/* finansal seçim */
W.finance = el => {
  title(el, "Hangisini seçersin?");
  const Qs = [["NPV", "A: 180.000 TL, 6 yıl", "B: 140.000 TL, 2 yıl", 0, "NPV yüksek olan seçilir; süre NPV'nin içinde zaten var."], ["Geri ödeme süresi", "A: 3,5 yıl", "B: 2 yıl", 1, "Geri ödeme süresinde kısa olan seçilir."], ["IRR", "A: %14", "B: %19", 1, "IRR yüksek olan seçilir."], ["Fayda/maliyet oranı", "A: 1,8", "B: 1,3", 0, "Oranı yüksek olan seçilir."], ["ROI", "A: %22", "B: %35", 1, "ROI yüksek olan seçilir."]];
  let i = 0;
  const show = () => { const q = Qs[i]; el.querySelector(".body").innerHTML = `<p style="margin:0 0 8px"><b>${q[0]}</b> ile karşılaştır:</p><div class="row"><button class="btn" data-k="0">${q[1]}</button><button class="btn" data-k="1">${q[2]}</button></div><div class="out"></div>`;
    $$("[data-k]", el).forEach(b => b.onclick = () => { const ok = +b.dataset.k === q[3]; $(".out", el).innerHTML = `${ok ? "<b>Doğru.</b>" : "<b>Değil.</b>"} ${q[4]} <button class="btn sm" style="margin-left:8px">Sıradaki</button>`; $(".out .btn", el).onclick = () => { i = (i + 1) % Qs.length; show(); }; }); };
  el.insertAdjacentHTML("beforeend", `<div class="body"></div>`); show();
};

/* WBS */
W.wbs = el => {
  title(el, "Villa projesi İKY (tıkla, aç-kapa)");
  const T = [["1. Mimari Tasarım", ["1.1 Planlama ve onaylar", "1.2 Proje çizimi", "1.3 Belediye ruhsat onayı"]], ["2. İç Tasarım", ["2.1 Belediye ruhsat onayı", "2.2 İç dekorasyon tasarımı", "2.3 Mobilya seçimi", "2.4 Aydınlatma planı", "2.5 Malzeme seçimi"]], ["3. Dış Peyzaj", ["3.1 Peyzaj çizimi", "3.2 Bahçe düzenlemesi", "3.3 Sulama sistemi", "3.4 Havuz çevresi düzenlemesi"]], ["4. İnşaat ve Altyapı", ["4.1 Temel ve iskelet", "4.2 Kazı ve temel atma", "4.3 Duvar ve çatı inşası", "4.4 Diğer yapısal işler", "4.5 Havuz inşaatı"]], ["5. Elektrik ve Tesisat", ["5.1 Elektrik tesisatı", "5.2 Su ve atık su", "5.3 Boya ve zemin", "5.4 Duvar kaplamaları", "5.5 Armatür ve donanım"]]];
  el.insertAdjacentHTML("beforeend", `<div style="text-align:center"><span class="pills" style="justify-content:center"><span style="background:var(--ink);color:var(--surface)">Villa Projesi</span></span></div><div class="grid3" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px">${T.map(([h, cs]) => `<div><button class="btn sm" style="width:100%;justify-content:center">${h}</button><ul style="font-size:.84rem;padding-left:16px;margin:6px 0">${cs.map(c => `<li>${c}</li>`).join("")}</ul></div>`).join("")}</div><p class="muted" style="margin:6px 0 0;font-size:.86rem">En alttaki öğeler <b>iş paketleri</b>. Örneğin 4.5 Havuz İnşaatı'nın ayrıntısı İKY sözlüğünde.</p>`);
  $$(".grid3 .btn", el).forEach(b => b.onclick = () => { const u = b.nextElementSibling; u.hidden = !u.hidden; });
};

/* bağımlılıklar */
W.deps = el => {
  title(el, "İlişki türünü seç");
  const D = {FS: ["A bitince B başlar", 0, 40, 40, 40, "40%", "A'nın bitişi → B'nin başlangıcı"], SS: ["A başlayınca B başlayabilir", 0, 50, 10, 50, "10%", "A'nın başlangıcı → B'nin başlangıcı"], FF: ["A bitmeden B bitemez", 0, 60, 20, 40, "60%", "A'nın bitişi → B'nin bitişi"], SF: ["A başlamadan B bitemez", 40, 50, 0, 40, "40%", "A'nın başlangıcı → B'nin bitişi"]};
  el.insertAdjacentHTML("beforeend", `<div class="steps">${Object.keys(D).map((k, i) => `<button class="${i ? "" : "on"}">${k}</button>`).join("")}</div><div class="gantt" style="--u:10%"><div class="gr"><span>A</span><div class="track"><div class="bar" data-b="a"></div></div></div><div class="gr"><span>B</span><div class="track"><div class="bar crit" data-b="b"></div></div></div></div><div class="out"></div>`);
  const show = k => { const d = D[k]; const a = $("[data-b=a]", el), b = $("[data-b=b]", el); a.style.left = d[1] + "%"; a.style.width = d[2] + "%"; b.style.left = d[3] + "%"; b.style.width = d[4] + "%"; $(".out", el).innerHTML = `<b>${k}:</b> ${d[0]}. Bağlantı: ${d[6]}.`; };
  $$(".steps button", el).forEach(b => b.onclick = () => { $$(".steps button", el).forEach(x => x.classList.toggle("on", x === b)); show(b.textContent); });
  show("FS");
};

/* PERT */
W.pert = el => {
  title(el, "Üç nokta hesaplayıcı");
  el.insertAdjacentHTML("beforeend", `<div class="fgrid"><label>İyimser (tO)<input type="number" value="4" data-k="o"></label><label>En olası (tM)<input type="number" value="7" data-k="m"></label><label>Kötümser (tP)<input type="number" value="16" data-k="p"></label></div><div class="res"></div>`);
  const upd = () => { const o = +$("[data-k=o]", el).value, m = +$("[data-k=m]", el).value, p = +$("[data-k=p]", el).value; const pe = (o + 4 * m + p) / 6, tr = (o + m + p) / 3, sd = (p - o) / 6;
    $(".res", el).innerHTML = `<div class="neu"><small>PERT (beta)</small><b>${nf(pe, 2)}</b></div><div class="neu"><small>Üçgen</small><b>${nf(tr, 2)}</b></div><div class="neu"><small>Standart sapma</small><b>${nf(sd, 2)}</b></div><div class="neu"><small>±1σ aralığı (yaklaşık %68)</small><b>${nf(pe - sd, 1)} – ${nf(pe + sd, 1)}</b></div>`; };
  $$("input", el).forEach(i => i.oninput = upd); upd();
};

/* Monte Carlo */
W.monte = el => {
  title(el, "Monte Carlo simülasyonu");
  const acts = [["Tasarım", 8, 10, 16], ["Geliştirme", 15, 20, 32], ["Test", 4, 6, 12]];
  el.insertAdjacentHTML("beforeend", `<table class="t"><tr><th>Aktivite</th><th>İyimser</th><th>En olası</th><th>Kötümser</th></tr>${acts.map(a => `<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td></tr>`).join("")}</table><button class="btn pri sm">5.000 kez çalıştır</button><svg viewBox="0 0 420 180" style="margin-top:10px"></svg><div class="out">Tek bir tahmin (en olası) toplamı ${acts.reduce((s, a) => s + a[2], 0)} gün. Simülasyon bunun ne kadar iyimser olduğunu gösterir.</div>`);
  const tri = (a, m, b) => { const u = Math.random(), f = (m - a) / (b - a); return u < f ? a + Math.sqrt(u * (b - a) * (m - a)) : b - Math.sqrt((1 - u) * (b - a) * (b - m)); };
  $(".btn", el).onclick = () => {
    const N = 5000, res = []; for (let i = 0; i < N; i++) res.push(acts.reduce((s, a) => s + tri(a[1], a[2], a[3]), 0));
    res.sort((a, b) => a - b); const mn = Math.floor(res[0]), mx = Math.ceil(res[N - 1]);
    const bins = {}; res.forEach(v => { const b = Math.floor(v); bins[b] = (bins[b] || 0) + 1; });
    const keys = []; for (let b = mn; b <= mx; b++) keys.push(b); const top = Math.max(...Object.values(bins));
    const bw = 380 / keys.length; let cum = 0;
    const bars = keys.map((k, i) => `<rect x="${30 + i * bw}" y="${160 - (bins[k] || 0) / top * 130}" width="${bw - 1}" height="${(bins[k] || 0) / top * 130}" fill="var(--blue)" opacity=".55"/>`).join("");
    const curve = keys.map((k, i) => { cum += bins[k] || 0; return (30 + (i + 1) * bw) + "," + (160 - cum / N * 140); }).join(" ");
    const q = p => res[Math.floor(p * N)];
    $("svg", el).innerHTML = bars + `<polyline points="${curve}" fill="none" stroke="var(--amber)" stroke-width="3"/><line x1="30" y1="160" x2="410" y2="160" stroke="var(--line)"/><text x="30" y="175" font-size="10" fill="var(--ink-3)">${mn} gün</text><text x="410" y="175" font-size="10" text-anchor="end" fill="var(--ink-3)">${mx} gün</text><text x="410" y="14" font-size="10" text-anchor="end" fill="var(--amber)">S eğrisi: o güne kadar bitme olasılığı</text>`;
    $(".out", el).innerHTML = `%50 olasılıkla <b>${nf(q(.5), 1)}</b> gün, %80 olasılıkla <b>${nf(q(.8), 1)}</b> gün, %90 olasılıkla <b>${nf(q(.9), 1)}</b> gün içinde biter. En olası değerlerin toplamı (${acts.reduce((s, a) => s + a[2], 0)} gün) ile bitme şansı yalnızca %${Math.round(res.filter(v => v <= acts.reduce((s, a) => s + a[2], 0)).length / N * 100)}.`;
  };
};

/* CPM */
const NETS = {
  "Ders örneği (A-B-C-D)": [["A", 5, []], ["B", 5, ["A"]], ["C", 10, ["A"]], ["D", 15, ["B", "C"]]],
  "Ders soruları (A–F)": [["A", 5, []], ["B", 5, ["A"]], ["C", 5, ["B"]], ["D", 5, ["A"]], ["E", 5, ["C", "D"]], ["F", 20, ["A"]]],
  "Basit zincir": [["A", 3, []], ["B", 4, ["A"]], ["C", 7, ["B"]]]};
function cpm(acts){
  const by = Object.fromEntries(acts.map(a => [a.id, a])); const order = [];
  const seen = {}; const visit = a => { if (seen[a.id]) return; seen[a.id] = 1; a.pred.forEach(p => visit(by[p])); order.push(a); };
  acts.forEach(visit);
  order.forEach(a => { const base = a.pred.length ? Math.max(...a.pred.map(p => by[p].ef)) + 1 : 1; a.es = base + (a.delay || 0); a.ef = a.es + a.d - 1; });
  const end = Math.max(...acts.map(a => a.ef));
  acts.forEach(a => a.succ = acts.filter(b => b.pred.includes(a.id)).map(b => b.id));
  order.slice().reverse().forEach(a => { a.lf = a.succ.length ? Math.min(...a.succ.map(s => by[s].ls)) - 1 : end; a.ls = a.lf - a.d + 1; a.tf = a.ls - a.es; a.ff = (a.succ.length ? Math.min(...a.succ.map(s => by[s].es)) : end + 1) - a.ef - 1; });
  const paths = []; const walk = (a, p) => { const np = p.concat(a.id); if (!a.succ.length) paths.push(np); else a.succ.forEach(s => walk(by[s], np)); };
  acts.filter(a => !a.pred.length).forEach(a => walk(a, []));
  return {end, paths: paths.map(p => ({p, len: p.reduce((s, id) => s + by[id].d, 0) + p.reduce((s, id) => s + (by[id].delay || 0), 0)}))};
}
W.cpm = el => {
  title(el, "Kritik yol laboratuvarı");
  el.insertAdjacentHTML("beforeend", `<div class="chips" style="margin-bottom:10px">${Object.keys(NETS).map((k, i) => `<button class="chip ${i ? "" : "on"}">${k}</button>`).join("")}</div><div class="tw"><table class="t cpmtbl"></table></div><div class="gantt"></div><div class="out"></div>`);
  let acts;
  const load = k => { acts = NETS[k].map(([id, d, pred]) => ({id, d, pred, delay: 0})); draw(); };
  const draw = () => {
    const r = cpm(acts);
    $(".cpmtbl", el).innerHTML = `<tr><th>Akt.</th><th>Öncül</th><th>Süre</th><th>Geç başla</th><th>ES</th><th>EF</th><th>LS</th><th>LF</th><th>Toplam b.</th><th>Serbest b.</th></tr>` + acts.map((a, i) => `<tr><td class="${a.tf === 0 ? "crit" : ""}">${a.id}</td><td>${a.pred.join(", ") || "–"}</td><td><input type="number" min="1" max="60" value="${a.d}" data-i="${i}" data-k="d"></td><td><input type="number" min="0" max="30" value="${a.delay}" data-i="${i}" data-k="delay"></td><td>${a.es}</td><td>${a.ef}</td><td>${a.ls}</td><td>${a.lf}</td><td class="${a.tf === 0 ? "crit" : ""}">${a.tf}</td><td>${a.ff}</td></tr>`).join("");
    const u = 100 / r.end;
    $(".gantt", el).style.setProperty("--u", u + "%");
    $(".gantt", el).innerHTML = acts.map(a => `<div class="gr"><span><b>${a.id}</b></span><div class="track"><div class="bar ${a.tf === 0 ? "crit" : ""}" style="left:${(a.es - 1) * u}%;width:${a.d * u}%">${a.es}–${a.ef}</div>${a.tf > 0 ? `<div class="fl" style="left:${a.ef * u}%;width:${a.tf * u}%"></div>` : ""}</div></div>`).join("") + `<p class="muted" style="font-size:.82rem;margin:4px 0 0">Turuncu: kritik. Taralı: toplam bolluk.</p>`;
    const mx = Math.max(...r.paths.map(p => p.len));
    $(".out", el).innerHTML = `Proje süresi <b>${r.end} gün</b>. Yollar: ` + r.paths.map(p => `<span style="${p.len === mx ? "color:var(--amber);font-weight:800" : ""}">${p.p.join("-")} = ${p.len}</span>`).join(", ");
    $$("input", el).forEach(inp => inp.onchange = () => { const v = Math.max(+inp.min, Math.min(+inp.max, +inp.value || 0)); acts[+inp.dataset.i][inp.dataset.k] = v; draw(); });
  };
  $$(".chips .chip", el).forEach(b => b.onclick = () => { $$(".chips .chip", el).forEach(x => x.classList.toggle("on", x === b)); load(b.textContent); });
  load(Object.keys(NETS)[0]);
};

/* bütçe katmanları */
W.budget = el => {
  title(el, "Bütçe katmanları (rakamları değiştir)");
  el.insertAdjacentHTML("beforeend", `<div class="fgrid"><label>Aktivite tahminleri (€)<input type="number" value="10670" data-k="a"></label><label>Beklenmedik durum yedeği<input type="number" value="1650" data-k="c"></label><label>Yönetim yedeği<input type="number" value="1500" data-k="m"></label></div><div class="body" style="margin-top:12px"></div>`);
  const upd = () => { const a = +$("[data-k=a]", el).value || 0, c = +$("[data-k=c]", el).value || 0, m = +$("[data-k=m]", el).value || 0, t = a + c + m || 1;
    $(".body", el).innerHTML = `<div style="display:flex;height:40px;border-radius:8px;overflow:hidden;font-size:.8rem;font-weight:700"><div style="width:${a / t * 100}%;background:var(--blue);color:#fff;display:flex;align-items:center;padding-left:8px">Aktiviteler</div><div style="width:${c / t * 100}%;background:var(--amber);color:#1b1300;display:flex;align-items:center;justify-content:center">BD</div><div style="width:${m / t * 100}%;background:var(--violet);color:#fff;display:flex;align-items:center;justify-content:center">YY</div></div>
    <div class="res"><div class="neu"><small>Maliyet temel çizgisi = aktivite + BD yedeği</small><b>€${nf(a + c)}</b></div><div class="neu"><small>Bütçe = temel çizgi + yönetim yedeği</small><b>€${nf(a + c + m)}</b></div></div>`; };
  $$("input", el).forEach(i => i.oninput = upd); upd();
};

/* EVM hesap makinesi */
W.evm = el => {
  title(el, "EVM hesap makinesi");
  el.insertAdjacentHTML("beforeend", `<div class="fgrid"><label>BAC<input type="number" value="1000000" data-k="bac"></label><label>PV<input type="number" value="500000" data-k="pv"></label><label>EV<input type="number" value="400000" data-k="ev"></label><label>AC<input type="number" value="600000" data-k="ac"></label><label>Yeni ETC (opsiyonel)<input type="number" value="" placeholder="aşağıdan yukarı" data-k="etc"></label></div>
  <p class="muted" style="font-size:.85rem;margin:8px 0 0">Kısayol: süre ve yüzde ile doldur → <label style="display:inline-flex;flex-direction:row;gap:4px;align-items:center">geçen/toplam ay <input type="number" style="width:56px" value="6" data-k="m"> / <input type="number" style="width:56px" value="12" data-k="mt"></label> <label style="display:inline-flex;flex-direction:row;gap:4px;align-items:center">tamamlanan % <input type="number" style="width:60px" value="40" data-k="pc"></label> <button class="btn sm" data-a="fill">Doldur</button></p><div class="res"></div>`);
  const g = k => parseFloat($(`[data-k=${k}]`, el).value);
  const upd = () => {
    const bac = g("bac"), pv = g("pv"), ev = g("ev"), ac = g("ac"), etc = g("etc");
    if ([bac, pv, ev, ac].some(isNaN) || !ac || !pv) { $(".res", el).innerHTML = "<div>Değerleri gir.</div>"; return; }
    const cpi = ev / ac, spi = ev / pv, eac1 = bac / cpi, eac2 = ac + (bac - ev), eac4 = ac + (bac - ev) / (cpi * spi);
    const c = (v, good) => v === 0 ? "neu" : good ? "good" : "bad";
    let h = `<div class="${c(ev - ac, ev - ac > 0)}"><small>CV = EV − AC</small><b>${nf(ev - ac)}</b><small>${ev - ac > 0 ? "bütçenin altında" : ev - ac < 0 ? "bütçe aşımı" : "bütçede"}</small></div>
    <div class="${c(ev - pv, ev - pv > 0)}"><small>SV = EV − PV</small><b>${nf(ev - pv)}</b><small>${ev - pv > 0 ? "planın önünde" : ev - pv < 0 ? "planın gerisinde" : "planda"}</small></div>
    <div class="${cpi === 1 ? "neu" : cpi > 1 ? "good" : "bad"}"><small>CPI = EV / AC</small><b>${nf(cpi, 3)}</b><small>1 TL harcamaya ${nf(cpi, 2)} TL değer</small></div>
    <div class="${spi === 1 ? "neu" : spi > 1 ? "good" : "bad"}"><small>SPI = EV / PV</small><b>${nf(spi, 3)}</b><small>${spi >= 1 ? "zamanında veya önde" : "geride"}</small></div>
    <div class="neu"><small>EAC = BAC / CPI (tipik)</small><b>${nf(eac1)}</b></div>
    <div class="neu"><small>EAC = AC + (BAC − EV) (tek seferlik)</small><b>${nf(eac2)}</b></div>
    <div class="neu"><small>EAC = AC + (BAC − EV)/(CPI×SPI)</small><b>${nf(eac4)}</b></div>`;
    if (!isNaN(etc)) h += `<div class="neu"><small>EAC = AC + ETC (yeni tahmin)</small><b>${nf(ac + etc)}</b></div>`;
    const t1 = (bac - ev) / (bac - ac), t2 = (bac - ev) / (eac1 - ac);
    h += `<div class="${t1 > 1 ? "bad" : "good"}"><small>TCPI (BAC hedef)</small><b>${nf(t1, 3)}</b><small>${t1 > 1 ? "zor" : t1 < 1 ? "kolay" : "aynen devam"}</small></div>
    <div class="neu"><small>TCPI (EAC = BAC/CPI hedef)</small><b>${nf(t2, 3)}</b></div>
    <div class="neu"><small>ETC = EAC − AC <span class="badge">PMI ek</span></small><b>${nf(eac1 - ac)}</b></div>
    <div class="${bac - eac1 >= 0 ? "good" : "bad"}"><small>VAC = BAC − EAC <span class="badge">PMI ek</span></small><b>${nf(bac - eac1)}</b></div>`;
    $(".res", el).innerHTML = h;
  };
  $$("input", el).forEach(i => i.oninput = upd);
  $("[data-a=fill]", el).onclick = () => { const bac = g("bac"), m = g("m"), mt = g("mt"), pc = g("pc"); $("[data-k=pv]", el).value = Math.round(bac * m / mt); $("[data-k=ev]", el).value = Math.round(bac * pc / 100); upd(); };
  upd();
};

/* kalitenin maliyeti sınıflama */
W.coq = el => {
  title(el, "Hangi maliyet kategorisi?");
  const items = [["Ekibe eğitim verilmesi", 0], ["Ürün testleri", 1], ["Hatalı parçanın yeniden yapılması", 2], ["Müşteriye garanti kapsamında tamir", 3], ["Süreçlerin belgelenmesi", 0], ["Iskarta malzeme", 2], ["Kalite tetkiki", 1], ["Müşteriye ödenen tazminat", 3], ["Fire tespiti", 1], ["Kötü ün nedeniyle iş kaybı", 3]];
  const cats = ["Önleme", "Değerlendirme", "İçsel hata", "Dışsal hata"];
  let deck = shuffle(items), i = 0, sc = 0;
  el.insertAdjacentHTML("beforeend", `<div class="body"></div>`);
  const show = () => { if (i >= deck.length) { $(".body", el).innerHTML = `<div class="out"><b>${sc}/${deck.length}</b> doğru. Önleme ve değerlendirme <i>uymanın</i>, içsel ve dışsal hata <i>uymamanın</i> maliyetidir. <button class="btn sm">Tekrar</button></div>`; $(".body .btn", el).onclick = () => { deck = shuffle(items); i = 0; sc = 0; show(); }; return; }
    const it = deck[i]; $(".body", el).innerHTML = `<p style="font-weight:700;margin:0 0 8px">${i + 1}/${deck.length}: ${it[0]}</p><div class="row">${cats.map((c, k) => `<button class="btn sm" data-k="${k}">${c}</button>`).join("")}</div><div class="out" hidden></div>`;
    $$("[data-k]", el).forEach(b => b.onclick = () => { const ok = +b.dataset.k === it[1]; if (ok) sc++; const o = $(".out", el); o.hidden = false; o.innerHTML = (ok ? "<b>Doğru.</b> " : `<b>Değil:</b> ${cats[it[1]]}. `); $$("[data-k]", el).forEach(x => x.disabled = true); setTimeout(() => { i++; show(); }, 1100); }); };
  show();
};

/* Pareto */
W.pareto = el => {
  title(el, "Gömlek atölyesi hata nedenleri");
  const D = [["Kol takma", 170], ["Yaka ölçüsü", 150], ["Etiket", 50], ["Diğer", 15], ["Kumaş", 10], ["Ön parça", 5]];
  const tot = D.reduce((s, d) => s + d[1], 0); let cum = 0;
  const bw = 56, x0 = 40;
  const bars = D.map((d, i) => `<rect x="${x0 + i * bw + 6}" y="${170 - d[1] / 170 * 140}" width="${bw - 12}" height="${d[1] / 170 * 140}" fill="${i < 2 ? "var(--amber)" : "var(--blue)"}" opacity="${i < 2 ? 1 : .55}"/><text x="${x0 + i * bw + bw / 2}" y="186" font-size="9.5" text-anchor="middle" fill="var(--ink-2)">${d[0]}</text><text x="${x0 + i * bw + bw / 2}" y="${165 - d[1] / 170 * 140}" font-size="9" text-anchor="middle" fill="var(--ink)">${d[1]}</text>`).join("");
  const line = D.map((d, i) => { cum += d[1]; return (x0 + i * bw + bw / 2) + "," + (170 - cum / tot * 150); }).join(" ");
  el.insertAdjacentHTML("beforeend", `<svg viewBox="0 0 400 200">${bars}<polyline points="${line}" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="${x0}" y1="${170 - .8 * 150}" x2="380" y2="${170 - .8 * 150}" stroke="var(--stop)" stroke-dasharray="4 4"/><text x="380" y="${165 - .8 * 150}" font-size="9" text-anchor="end" fill="var(--stop)">%80</text><line x1="${x0}" y1="170" x2="380" y2="170" stroke="var(--line)"/></svg><div class="out">Toplam ${tot} hata. Kol takma (%42,5) + yaka ölçüsü (%37,5) = <b>%80</b>. Bu iki nedeni çözmek hataların %80'ini ortadan kaldırır.</div>`);
};

/* kontrol çizelgesi */
W.control = el => {
  title(el, "Kontrol çizelgesi ve yedi kuralı");
  el.insertAdjacentHTML("beforeend", `<div class="row"><button class="btn sm" data-a="n">Normal süreç</button><button class="btn sm" data-a="r">Yedi kuralı ihlali</button><button class="btn sm" data-a="o">Sınır dışı nokta</button></div><svg viewBox="0 0 420 180" style="margin-top:8px"></svg><div class="out"></div>`);
  const draw = mode => {
    const pts = []; for (let i = 0; i < 20; i++) pts.push((Math.random() - .5) * 50);
    let hi = [];
    if (mode === "r") { for (let i = 8; i < 15; i++) { pts[i] = 6 + Math.random() * 18; hi.push(i); } }
    if (mode === "o") { pts[12] = 66; hi = [12]; }
    const x = i => 30 + i * 19.5, y = v => 90 - v;
    $("svg", el).innerHTML = `<line x1="20" x2="410" y1="${y(55)}" y2="${y(55)}" stroke="var(--stop)" stroke-dasharray="5 4"/><text x="410" y="${y(55) - 4}" font-size="9" text-anchor="end" fill="var(--stop)">Üst kontrol limiti</text>
    <line x1="20" x2="410" y1="${y(-55)}" y2="${y(-55)}" stroke="var(--stop)" stroke-dasharray="5 4"/><text x="410" y="${y(-55) + 12}" font-size="9" text-anchor="end" fill="var(--stop)">Alt kontrol limiti</text>
    <line x1="20" x2="410" y1="90" y2="90" stroke="var(--ink-3)"/><text x="22" y="86" font-size="9" fill="var(--ink-3)">Ortalama</text>
    <polyline fill="none" stroke="var(--blue)" stroke-width="1.5" points="${pts.map((v, i) => x(i) + "," + y(v)).join(" ")}"/>
    ${pts.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="${hi.includes(i) ? 5 : 3.5}" fill="${hi.includes(i) ? "var(--amber)" : "var(--blue)"}"/>`).join("")}`;
    $(".out", el).innerHTML = mode === "r" ? "Art arda <b>7 nokta</b> ortalamanın üstünde. Hepsi sınırlar içinde olsa da tesadüf değildir; özel bir neden var, araştır." : mode === "o" ? "Bir nokta kontrol limitinin <b>dışında</b>: süreç kontrol dışı, hemen araştır." : "Noktalar ortalamanın iki yanında rastgele dağılıyor: süreç kontrol altında.";
  };
  $$("[data-a]", el).forEach(b => b.onclick = () => draw(b.dataset.a)); draw("n");
};

/* güç/ilgi */
W.powergrid = el => {
  title(el, "Güç / ilgi matrisi: paydaşı yerleştir");
  const Qd = [["Belediye imar müdürlüğü: onay yetkisi var ama projeyle günlük ilgilenmiyor", 1], ["Sponsor: bütçeyi onaylıyor, her hafta ilerlemeyi soruyor", 0], ["Komşular: inşaat gürültüsünden etkileniyor, sık soru soruyorlar, yetkileri yok", 2], ["Kargo firması: malzeme teslim ediyor, projeyle ilgisi az", 3], ["Son kullanıcı temsilcileri: çok ilgililer, karar yetkileri sınırlı", 2], ["Yönetim kurulu: yüksek güç, yalnızca çeyrek raporlarına bakıyor", 1]];
  const Z = [["Yakından yönet", "Yüksek güç, yüksek ilgi", "var(--stop-soft)"], ["Memnun tut", "Yüksek güç, düşük ilgi", "var(--amber-soft)"], ["Bilgilendir", "Düşük güç, yüksek ilgi", "var(--blue-soft)"], ["İzle", "Düşük güç, düşük ilgi", "var(--surface)"]];
  el.insertAdjacentHTML("beforeend", `<p class="q" style="font-weight:700;margin:0 0 8px"></p><div class="cells" style="grid-template-columns:1fr 1fr">${[1, 0, 3, 2].map(k => `<div class="cell" data-k="${k}" style="background:${Z[k][2]};border-color:var(--line)">${Z[k][0]}<br><small>${Z[k][1]}</small></div>`).join("")}</div><div class="out"></div>`);
  let i = 0; const ask = () => { $(".q", el).textContent = Qd[i][0]; $(".out", el).textContent = "Uygun kadrana tıkla. (Sol: düşük ilgi, sağ: yüksek ilgi; üst: yüksek güç)"; };
  $$(".cell", el).forEach(c => c.onclick = () => { const ok = +c.dataset.k === Qd[i][1]; $(".out", el).innerHTML = (ok ? "<b>Doğru.</b> " : "<b>Değil.</b> ") + `Doğrusu: <b>${Z[Qd[i][1]][0]}</b>. <button class="btn sm">Sıradaki</button>`; $(".out .btn", el).onclick = () => { i = (i + 1) % Qd.length; ask(); }; });
  ask();
};

/* Salience */
W.salience = el => {
  title(el, "Salience modeli: bir bölgeye tıkla");
  const T = {"100": ["Atıl (Dormant)", "Sadece güç. Örn: müdahale etmediği sürece üst yönetim, medya, sendikalar.", "Bilgilendir, gözlemle."], "010": ["Keyfi (Discretionary)", "Sadece meşruiyet. Örn: hayır kurumları, iç denetim, yatırımcılar.", "Destekle, dahil et."], "001": ["Talepkar (Demanding)", "Sadece aciliyet. Örn: sürekli soru soran ama etkisi olmayan kişiler.", "Yakından izle, riskleri yönet."], "110": ["Baskın (Dominant)", "Güç + meşruiyet. Örn: yönetim kurulu, ana sponsor, resmi kurumlar.", "Stratejik yönet, sürekli iletişim."], "101": ["Tehlikeli (Dangerous)", "Güç + aciliyet. Örn: grev yapabilecek çalışanlar, agresif aktivistler.", "Yakından izle, riskleri yönet."], "011": ["Bağımlı (Dependent)", "Meşruiyet + aciliyet. Örn: yerel halk, kamu kurumları, hukuk danışmanları.", "Koordine et, memnuniyetini sağla."], "111": ["Kesin (Definitive)", "Güç + meşruiyet + aciliyet. Örn: acil talebi olan ana müşteri veya sponsor.", "En yüksek öncelik, sürekli iletişim."]};
  el.insertAdjacentHTML("beforeend", `<svg class="venn" viewBox="0 0 320 260" style="max-width:380px;margin:auto"><circle cx="120" cy="100" r="80" fill="var(--stop)" stroke="var(--stop)"/><circle cx="200" cy="100" r="80" fill="var(--blue)" stroke="var(--blue)"/><circle cx="160" cy="165" r="80" fill="var(--amber)" stroke="var(--amber)"/>
  <text x="70" y="40" font-size="13" font-weight="800" fill="var(--stop)">Güç</text><text x="215" y="40" font-size="13" font-weight="800" fill="var(--blue)">Meşruiyet</text><text x="160" y="258" font-size="13" font-weight="800" text-anchor="middle" fill="var(--amber)">Aciliyet</text><circle r="5" fill="var(--ink)" id="vd" cx="-10" cy="-10"/></svg><div class="out">Bölgeye tıkla.</div>`);
  const svg = $("svg", el);
  svg.onclick = e => { const r = svg.getBoundingClientRect(), x = (e.clientX - r.left) * 320 / r.width, y = (e.clientY - r.top) * 260 / r.height;
    const inn = (cx, cy) => Math.hypot(x - cx, y - cy) <= 80 ? "1" : "0"; const k = inn(120, 100) + inn(200, 100) + inn(160, 165);
    $("#vd", el).setAttribute("cx", x); $("#vd", el).setAttribute("cy", y);
    $(".out", el).innerHTML = T[k] ? `<b>${T[k][0]}</b>: ${T[k][1]} <br>Yaklaşım: ${T[k][2]}` : "Bu alan paydaş değil (hiçbir özellik yok)."; };
};

/* katılım matrisi */
W.engage = el => {
  title(el, "Paydaş katılım değerlendirme matrisi (villa örneği)");
  const lv = ["Habersiz", "Direnen", "Tarafsız", "Destekleyici", "Lider"];
  const P = [["Sponsor", 3, 4], ["Komşular", 1, 2], ["Belediye", 0, 2], ["Mimar", 3, 3], ["Ev sahibi ailesi", 2, 3]];
  el.insertAdjacentHTML("beforeend", `<div class="tw"><table class="t"><tr><th>Paydaş</th>${lv.map(l => `<th>${l}</th>`).join("")}<th>Fark</th></tr>${P.map(p => `<tr><td>${p[0]}</td>${lv.map((_, k) => `<td style="text-align:center;font-weight:800">${k === p[1] && k === p[2] ? "C D" : k === p[1] ? "C" : k === p[2] ? '<span style="color:var(--go)">D</span>' : ""}</td>`).join("")}<td>${p[2] - p[1] ? p[2] - p[1] + " seviye" : '<span style="color:var(--go)">yok</span>'}</td></tr>`).join("")}</table></div><p class="muted" style="margin:0;font-size:.86rem">C = mevcut, D = istenen. Belediye "habersiz": proje erken tanıtılmalı. Komşular "direnen": çalışma saatleri ve toz önlemleri anlatılmalı.</p>`);
};

/* kanal sayısı */
W.channels = el => {
  title(el, "İletişim kanalı hesaplayıcı");
  el.insertAdjacentHTML("beforeend", `<label>Kişi sayısı (PY dahil): <b data-v></b><input type="range" min="2" max="20" value="5"></label><svg viewBox="0 0 220 220" style="max-width:240px;margin:10px auto"></svg><div class="out"></div>`);
  const upd = () => { const n = +$("input", el).value; $("[data-v]", el).textContent = n; let s = ""; const P = [];
    for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / n; P.push([110 + 90 * Math.cos(a), 110 + 90 * Math.sin(a)]); }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) s += `<line x1="${P[i][0]}" y1="${P[i][1]}" x2="${P[j][0]}" y2="${P[j][1]}" stroke="var(--blue)" stroke-opacity=".35"/>`;
    s += P.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="${i ? "var(--ink)" : "var(--amber)"}"/>`).join("");
    $("svg", el).innerHTML = s; const c = n * (n - 1) / 2, c1 = (n + 1) * n / 2;
    $(".out", el).innerHTML = `${n} × ${n - 1} / 2 = <b>${c} kanal</b>. Bir kişi daha katılırsa ${c1} olur (+${c1 - c}). Turuncu nokta PY.`; };
  $("input", el).oninput = upd; upd();
};

/* Tuckman */
W.tuckman = el => {
  title(el, "Tuckman merdiveni");
  const S = [["Oluşma", "Forming", "Üyeler tanışır, roller ve hedefler belirlenir.", "Merak, heyecan, tedirginlik.", "Netlik sağla; hedefleri ve rolleri tanımla."], ["Fırtına", "Storming", "Çatışmalar ve görüş ayrılıkları; üyeler sınırları dener.", "Hayal kırıklığı, kızgınlık, rekabet.", "Çatışmayı yönet, iletişimi kolaylaştır, hedefe odakla."], ["Normlaşma", "Norming", "Güçlü/zayıf yönler kabul edilir, kurallar oturur.", "Aidiyet, iş birliği, güven.", "Güçlendir, destekle, özerklik ver."], ["Performans", "Performing", "Yüksek performans, verimli çalışma.", "Gurur, memnuniyet, başarı.", "Başarıyı kutla, yeni hedef koy, motivasyonu koru."], ["Dağılma", "Adjourning", "Proje biter, takım dağılır.", "Hüzün, bazen rahatlama.", "Gözden geçir, katkıları tanı, yeni fırsat yarat."]];
  el.insertAdjacentHTML("beforeend", `<div class="steps">${S.map((s, i) => `<button class="${i ? "" : "on"}">${i + 1}. ${s[0]}</button>`).join("")}</div><div class="out"></div>`);
  const show = i => { const s = S[i]; $(".out", el).innerHTML = `<b>${s[0]} (${s[1]})</b><br>Ne olur: ${s[2]}<br>Hisler: ${s[3]}<br>Liderin rolü: <b>${s[4]}</b>`; };
  $$(".steps button", el).forEach((b, i) => b.onclick = () => { $$(".steps button", el).forEach(x => x.classList.toggle("on", x === b)); show(i); }); show(0);
};

/* RACI */
W.raci = el => {
  title(el, "RACI matrisi: hücreye tıklayıp değiştir");
  const ppl = ["Ali", "Mehmet", "Burcu", "Filiz"];
  const rows = [["Plan dışı taleplerin değerlendirilmesi", ["I", "R", "A", ""]], ["Acil iş / kriz yönetimi", ["I", "R", "R", "A"]], ["Ad-hoc paydaş talepleri", ["I", "R", "R", "A"]], ["Dokümantasyon güncellemeleri", ["A/R", "I", "R", "I"]], ["Beklenmeyen risk takibi", ["A/I", "R", "C", ""]], ["Ekipler arası koordinasyon", ["R", "R", "R", "A/R"]]];
  const cyc = ["", "R", "A", "A/R", "C", "I"];
  el.insertAdjacentHTML("beforeend", `<div class="tw"><table class="t raci"></table></div><div class="out"></div>`);
  const draw = () => {
    $(".raci", el).innerHTML = `<tr><th>Aktivite</th>${ppl.map(p => `<th style="text-align:center">${p}</th>`).join("")}</tr>` + rows.map((r, i) => { const a = r[1].filter(v => v.includes("A")).length; return `<tr class="${a !== 1 ? "bad" : ""}"><td>${r[0]}</td>${r[1].map((v, j) => `<td class="cellr" data-i="${i}" data-j="${j}">${v}</td>`).join("")}</tr>`; }).join("");
    const bad = rows.filter(r => r[1].filter(v => v.includes("A")).length !== 1).length;
    $(".out", el).innerHTML = bad ? `<b>${bad} satırda</b> hesap veren (A) sayısı 1 değil. Her aktivitede tam olarak bir A olmalı.` : "Her satırda tek bir A var. Matris geçerli.";
    $$(".cellr", el).forEach(td => td.onclick = () => { const r = rows[+td.dataset.i][1], j = +td.dataset.j; r[j] = cyc[(cyc.indexOf(r[j]) + 1) % cyc.length]; draw(); });
  };
  draw();
};

/* liderlik */
W.leader = el => {
  title(el, "Durum → liderlik yaklaşımı");
  const L = [["Kriz / acil durum", "Yönlendirici (Directive)"], ["Karar öncesi görüş alma", "Danışan (Consultative)"], ["Motivasyon düşük", "Destekleyici (Supportive)"], ["Deneyimli ve yetkin ekip", "Demokratik / İşbirlikçi"], ["Çevik, kendi kendini yöneten takım", "Hizmetkâr (Servant)"], ["Performans ve hedef yönetimi", "İşlemsel (Transactional)"], ["Organizasyonel değişim ve dönüşüm", "Dönüşümcü (Transformational)"], ["Belirsizlik ve değişen koşullar", "Durumsal (Situational)"]];
  el.insertAdjacentHTML("beforeend", `<p class="q" style="font-weight:700;margin:0 0 8px"></p><div class="row opts2"></div><div class="out"></div>`);
  let order = shuffle(L), i = 0, sc = 0;
  const ask = () => { if (i >= order.length) { $(".q", el).textContent = ""; $(".opts2", el).innerHTML = ""; $(".out", el).innerHTML = `<b>${sc}/${order.length}</b> doğru. <button class="btn sm">Tekrar</button>`; $(".out .btn", el).onclick = () => { order = shuffle(L); i = 0; sc = 0; ask(); }; return; }
    const it = order[i]; $(".q", el).textContent = `Durum: ${it[0]}`;
    const opts = shuffle([it[1]].concat(shuffle(L.filter(x => x !== it).map(x => x[1])).slice(0, 3)));
    $(".opts2", el).innerHTML = opts.map(o => `<button class="btn sm">${o}</button>`).join(""); $(".out", el).textContent = "";
    $$(".opts2 .btn", el).forEach(b => b.onclick = () => { const ok = b.textContent === it[1]; if (ok) sc++; $(".out", el).innerHTML = ok ? "<b>Doğru.</b>" : `<b>Değil.</b> Doğrusu: ${it[1]}`; $$(".opts2 .btn", el).forEach(x => x.disabled = true); setTimeout(() => { i++; ask(); }, 1100); }); };
  ask();
};

/* çatışma */
W.conflict = el => {
  title(el, "Beş çatışma yöntemi (en iyiden en kötüye)");
  const C = [["İşbirliği / Problem çözme", "Collaborating", "Kazan-kazan. Farklı bakış açıları birleştirilir, kalıcı çözüm. Zaman ve güven ister.", "var(--go)"], ["Uzlaşma / Ödün verme", "Compromising", "Her iki taraf bir şeyden vazgeçer; geçici veya kısmi memnuniyet.", "var(--go)"], ["Yumuşatma / Yatıştırma", "Smoothing", "Ortak noktalar vurgulanır, farklılık geri plana itilir; ilişkiyi korur ama sorun kalabilir.", "var(--amber)"], ["Çekilme / Kaçınma", "Avoiding", "Sorundan geri çekilmek veya ertelemek; soğuma için kısa süre işe yarar.", "var(--amber)"], ["Zorlama / Yönlendirme", "Forcing", "Bir taraf görüşünü dayatır; kazan-kaybet. Acil durumlarda tek seçenek olabilir.", "var(--stop)"]];
  el.insertAdjacentHTML("beforeend", C.map(c => `<details style="border-left:5px solid ${c[3]}"><summary>${c[0]} <small>(${c[1]})</small></summary>${c[2]}</details>`).join(""));
};

/* olasılık-etki */
W.pim = el => {
  title(el, "Olasılık ve etki matrisi");
  const G = [["Orta", "Yüksek", "Yüksek"], ["Düşük", "Orta", "Yüksek"], ["Düşük", "Düşük", "Orta"]];
  const col = {"Yüksek": "var(--stop-soft)", "Orta": "var(--amber-soft)", "Düşük": "var(--go-soft)"};
  const act = {"Yüksek": "Hemen yanıt planla, risk sahibi ata, yakından izle.", "Orta": "Yanıt planla, düzenli izle.", "Düşük": "İzleme listesine koy, kabul et."};
  const pl = ["Yüksek", "Orta", "Düşük"], il = ["Düşük", "Orta", "Yüksek"];
  el.insertAdjacentHTML("beforeend", `<div class="cells" style="grid-template-columns:80px repeat(3,1fr)">${G.map((r, i) => `<div style="align-self:center;font-size:.85rem;color:var(--ink-2)">Olasılık<br><b>${pl[i]}</b></div>` + r.map((c, j) => `<div class="cell" data-c="${c}" data-p="${pl[i]}" data-i="${il[j]}" style="background:${col[c]}">${c} risk</div>`).join("")).join("")}<div></div>${il.map(x => `<div style="text-align:center;font-size:.85rem;color:var(--ink-2)">Etki <b>${x}</b></div>`).join("")}</div><div class="out">Bir hücre seç.</div>`);
  $$(".cell", el).forEach(c => c.onclick = () => { $$(".cell", el).forEach(x => x.classList.toggle("sel", x === c)); $(".out", el).innerHTML = `Olasılık ${c.dataset.p}, etki ${c.dataset.i} → <b>${c.dataset.c} risk</b>. ${act[c.dataset.c]}`; });
};

/* EMV */
W.emv = el => {
  title(el, "EMV hesaplayıcı");
  let rows = [["Donanım gecikmesi", -1, 20, 350000], ["Yazılımcı eksilmesi", -1, 30, 200000], ["AI uzmanı alınması", 1, 10, 500000]];
  el.insertAdjacentHTML("beforeend", `<div class="tw"><table class="t"></table></div><button class="btn sm" data-a="add">Satır ekle</button><div class="out"></div>`);
  const draw = () => {
    $("table", el).innerHTML = `<tr><th>Risk</th><th>Tür</th><th>Olasılık %</th><th>Etki (TL)</th><th>EMV</th><th></th></tr>` + rows.map((r, i) => `<tr><td><input type="text" value="${esc(r[0])}" data-i="${i}" data-k="0" style="width:100%"></td><td><select data-i="${i}" data-k="1"><option value="-1" ${r[1] < 0 ? "selected" : ""}>Tehdit</option><option value="1" ${r[1] > 0 ? "selected" : ""}>Fırsat</option></select></td><td><input type="number" value="${r[2]}" data-i="${i}" data-k="2" style="width:70px"></td><td><input type="number" value="${r[3]}" data-i="${i}" data-k="3" style="width:110px"></td><td style="font-weight:700;color:${r[1] < 0 ? "var(--stop)" : "var(--go)"}">${nf(r[1] * r[2] / 100 * r[3])}</td><td><button class="btn ghost sm" data-del="${i}">×</button></td></tr>`).join("");
    const t = rows.reduce((s, r) => s + r[1] * r[2] / 100 * r[3], 0);
    $(".out", el).innerHTML = `Toplam EMV: <b style="color:${t < 0 ? "var(--stop)" : "var(--go)"}">${nf(t)} TL</b>. ${t < 0 ? `Bu riskleri karşılamak için yaklaşık ${nf(-t)} TL beklenmedik durum yedeği gerekir.` : "Fırsatlar tehditlerden ağır basıyor."}`;
    $$("input,select", el).forEach(inp => inp.onchange = () => { const r = rows[+inp.dataset.i], k = +inp.dataset.k; r[k] = k === 0 ? inp.value : +inp.value; draw(); });
    $$("[data-del]", el).forEach(b => b.onclick = () => { rows.splice(+b.dataset.del, 1); draw(); });
  };
  $("[data-a=add]", el).onclick = () => { rows.push(["Yeni risk", -1, 10, 100000]); draw(); };
  draw();
};

/* karar ağacı */
W.tree = el => {
  title(el, "Karar ağacı (örnek, ders notu dışı)");
  el.insertAdjacentHTML("beforeend", `<div class="fgrid"><label>A: kendin geliştir, yatırım<input type="number" value="120000" data-k="ia"></label><label>A başarı olasılığı %<input type="number" value="70" data-k="pa"></label><label>B: hazır al, yatırım<input type="number" value="180000" data-k="ib"></label><label>B başarı olasılığı %<input type="number" value="90" data-k="pb"></label><label>Başarıda gelir<input type="number" value="300000" data-k="g"></label><label>Başarısızlıkta gelir<input type="number" value="50000" data-k="f"></label></div><div class="out tree"></div>`);
  const g = k => +$(`[data-k=${k}]`, el).value;
  const upd = () => { const ea = g("pa") / 100 * g("g") + (1 - g("pa") / 100) * g("f") - g("ia"), eb = g("pb") / 100 * g("g") + (1 - g("pb") / 100) * g("f") - g("ib");
    $(".out", el).innerHTML = `A: ${g("pa")}% × ${nf(g("g"))} + ${100 - g("pa")}% × ${nf(g("f"))} − ${nf(g("ia"))} = <b>${nf(ea)}</b><br>B: ${g("pb")}% × ${nf(g("g"))} + ${100 - g("pb")}% × ${nf(g("f"))} − ${nf(g("ib"))} = <b>${nf(eb)}</b><br>Seçim: <b>${ea >= eb ? "A" : "B"}</b> (beklenen net değeri yüksek olan).`; };
  $$("input", el).forEach(i => i.oninput = upd); upd();
};

/* risk yanıtları */
W.responses = el => {
  title(el, "Yanıt stratejileri");
  const D = {"Tehditler": [["Yükselt", "Escalate", "Daha yetkili birine devret.", "Üst yönetimden ek kaynak veya öncelik değişikliği istenir."], ["Kaçın", "Avoid", "Başka bir yol bul, riski ortadan kaldır.", "Riskli modül lansman kapsamından çıkarılır."], ["Transfer et", "Transfer", "Sözleşmeyle başkasına aktar.", "İş dış kaynağa verilir, sigorta yaptırılır."], ["Azalt", "Mitigate", "Olasılığı ve/veya etkiyi düşür.", "Ek geliştirici, ön sipariş, alternatif tedarikçi."], ["Kabul et", "Accept", "Bir şey yapma (pasif) veya yedek ayır (aktif).", "Risk izlenir, gerçekleşirse müdahale edilir."]],
    "Fırsatlar": [["Yükselt", "Escalate", "Daha yetkili birine devret.", "Fırsat üst yönetime taşınır, ek bütçe sağlanır."], ["Yararlan", "Exploit", "Gerçekleşmesini kesinleştir.", "En iyi ekip atanır; anlaşma hemen imzalanır."], ["Paylaş", "Share", "Başkasıyla birleşerek yararlan.", "Stratejik partnerle ortak girişim."], ["Geliştir", "Enhance", "Olasılığı ve/veya etkiyi artır.", "Ek fonksiyonlar, daha fazla kalemde aynı tedarikçi."], ["Kabul et", "Accept", "Bir şey yapma.", "Fırsat izlenir, doğal gelişimine bırakılır."]]};
  el.insertAdjacentHTML("beforeend", `<div class="tabs"><button class="on">Tehditler</button><button>Fırsatlar</button></div><div class="tw"><table class="t"></table></div>`);
  const show = k => { $("table", el).innerHTML = `<tr><th>Strateji</th><th>Anlamı</th><th>Örnek</th></tr>` + D[k].map(r => `<tr><td><b>${r[0]}</b><br><small>${r[1]}</small></td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join(""); };
  $$(".tabs button", el).forEach(b => b.onclick = () => { $$(".tabs button", el).forEach(x => x.classList.toggle("on", x === b)); show(b.textContent); }); show("Tehditler");
};

/* sözleşmeler */
W.contracts = el => {
  title(el, "Sözleşme türleri: alıcının risk spektrumu");
  const K = [["FFP", "Kesin sabit fiyat", "10.000.000 TL, değişmez.", "Kapsam net, değişiklik az. Maliyet aşımı satıcıya kalır.", 5], ["FPIF", "Teşvik ücretli sabit fiyat", "10.000.000 TL + erken biten her ay 50.000 TL teşvik.", "Performansı ödüllendirir; tavan fiyat vardır.", 18], ["FP-EPA", "Fiyat ayarlamalı sabit fiyat", "10.000.000 TL, enflasyon oranında değişime açık.", "Çok yıllı projelerde ekonomik dalgalanma riskini paylaşır.", 28], ["Hedef fiyat", "Target cost", "Alıcı ve satıcı hedef fiyat belirler; altında/üstünde kar veya zarar paylaşılır.", "İşbirliğini teşvik eder.", 42], ["T&M", "Süre ve malzeme", "Saatlik 1.000 TL işçilik + malzeme.", "Kısa, belirsiz işler, personel takviyesi. Tavan konmazsa maliyet büyür.", 55], ["CPIF", "Maliyet artı teşvik", "Maliyet ödenir; hedeften sapma 80/20 gibi paylaşılır.", "Satıcıyı maliyet düşürmeye teşvik eder.", 68], ["CPAF", "Maliyet artı ödül", "Maliyet ödenir; ödül alıcının değerlendirmesine bağlı.", "Ödül kararı alıcıdadır, genelde itiraz edilemez.", 80], ["CPFF", "Maliyet artı sabit ücret", "Tüm maliyet + sabit kâr.", "Kapsam belirsiz; risk büyük ölçüde alıcıda.", 95]];
  el.insertAdjacentHTML("beforeend", `<div class="spectrum">${K.map((k, i) => `<button data-i="${i}">${k[0]}</button>`).join("")}</div><div class="riskbar"></div><div class="row" style="justify-content:space-between;font-size:.8rem;color:var(--ink-2)"><span>Risk satıcıda</span><span>Risk alıcıda</span></div><div class="out"></div>`);
  $$(".spectrum button", el).forEach(b => b.onclick = () => { $$(".spectrum button", el).forEach(x => x.classList.toggle("on", x === b)); const k = K[+b.dataset.i]; $(".out", el).innerHTML = `<b>${k[0]} – ${k[1]}</b><br>Örnek: ${k[2]}<br>${k[3]}<br><small>Alıcı riski yaklaşık: %${k[4]}</small>`; });
  $(".spectrum button", el).click();
};

/* puanlama tablosu */
W.scoring = el => {
  title(el, "Çok kriterli puanlama (ders örneği, ağırlıkları değiştir)");
  const R = [["Mesleki tecrübe", 10, 60, 90], ["Gereksinimin anlaşılması", 10, 90, 85], ["Fiyatlama", 25, 50, 50], ["Teknik yeterlilik", 30, 75, 65], ["Finansal yeterlilik", 5, 90, 100], ["Zamanında bitirebilme", 10, 50, 75], ["PY yetkinliği", 10, 45, 75]];
  el.insertAdjacentHTML("beforeend", `<div class="tw"><table class="t"></table></div><div class="out"></div>`);
  const draw = () => { let a = 0, b = 0, w = 0;
    $("table", el).innerHTML = `<tr><th>Kriter</th><th>Ağırlık %</th><th>T1 puan</th><th>T1 ağırlıklı</th><th>T2 puan</th><th>T2 ağırlıklı</th></tr>` + R.map((r, i) => { a += r[1] * r[2] / 100; b += r[1] * r[3] / 100; w += r[1]; return `<tr><td>${r[0]}</td><td><input type="number" value="${r[1]}" data-i="${i}" style="width:60px"></td><td>${r[2]}</td><td>${nf(r[1] * r[2] / 100, 1)}</td><td>${r[3]}</td><td>${nf(r[1] * r[3] / 100, 1)}</td></tr>`; }).join("") + `<tr><th>Toplam</th><th>${w}</th><th></th><th>${nf(a, 1)}</th><th></th><th>${nf(b, 1)}</th></tr>`;
    $(".out", el).innerHTML = (w !== 100 ? `<span style="color:var(--stop)">Ağırlık toplamı ${w}, 100 olmalı.</span> ` : "") + `Seçilen: <b>Tedarikçi ${a >= b ? 1 : 2}</b>. Fiyatlar eşit (50); farkı zamanında bitirme ve PY yetkinliği yaratıyor.`;
    $$("input", el).forEach(inp => inp.onchange = () => { R[+inp.dataset.i][1] = +inp.value; draw(); }); };
  draw();
};

/* YZ katmanları */
W.ailayers = el => {
  title(el, "Kontrol kimde?");
  const A = [["Otomasyon", 90, "YZ yapar, insan sonuca bakar."], ["Destek", 50, "YZ önerir, PY seçer."], ["Güçlendirme", 15, "PY düşünür ve karar verir, YZ zihni genişletir."]];
  el.insertAdjacentHTML("beforeend", A.map(a => `<div style="margin:8px 0"><div class="row" style="justify-content:space-between"><b>${a[0]}</b><small>${a[2]}</small></div><div style="display:flex;height:22px;border-radius:6px;overflow:hidden;font-size:.75rem;font-weight:700"><div style="width:${a[1]}%;background:var(--violet);color:#fff;padding-left:6px;display:flex;align-items:center">YZ</div><div style="flex:1;background:var(--amber);color:#1b1300;padding-left:6px;display:flex;align-items:center">PY</div></div></div>`).join("") + `<p class="muted" style="margin:6px 0 0;font-size:.86rem">Görev karmaşıklığı arttıkça kontrol insana kayar. Nihai sorumluluk her katmanda PY'dedir.</p>`);
};
})();
