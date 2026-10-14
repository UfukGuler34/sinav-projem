window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
id: "m13", title: "Kalite ve Kapsam Doğrulama", short: "QA/QC, sınıf, kalitenin maliyeti, 7 araç, kontrol çizelgesi", mins: 25,
sections: [
{h: "Kalite güvencesi ve kalite kontrolü", html: `
<div class="two">
<div class="key"><b>Kalite Güvencesi (QA)</b>Proje <em>süreçlerini</em> etkili kullanmakla ilgilidir. Standartları takip ederek sonucun paydaş ihtiyaçlarını karşılayacağından emin olmak. Düzenlemeler, uyumluluk ve denetimler. Hatasız üretim için süreçlerin etkinliğini geliştirir.</div>
<div class="key"><b>Kalite Kontrolü (QC)</b>Tanımlı özellik ve eşikleri karşılayan <em>çıktılar</em> oluşturmakla ilgilidir. Ürünün kalitesini ölçer, doğrular.</div></div>
<div class="formula">Kalite Kontrolü <b>ürüne</b>, Kalite Güvencesi <b>sürece</b> odaklanır.</div>
<ul><li>QA proje yönetim ekibi, ayrı bir ekip veya ikisi birlikte tarafından yönetilebilir.</li>
<li>Kalite faaliyetleri ne kadar <b>erkene</b> alınırsa hataları düzeltmenin maliyeti o kadar azalır.</li>
<li>Çevik yönetim kaliteyi <b>her döngüde</b> kontrol eder: review ile ürün, retrospective ile süreç.</li></ul>
`},
{h: "Kalite ve sınıf", html: `
<ul><li>Ürünün sahip olduğu özellikler <b>sınıfını</b> (grade) belirler.</li>
<li>Bu özellikleri ne kadar başarılı yerine getirdiği <b>kalitesini</b> belirler.</li>
<li>Gereksinimlerde olmayan özellikler kaliteyi etkilemez.</li>
<li>Az özellikli bir ürün <b>düşük sınıftır</b> diyebiliriz, <b>kalitesizdir</b> diyemeyiz.</li></ul>
<div class="tip">Düşük sınıf kabul edilebilir bir tercih olabilir; düşük kalite asla kabul edilmez. Gereksinimde olmayan "bonus" özellik eklemek (gold plating) kaliteyi artırmaz, riski artırır.</div>
`},
{h: "Kalitenin maliyeti", html: `
<p>Kalite faaliyetleri: <b>önleme, tetkik, düzeltme.</b></p>
<div class="two">
<div><h4>Uymanın maliyeti (Conformance)</h4><p><small>Proje esnasında hatalardan kaçınmak için</small></p>
<p><b>Önleme:</b> eğitim, süreçlerin belgelenmesi, teçhizat, işi doğru yapmak için zaman.</p>
<p><b>Değerlendirme:</b> test, fire tespiti, tetkikler, araştırmalar.</p></div>
<div><h4>Uymamanın maliyeti (Nonconformance)</h4><p><small>Hatalar yüzünden oluşan maliyet</small></p>
<p><b>İçsel hata</b> (proje içinde bulunan): yeniden yapma, ıskarta, stok maliyeti.</p>
<p><b>Dışsal hata</b> (müşteri bulur): tazminat, garanti, iş kaybı.</p></div></div>
<div data-w="coq"></div>
<p><b>Kalite ölçütleri</b> hedeflerin hangi ölçütle ölçülüp kabul edileceğini belirler: plan kaç kez değişti, kontrolde başarısız fonksiyon sayısı, teslimattaki sorun miktarı, müşteri memnuniyet indeksi, hedef arıza oranı.</p>
`},
{h: "Veri analizi araçları", html: `
<table class="t">
<tr><td><b>Kök neden analizi</b></td><td>Sapmaya, kusura veya riske neden olan etmeni bulur. Bir kök neden birden fazla sorunla ilişkili olabilir.</td></tr>
<tr><td><b>Balık kılçığı</b> (Ishikawa, neden-sonuç)</td><td>Sorunu kök nedenine kadar izleyen görsel. Kılçıklar: ekipman, süreçler, insanlar, yönetim...</td></tr>
<tr><td><b>Histogram</b></td><td>Sayısal verilerin çubuk grafiği; sorunların sınıflandırılması.</td></tr>
<tr><td><b>Pareto şeması</b></td><td>En öncelikli alanları bulur: sorunların %80'i nedenlerin %20'sinden gelir.</td></tr>
<tr><td><b>Dağılım şeması</b> (Scatter)</td><td>İki verinin ilişkisini gösterir. Testler ilerledikçe hata sayısının düşmesi beklenir.</td></tr>
<tr><td><b>Kontrol çizelgesi</b></td><td>Sürecin zaman içindeki kararlılığını gösterir.</td></tr></table>
<h4>Pareto: gömlek atölyesi</h4>
<div data-w="pareto"></div>
`},
{h: "Kontrol çizelgesi ve yedi kuralı", html: `
<ul><li>Öngörülebilir sonuçlu, tekrarlayan süreçler için idealdir.</li>
<li>Ortalama, kontrol sınırları ve spesifikasyon sınırlarını gösterir.</li>
<li><b>Yedi kuralı:</b> Art arda 7 nokta ortalamanın hep aynı tarafında kalıyor veya sürekli artıyor/azalıyorsa bu tesadüf değildir. Noktalar sınırlar içinde olsa bile özel bir neden vardır, araştırılmalıdır.</li></ul>
<div data-w="control"></div>
<p><b>Kalite kontrol araçları:</b> İstatistiksel örnekleme, denetleme ve testler, kontrol çizelgeleri, kontrol listeleri.</p>
<p><b>Uyum gereksinimleri:</b> Hükümet düzenlemeleri, kurumsal politikalar, ürün/proje kalite gereksinimleri. Uyum eylemleri: kategorileri sınıflandır, tehditleri belirle, uyumsuzluğun sonuçlarını analiz et, yaklaşımı belirle.</p>
`},
{h: "Kapsam performans alanı: doğrulama", html: `
<p>Kapsam alanının 6 süreci: Kapsam yönetiminin planlanması · Gereksinimlerin belirlenmesi ve analizi · Kapsamın tanımlanması · Kapsam yapısının oluşturulması · Kapsamın izlenmesi ve kontrolü · <b>Kapsamın doğrulanması</b>.</p>
<div class="key"><b>Kapsamın doğrulanması (Validate Scope)</b>Ürünün testleri tamamlanıp doğrulandıktan sonra <em>müşteri tarafından</em> incelenip kabul edilmesi. Müşteri tanımladığı kapsamın doğru yerine getirilip getirilmediğine bakar: işe uygun mu? Kullanıcı Kabul Testleri bu aşamadadır. <em>Amaç hata bulmak değil, işe uygunluğu kontrol etmektir.</em></div>
<table class="t"><tr><th></th><th>Kalite kontrolü</th><th>Kapsam doğrulama</th></tr>
<tr><td>Kim?</td><td>Proje ekibi (iç)</td><td>Müşteri / sponsor</td></tr>
<tr><td>Ne zaman?</td><td>Önce</td><td>QC'den sonra</td></tr>
<tr><td>Soru</td><td>Doğru mu yapıldı? (doğruluk)</td><td>Kabul edilebilir mi? (kabul)</td></tr></table>
<p><b>Çevik kapsam yönetimi:</b> Product Backlog, Backlog Refinement, aşılmayacak süre ya da malzeme (zaman ve bütçe sabit, kapsam esner).</p>
`}
]},

