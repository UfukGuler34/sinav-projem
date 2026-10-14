window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
id: "m1", title: "Temel Kavramlar", short: "Proje, program, portföy, operasyon ve değer zinciri", mins: 15,
sections: [
{h: "Proje, program, portföy, operasyon", html: `
<p>Bu dört kavram sınavda en sık karıştırılan ikilidir. Farkı tek cümleyle hatırla: <b>proje geçicidir, operasyon süreklidir; program ilişkili projeleri birlikte yönetir, portföy stratejiye hizmet eden her şeyi toplar.</b></p>
<div class="keys">
<div class="key"><b>Proje (Project)</b>Belirli bir değer üretmek amacıyla, kendine özgü koşullar altında gerçekleştirilen ve <em>başlangıç ile bitiş noktası bulunan geçici</em> bir çalışma.<small>Örnek: Yeni bir metro hattının inşası, e-ticaret sitesi geliştirilmesi.</small></div>
<div class="key"><b>Program</b>Birlikte yönetildiğinde <em>daha fazla fayda</em> sağlayan, birbiriyle ilişkili birden fazla proje ve faaliyetin koordineli yönetimi.<small>Örnek: Bankanın dijital dönüşüm programı: mobil uygulama + internet bankacılığı + veri analitiği.</small></div>
<div class="key"><b>Portföy (Portfolio)</b>Kuruluşun <em>stratejik hedeflerine</em> ulaşması için seçilen ve birlikte yönetilen proje, program ve operasyonların tamamı.<small>Örnek: Bir inşaat şirketinin farklı şehirlerdeki konut, AVM ve altyapı projeleri.</small></div>
<div class="key"><b>Operasyon</b>Belirli bir başlangıç ve bitiş tarihi olmayan, kurumun faaliyetlerini sürdürmek için <em>sürekli tekrar eden</em> günlük işler.<small>Örnek: Uygulamanın canlıda izlenmesi ve bakımı, restoranın günlük servisi.</small></div>
</div>
<div class="tip">Soruda "geçici", "benzersiz", "başı ve sonu belli" ifadeleri varsa cevap <b>proje</b>; "rutin", "süregelen" varsa <b>operasyon</b>; "strateji ile uyum, önceliklendirme, seçim" varsa <b>portföy</b>; "ilişkili projelerden ek fayda" varsa <b>program</b>.</div>
`},
{h: "Proje yönetimi ve başarı", html: `
<div class="keys">
<div class="key"><b>Proje Yönetimi</b>Hedeflere ulaşmak ve beklenen değeri ortaya çıkarmak için proje faaliyetlerine <em>bilgi, deneyim, beceri, araç ve yöntemlerin</em> sistemli biçimde uygulanması.</div>
<div class="key"><b>Proje Başarısı</b>Projenin paydaş beklentilerini karşılayan veya aşan bir değer üretmesi ve bu değerin harcanan zaman, emek ve maliyete <em>değdiği konusunda paydaşların ortak kabulü</em>.</div>
</div>
<p>PMBOK 8 başarıyı yalnızca "zamanında ve bütçesinde bitti" olarak tanımlamaz. Ölçüt, <b>paydaşa teslim edilen değerdir</b>.</p>
<div class="pmi">PMI'ın 2024 araştırmasına göre projelerin yaklaşık %48'i bu değer odaklı başarı tanımını karşılıyor. PMBOK 8 bu yüzden başarıyı değer üzerinden tanımlar.</div>
`},
{h: "Ekipler, roller ve PMO", html: `
<table class="t"><tr><th>Kavram</th><th>Ne yapar?</th></tr>
<tr><td><b>Proje Ekibi</b></td><td>Projenin görevlerini yerine getiren, faaliyetleri birlikte yürüten kişilerin tamamı (geliştirici, test uzmanı, mühendis...).</td></tr>
<tr><td><b>Proje Yönetim Ekibi</b></td><td>Planlama, yürütme, izleme ve kontrol gibi <em>yönetim</em> faaliyetlerinde doğrudan görev alanlar (PY, iş analisti, teknik lider, scrum master).</td></tr>
<tr><td><b>Proje Yöneticisi</b></td><td>Ekibi yönetir, kaynakları koordine eder; projenin kapsam, zaman ve maliyet çerçevesinde ilerlemesinden sorumludur.</td></tr>
<tr><td><b>PMO / PYO</b></td><td>Proje, program ve portföy yönetimini <em>standartlaştıran, koordine eden ve destekleyen</em> organizasyonel birim. Metodoloji, raporlama standardı ve araçları belirler.</td></tr>
</table>
<div class="pmi">PMBOK 8'e göre PMO'lar "uyum denetleyicisi" rolünden, ekiplere koçluk yapan ve projeleri stratejiyle hizalayan bir role doğru kayıyor.</div>
`},
{h: "Ürün, eser ve çıktı", html: `
<div class="keys">
<div class="key"><b>Ürün (Product)</b>Proje veya üretim sonucunda ortaya çıkan, ölçülebilir özellikleri olan ve kullanıcıya değer sunan somut ya da dijital çıktı. Nihai ürün de olabilir, daha büyük bir çözümün parçası da.</div>
<div class="key"><b>Eser (Artifact)</b>Çalışmayı planlamak, yönetmek, izlemek ve paydaşlara bilgi vermek için oluşturulan <em>doküman, kayıt veya bilgi taşıyan çıktılar</em>.<small>Örnek: Product backlog, sprint planı, iş programı, bütçe tablosu.</small></div>
</div>
<div class="tip">Eser (artifact) teslim edilen ürün değildir; projeyi yönetmek için üretilen belgedir. "Risk kaydı bir eser midir?" Evet.</div>
`},
{h: "Çıktı → Getiri → Fayda → Değer", html: `
<p>Sınavda bu zincirin sırası ve her halkanın anlamı sorulur. Teslimattan değere giden yol:</p>
<div class="flow"><span><b>Çıktı</b> (Output)<small>Somut ürün/teslimat</small></span><span><b>Getiri</b> (Outcome)<small>Kullanımdan doğan değişim</small></span><span><b>Fayda</b> (Benefit)<small>Ölçülebilir kazanım</small></span><span><b>Değer</b> (Value)<small>Toplam stratejik karşılık</small></span></div>
<table class="t"><tr><th>Halka</th><th>Mobil bankacılık projesi örneği</th></tr>
<tr><td>Çıktı</td><td>Mobil bankacılık uygulaması geliştirildi.</td></tr>
<tr><td>Getiri</td><td>Müşteriler işlemlerini şubeye gitmeden yapmaya başladı.</td></tr>
<tr><td>Fayda</td><td>Şube işlem maliyetleri %30 azaldı.</td></tr>
<tr><td>Değer</td><td>Banka hem maliyet avantajı kazandı hem müşteri memnuniyeti ve rekabet gücü arttı.</td></tr></table>
<p>Kısaca: <b>Outcome = değişim, Benefit = kazanım, Value = toplam stratejik değer.</b> Getiri bazen beklenmeyen olumsuz etkiler de doğurabilir.</p>
<div class="ex"><b>Atölye: Evcil hayvan kreşi oyun alanı projesi</b><br>Çıktı: Oyun alanları yapıldı. Getiri: Hayvanlar daha çok hareket ediyor, sahipler kreşi daha sık tercih ediyor. Fayda: Doluluk ve gelir arttı, şikâyetler azaldı. Değer: Kreş bölgede tercih edilen, güvenilir bir marka oldu.</div>
<div data-w="chain"></div>
`},
{h: "Değer teslim sistemi", html: `
<div class="key"><b>Değer Teslim Sistemi (Value Delivery System)</b>Organizasyonun stratejik hedeflerine ulaşması ve paydaşlara değer sunması için yürüttüğü tüm faaliyetler, süreçler, projeler ve yönetişim mekanizmalarının bütünü. Stratejiden operasyona kadar tüm çalışmaların değer üretmeye odaklanmasını sağlar.</div>
<p>Bir sonraki derste bu sistemin beş bileşenini ayrıntılı göreceğiz.</p>
`}
]},

