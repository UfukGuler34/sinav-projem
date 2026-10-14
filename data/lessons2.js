window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
id: "m7", title: "Başlatma ve Kapsam Planlama", short: "Başlatma belgesi, paydaşlar, gereksinimler, kapsam, WBS, temel çizgi", mins: 25,
sections: [
{h: "Proje başlatma belgesi (Project Charter)", html: `
<ul class="checks">
<li>Projenin başlamasına <b>resmi onay</b> veren belgedir.</li>
<li>Proje yöneticisinin <b>resmi atamasını</b> gerçekleştirir.</li>
<li><b>Sponsor</b> ya da ilgili birim hazırlar; PY de katılabilir.</li>
<li>Tüm paydaşlara projenin başladığını duyurur.</li>
<li>Projeyi genel hatlarıyla tanımlar.</li></ul>
<div class="tip">"PY'ye kaynak kullanma yetkisi veren belge hangisidir?" Cevap: <b>Proje başlatma belgesi</b>. Hazırlayan ve onaylayan sponsordur, PY değil.</div>
`},
{h: "Paydaşların belirlenmesi", html: `
<p><b>Paydaş:</b> Projeyi etkileyen veya projeden etkilenen herkes. Paydaşların <b>erken aşamada</b> belirlenmesi projenin doğru yönetimi için önemlidir.</p>
<p>Paydaş kaydında şunlar tutulur: isim, pozisyon, lokasyon, iletişim bilgileri, projedeki rol, ana gereksinimler, proje aşamalarındaki etki seviyesi, dahili/harici, etki/güç/ilgi.</p>
`},
{h: "Gereksinimlerin belirlenmesi ve analizi", html: `
<ul><li>Paydaşların ihtiyaç ve gereksinimlerini belirleme, belgeleme ve yönetme sürecidir.</li>
<li><b>Gereksinim, ihtiyacın amaca uygun ifadesidir</b> (BABOK). Gereksinim <b>ihtiyacı</b> ifade eder, çözümü değil.</li>
<li>Genellikle <b>iş analistleri</b> yürütür.</li></ul>
<div class="two"><div><h4>Yöntemler</h4><ul><li>Uzman görüşü</li><li>Veri toplama: görüşmeler, odak grupları, kıyaslama, beyin fırtınası, anketler</li><li>Temsili veri: yakınlık diyagramları, zihin haritaları</li></ul></div>
<div><h4>Gereksinim türleri</h4><ul><li>İş gereksinimleri</li><li>Paydaş gereksinimleri</li><li>Çözüm gereksinimleri
<ul><li>İşlevsel (functional)</li><li>İşlevsel olmayan (non-functional)</li></ul></li><li>Geçiş gereksinimleri</li><li>Kalite gereksinimleri</li></ul></div></div>
<div class="key"><b>Gereksinim İzlenebilirlik Matrisi</b>Bir gereksinim; onu çözen iş maddesine, onu doğrulayan test senaryosuna ve onaylayan kullanıcı testine bağlanır ve bunlar üzerinden izlenir.</div>
<div class="ex">İşlevsel: "Kullanıcı şifresini e-posta ile sıfırlayabilmeli." İşlevsel olmayan: "Sayfa 2 saniyede açılmalı." Geçiş: "Eski verilerin yeni sisteme aktarılması ve kullanıcı eğitimi."</div>
`},
{h: "Kapsamın tanımlanması", html: `
<p>Proje ve ürünün ayrıntılı tanımının oluşturulmasıdır.</p>
<div class="two"><div class="key"><b>Ürün kapsamı</b>Hangi gereksinimler dahil edilecek? Çözümün belirlenmesi.</div><div class="key"><b>Proje kapsamı</b>Projede ne yapılacağını tanımlar.</div></div>
<p>Kapsam bildirimi açık, net, anlaşılır, eksiksiz ve kurallı dille yazılmalıdır. İçeriği:</p>
<div class="pills"><span>Proje kapsamı</span><span>Ürün kapsamı / teslimatlar</span><span>Kabul kriterleri</span><span>Ürün kapsamı dışında bırakılanlar</span><span>Varsayımlar</span><span>Kısıtlar</span></div>
<div class="tip">"Kapsam dışı" maddeleri yazmak kapsam kaymasını (scope creep) önlemenin en ucuz yoludur.</div>
`},
{h: "Kapsam yapısının oluşturulması: WBS", html: `
<p><b>Plan odaklı</b> projelerde <b>İş Kırılım Yapısı (İKY / WBS)</b> oluşturulur:</p>
<ul><li>İşin hiyerarşik olarak parçalara bölünmesidir.</li>
<li>En alttaki en küçük parçalar <b>İş Paketi (Work Package)</b> adını alır.</li>
<li>İş paketi herkesin anlayabileceği anlamlı bir iş parçasıdır.</li></ul>
<div data-w="wbs"></div>
<p><b>Adaptif</b> projelerde işlerin parçalanması Product Backlog üzerinden yapılır; büyük PBI'lar geliştirme tarihi yaklaştıkça refinement ile bölünür.</p>
<div class="key"><b>İKY Sözlüğü (WBS Dictionary)</b>Karmaşık projelerde iş paketleri hakkında ayrıntılı bilgi: tanım ve açıklama, bağlı olduğu kilometre taşı, sorumlu kişiler, kaynak ihtiyaçları, kabul kriterleri. (Villa örneğinde 4.5 Havuz İnşaatı: 3–4 hafta, bağımlılık: hafriyat ve zemin onayı.)</div>
`},
{h: "Kapsam temel çizgisi", html: `
<div class="formula">Kapsam Bildirimi + İKY + İKY Sözlüğü <b>+ sponsor onayı</b> = Kapsam Temel Çizgisi</div>
<p>Temel çizgi onaylandıktan sonra yalnızca resmi değişiklik süreciyle değişir.</p>
`},
{h: "Kaynakların tahmini", html: `
<p>Kapsamın gerçekleştirilmesi için gereken ekip, malzeme, ekipman ve tedarik türlerinin ve miktarlarının tahminidir.</p>
<div class="key"><b>Kaynak Kırılım Yapısı</b>Kaynakların kategori ve türüne göre hiyerarşik gösterimi. Örnek: Proje → Personel (Rol 1, 2, 3), Malzeme, Ekipman.</div>
`}
]},