{
id: "m14", title: "Paydaş ve İletişim", short: "Güç/ilgi, Salience modeli, katılım matrisi, iletişim kanalları ve modelleri", mins: 25,
sections: [
{h: "Alanın süreçleri", html: `
<p>7 süreç: Paydaşların belirlenmesi · Paydaş katılımının planlanması · İletişim yönetiminin planlanması · Paydaş katılımının yönetilmesi · İletişimin yönetilmesi · Paydaş katılımının izlenmesi · İletişimin izlenmesi.</p>
<p><b>Proje paydaşları</b> iç içe halkalar gibidir: merkezde <b>proje ekibi</b> (PY ekibi, proje ekibi, uzmanlar); ortada <b>organizasyonel paydaşlar</b> (üst yönetim, PMO, izleme komiteleri, PY); dışta <b>dış paydaşlar</b> (tedarikçiler, müşteriler, son kullanıcılar, düzenleyici kurumlar, yerel topluluklar, aile).</p>
<p><b>Paydaş listesi:</b> isim, görev, projedeki rol, iletişim bilgileri (tanımlama bilgisi); beklentiler ve etkileme potansiyeli (değerlendirme bilgisi).</p>
`},
{h: "Güç/ilgi tabloları", html: `
<p>Güç/İlgi, Güç/Etki veya Etki/Nüfuz tabloları: Projeyle ne kadar ilgileniyor? Proje üzerinde ne kadar gücü, etkisi, nüfuzu var?</p>
<div data-w="powergrid"></div>
`},
{h: "Salience (Belirginlik) modeli", html: `
<p>Paydaşları üç özelliğe göre sınıflandıran <b>dinamik</b> araç:</p>
<ul><li><b>Güç:</b> Kararları veya çıktıları etkileme yeteneği.</li><li><b>Meşruiyet:</b> İlişkinin uygunluğu, yasal veya ahlaki haklılığı.</li><li><b>Aciliyet:</b> Taleplerine ne kadar hızlı yanıt verilmesi gerektiği.</li></ul>
<div data-w="salience"></div>
<div class="tip">Güç/ilgi matrisi statiktir. Salience modeli <b>dinamiktir</b>, çünkü aciliyet zamanla değişir. Kısıtlı kaynağını hangi paydaşa harcayacağını belirlemene yardım eder.</div>
`},
{h: "Paydaş katılım değerlendirme matrisi", html: `
<p>Her paydaşın <b>mevcut (C)</b> ve <b>arzu edilen (D)</b> durumu işaretlenir, aradaki farkı kapatacak aksiyonlar belirlenir.</p>
<div data-w="engage"></div>
<p><b>Paydaş katılım planı:</b> istenen ve mevcut katılım seviyeleri, değişimin paydaşlara etkisi, paydaşlar arası ilişkiler, iletişim gereklilikleri, bilginin dili/formatı/detayı, dağıtım sıklığı ve sebebi.</p>
`},
{h: "İletişim türleri ve kanal sayısı", html: `
<ul><li>Yazılı / sözlü; resmi / gayri resmi (kurallı / kuralsız)</li>
<li>Beceriler: aktif dinleme, kültürel farklılık farkındalığı, beklenti yönetimi, ikna, motivasyon, çatışma çözümü, müzakere</li></ul>
<div class="formula">İletişim kanal sayısı = n (n − 1) / 2 &nbsp;&nbsp;<small>(n = PY dahil kişi sayısı)</small></div>
<div data-w="channels"></div>
<div class="ex">PY dahil 3 kişi → 3 kanal. Bir kişi eklenince 4×3/2 = 6, yani <b>3 kanal artar</b>. PY hariç 4 kişi → n = 5 → 10 kanal.</div>
<div class="tip">Soruda "PY hariç" yazıyorsa n'e 1 ekle. "Kaç kanal artar?" sorusunda yeni ve eski değerin farkını ver.</div>
`},
{h: "İletişim modelleri ve metotları", html: `
<div class="two"><div><h4>Temel gönderici/alıcı modeli</h4><ul><li><b>Kodlama:</b> Fikri anlaşılır dile çevirmek</li><li><b>Mesaj iletme:</b> Bir ortam üzerinden göndermek</li><li><b>Kodu çözme:</b> Mesajı anlamlı düşünceye çevirmek</li><li><b>Engelleyiciler (parazit):</b> İletimi bozan faktörler</li></ul></div>
<div><h4>Etkileşimli model</h4><ul><li><b>Alındı onayı:</b> Mesajın <em>alındığını</em> gösterir, <em>anlaşıldığı</em> anlamına gelmez.</li><li><b>Geri bildirim / yanıt:</b> Mesajın anlaşıldığı şekilde yanıt verilmesi.</li></ul>
<p><small>Kültürel farklılıklar, dil bariyerleri, önyargılar ve varsayımlar iletişimi etkiler.</small></p></div></div>
<table class="t"><tr><th>Metot</th><th>Nasıl?</th><th>Ne zaman?</th></tr>
<tr><td><b>Etkileşimli</b> (Interactive)</td><td>Karşılıklı diyalog: toplantı, görüşme, anlık mesaj, telekonferans</td><td>Ortak anlayış, acil konular, belirsizlik</td></tr>
<tr><td><b>İtme</b> (Push)</td><td>Gönderen iletir, geri bildirim beklemez: statü raporu, bülten, e-posta</td><td>Belirli kişilere bilgi</td></tr>
<tr><td><b>Çekme</b> (Pull)</td><td>Bilgi ortak alanda, isteyen alır: intranet, e-learning</td><td>Büyük bilgi, çok sayıda alıcı</td></tr></table>
<p><b>İletişim yönetim planı:</b> paylaşılacak bilgi, dil, yöntem, format; zamanlama ve sıklık; hazırlayan, hedef kişiler; araç ve teknikler. Örnek: Haftalık durum raporu her Cuma, ekibe, PY sorumlu; günlük toplantı her sabah 09:00–09:15.</p>
`}
]},