{
id: "m2", title: "Değer Teslim Sistemi ve Yönetişim", short: "Yönetişim, değerin bileşenleri, proje ortamı, roller", mins: 20,
sections: [
{h: "Kurumsal yönetişim ve proje yönetişimi", html: `
<p>Akış: <b>Vizyon → Misyon → Kurumsal strateji ve hedefler → Stratejik planlama → Portföy yönetimi → Program/proje ve operasyon yönetimi.</b> Bunun tamamı iç ve dış ortamın içinde, kurumsal kaynaklarla çalışır.</p>
<div class="two">
<div><h4>Kurumsal yönetişim</h4><ul>
<li>Faaliyetlerin yasa, mevzuat ve uyum gerekliliklerine uygun yürütülmesi</li>
<li>Etik, sosyal ve çevresel sorumlulukların tanımlanması</li>
<li>Operasyonel, hukuki, finansal ve risk politikalarının oluşturulması</li>
<li>Portföy, program ve projelerin stratejik hedeflerle uyumu</li>
<li>Tüm girişimlerin misyon ve vizyon doğrultusunda değer üretmesi</li>
<li>En yüksek değeri yaratacak karar alma süreçlerinin işlemesi</li></ul></div>
<div><h4>Proje yönetişimi</h4><p>Projelerin kurumsal stratejiyle uyumlu yürütülmesini sağlayan <em>karar alma, denetim ve yönlendirme</em> mekanizmalarını içeren yönetim çerçevesi.</p>
<p>Kurumsal yönetişim tüm organizasyonu kapsar; proje yönetişimi yalnızca projelerin etkin yönetimi için gereken süreç, karar ve kontrol çerçevesine odaklanır.</p></div>
</div>
`},
{h: "Sistemin beş bileşeni", html: `
<ol class="num">
<li><b>Değer yaratma</b> – Faaliyetler sonucunda paydaşlara fayda sağlayan çıktılar üretmek.</li>
<li><b>Proje ortamı</b> – Projenin yürüdüğü organizasyonel yapı, kültür ve çalışma koşulları.</li>
<li><b>Ürün yönetimi</b> – Ürünün yaşam döngüsü boyunca planlanması, geliştirilmesi ve değer üretmeye devam etmesi.</li>
<li><b>Projelerle ilişkili işlevler (fonksiyonlar)</b> – Finans, tedarik, kalite, İK gibi destek fonksiyonları.</li>
<li><b>Proje yönetimi rolleri</b> – PY, ekip, sponsor ve diğer paydaşların görev ve sorumlulukları.</li></ol>
`},
{h: "1. Değer yaratmak", html: `
<p><b>İş değeri:</b> Proje sırasında, tamamlandığında veya uzun vadede kurumun performansına ve sürdürülebilirliğine katkı sağlayan, ölçülebilir finansal ya da finansal olmayan kazanımlar.</p>
<table class="t"><tr><th>Maddi değerler</th><th>Maddi olmayan değerler</th></tr>
<tr><td>Finansal varlıkların artması</td><td>İyi niyet (goodwill)</td></tr>
<tr><td>Operasyonel verimlilik</td><td>Marka bilinirliği ve ticari markalar</td></tr>
<tr><td>Kârlılığın artması</td><td>Kamu yararı</td></tr>
<tr><td>Hissedar özkaynaklarının güçlenmesi</td><td>Kurumsal bilgi birikimi</td></tr>
<tr><td>Pazar payının artması</td><td>Mevzuata ve standartlara uyum</td></tr>
<tr><td>Altyapı ve teknik kapasite</td><td>Kurumsal itibar</td></tr>
<tr><td>Kullanım kolaylığı / kullanıcı deneyimi</td><td>Çalışanların refahı</td></tr>
<tr><td>Çevresel iyileştirmeler</td><td>Çevresel farkındalık</td></tr></table>
<p><b>Değerin bileşenleri:</b> Kalite, İşlevsellik, Para, Zaman, Müşteri memnuniyeti.</p>
<div class="flow"><span>Portföy, program ve projeler <b>teslimat</b> üretir</span><span>Teslimatlar <b>getirileri</b> oluşturur</span><span>Getiriler <b>fayda</b> sağlar</span><span>Faydalar <b>değer</b> yaratır</span></div>
`},
{h: "2. Proje ortamı", html: `
<p>Projeyi iki grup etken etkiler: <b>Çevresel işletme faktörleri</b> (iç ve dış) ve <b>Dahili organizasyonel süreç varlıkları</b>.</p>
<div class="two">
<div><h4>Çevresel işletme faktörleri – Dahili</h4><ul><li>Organizasyon kültürü, yapısı, yönetimi</li><li>Tesislerin coğrafi dağılımı</li><li>Altyapı</li><li>Bilgi teknolojisi yazılımı</li><li>Kaynak kullanılabilirliği</li><li>Çalışan yetenekleri</li></ul></div>
<div><h4>Çevresel işletme faktörleri – Harici</h4><ul><li>Pazar koşulları</li><li>Sosyal ve kültürel etkiler</li><li>Yasal sınırlamalar</li><li>Ticari veri tabanları</li><li>Akademik araştırma</li><li>Devlet / sektör standartları</li><li>Finansal konular (döviz, faiz)</li><li>Fiziksel çevre öğeleri</li></ul></div>
</div>
<p><b>Organizasyonel süreç varlıkları:</b> Süreçler, politikalar, prosedürler ve kurumsal bilgi tabanları (geçmiş projeler, alınan dersler).</p>
<div class="tip">Ayrım: <b>Çevresel işletme faktörleri</b> ekibin kontrolünde olmayan koşullardır. <b>Süreç varlıkları</b> kurumun kendi kullanılabilir birikimi, yani şablonlar, prosedürler ve alınan derslerdir.</div>
`},
{h: "3. Ürün yönetimi", html: `
<p>Ürün yaşam döngüsü: <b>Giriş → Büyüme → Olgunluk → Gerileme/Emeklilik.</b> Bir ürün bu döngü boyunca birden fazla projeyle (oluşturma, eklenti, revizyon, emeklilik) beslenir.</p>
<ul><li>Ürün yaşam döngüsü boyunca program yönetimi kapsamında yürütülebilir.</li>
<li>Döngünün belirli aşamalarında proje yönetimi içinde ele alınabilir.</li>
<li>Portföy yapısı içinde ürün yönetimi yaklaşımı uygulanabilir.</li>
<li>Birden fazla program ve proje arasında ürün stratejisi koordine edilebilir.</li></ul>
<p><b>Ürün sahibi</b> ve <b>iş analisti</b> rolleri ürün yönetimi ile proje yönetimi arasındaki boşluğu kapatır.</p>
`},
{h: "4. Proje fonksiyonları", html: `
<ul class="checks">
<li><b>Gözetim ve koordinasyon</b> – Genel yönü belirlemek, faaliyetlerin uyumunu sağlamak.</li>
<li><b>Yürütme</b> – Planlanan çalışmaları hayata geçirmek, çıktıyı üretmek.</li>
<li><b>Geri bildirim oluşturma ve yönetimi</b> – Geri bildirimleri toplamak, değerlendirmek, iyileştirmek.</li>
<li><b>Kolaylaştırma ve destek</b> – Ekibin etkin çalışması için ortam, iletişim ve iş birliği.</li>
<li><b>Uzmanlık uygulaması</b> – Teknik veya alan uzmanlığını kullanmak.</li>
<li><b>Kurumsal yönlendirme ve içgörü</b> – Kurumun strateji ve deneyimiyle rehberlik.</li>
<li><b>Kaynakların sağlanması</b> – İnsan, bütçe, teknoloji ve diğer kaynakları temin etmek.</li></ul>
`},
{h: "5. Proje yönetiminde roller", html: `
<h4>Proje yönetim ekibi</h4>
<ul><li>Sorumluluk tek bir PY'de olabilir, bir ekip tarafından da yürütülebilir.</li>
<li>Başlangıçtan kapanışa kadar tüm yönetim faaliyetlerinde aktif rol alır.</li>
<li>Ürün sahibi veya ürün yöneticisi de bu yapı içinde yer alabilir.</li>
<li>Kullanılan teknolojiler ve dijital araçlar çalışma biçimini doğrudan etkiler.</li></ul>
<h4>Proje yönetim ekibi uzmanlıkları (PMI Tecrübe Üçgeni)</h4>
<div data-w="triangle"></div>
<table class="t">
<tr><td><b>Çalışma yöntemleri</b> (Ways of Working)</td><td>Kullanılan yöntem ve süreçler: çevik, öngörülü, hibrit.</td></tr>
<tr><td><b>Yönetim becerileri</b> (Power Skills)</td><td>İletişim, liderlik, ekip yönetimi, problem çözme, karar alma.</td></tr>
<tr><td><b>İş bilgisi</b> (Business Acumen)</td><td>Kurum stratejisi, pazar koşulları ve iş hedefleriyle uyum için gereken sektör bilgisi.</td></tr>
<tr><td><b>Sonuçlar</b> (Results)</td><td>Hedeflenen çıktıları üretmek, beklentileri karşılamak, değer sağlamak (üçgenin merkezi).</td></tr>
<tr><td><b>Sosyal sorumluluklar</b></td><td>Etik, toplumsal değerler ve sürdürülebilirlik (üçgeni çevreleyen halka).</td></tr></table>
<h4>Proje ekibi</h4>
<p>Tüm işleri yürütür, çıktıdan doğrudan sorumludur. <b>Çevik</b> yaklaşımlarda ekipler kendi kendini organize eder, kararlar dağıtıktır; <b>geleneksel</b> yapılarda merkezi koordinasyon vardır.</p>
<h4>Sponsor, müşteri ve ürün sahibi</h4>
<p>Proje yönetim ekibinin doğrudan yetki alanı dışındadırlar ama stratejik yön verir, önemli kararlarda liderlik eder, kurumun vizyonunu ekibe aktarır ve faydaların üretilip üretilmediğini takip ederler.</p>
<h4>Son kullanıcılar ve diğer paydaşlar</h4>
<p>Yaşam döngüsü boyunca sürece dahil edilmeleri; geri bildirim, paydaş uyumu ve güven için önemlidir. Genelde yinelemeli doğrulama ve onaylama adımları içerir.</p>
`}
]},