{
id: "m8", title: "Zaman Çizelgesi", short: "Aktiviteler, bağımlılıklar, tahmin yöntemleri, PERT, sıkıştırma", mins: 30,
sections: [
{h: "Aktivitelerin tanımlanması", html: `
<ul><li>İş paketleri <b>aktivitelere</b> bölünür.</li>
<li>Aktivite tek başına yönetilebilir; süresi, kaynak gereksinimi ve maliyeti tahmin edilebilir, atanabilir iş parçasıdır. Çalışmanın temel birimidir.</li>
<li><b>Aktivite listesi:</b> Aktivite no, İKY no, aktivite adı, proje takvimi, zorunlu tarihler, mantıksal ilişkiler (öncül, ardıl).</li></ul>
<div class="key"><b>Kilometre taşı (Milestone)</b>Önemli bir aşama veya çıktının tamamlandığını gösteren kontrol noktası. <em>Süresi 0 gündür</em>. İlerleme takibi, raporlama, onay ve teslim noktaları için kullanılır. WBS'deki önemli teslimatlar, zorunlu onay noktaları, sözleşmesel/yasal tarihler ve faz geçişlerinden oluşturulur.</div>
<div class="key"><b>Yaklaşan dalga planlaması (Rolling Wave)</b>Yakın dönem ayrıntılı, uzak dönem üst seviyede planlanır; proje ilerledikçe detaylandırılır. Amaç belirsizliği azaltmak, değişime uyum, planlama maliyetini optimize etmek, gerçekçi plan.</div>
`},
{h: "Aktivitelerin sıralanması", html: `
<div data-w="deps"></div>
<table class="t"><tr><th>İlişki</th><th>Mantık</th><th>Villa örneği</th></tr>
<tr><td><b>FS</b> Bitiş-Başlangıç</td><td>A bitmeden B başlayamaz (en yaygın)</td><td>Temel betonu bitmeden duvar örülmez</td></tr>
<tr><td><b>SS</b> Başlangıç-Başlangıç</td><td>A başladıktan sonra B başlayabilir</td><td>Duvar sıvası başlayınca tavan sıvası başlar</td></tr>
<tr><td><b>FF</b> Bitiş-Bitiş</td><td>A bitmeden B bitmiş sayılmaz</td><td>Filtrasyon testi bitmeden havuz devreye alma bitmez</td></tr>
<tr><td><b>SF</b> Başlangıç-Bitiş</td><td>A başlamadan B bitirilemez (en nadir)</td><td>Yeni güvenlik sistemi başlamadan eski sistem kapatılmaz</td></tr></table>
<h4>Bağımlılık türleri</h4>
<ul><li><b>Zorunlu</b> (mandatory, hard logic): İşin doğası gereği, fiziksel. Temel olmadan duvar olmaz.</li>
<li><b>İsteğe bağlı</b> (discretionary, tercihli): En iyi uygulama veya tercihe dayalı. Sıkıştırmada ilk değiştirilen bunlardır.</li>
<li><b>Dahili</b>: Proje içi aktiviteler arası.</li>
<li><b>Harici</b>: Proje dışı (belediye ruhsatı, tedarikçi teslimatı).</li></ul>
<div class="two"><div class="key"><b>Önde gitme (Lead)</b>Ardıl aktiviteyi <em>öne almak</em>, örtüştürmek.</div><div class="key"><b>Bekleme (Lag)</b>Ardıl aktiviteyi <em>ötelemek</em>. Örnek: beton kürü için 7 gün bekleme.</div></div>
`},
{h: "Süre tahmini", html: `
<div class="two"><div class="key"><b>Efor</b>Aktivite için gereken toplam çaba (insan-gün).</div><div class="key"><b>Süre</b>Gerekli iş günü sayısı.</div></div>
<div class="ex">10 insan-günlük aktivite: 1 kaynakla 10 günde, 2 kaynakla 5 günde biter.</div>
<div class="tip"><b>Azalan Getiriler Kanunu:</b> Kaynak eklendikçe bir noktadan sonra her yeni kaynağın katkısı azalır. 3 usta hızlı, 6 usta biraz daha hızlı, 10 ustada şantiye dar gelir ve ustalar birbirini bekler.</div>
<p><b>Süre tahminini etkileyen faktörler:</b> Kaynak sayısı, azalan verim, teknoloji (kısaltır ama öğrenme eğrisi ekler), varsayımların kaydı, parçalama seviyesi (küçük paket → doğru tahmin), bilişsel yanlılıklar (planlama yanılgısı, aşırı iyimserlik, Hofstadter yasası), taslak planın düzenlenmesi.</p>
`},
{h: "Tahminleme yöntemleri", html: `
<table class="t"><tr><th>Yöntem</th><th>Nasıl?</th><th>Doğruluk / maliyet</th></tr>
<tr><td><b>Örneksel</b> (Analogous)</td><td>Benzer tamamlanmış projelerin gerçekleşen değerleri baz alınır (yukarıdan aşağı)</td><td>En düşük doğruluk, en ucuz ve hızlı</td></tr>
<tr><td><b>Parametrik</b></td><td>Geçmiş veri ve değişkenler arası matematiksel ilişki</td><td>Verinin kalitesine bağlı</td></tr>
<tr><td><b>Aşağıdan yukarı</b> (Bottom-up)</td><td>İş küçük parçalara ayrılır, tahminler toplanır</td><td>En yüksek doğruluk, en maliyetli</td></tr>
<tr><td><b>Üç nokta</b></td><td>İyimser, en olası, kötümser</td><td>Belirsizliği hesaba katar</td></tr></table>
<div class="ex"><b>Parametrik:</b> 25 m kablo 1 saatte döşeniyorsa 1000 m kablo 1000 / 25 = <b>40 saat</b>.</div>
<div class="formula">Üçgen dağılım: t = (tO + tM + tP) / 3<br>PERT (Beta): t = (tO + 4·tM + tP) / 6<br>Standart sapma: σ = (tP − tO) / 6</div>
<div data-w="pert"></div>
<p><b>Yedek analizi:</b> Riskler için ayrılan yedek süre ve parayı belirler.</p>
`},
{h: "Planlama yaklaşımları", html: `
<ul><li><b>Konum bazlı planlama:</b> Dağınık lokasyonlu projelerde iş lokasyonlara göre planlanır.</li>
<li><b>Yalın planlama:</b> İşler "çekme" yöntemiyle ilerler; tasarım, operasyon, destek ekiplerinde yaygın.</li>
<li><b>Takvimin teslimatlara uydurulması:</b> Her aktivite bitiş tarihine göre detaylı planlanır.</li></ul>
<h4>Adaptif zaman çizelgesi</h4>
<div class="two"><div class="key"><b>Talep üzerine (Kanban / Yalın)</b>Ekip kuyruktan iş çeker, artırımlı değer yaratır.</div><div class="key"><b>Zaman dilimli (Timeboxed / Iterative)</b>Çalışma sabit dilimlere bölünür, her dilimde bir parça teslim edilir.</div></div>
`},
{h: "Kaynak optimizasyonu", html: `
<div class="two"><div class="key"><b>Kaynak dengeleme (Leveling)</b>Aşırı yükleme varsa fazla saatler sonraki günlere kaydırılır. <em>Proje bitiş tarihini etkileyebilir.</em> Genelde kritik yolu uzatır.</div>
<div class="key"><b>Kaynak düzeltme (Smoothing)</b>Bolluk kullanılarak iş daha fazla güne yayılır. <em>Bitiş tarihini etkilemez</em>, riski azaltır.</div></div>
`},
{h: "Veri analizi: what-if ve Monte Carlo", html: `
<p><b>What-if senaryo analizi:</b> Bir olayın takvimi nasıl etkileyeceğini görmek için senaryo gerçekmiş gibi takvim hazırlanır.</p>
<div class="ex">Çarşamba ve Perşembe akşamları 3'er saat mesai → haftalık kapasite 40'tan 46 saate. Kalan iş 368 saat: 368/40 = 9,2 hafta, 368/46 = 8,0 hafta. Bitiş 27 Kasım'dan 19 Kasım'a çekilir. Karar sorusu: 8 gün kazanç mesai maliyetine ve yorgunluğa değer mi?</div>
<p><b>Monte Carlo simülasyonu:</b> Her aktiviteye üç süre tahmini girilir, yazılım binlerce kez rastgele süre atar ve olası bitiş tarihlerinin olasılık dağılımını çıkarır. Sonuç tek tarih değil, olasılık bandıdır: "Projeyi %90 olasılıkla en geç 9 Haziran'da bitiririz." S eğrisi bir tarihe kadar bitmiş olma olasılığını gösterir.</p>
<div data-w="monte"></div>
`},
{h: "Zaman sıkıştırma ve temel çizgi", html: `
<table class="t"><tr><th>Teknik</th><th>Etkisi</th></tr>
<tr><td><b>Kaynak yükleme (Crashing)</b></td><td>Kritik yola kaynak eklenir. <b>Maliyeti artırır.</b></td></tr>
<tr><td><b>Paralel çalışma (Fast tracking)</b></td><td>Sıralı aktiviteler paralel yapılır. <b>Riski artırır</b>, maliyeti etkilemez.</td></tr>
<tr><td>Kapsam azaltma</td><td>Paydaş onayı gerekir.</td></tr>
<tr><td>Kaliteyi azaltma</td><td>Son çare; genelde kabul edilmez.</td></tr></table>
<div class="tip">Sıkıştırma <b>yalnızca kritik yoldaki</b> aktivitelere uygulandığında bitişi kısaltır. Fast tracking genelde isteğe bağlı (discretionary) bağımlılıklarda yapılır.</div>
<p><b>Gantt çizelgesi:</b> Aktiviteleri zaman ekseninde çubuk olarak gösterir; bağımlılıklar ve kritik yol işaretlenebilir.</p>
<div class="formula">Zaman çizelgesi + sponsor onayı = Zaman Çizelgesi Temel Çizgisi</div>
`},
{h: "Adaptif projelerde izleme ve kontrol", html: `
<p>Zaman çizelgesi alanının 3 süreci: Yönetimin planlanması · Çizelgenin geliştirilmesi · İzleme ve kontrol. Çevik yaklaşımda izleme şunlarla ilgilidir:</p>
<ul><li>Teslim edilip kabul edilen iş miktarını döngü tahminleriyle karşılaştırmak</li>
<li>Süreci iyileştirmek için retrospektifler yapmak</li>
<li>Kalan işi (backlog) yeniden önceliklendirmek</li>
<li>Döngü başına teslimatların üretilme, doğrulanma ve kabul hızını (<b>velocity</b>) belirlemek (döngü genelde 2 hafta veya 1 ay)</li>
<li>Çizelgenin değiştiğini belirlemek ve değişiklikleri yönetmek</li></ul>
<div class="ex">Backlog'da 120 hikaye puanı kaldı, ekip hızı sprint başına 20 puan → yaklaşık <b>6 sprint</b> daha gerekir.</div>
`}
]},