{
id: "m15", title: "Kaynak, Ekip ve Liderlik", short: "Tuckman, RACI, liderlik stilleri, motivasyon, çatışma", mins: 30,
sections: [
{h: "Alanın süreçleri", html: `<p>5 süreç: Kaynak yönetiminin planlanması · Kaynakların tahmin edilmesi · Kaynakların sağlanması · Takıma liderlik edilmesi · Kaynakların izlenmesi ve kontrolü.</p>`},
{h: "Tuckman merdiveni", html: `
<div data-w="tuckman"></div>
<p>Aşamalar her zaman doğrusal ilerlemez; takım önceki aşamalara geri dönebilir (örneğin yeni üye katılınca).</p>
`},
{h: "RACI, temel kurallar ve ekip tüzüğü", html: `
<div class="pills"><span><b>R</b> Sorumlu (işi yapan)</span><span><b>A</b> Hesap veren (onaylayan)</span><span><b>C</b> Danışılan</span><span><b>I</b> Bilgilendirilen</span></div>
<div data-w="raci"></div>
<div class="pmi">PMI kuralı: Her aktivitede <b>yalnızca bir A</b> (hesap veren) olur. R birden fazla olabilir.</div>
<p><b>Ekip temel kuralları:</b> Farklı tecrübedeki insanların uyumlu çalışması için. Örnek: anlaşmazlık önce kendi aralarında çözülür, çözülemezse PY'ye yükseltilir; herkes planı görür; PY ilk temas noktasıdır; haftalık statü toplantısına katılım zorunlu.</p>
<div class="key"><b>Ekip Başlatma Belgesi (Team Charter)</b>Ekip değerlerini, anlaşmaları ve çalışma kurallarını kaydeden belge: ortak değerler, davranış kuralları, iletişim ve araç kuralları, karar verme kuralları, performans beklentileri, çatışma çözme, toplantı zamanı ve kanalı.</div>
`},
{h: "Ekibi geliştirme ve yönetme", html: `
<p><b>Geliştirme:</b> vizyon ve hedefler, görev ve sorumluluklar, rehberlik, delegasyon, gelişim. Sürekli gelişim aşılanmalı. Sadece proje sonunda alınan dersleri toplamak bilgi yönetimine yetmez; güven ortamıyla paylaşım teşvik edilmeli.</p>
<p><b>Alınan dersler:</b> proje boyunca geliştirilir, sonunda son hali verilip arşivlenir, herkesin ulaşabileceği yerde durur.</p>
<div class="two"><div class="key"><b>Yönetim faaliyetleri</b>Süreç oluşturma, planlama, koordinasyon, ölçme, izleme.</div><div class="key"><b>Liderlik faaliyetleri</b>Motive etme, dinleme, dahil etme, geliştirme.</div></div>
<div class="two"><div><h4>Yap</h4><ul><li>İlham ver, yükümlülük değil fırsat sun</li><li>Sanal ekiplerle düzenli iletişim</li><li>Eğitim fırsatları</li><li>Öz değerlendirme anları</li></ul></div><div><h4>Yapma</h4><ul><li>Toplantı ve kesintilerle boğmak</li><li>Proje dışı işlerle oyalamak</li><li>Grup etkinliklerini zorla yaptırmak</li></ul></div></div>
<p><b>Merkezi</b> yönetimde kararlar merkezde; <b>dağıtık</b> yönetimde kararlar işi yapana dağılır (çevik).</p>
<p><b>Yüksek performanslı ekip:</b> açık iletişim, ortak anlayış, güven, iş birliği, uyum sağlama, dayanıklılık. <b>PY'nin rolü:</b> ekip kültürü, önyargıları tanıma, şeffaflık, dürüstlük, saygı, olumlu dil, destek, cesaretlendirme, başarıları kutlama.</p>
`},
{h: "Güç kaynakları ve liderlik yaklaşımları", html: `
<table class="t"><tr><td><b>Yasal</b> (Legitimate)</td><td>Pozisyondan, resmi yetkiden gelir</td></tr><tr><td><b>Zorlayıcı</b> (Coercive)</td><td>Ceza verebilme</td></tr><tr><td><b>Karizmatik</b> (Referent)</td><td>Kişisel çekicilik, saygı</td></tr><tr><td><b>Uzmanlık</b> (Expert)</td><td>Bilgi ve beceriden gelir</td></tr><tr><td><b>Ödüllendirme</b> (Reward)</td><td>Ödül verebilme</td></tr></table>
<div class="tip">Sınav mantığı: PY'nin en sağlıklı dayanağı <b>uzmanlık</b> gücüdür; ilişkiye dayalı (karizmatik) güç de etkilidir. <b>Zorlayıcı</b> güç en son başvurulan ve en az tercih edilen güçtür.</div>
<p>"Liderlik yaklaşımı kişiliğiniz değil, o anda ekibinizin ihtiyaç duyduğu davranıştır."</p>
<div data-w="leader"></div>
`},
{h: "Motivasyon modelleri", html: `
<div class="two"><div><h4>Herzberg: Hijyen ve motivatör</h4><p><b>Hijyen</b> (yoksa memnuniyetsizlik yaratır, varsa motive etmez): maaş, tatil, çalışma koşulları, sigorta, iş güvenliği.</p><p><b>Motivatör</b> (motive eder): tanınma, başarı, ödül, gelişme fırsatı, karara katılma.</p></div>
<div><h4>Daniel Pink: İçsel ve dışsal</h4><p>Dışsal faktörler belirli bir standarda kadar etkilidir; sonra içsel faktörler devreye girmelidir: <b>Otonomi, Ustalık, Amaç.</b></p>
<h4>McClelland: İhtiyaçlar teorisi</h4><p><b>Başarı, Güç, Ait olma</b> ihtiyacı. Her insanda farklı oranlarda vardır.</p></div></div>
<table class="t"><tr><th></th><th>Teori X</th><th>Teori Y</th><th>Teori Z (Ouchi)</th></tr>
<tr><td>Çalışana bakış</td><td>Çalışmaktan hoşlanmaz</td><td>Çalışmayı doğal görür</td><td>İşi yaşamın anlamlı parçası</td></tr>
<tr><td>Sorumluluk</td><td>Kaçınır</td><td>Almaya isteklidir</td><td>Takımca paylaşılır</td></tr>
<tr><td>Yönetim</td><td>Yakın denetim, ödül-ceza</td><td>Yetkilendirme, öz kontrol</td><td>Güven, ortak amaç, takım kültürü</td></tr></table>
<p><b>Duygusal zekâ bileşenleri:</b> Öz farkındalık, Öz yönetim, Sosyal farkındalık (empati, aktif dinleme), Sosyal yetenekler (uyum sağla, etkili ekip kur).</p>
`},
{h: "Çatışma yönetimi", html: `
<p>Açık ve saygılı iletişim; insanlara değil konuya; geçmişe değil şimdiye ve geleceğe odaklan.</p>
<div data-w="conflict"></div>
<p><b>Performans değerlendirme:</b> işi yapmadaki yetenek ve istek, takıma destek, davranış, gelişim, hedefler. Geri bildirim planlı veya anlık olabilir.</p>
<p><b>Uyarlanacak konular:</b> geliştirme yaklaşımı, ekibin karakteri, endüstri bağlamı, kararlarda süreklilik, uzaktan çalışma (sanal ekip), çalışan mutluluğu.</p>
`}
]},