{
id: "m3", title: "Zihniyet ve 6 Prensip", short: "PMBOK 8'in yeni prensip seti", mins: 10,
sections: [
{h: "Proje yönetimi zihniyeti", html: `
<p>Zihniyet (mindset), proje yöneticisinin <b>nasıl düşündüğünü ve karar verdiğini</b> tanımlar ve prensiplerin temelini oluşturur. Üç boyutu vardır:</p>
<div class="pills"><span>Proaktif davranış</span><span>Sahiplenme</span><span>Değer odaklı düşünme</span></div>
<div class="pmi">PMBOK 7'deki 12 prensip, PMBOK 8'de <b>6 prensibe</b> indirildi. Eski kaynaklardan çalışıyorsan 12'li listeyi değil bu 6'lıyı ezberle.</div>
`},
{h: "Altı prensip", html: `
<div data-w="principles"></div>
<table class="t">
<tr><th>Prensip</th><th>Amaç / anahtar fikir</th></tr>
<tr><td><b>1. Bütüncül yaklaşımı benimseyin</b><br><small>Adopt a holistic view</small></td><td>Projeyi görev listesi değil, organizasyonun tamamıyla ilişkili bir <em>sistem</em> olarak görmek. Kararların diğer ekiplere etkisi, sistem bakışı, uzun vadeli etkiler.</td></tr>
<tr><td><b>2. Değere odaklanın</b><br><small>Focus on value</small></td><td>Gerçek iş değerini üretmek. Çıktıya değil faydaya odak, müşteri ve iş hedeflerini önceliklendirme, değer üretmeyen işleri azaltma.</td></tr>
<tr><td><b>3. Kaliteyi süreçlere ve teslimatlara entegre edin</b><br><small>Embed quality</small></td><td>Kaliteyi son kontrolde değil işin içine yerleştirmek. Sürekli kalite, hatayı oluşmadan önleme.</td></tr>
<tr><td><b>4. Hesap verebilir bir lider olun</b><br><small>Be an accountable leader</small></td><td>Kararların sorumluluğunu almak, güven oluşturmak, etik davranmak, takımı desteklemek.</td></tr>
<tr><td><b>5. Sürdürülebilirliği tüm alanlara entegre edin</b><br><small>Integrate sustainability</small></td><td>Çevresel etkiler, sosyal sorumluluk, uzun vadeli kurumsal fayda.</td></tr>
<tr><td><b>6. Güçlendirilmiş bir kültür oluşturun</b><br><small>Build an empowered culture</small></td><td>Çalışanların karar verebildiği, inisiyatif alabildiği, öğrenebildiği ve güven ortamında çalıştığı kültür.</td></tr></table>
<div class="tip">Hafıza kancası: <b>Bütün Değerli Kaliteler Hesaplı Sürdürülebilir Güçtür</b> (Bütüncül, Değer, Kalite, Hesap verebilir lider, Sürdürülebilirlik, Güçlendirilmiş kültür).</div>
`}
]},