{
id: "m9", title: "Kritik Yol ve Bolluk", short: "İleri/geri hesaplama, toplam ve serbest bolluk, interaktif ağ", mins: 25,
sections: [
{h: "Kavramlar", html: `
<p><b>Zaman çizelgesi ağ analizi:</b> Bağımlılık ağları kaynaklara atanarak çizelge oluşturulur. Genelde en erken bitiş tarihi amaçlanır.</p>
<div class="keys">
<div class="key"><b>İleriye doğru hesaplama (Forward pass)</b>Erken başlangıç (ES) ve erken bitiş (EF) bulunur.</div>
<div class="key"><b>Geriye doğru hesaplama (Backward pass)</b>Geç başlangıç (LS) ve geç bitiş (LF) bulunur.</div>
<div class="key"><b>Toplam bolluk (Total float)</b>Aktivitenin <em>proje bitişini geciktirmeden</em> geciktirilebileceği süre. Yol üzerinde ortak kullanılır. TF = LS − ES.</div>
<div class="key"><b>Serbest bolluk (Free float)</b>Aktivitenin <em>hiçbir ardılı oynatmadan</em> geciktirilebileceği süre. FF = ardılın ES'i − kendi EF − 1 (1. gün kuralıyla).</div>
<div class="key"><b>Kritik yol</b>En uzun yol. Üzerindeki aktivitelerin bolluğu 0'dır; proje süresini belirler.</div></div>
<div class="formula">Ders kuralı: Başlangıç 1. günde başlar.<br>Erken Bitiş = Erken Başlangıç + Süre − 1<br>Ardılın ES'i = Öncülün EF'i + 1</div>
<div class="pmi">Bazı kaynaklar 0. gün kuralını kullanır (EF = ES + Süre). İki kural da aynı bolluk değerlerini verir; yalnızca tarihler 1 kayar. Sınavda hangi kuralın kullanıldığına bak.</div>
`},
{h: "Adım adım kritik yol metodu", html: `
<ol class="num">
<li>Bitiş = Başlangıç + süre − 1 ile erken başlangıç ve erken bitişleri bulun.</li>
<li>Yolları ve uzunluklarını bulun.</li>
<li>Kritik yolu (en uzun) bulun ve uzunluğunu not alın. Kritik yoldaki her aktivitenin bolluğu sıfırdır.</li>
<li>Her yolun uzunluğunu kritik yoldan çıkarın; bu, sadece o yola ait aktivitelerin bolluğudur.</li>
<li>ES + bolluk = LS, EF + bolluk = LF.</li>
<li>Birden fazla yola ait aktivitelerin bolluğu, küçük olandır.</li></ol>
`},
{h: "İnteraktif ağ: ders örnekleri", html: `
<p>Örneği seç, aktivitelerin sürelerini değiştir veya bir aktiviteyi geciktir. Kritik yol ve bolluklar anında yeniden hesaplanır.</p>
<div data-w="cpm"></div>
`},
{h: "Ders soruları çözümlü", html: `
<p>Ağ: A(5) → B(5) → C(5) → E(5); A → D(5) → E; A → F(20). Yollar: A-B-C-E = 20, A-D-E = 15, <b>A-F = 25 (kritik)</b>.</p>
<table class="t"><tr><th>Aktivite</th><th>Toplam bolluk</th><th>Serbest bolluk</th></tr>
<tr><td>A</td><td>0</td><td>0</td></tr><tr><td>B</td><td>5</td><td>0</td></tr><tr><td>C</td><td>5</td><td>0</td></tr>
<tr><td>D</td><td>10</td><td>5</td></tr><tr><td>E</td><td>5</td><td>5</td></tr><tr><td>F</td><td>0</td><td>0</td></tr></table>
<ul><li><b>B 5 gün gecikirse:</b> A-B-C-E = 25 olur; C ve E'nin toplam ve serbest bolluğu 0 olur, C ve E kritik yola girer.</li>
<li><b>B 1 gün geç başlarsa:</b> C: toplam 4, serbest 0. E: toplam 4, serbest 4.</li></ul>
<div class="tip">Serbest bolluk, toplam bolluktan büyük olamaz. Bir yolda ortak bolluk varsa, genellikle yolun <b>son</b> aktivitesinde serbest bolluk görünür.</div>
`}
]},