{
id: "m16", title: "Risk", short: "Olasılık-etki, EMV, karar ağacı, yanıt stratejileri, risk ve sorun", mins: 30,
sections: [
{h: "Temel kavramlar", html: `
<p>6 süreç: Risk yönetiminin planlanması · Risklerin belirlenmesi · Risklerin analiz edilmesi · Risk yanıtlarının planlanması · Risk yanıtlarının uygulanması · Risklerin izlenmesi.</p>
<table class="t">
<tr><td><b>Fırsat / tehdit</b></td><td>Risk olumlu (fırsat) veya olumsuz (tehdit) olabilir.</td></tr>
<tr><td><b>Risk iştahı</b></td><td>Kurumun ödül karşılığında almaya istekli olduğu belirsizlik düzeyi.</td></tr>
<tr><td><b>Risk eşiği</b></td><td>Kabul edilebilir sapmanın ölçülebilir sınırı; üstündeyse aksiyon gerekir.</td></tr>
<tr><td><b>Risk maruziyeti</b></td><td>Projenin tüm risklerinin toplam potansiyel etkisi.</td></tr>
<tr><td><b>Riske dayanıklılık</b></td><td>Projenin beklenmedik olayları absorbe edip toparlanma kapasitesi.</td></tr>
<tr><td><b>Belirsizlik / kararsızlık</b></td><td>Belirsizlik: bilgi eksikliği. Kararsızlık (ambiguity): birden fazla yorum mümkün.</td></tr></table>
<div class="pmi">İştah ve eşik tanımları PMI'ın standart terminolojisinden eklendi; ders notunda başlık olarak geçiyor.</div>
`},
{h: "Risk yönetiminin planlanması", html: `
<p>Risk yönetim faaliyetlerinin nasıl yürütüleceğini tanımlar. Plan içeriği: <b>risk stratejisi, metodoloji, roller ve sorumluluklar, finansman</b> (yedek fonlar ve kullanım protokolü), <b>zamanlama</b> (ne sıklıkta, takvime dahil).</p>
<div class="ex"><b>Paydaş risk toleransı örneği (1 düşük – 5 yüksek):</b> Maliyet toleransı çok düşük (hassas), zamandaki uzama sorun değil, kapsamda orta, kalitede düşük tolerans: teslim edilen her şey istenene uygun olmalı.</div>
`},
{h: "Risklerin belirlenmesi", html: `
<ul><li><b>Kök neden analizi:</b> Temel kaynağı bularak farklı riskler belirlenir. Dikkat: hangisi <em>risk</em> (belirsizlik), hangisi <em>sorun</em> (belirlilik)?</li>
<li><b>Varsayım ve kısıt analizi:</b> Her varsayımın gerçekleşmemesi bir risktir; her kısıt gevşetilirse fırsata dönüşebilir.</li>
<li><b>SWOT:</b> Güçlü yönler fırsatlara, zayıf yönler tehditlere işaret eder.</li></ul>
<div class="key"><b>Risk kaydı (Risk Register)</b>Tanımlanan riskler, potansiyel yanıtlar, potansiyel risk sahipleri. Örnek satırlar: Bütçe aşımı (etki yüksek, olasılık orta), Kapsam kayması (yüksek/yüksek), Yasal değişiklik (yüksek/düşük).</div>
`},
{h: "Niteliksel analiz", html: `
<p>Risklerin olasılık ve etkisi belirlenir, önceliklendirilir; niceliksel analize temel olur.</p>
<div data-w="pim"></div>
<p><b>Risk kırılım yapısı:</b> kategoriler: teknik, yönetimsel, ticari, dış...</p>
<p><b>Diğer parametreler:</b> aciliyet, yakınlık, algı süresi, yönetilebilirlik, kontrol edilebilirlik, keşfedilebilirlik, bağlanabilirlik, stratejik etki, hassasiyet.</p>
`},
{h: "Niceliksel analiz", html: `
<p>Tek tek değil, risklerin <b>toplam etkisiyle</b> ilgilenir; "proje için ne kadar yedek bütçe?" gibi sorulara yanıt arar. Beklenmedik durum yedeği bilinen riskler için, yönetim yedeği listede olmayanlar için.</p>
<ul><li><b>Duyarlılık analizi – Tornado diyagramı:</b> Diğer faktörler sabitken tek bir riskin etkisi hesaplanır; en etkili risk en üstte, en uzun çubuk.</li>
<li><b>Karar ağacı:</b> Dallar, maliyet ve riskleri olan kararları/olayları; uç noktalar olumlu veya olumsuz sonuçları temsil eder.</li>
<li><b>Beklenen parasal değer (EMV):</b> Olasılık × Etki. Tehditler negatif, fırsatlar pozitif.</li></ul>
<div data-w="emv"></div>
<div class="ex">Donanım gecikmesi %20 × 350.000 = −70.000; uzman eksilmesi %30 × 200.000 = −60.000; AI uzmanı fırsatı %10 × 500.000 = +50.000. <b>EMV = −80.000 TL</b> → bütçeye 80.000 TL eklenirse bu riskler karşılanır.</div>
<div data-w="tree"></div>
`},
{h: "Risk yanıt stratejileri", html: `
<div data-w="responses"></div>
<div class="tip">"Yükselt" (escalate) risk <b>proje yöneticisinin yetki alanı dışındaysa</b> kullanılır. Sigorta ve garanti tipik <b>transfer</b>dir. Riski tamamen ortadan kaldıran plan değişikliği <b>kaçınma</b>dır.</div>
`},
{h: "Yanıt planlama terimleri", html: `
<table class="t">
<tr><td><b>Risk tetikleyicisi</b></td><td>Riskin gerçekleşmek üzere olduğunu gösteren işaret. Örnek: ana tedarikçi teslimi 1 hafta erteledi.</td></tr>
<tr><td><b>Beklenmedik durum planı</b> (Contingency)</td><td>Risk gerçekleşirse uygulanacak plan. Örnek: alternatif tedarikçiden acil sipariş.</td></tr>
<tr><td><b>Başarısızlık planı</b> (Fallback)</td><td>Yanıt istenen sonucu vermezse B planı. Örnek: alternatif de gecikirse lansman 2 hafta ötelenir.</td></tr>
<tr><td><b>Risk sahibi</b></td><td>Risk ortaya çıktığında PY'yi beklemeden çözer, sonucu PY'ye bildirir.</td></tr>
<tr><td><b>Artık risk</b> (Residual)</td><td>Yanıt uygulandıktan sonra kalan küçük risk; izleme listesine konur.</td></tr>
<tr><td><b>İkincil risk</b> (Secondary)</td><td>Yanıt uygulanırken ortaya çıkan <em>yeni</em> risk. Örnek: yeni tedarikçiyle uyumsuzluk.</td></tr></table>
<p><b>Önleyici</b> çalışmalar risk gerçekleşmeden önce uygulanır, kesindir, planda aktivite olarak yer alabilir. <b>Düzeltici</b> çalışmalar risk gerçekleştikten sonra yapılır.</p>
`},
{h: "Risk ve sorun", html: `
<div class="two"><div class="key"><b>Risk</b>Gelecekte gerçekleşme olasılığı vardır. Etkisi olumlu ya da olumsuz olabilir. Risk kaydında izlenir.</div><div class="key"><b>Sorun (Issue)</b>Olasılıktan çıkıp bugün gerçekleşmiştir, olumsuzdur. Olumsuz risk gerçekleşince ortaya çıkar. Sorun günlüğünde izlenir: kim bildirdi, etkisi ne, çözümden kim sorumlu.</div></div>
<table class="t"><tr><td><b>Engel</b> (Impediment)</td><td>İlerlemeyi yavaşlatır ama durdurmaz.</td></tr><tr><td><b>Zorluk</b> (Obstacle)</td><td>Üstesinden gelmek için stratejik yaklaşım gerektirir.</td></tr><tr><td><b>Bloke edici</b> (Blocker)</td><td>İlerlemeyi tamamen durdurur.</td></tr></table>
<p><b>İzleme:</b> Riskler ve yanıtların etkinliği izlenir; yeni riskler çıkabilir, bazıları kalkabilir. Risk listesi ve yedek bütçe sürekli güncel tutulur.</p>
`}
]},