{
id: "m4", title: "Yaşam Döngüleri", short: "Öngörülü, artırımlı, tekrarlı, adaptif, hibrit ve Stacey", mins: 20,
sections: [
{h: "Dört temel yaklaşım", html: `
<div data-w="lifecycles"></div>
<table class="t">
<tr><th>Yaklaşım</th><th>Mantık</th></tr>
<tr><td><b>Öngörülü</b> (Predictive / Waterfall / Klasik)</td><td>Her şeyi en baştan planla, plana uy. Her aşama tamamen bitince diğerine geçilir.</td></tr>
<tr><td><b>Artırımlı</b> (Incremental)</td><td>Hızlı ve parçalı teslimat. Ürünü parçalara böl, her seferinde bir parça üret ve teslim et.</td></tr>
<tr><td><b>Tekrarlı</b> (Iterative)</td><td>Geri bildirimle geliştirme. Prototip veya kavram kanıtı ile müşteriye erken göster, geri bildirime göre geliştir ya da yeniden üret.</td></tr>
<tr><td><b>Adaptif</b> (Adaptive)</td><td>Artırımlı + tekrarlı. Kısmi üretimle hızlı teslim ve geri bildirimle geliştirme. <b>Çevik yönetim adaptif döngü uygular.</b></td></tr></table>
`},
{h: "Hangi yaşam döngüsü?", html: `
<p>Değişiklik ihtimalini artıran üç özellik: <b>gereksinim belirsizliği, teknik belirsizlik, ileriye dönük değişiklik riski.</b> Bunlar yüksekse adaptif/çevik; hem belirsizlik hem risk düşükse öngörülü uygundur.</p>
<h4>Stacey bölgeleri</h4>
<div data-w="stacey"></div>
<h4>Seçimi etkileyen değişkenler</h4>
<div class="two">
<div><h5>Teslimat</h5><ul>
<li>Yenilik derecesi yüksek → <b>Uyarlanabilir</b></li>
<li>Gereksinimler net → <b>Öngörücü</b></li>
<li>Kapsam istikrarsız → <b>Uyarlanabilir</b></li>
<li>Değişiklik zor/maliyetli → <b>Öngörücü</b></li>
<li>Parçalı teslim imkânı yaklaşımı etkiler</li>
<li>Risk ve belirsizlik yönetimi → <b>Uyarlanabilir</b></li>
<li>Sıkı güvenlik gereksinimi → <b>Öngörücü</b></li>
<li>Sık geri bildirim değer üretiyor → <b>Uyarlanabilir</b></li>
<li>Yoğun düzenleme/denetim → <b>Öngörücü</b></li></ul></div>
<div><h5>Proje</h5><ul>
<li>Uyarlanabilir yöntemler yoğun paydaş katılımı ister</li>
<li>Erken teslim değer üretiyorsa → Yinelemeli/Uyarlanabilir; sabit bitiş tarihi → Öngörücü</li>
<li>Finansman belirsiz → Uyarlanabilir</li>
<li>Büyük, karmaşık, gelişen gereksinimler → Uyarlanabilir</li>
<li>Güçlü iletişim ve iş birliği becerili ekip → Çevik</li>
<li>Karşılıklı bağımlılıklar yinelemeli teslimde dikkate alınmalı</li></ul>
<h5>Kurum</h5><ul>
<li>Hiyerarşik yapı → Öngörücü; ağ odaklı → Uyarlanabilir/Hibrit</li>
<li>"Yönet ve yönlendir" kültürü → Öngörücü; kendi kendini yöneten ekip → Uyarlanabilir</li>
<li>Ekip büyüklüğü: uyarlanabilirde küçük ekip, önerilen <b>3–9 kişi</b></li></ul></div></div>
`},
{h: "Hibrit ve teslimat sıklığı", html: `
<p><b>Hibrit:</b> Projenin bir kısmı adaptif, bir kısmı öngörülü döngüye uygun olabilir.</p>
<ul class="checks"><li>Başlangıç adaptif, devamı öngörülü</li><li>Başlangıç öngörülü, devamı adaptif</li><li>Proje öngörülü, bir kısmı adaptif</li><li>Proje adaptif, bir kısmı öngörülü</li></ul>
<p><b>Teslimat sıklığı seçenekleri:</b> Tek teslimat, birden fazla teslimat, periyodik teslimatlar, sürekli teslimat.</p>
<div class="pmi">Yeni PMP sınavında (Temmuz 2026'dan itibaren) soruların yaklaşık %40'ı öngörülü, %60'ı çevik ve hibrit yaklaşımlarla ilgili. Bu oranlar üçüncü taraf kaynaklardan; kesin bilgi PMI'ın Examination Content Outline belgesinde.</div>
`}
]},