{
id: "m10", title: "Maliyet, Bütçe ve Yedekler", short: "Maliyet tipleri, yedekler, maliyet temel çizgisi, CapEx/OpEx", mins: 15,
sections: [
{h: "Maliyetlerin tahmini", html: `
<p>Her aktivitenin maliyeti kaynak tahminleri de kullanılarak tahmin edilir.</p>
<table class="t"><tr><th>Tip</th><th>Anlamı</th><th>Örnek</th></tr>
<tr><td><b>Sabit</b></td><td>Koşullar ne olursa olsun belli, genelde tek seferlik</td><td>Kurulum maliyeti</td></tr>
<tr><td><b>Değişken</b></td><td>İşin yapılış şekli, uzaması, kısalmasına göre değişir</td><td>Maaşlar, malzeme</td></tr>
<tr><td><b>Doğrudan</b></td><td>İşi yapmak için doğrudan harcanan</td><td>Maaşlar, malzeme</td></tr>
<tr><td><b>Dolaylı</b></td><td>Doğrudan harcanmayan, dolaylı oluşan</td><td>Vergi, genel giderler</td></tr></table>
`},
{h: "Yedekler", html: `
<div class="two">
<div class="key"><b>Beklenmedik durum yedeği (Contingency Reserve)</b>Risk listesinde yer alan, <em>belirlenmiş</em> riskler için. <b>Bilinen bilinmeyenler</b> (known-unknowns). Maliyet temel çizgisine dahildir; PY kontrol eder.</div>
<div class="key"><b>Yönetim yedeği (Management Reserve)</b>Belirleyemediğimiz riskler mutlaka vardır diye ayrılır. <b>Bilinmeyen bilinmeyenler</b> (unknown-unknowns). Temel çizgide yoktur, bütçededir; kullanımı yönetim onayı ister.</div></div>
<div class="formula">Maliyet Temel Çizgisi = Aktivite maliyetleri + Beklenmedik durum yedekleri<br>Bütçe = Maliyet Temel Çizgisi + Yönetim yedekleri</div>
<p>Yedekler bazı projelerde temel çizgi ve bütçeye dahil edilip birlikte yönetilir, bazılarında ayrı yönetilir. Yönetim yedekleri yalnızca hesaplanmamış riskler ortaya çıkarsa kullanılır.</p>
`},
{h: "Bütçenin katmanları: örnek", html: `
<div data-w="budget"></div>
<p><b>Aktivite:</b> tahminin başladığı en küçük adım. <b>İş paketi:</b> WBS'in en alt teslimatı, aktivitelerin toplamı. <b>Kontrol hesabı:</b> performansın ölçüldüğü yönetim noktası, iş paketlerini toplar. Üç seviyede de toplam aynıdır.</p>
<div class="formula">Maliyet temel çizgisi = 9.700 + 1.500 + 970 + 150 = €12.320<br>Bütçe = 12.320 + 1.500 yönetim yedeği = €13.820</div>
<div class="formula">Maliyet tahmini + sponsor onayı = Maliyet Temel Çizgisi</div>
`},
{h: "CapEx ve OpEx", html: `
<div class="two"><div class="key"><b>Yatırım harcamaları (CapEx)</b>Fiziksel varlıkların satın alınması, yükseltilmesi veya bakımı: mülk, bina, ekipman, teknoloji.</div>
<div class="key"><b>Operasyonel harcamalar (OpEx)</b>Günlük faaliyetlerin süregelen maliyetleri: ücretler, kira, kamu hizmetleri, idare, reklam.</div></div>
`}
]},