{
id: "m17", title: "Tedarik", short: "Yap-al, SOW, RFI/RFQ/RFP, sözleşme türleri, seçim, anlaşmazlık", mins: 25,
sections: [
{h: "Tedarik süreci", html: `
<div class="flow v"><span>İş kapsamı tanımı (SOW)</span><span>Üst düzey maliyet tahmini</span><span>İhtiyacın duyurulması (RFI)</span><span>Onaylı satıcı listesi</span><span>Teklif dosyaları (RFP/RFQ)</span><span>Teklif sahipleri toplantısı</span><span>Tekliflerin değerlendirilmesi ve seçim</span><span>Müzakere ve karar</span><span>Sözleşmenin imzalanması</span></div>
<p><b>Yap ya da satın al:</b> Her iki seçenek mümkün mü? Teknik beceri, esneklik, maliyet, bağımlılık ve fikri haklar, uzmanlığa sahip olmak.</p>
<p>Satın alma kararı verilmezse tedarik sona erer. Birden fazla sözleşme varsa ayrı süreçler başlar. PY ve satın alma birimi birlikte çalışır.</p>
<p><b>Tedarik planı içeriği:</b> tedarik stratejisi, teslimat yolları, satın alma aşamaları, faz geçiş kriterleri, tedarik belgeleri, sözleşme türleri, riskler, SOW formatı, satıcı seçim kriterleri, ön yeterlilikli satıcı listesi.</p>
`},
{h: "Tedarik çalışma bildirimi (SOW)", html: `
<ul><li>Tam olarak hangi işin sözleşme kapsamında olduğunu belirler; kapsam temel çizgisine uygun olmalıdır.</li>
<li>Açık, eksiksiz, son halinde olmalıdır.</li>
<li>Kabul kriterleri: <b>performans</b> (3 saniyede 100 km), <b>fonksiyon</b> (4 bavulluk bagaj), <b>tasarım</b> (çizimlere uygun inşaat).</li>
<li>İçerik: şartnameler, miktar, çalışma yeri, performans verileri ve dönemi, kalite ölçütleri.</li></ul>
`},
{h: "Teklif belgeleri", html: `
<table class="t"><tr><td><b>RFI</b> Bilgi Talebi</td><td>Firmaları tanımak için sorular. "Bu alandaki deneyiminiz ve referanslarınız?"</td></tr>
<tr><td><b>RFQ</b> Fiyat Talebi</td><td>Birim fiyat istenir; standart ürünlerde doğrudan kullanılır. "1000 adet için birim fiyat?"</td></tr>
<tr><td><b>RFP</b> Teklif Talebi</td><td>Fiyat + işin nasıl yapılacağı + çalışacak uzmanlar. Karmaşık işler.</td></tr>
<tr><td><b>IFB</b> İhale Daveti</td><td>Alıcı ilgilenen satıcıları davet eder.</td></tr>
<tr><td><b>EOI</b> İlgi İfadesi</td><td>Satıcı işle ilgilendiğini ifade eder.</td></tr></table>
`},
{h: "Sözleşme türleri", html: `
<div data-w="contracts"></div>
<div class="tip">Kapsam net ve sabitse <b>sabit fiyat</b>; kapsam belirsizse <b>maliyet geri ödemeli</b>; kısa süreli, belirsiz, personel takviyesi işlerinde <b>T&M</b>. FFP'de risk satıcıda, CPFF'de alıcıda.</div>
`},
{h: "Teklif toplama ve satıcı seçimi", html: `
<p>Yöntemler: reklamcılık, birebir toplantılar, <b>teklif sahibi konferansları</b> (teklif verilmeden önce, tüm adaylarla birlikte; amaç herkesin aynı bilgiye sahip olması).</p>
<p><b>Kaynak seçim analizi:</b> en düşük maliyet, sadece yeterlilikler, kalite bazlı (en yüksek teknik puan), kalite ve maliyet temeli, tek kaynak, sabit bütçe.</p>
<p><b>Seçim kriterleri:</b> ihtiyacın anlaşılması, şirketin büyüklüğü, toplam maliyet (satın alma + işletme), teknik beceri, yönetim yaklaşımı, garanti, kapasite, geçmiş performans, referanslar, fikri mülkiyet ve tescil hakları, devredilecek riskler.</p>
<div data-w="scoring"></div>
`},
{h: "Yeni trendler ve değişiklikler", html: `
<table class="t"><tr><td><b>Çevik sözleşmeler</b></td><td>Kapsam sprint bazlı güncellenir, ödeme tamamlanan çıktıya göre.</td></tr>
<tr><td><b>Akıllı sözleşmeler</b></td><td>Blockchain ile otomasyon: teslimat onaylanınca ödeme otomatik.</td></tr>
<tr><td><b>Getiri bazlı</b></td><td>Ölçülebilir getiriye odak: satışlar %20 artarsa prim.</td></tr>
<tr><td><b>Sürdürülebilir</b></td><td>Çevresel/sosyal kriterler: karbon hedefi tutmazsa ceza.</td></tr>
<tr><td><b>İşbirlikçi</b></td><td>Risk ve ödül paylaşımı; aşımda birlikte çözüm, tasarrufu paylaşma.</td></tr></table>
<p><b>Sözleşme değişiklik kontrol sistemi:</b> Değişiklik yapılandırılmış, belgelenmiş bir süreç olmalı; kapsam, maliyet, zaman değişikliği gözden geçirilip onaylanmalı.</p>
<table class="t"><tr><td><b>Yönetimsel değişiklik</b></td><td>Yönetim yöntemiyle ilgili önemsiz değişiklik</td></tr><tr><td><b>Sözleşme değişikliği</b></td><td>Sözleşme veya ürün gerekliliklerinde önemli değişiklik</td></tr><tr><td><b>Ek anlaşma</b></td><td>Ayrı müzakere edilen ek anlaşma</td></tr><tr><td><b>Yapısal değişiklik</b></td><td>Alıcının yeni eylem veya eylemsizliğinden doğan</td></tr><tr><td><b>Sonlandırma</b></td><td>Satıcının şartları yerine getirmemesi veya alıcının ihtiyaç değişikliği</td></tr></table>
`},
{h: "Yasal kavramlar ve anlaşmazlık çözümü", html: `
<table class="t"><tr><td><b>Garanti</b></td><td>Mal/hizmetin belirli standarda uyacağına dair açık veya zımni taahhüt.</td></tr>
<tr><td><b>Feragat</b></td><td>Bir tarafın bir talebinden vazgeçmeyi kabul ettiği bağlayıcı hüküm.</td></tr>
<tr><td><b>Sözleşmenin ihlali</b></td><td>Yükümlülüklerin yerine getirilmemesi; tazminat veya dava doğurabilir.</td></tr>
<tr><td><b>İhtarname</b></td><td>Yasadışı iddia edilen faaliyeti durdurma ve tekrarlamama talebi (cease and desist).</td></tr></table>
<p>Anlaşmazlık çözümü (en hafiften en ağıra):</p>
<div class="flow"><span>Müzakere<small>doğrudan görüşme</small></span><span>Arabuluculuk<small>üçüncü taraf</small></span><span>Tahkim<small>hakem karar verir</small></span><span>İnceleme kurulu<small>tarafsız uzmanlar</small></span><span>Uzman kararı<small>teknik/mali konu</small></span><span>Dava<small>son çare</small></span></div>
<div class="tip">Sözleşme anlaşmazlığında ilk tercih her zaman <b>müzakere</b>, son çare <b>dava</b>dır.</div>
`}
]},