{
id: "m5", title: "Scrum ve Çevik", short: "Roller, eserler, toplantılar, DoR/DoD, burndown", mins: 25,
sections: [
{h: "Genel yapı", html: `
<p>Scrum en çok bilinen ve tercih edilen çevik uygulamadır.</p>
<ul class="checks"><li>İş, müşterinin doğrudan kullanabileceği parçalara (<b>increment</b>) bölünür.</li>
<li>Çalışma sabit zaman dilimlerine (<b>sprint</b>) bölünür.</li>
<li>Her sprint sonunda çalışan bir increment teslim edilmesi hedeflenir.</li>
<li>Geri bildirim alınır, ürün buna göre geliştirilir, sonraki sprint'e geçilir.</li></ul>
`},
{h: "Üç rol", html: `
<div class="keys">
<div class="key"><b>Ürün Sahibi (Product Owner)</b>Ürün vizyonunu en iyi anlayan kişi. Öncelikler hakkında son söz ondadır. Ekip ile müşteri arasında köprüdür, ekiple birebir çalışır. <em>Product Backlog'un yöneticisidir</em>; sözü dinlenen güçlü biri olmalıdır.</div>
<div class="key"><b>Scrum Master</b>Hizmetkâr (hizmet odaklı) lider. Birincil görevi Scrum'ın doğru uygulanması. Önce ekibe kendini yöneten ekip olmayı öğretir, sonra hizmetkâr liderlik başlar. Tüm paydaşlara Scrum'ı öğretir.</div>
<div class="key"><b>Ekip (Üretim ekibi)</b>Ürünü ortaya çıkaran ekip. Kendini yöneten ekip esastır, tecrübe yüksek olmalı, takım çalışması önemli. <em>T şeklinde uzmanlar</em>, <em>3–9 kişi</em>, üyeler yalnızca bu projede çalışmalı.</div>
</div>
<div class="pmi">Scrum Guide 2020'de geliştiriciler (developers) terimi kullanılır ve tüm Scrum takımının genelde 10 kişi veya daha az olması önerilir. Ders notundaki "3–9 kişi" geliştirici ekibine dair klasik kuraldır.</div>
`},
{h: "Product Backlog, kullanıcı hikayesi, MVP", html: `
<ul><li>Bir Scrum projesinde ilk iş <b>Ürün İş Listesi (Product Backlog)</b> hazırlamaktır: yapılacak tüm işler, <b>öncelik sıralı</b>.</li>
<li>İş maddeleri <b>PBI</b> (Product Backlog Item) olarak adlandırılır, <b>kullanıcı hikayesi</b> formatında yazılır.</li>
<li>Başta büyük parçalar kullanılır; yaklaşan işler küçük parçalara bölünüp detaylandırılır. Buna <b>Backlog Refinement</b> denir ve <b>Ürün Sahibinin sorumluluğundadır</b>.</li></ul>
<div class="ex"><b>Kullanıcı hikayesi: Rol + Eylem + Fayda</b><br>"<u>Sıkça sinemaya giden bir izleyici olarak</u>, <u>yakınımdaki salonlarda vizyona girecek filmlerin bilgilerine telefonumdan ulaşabilmeliyim</u>, <u>böylece her filmin sitesini ayrı ayrı kontrol etmem gerekmez</u>."</div>
<ul><li><b>Hikaye haritaları (Story Maps):</b> Ürün parçalarına ulaşan hikayeleri ve öncelikleri gösterir.</li>
<li><b>MVP (En Küçük Çalışan Ürün):</b> En hızlı ulaşılabilecek ve ürün sayılabilecek bileşim. İlk amaç ona ulaşmaktır.</li>
<li><b>Yol Haritası (Roadmap):</b> MVP'ye sonraki sprint'lerde hangi özelliklerin ekleneceği. Hem sürüm hem döngü planlamasını içerir.</li></ul>
`},
{h: "Sprint ve dört toplantı", html: `
<p>Sprint süreleri <b>sabittir</b> ve proje başında belirlenir. Her sprint dört toplantı ile yönetilir:</p>
<div data-w="scrumcycle"></div>
<table class="t">
<tr><th>Toplantı</th><th>İçerik</th><th>Süre (4 haftalık sprint)</th></tr>
<tr><td><b>Sprint Planlama</b></td><td>Sprint hedefi belirlenir; hedef için gereken işler Product Backlog'dan seçilip <b>Sprint Backlog</b>'a aktarılır; tahminler, iş paylaşımı.</td><td>En çok 8 saat</td></tr>
<tr><td><b>Günlük Toplantı</b> (Daily Scrum)</td><td>Ekibin kendi koordinasyonu: Dün ne yaptım? Bugün ne yapacağım? Önümdeki engeller neler?</td><td>15 dk <span class="badge">PMI ek</span></td></tr>
<tr><td><b>Ürün Gözden Geçirme</b> (Sprint Review)</td><td>Ürün demo edilir, ürün sahibi ve müşteriler geri bildirim verir; geri bildirimler yeni iş olarak backlog'a eklenir. Kabul/red kararı.</td><td>En çok 4 saat</td></tr>
<tr><td><b>Süreç Denetleme</b> (Retrospective)</td><td>Ekip <em>sürecini</em> iyileştirir: ne ters gitti, ne iyi gitti, kök nedenler. Suçlamadan kaçınılır, yeni kararlar çıkar.</td><td>En çok 3 saat <span class="badge">PMI ek</span></td></tr></table>
<div class="tip">Review = <b>ürün</b> (ne ürettik?), Retrospective = <b>süreç</b> (nasıl çalıştık?). Sınavda bu ikisi sürekli karıştırılmaya çalışılır.</div>
<h4>Çevik tahminleme</h4>
<p>Kesin değil esnek tahmin: <b>hikaye puanı, Fibonacci sayıları, tişört bedenleri (XS–XL), planlama pokeri.</b></p>
`},
{h: "Hazır ve Bitmiş tanımları", html: `
<div class="two">
<div class="key"><b>Definition of Ready (Hazır tanımı)</b>Bir işin <em>üretime başlanabilir</em> kabul edilmesi için tamamlanması gereken bilgi listesi. Proje başında tüm paydaşların onayıyla belirlenir.</div>
<div class="key"><b>Definition of Done (Bitmiş tanımı)</b>Bir işin <em>bitmiş</em> kabul edilmesi için kontrol edilen kriter listesi. Proje başında tüm paydaşların onayıyla belirlenir.</div></div>
`},
{h: "Burndown ve burnup", html: `
<div data-w="burn"></div>
<div class="two">
<div><h4>Burndown</h4><p>Kalan hikaye puanını izler. Toplamdan başlar, <b>sıfıra iner</b>. Gerçekleşen çizginin planlananın <b>altında</b> olması hedeflenir.</p></div>
<div><h4>Burnup</h4><p>Biten hikaye puanını izler. Sıfırdan başlar, toplama doğru <b>yükselir</b>. Gerçekleşenin planlananın <b>üstünde</b> olması hedeflenir.</p></div></div>
`}
]},