{
id: "m11", title: "Kazanılmış Değer (EVM)", short: "PV, EV, AC, CV, SV, CPI, SPI, EAC, TCPI, hesap makinesi", mins: 30,
sections: [
{h: "Dört temel değer", html: `
<table class="t"><tr><th>Kısaltma</th><th>Ad</th><th>Tanım / nasıl bulunur</th></tr>
<tr><td><b>PV</b></td><td>Planlanmış Değer</td><td>t anında bitmesi <em>planlanmış</em> işlerin bütçesi. PV = BAC × planlanan %</td></tr>
<tr><td><b>EV</b></td><td>Kazanılmış Değer</td><td>t anında <em>bitmiş</em> işlerin bütçesi. EV = BAC × gerçekleşen %</td></tr>
<tr><td><b>AC</b></td><td>Gerçekleşen Maliyet</td><td>Gerçekte harcanan para. Soruda verilir.</td></tr>
<tr><td><b>BAC</b></td><td>Tamamlanmadaki Bütçe</td><td>Projenin tüm bütçesi (maliyet temel çizgisi). Verilir.</td></tr></table>
<div class="tip">PV ve EV'nin ikisi de <b>bütçe rakamıyla</b> hesaplanır, harcamayla değil. AC asla formülle bulunmaz, her zaman verilir.</div>
`},
{h: "Varyans ve indeksler", html: `
<div class="formula">CV = EV − AC &nbsp;&nbsp; SV = EV − PV<br>CPI = EV / AC &nbsp;&nbsp; SPI = EV / PV</div>
<table class="t"><tr><th></th><th>Pozitif / &gt; 1</th><th>0 / = 1</th><th>Negatif / &lt; 1</th></tr>
<tr><td>CV / CPI</td><td>Bütçenin altında</td><td>Bütçede</td><td>Bütçe aşımı</td></tr>
<tr><td>SV / SPI</td><td>Planın önünde</td><td>Plana uygun</td><td>Planın gerisinde</td></tr></table>
<div class="tip">Formüllerin hepsi <b>EV ile başlar</b>. Maliyetle ilgili olanlar AC'yi, zamanla ilgili olanlar PV'yi kullanır. Sonuç negatif veya 1'den küçükse kötü haber.</div>
<div class="ex">CPI = 0,67 demek: Harcanan her 1 lira için 0,67 liralık değer kazanılmış, yani bütçe aşımı var.</div>
`},
{h: "Tahminler: EAC, ETC, VAC", html: `
<table class="t"><tr><th>Durum</th><th>EAC formülü</th></tr>
<tr><td>Harcama performansı böyle devam edecekse (tipik)</td><td><b>EAC = BAC / CPI</b></td></tr>
<tr><td>Tek seferlik aşım oldu (örneğin bir kaza), bundan sonra plana dönülecek (atipik)</td><td><b>EAC = AC + (BAC − EV)</b></td></tr>
<tr><td>Tahminler geçersiz, yeniden bütçeleme gerekiyor</td><td><b>EAC = AC + aşağıdan yukarı ETC</b></td></tr>
<tr><td>Hem CPI hem SPI etkili devam edecek; zamana kesin uyulmalı</td><td><b>EAC = AC + (BAC − EV) / (CPI × SPI)</b></td></tr></table>
<div class="pmi">Ders notunda yer almayan ama PMI'ın standart formülleri:<br><b>ETC = EAC − AC</b> (kalan işi bitirmek için gereken tahmini para)<br><b>VAC = BAC − EAC</b> (proje sonunda beklenen bütçe farkı; negatifse aşım)</div>
`},
{h: "TCPI: Kalan iş için gereken performans", html: `
<div class="formula">Bütçenin gerisindeyseniz (BAC hedef): TCPI = (BAC − EV) / (BAC − AC)<br>Bütçeyi aşmışsanız (EAC hedef): TCPI = (BAC − EV) / (EAC − AC)</div>
<p>Yorum: <b>&gt; 1</b> bu şekilde tamamlamak zor; <b>= 1</b> değişiklik gerekmeden devam; <b>&lt; 1</b> kolaylıkla tamamlanır.</p>
<div class="tip">Pay hep "kalan iş" (BAC − EV), payda hep "kalan para"dır. Kalan iş kalan paradan büyükse TCPI 1'i geçer: kalan işi daha verimli yapman gerekir.</div>
`},
{h: "EVM hesap makinesi", html: `<p>Değerleri gir; tüm göstergeler, yorumlarıyla birlikte hesaplanır. Ders sorularını burada kontrol edebilirsin.</p><div data-w="evm"></div>`},
{h: "Ders soruları çözümlü", html: `
<details><summary>12 ay, BAC 1.000.000; 6. ay, plana göre %40 iş bitti, AC 600.000</summary><p>PV = 1.000.000 × 6/12 = <b>500.000</b>, EV = 1.000.000 × %40 = <b>400.000</b>, AC = <b>600.000</b>. CPI = 0,67 → bütçe aşımı. SPI = 0,8 → geride.</p></details>
<details><summary>10 paket × 100.000; 3 ayda 3 paket planlanmış, 2 paket bitti, 300.000 harcandı</summary><p>PV = 300.000, EV = 200.000, AC = 300.000.</p></details>
<details><summary>1.000.000 bütçe, 8 ay; 2. ay sonunda 300.000 harcandı, 150.000'lik iş bitti</summary><p>PV = 1.000.000 × 2/8 = 250.000, EV = 150.000, AC = 300.000.</p></details>
<details><summary>10 paket aylık; ilk 3 paket 120.000, diğerleri 70.000. 5. ay sonunda 4 paket 430.000 ile bitti</summary><p>PV = 3×120.000 + 2×70.000 = 500.000. EV = 3×120.000 + 70.000 = 430.000. AC = 430.000. SPI = 0,86 → geride; CPI = 1 → bütçe dahilinde.</p></details>
<details><summary>Ali'nin bahçe duvarları: 4 duvar × 1 hafta × 100.000. 1. hafta sonu %80, 100.000 harcandı</summary><p>PV = 100.000, EV = 80.000, AC = 100.000. SPI = 0,8 geride, CPI = 0,8 aşım. 2. hafta sonu: 1. duvar %100, 2. %60, 3. %30 → EV = 190.000, PV = 200.000, SPI = 0,95 (geride ama kontrol edilebilir).</p></details>
<details><summary>EAC: BAC 10.000.000, 12 ay, 6. ay, %40 bitti, AC 6.000.000</summary><p>EV = 4.000.000, CPI = 0,667. EAC = BAC/CPI = <b>15.000.000</b>.</p></details>
<details><summary>EAC: BAC 5.000.000, kaza oldu, önlem alındı. AC 2.000.000, EV 1.750.000</summary><p>Tek seferlik: EAC = AC + (BAC − EV) = 2.000.000 + 3.250.000 = <b>5.250.000</b>.</p></details>
<details><summary>EAC: aynı proje, ekip kalan iş için 4.000.000 hesapladı</summary><p>EAC = AC + ETC = 2.000.000 + 4.000.000 = <b>6.000.000</b>.</p></details>
<details><summary>EAC: aynı proje, PV 2.250.000, zaman toleransı yok</summary><p>CPI = 0,875, SPI = 0,778. EAC = 2.000.000 + 3.250.000 / (0,875 × 0,778) ≈ <b>6.775.510</b>.</p></details>
<details><summary>TCPI: 24 ay, BAC 2.000.000; 12. ay, AC 1.100.000, %60 bitti</summary><p>EV = 1.200.000. TCPI = (2.000.000 − 1.200.000) / (2.000.000 − 1.100.000) = 800.000 / 900.000 = <b>0,89</b> → aynı şekilde devam edebiliriz.</p></details>
<details><summary>TCPI (EAC ile): BAC 1.000.000, EV 400.000, AC 600.000</summary><p>CPI = 0,667, EAC = 1.500.000. TCPI = 600.000 / 900.000 = <b>0,67</b>.</p></details>
`}
]},