{
id: "m18", title: "Proje Yönetiminde Yapay Zekâ", short: "Otomasyon, destek, güçlendirme; etik ve vakalar", mins: 15,
sections: [
{h: "Kavramlar", html: `
<p>İç içe kümeler: <b>Yapay Zekâ (AI) ⊃ Makine Öğrenmesi (ML) ⊃ Derin Öğrenme (DL) ⊃ Üretken YZ (GenAI)</b>.</p>
<p>PMI yaklaşımı: YZ proje yöneticisinin <b>yerini almak için değil</b>, onun sezgi, karar verme ve uzmanlığını en üst seviyeye çıkarmak için bir <b>yetkinlik artırıcıdır</b>.</p>
`},
{h: "Üç uygulama katmanı", html: `
<div data-w="ailayers"></div>
<table class="t"><tr><th>Katman</th><th>Kontrol</th><th>Örnek</th></tr>
<tr><td><b>1. Otomasyon</b> "Yükü hafifleten güç"</td><td>Tamamen YZ'de. Tekrarlayan, düşük riskli rutin işler. Hız, tutarlılık, üretkenlik.</td><td>Takvimlere göre toplantı saatini ayarlamak; timesheet'leri bütçe tablosuna işlemek; toplantı notu özeti.</td></tr>
<tr><td><b>2. Destek / Yardım</b> "Bilgi ortağı"</td><td>PY'de; YZ bilgiyi sentezleyip seçenek sunar. Karara destek ve bilgi yönetimi.</td><td>Geçmiş risk kayıtlarından risk matrisi taslağı; toplantı kaydından görev dağılımı.</td></tr>
<tr><td><b>3. Güçlendirme</b> "Stratejik çarpan"</td><td>Kontrol ve nihai sorumluluk tamamen PY'de. YZ düşünme arkadaşıdır, karar verici değildir.</td><td>Tedarik 2 hafta gecikirse kritik yol ve maliyet için binlerce senaryo; paydaş iletişiminde duygu analizi.</td></tr></table>
<div class="tip">YZ hiçbir katmanda <b>nihai karar verici</b> değildir. Sorumluluk her zaman proje yöneticisindedir.</div>
`},
{h: "Sorumlu kullanım ve etik", html: `
<div class="pills"><span>Önyargı</span><span>Özel alan</span><span>Hesap verebilirlik</span><span>Güvenilirlik</span><span>Güvenlik</span><span>Şeffaflık</span><span>Yasal haklar (telif)</span><span>Sürdürülebilirlik</span></div>
<table class="t">
<tr><td><b>Önyargı</b> – Amazon</td><td>İşe alım modeli ağırlıklı erkek verisiyle eğitildi, "kadın" geçen CV'leri eledi; proje iptal edildi. <em>YZ geçmişteki adaletsizlikleri kopyalayabilir.</em></td></tr>
<tr><td><b>Gizlilik</b> – Samsung</td><td>Mühendisler gizli kaynak kodunu halka açık bir sohbet botuna yükledi, veri sızdı. <em>Kurum verisini korumasız, kurumsal olmayan sistemlere besleme.</em></td></tr>
<tr><td><b>Hesap verebilirlik</b> – Air Canada</td><td>Chatbot olmayan bir indirim kuralı uydurdu; mahkeme şirketi sorumlu tuttu. <em>Çıktıyı kontrol etmeyen insan birinci derece sorumludur.</em></td></tr>
<tr><td><b>Telif</b> – New York Times</td><td>Haberlerin izinsiz eğitimde kullanıldığı gerekçesiyle dava. <em>YZ çıktılarının fikri mülkiyeti hâlâ gri alan.</em></td></tr></table>
`},
{h: "Örnek prompt kalıbı", html: `
<div class="ex"><b>Rol + bağlam + görev + format:</b> "[Sektör] alanında uzman bir proje yöneticisi olduğunu ve [proje türü] projelerine odaklandığını düşün. Karşılaştığın zorluklar: [liste]. Her risk için risk adı, açıklama, etki düzeyi (yüksek/orta/düşük) ve olasılık içeren bir risk matrisi geliştir."</div>
`}
]}
);