{
id: "m6", title: "Performans Alanları ve Süreç Haritası", short: "7 alan × 5 odak alanı = 40 süreç; iş belgeleri ve finansal ölçütler", mins: 25,
sections: [
{h: "Haritayı tanı", html: `
<p>PMBOK 8 iki eksenli bir yapı kullanır: <b>7 performans alanı</b> (ne yönetiyoruz?) ve <b>5 odak alanı</b> (ne zaman?). Kesişimlerde toplam <b>40 süreç</b> vardır. Süreçler kuralcı değildir, projeye göre uyarlanır (tailoring).</p>
<div data-w="matrix"></div>
<div class="tip">Haritada bir süreç seç. Hangi alana ve hangi odak alanına düştüğünü öğrenmek, "Bu süreç hangi aşamada yapılır?" sorularını çözmeyi kolaylaştırır.</div>
<div class="pmi">PMBOK 8, PMBOK 7'deki 8 performans alanını 7'ye indirip süreç temelli odak alanlarını (eski süreç grupları) geri getirdi. 40 süreç kuralcı değildir; ekip bunları projeye göre uyarlar.</div>
`},
{h: "Proje öncesi: iş belgeleri", html: `
<div class="two">
<div class="key"><b>İş Gerekçesi (Business Case)</b>Yönetimin projeye karar verebilmesi için gereken bilgiler: maliyetler ve faydalar, değerin nasıl yaratılacağı, başarı kriterleri.</div>
<div class="key"><b>Fayda Yönetim Planı</b>Faydaların oluşturulması, maksimize edilmesi ve sürdürülmesi süreçleri; kısa/uzun vadeli zaman çerçevesi; fayda sahibi; ölçütler; varsayımlar, kısıtlar ve riskler.</div></div>
`},
{h: "İş gerekçesindeki finansal ölçütler", html: `
<table class="t">
<tr><th>Ölçüt</th><th>Ne ölçer?</th><th>Günlük hayat</th><th>İki proje arasında</th></tr>
<tr><td><b>NPV</b> Net Bugünkü Değer</td><td>Gelecekteki nakit akışlarının bugünkü değeri ile yatırım maliyeti farkı</td><td>Gelecek kira gelirlerini bugüne indirip evin gerçek kazancını hesaplamak</td><td>Yüksek olan</td></tr>
<tr><td><b>Geri Ödeme Süresi</b></td><td>Yatırımın kaç yılda geri kazanılacağı</td><td>"Dükkân sermayemi kaç yılda çıkarırım?"</td><td><b>Kısa</b> olan</td></tr>
<tr><td><b>ROI</b> Yatırım Getirisi</td><td>Kârın yatırım maliyetine oranı</td><td>Bankadaki faiz oranına bakmak</td><td>Yüksek olan</td></tr>
<tr><td><b>ROACE</b></td><td>Kullanılan ortalama sermaye üzerinden getiri</td><td>Restoranın mutfak, masa ve personelle ne kadar kazandığı</td><td>Yüksek olan</td></tr>
<tr><td><b>IRR</b> İç Verimlilik Oranı</td><td>Beklenen yıllık getiri oranı</td><td>İki fonun yıllık getirisini karşılaştırmak</td><td>Yüksek olan</td></tr>
<tr><td><b>ROA</b> Varlık Getirisi</td><td>Varlıklarla üretilen kâr</td><td>Taksi sahibinin arabasıyla günde ne kazandığı</td><td>Yüksek olan</td></tr>
<tr><td><b>CBA</b> Maliyet Fayda Analizi</td><td>Toplam faydalar ile toplam maliyetleri karşılaştırır</td><td>Köprü pahalı ama ulaşım faydası daha mı büyük?</td><td>Fayda/maliyet oranı yüksek olan</td></tr></table>
<div class="tip">Kural: <b>Geri ödeme süresi hariç</b> hepsinde büyük olan seçilir. Geri ödeme süresinde kısa olan seçilir. NPV verilmişse proje süresini ayrıca düşünme; NPV süreyi zaten içerir.</div>
<div data-w="finance"></div>
`},
{h: "Proje fazları", html: `
<p>Her faz bir proje gibi düzgünce başlatılır ve kapatılır.</p>
<div class="two"><div class="key"><b>Sıralı ilişki (Sequential)</b>Fazlar birbirini takip eder, çakışmaz.</div><div class="key"><b>Üst üste binen ilişki (Overlapping)</b>Aşamalar eş zamanlı ilerler.</div></div>
<p>Ders boyunca izlenen başlatma ve planlama akışı:</p>
<div class="flow v"><span>Proje/fazın başlatılması</span><span>Paydaşların belirlenmesi</span><span>Gereksinimlerin belirlenmesi</span><span>Kapsamın tanımlanması</span><span>Kapsam yapısının oluşturulması</span><span>Kaynak tahmini</span><span>Zaman çizelgesinin geliştirilmesi</span><span>Maliyet tahmini</span><span>Bütçenin belirlenmesi</span></div>
`}
]}
);