{
id: "m12", title: "Yönetişim Performans Alanı", short: "Yönetim planı, dokümanlar, değişiklik yönetimi, ADKAR, kapanış", mins: 25,
sections: [
{h: "Alanın süreçleri ve odağı", html: `
<p>9 süreç: Proje/fazın başlatılması · Planların entegrasyonu ve hizalanması · Kaynak tedariğinin planlanması · Yürütmenin yönetilmesi · Kalite güvencesinin yönetilmesi · Bilgi birikiminin yönetilmesi · Performansın izlenmesi ve kontrolü · Değişikliklerin değerlendirilmesi ve uygulanması · Projenin/fazın kapatılması.</p>
<ul class="checks"><li>Karar mekanizması, eşikler ve tolerans</li><li>Portföy, kurum stratejisi ve hedeflerle uyum</li><li>Diğer performans alanlarının entegrasyonu</li><li>Değişiklik yönetimi</li><li>Proje başarı kriterleri</li><li>Öngörülü ve büyük projelerde sıkı, adaptif projelerde daha hafif</li></ul>
<div class="tip">PMBOK 8'de eski "Entegrasyon Yönetimi"nin yerini büyük ölçüde <b>Yönetişim</b> alanı alır. Başlatma, değişiklik ve kapanış burada.</div>
`},
{h: "Proje yönetim planı ve dokümanlar", html: `
<div class="three">
<div><h4>Alt planlar</h4><ul><li>Kapsam yönetim planı</li><li>Gereksinim yönetim planı</li><li>Zaman çizelgesi yönetim planı</li><li>Finansal yönetim planı</li><li>Kalite yönetim planı</li><li>Kaynak yönetim planı</li><li>İletişim yönetim planı</li><li>Risk yönetim planı</li><li>Tedarik yönetim planı</li><li>Paydaş katılım planı</li></ul></div>
<div><h4>Temel çizgiler</h4><ul><li>Kapsam temel çizgisi</li><li>Zaman çizelgesi temel çizgisi</li><li>Maliyet temel çizgisi</li></ul><p><small>Üçü birlikte <b>performans ölçüm temel çizgisi</b>ni oluşturur.</small></p></div>
<div><h4>Ek bileşenler</h4><ul><li>Değişim yönetimi planı</li><li>Yapılandırma yönetimi planı</li><li>Performans ölçüm temel çizgisi</li><li>Proje yaşam döngüsü</li><li>Geliştirme yaklaşımı</li><li>Yönetim incelemeleri</li></ul></div></div>
<p><b>Proje dokümanları</b> (planın parçası değildir): varsayım günlüğü, değişiklik günlüğü, sorun günlüğü, öğrenilen dersler kaydı, risk kaydı ve raporu, paydaş kaydı, gereksinim belgeleri, izlenebilirlik matrisi, kilometre taşı listesi, faaliyet listesi, süre ve maliyet tahminleri, tahminlerin temeli, kaynak takvimleri, ekip tüzüğü, kalite metrikleri ve raporu, test belgeleri...</p>
<div class="tip">Plan "nasıl yöneteceğiz" der, dokümanlar "şu an ne durumdayız" der. Risk kaydı, sorun günlüğü ve değişiklik günlüğü <b>doküman</b>dır.</div>
`},
{h: "Yönetişim yapıları ve göstergeler", html: `
<div class="two"><div class="key"><b>Yapısal yönetişim</b>Sponsor, PMO, yönetişim kurulu, destek veren yöneticiler.</div><div class="key"><b>Öz yönetişim</b>Kendini yönetme; adaptif projelerde daha fazla.</div></div>
<div class="key"><b>Yönetişim Kurulu (Project Board / Steering Committee)</b>Proje denetimini sağlar; sponsorlar, üst yöneticiler ve PMO kaynaklarını içerebilir. Önemli çıktıları gözden geçirir, kararlar için rehberlik sağlar.</div>
<table class="t"><tr><td><b>Öncü göstergeler</b> (Leading)</td><td>Olası sorunları <em>erken</em> tespit eden trend ve erken uyarılar.</td></tr>
<tr><td><b>Gecikmeli göstergeler</b> (Lagging)</td><td>Olup bittikten sonra ölçülen sonuçlar; geçmiş performansı değerlendirir.</td></tr>
<tr><td><b>SMART kriterler</b></td><td>Simple (Specific), Measurable, Achievable, Relevant, Time-based hedefler.</td></tr>
<tr><td><b>Tedarik stratejisi</b></td><td>Kaynakların iç, dış veya karma temin edilmesine karar.</td></tr></table>
<div class="ex">Öncü: "Açık risk sayısı artıyor", "Sprint hızı düşüyor". Gecikmeli: "Proje %12 bütçe aştı", "Teslimatta 30 hata çıktı".</div>
`},
{h: "Değişikliklerin değerlendirilmesi ve uygulanması", html: `
<p><b>Değişiklik isteği:</b> Bir belgeyi, teslimatı veya temel çizgiyi değiştirmek için yapılan <b>resmi ve yazılı</b> öneri. Türleri:</p>
<table class="t"><tr><td><b>Düzeltici eylem</b></td><td>Mevcut performansı plana uyumlu hale getirir (sapma oldu, düzelt).</td></tr>
<tr><td><b>Önleyici eylem</b></td><td><em>Gelecekteki</em> performansın plana uyumunu sağlar (sapma olmasın).</td></tr>
<tr><td><b>Kusur giderme</b></td><td>Uygunsuz ürünün veya bileşenin düzeltilmesi.</td></tr>
<tr><td><b>Güncelleme</b></td><td>Resmi kontrol edilen belge ve planlara içerik ekleme/değişiklik.</td></tr></table>
<p>Öngörülü yönetimde hiçbir değişiklik sürece girmeden projeye dahil edilmez. Örnek süreç:</p>
<div data-w="change"></div>
<div class="tip">Klasik sınav senaryosu: Müşteri ekibe doğrudan yeni bir özellik ister. Doğru ilk adım ekibin yapması değil, <b>değişiklik isteği oluşturup etki analizi</b> yapmaktır. Adaptif projede ise istek <b>Product Backlog'a</b> eklenir ve ürün sahibi önceliklendirir.</div>
`},
{h: "ADKAR değişim modeli", html: `
<p>Prosci ADKAR®, bireyin değişmek için geçmesi gereken beş aşama:</p>
<div class="flow"><span><b>A</b>wareness<small>Farkındalık</small></span><span><b>D</b>esire<small>İstek</small></span><span><b>K</b>nowledge<small>Bilgi</small></span><span><b>A</b>bility<small>Yapabilme</small></span><span><b>R</b>einforcement<small>Pekiştirme</small></span></div>
`},
{h: "Proje ya da faz kapanışı", html: `
<div class="two"><div><h4>Öngörülü projelerde</h4><ul><li>Tüm yükümlülüklerin yerine getirildiğinden emin olmak</li><li>Doküman ve planları arşivlemek</li><li>Alınan dersler dokümantasyonu</li><li>Sözleşmelerin kontrolü</li><li>Operasyona devir</li><li>Paydaş memnuniyeti, performans ölçümü</li><li>Kapanış raporu</li><li>Kurumsal süreç dokümanlarını güncellemek</li><li>Kaynakları serbest bırakmak</li></ul></div>
<div><h4>Adaptif projelerde</h4><ul><li>Öncelikli backlog maddelerinin tamamlandığını ve kabul kriterlerinin karşılandığını kontrol</li><li>Tüm maddeler için resmi kabul</li><li>Kapanmamış sorun kalmaması</li><li>Takım içi bilgi paylaşımı</li><li>Alınan dersler ve retrospektif</li></ul></div></div>
<h4>Erken ya da mecburi kapanış</h4>
<ul><li>Gereksinimler değişir; ürün artık uygulanabilir değildir (dahili: iş modeli değişir, harici: yasal değişiklik)</li><li>Ürün artık istenmez</li><li>Engellerle karşılaşılır, finansal destek kalmaz</li><li>Önemli riskler başarıyı imkânsız kılar</li></ul>
<div class="tip">Proje erken iptal edilse bile <b>kapanış süreci yapılır</b>: alınan dersler, arşiv ve kaynakların serbest bırakılması atlanmaz.</div>
`}
]}
);
