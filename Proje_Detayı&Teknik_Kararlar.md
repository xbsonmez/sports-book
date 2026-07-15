# Proje Detayı & Teknik Kararlar

Bu doküman aldığım teknik kararları, nedenlerini ve bilinçli trade-off'ları açıklar.

## 1. Teknoloji Seçimi — Next.js

- Daha hızlı geliştirebilmek için Next.js (App Router) tercih ettim; routing ve error handling gibi işleri hazır olarak yönetebiliyorum.
- SEO ve server component'e ihtiyacım olabileceğini düşündüm ama **virtualization kullandığım için server 0 satır basıyor** — server'da `window` olmadan sanal satırlar hesaplanamıyor. Server component ile birlikte çalışan bir yol kurmam gerekiyordu, yeterli vakit olmadığı için **client-fetch** akışında karar kıldım.
  - *Ek tespit:* SSR denemesinde ham veri RSC payload'ına serialize olup sayfayı ~3.6MB'a çıkarıyordu; SSR faydası oluşmadan sadece maliyet ekliyordu.

## 2. Mimari — Feature-Based Structure

- Büyük projelerde avantajlı bulduğum, aradığımı daha kolay bulduğum için feature-based yapı ile ilerledim.
- Her feature kendi `components / hooks / store / services` katmanını içinde taşır; ortak parçalar `shared` altındadır.
- `Odd`'ları `shared` altına koydum ki ileride başka bir table eklendiğinde tekrar kullanabileyim.

## 3. State Yönetimi — Redux Toolkit

- Store için Redux Toolkit kullandım. Her feature'ın kendi `...slice.js`'i var; `src/store`'da bu slice'ları tek store'da birleştiriyorum.
- **AnalyticsMiddleware** ekledim; kupon ekleme/çıkarma gibi aksiyonları yakalayıp tracking araçlarına event göndermek için bu katman uygun (şu an placeholder, gerçek entegrasyon buradan yapılır).
- **Kupon kalıcılığı:** Betslip'i `redux-persist` ile `sessionStorage`'ta tuttum — sayfa yenilenince kaybolmaz ama yeni tab'da taşınmaz. Nesine.com'un davranışını referans aldım.

## 4. Veri Katmanı

- İstekler tek bir `axiosInstance` (baseURL env'den) üzerinden atılır.
- `fetchBulletin` thunk'ında `condition` ile store doluyken gereksiz tekrar isteği engelledim. Belirli aralıklarla listeyi çekmem gerelirse bu logic güncellenebilir.

- bulletinFormatter.js file'ındaki `groupBulletinItems` ile API'nin düz `OCG/OC/O` yapısını lige göre gruplanmış bir view-model'e çeviriyorum; böylece API şekli ile bileşenler ayrışıyor (store ham `items` tutar, gruplama `useMemo` ile türetilir).

## 5. Performans

Render sürelerini **React Profiler** ile ölçerek ilerledim.

- **Virtualization:** DOM'da yalnızca belirli sayıda satır tutarak performansı artırdım. İleride **socket** bağlantısı gelip veri sık güncellendiğinde, DOM'da çok item olması ciddi performans sorunları yaratırdı; virtualization bunu baştan önlüyor.
- **memo / stable callback:** `Odd`/`OddGroup` `memo`'lu; kupon toggle fonksiyonu stable `useCallback` — gereksiz render'ları engeller.

## 6. Dinamik / Konfigürasyona Dayalı Tablo

- Table'ı bir **schema** (`BULLETIN_MARKET_GROUPS`) üzerinden kurdum; yeni bir market eklemek ya da kapatmak istediğimde sadece schema'dan yönetebiliyorum.
- **TableToolbar** ile marketler açılıp kapatılabiliyor. Amacım responsive bir table: ekran daraldığında marketleri gizlemek.
  - *Zaman kalsaydı:* Table'ı column'lar halinde (dikey) render edip gizlemek/göstermek daha performanslı olurdu; buna vakit ayıramadım.
- Header ve satırlar aynı filtrelenmiş kaynaktan kolon ürettiği için hizalama garanti.

## 7. Hata & Yükleme Yönetimi

- Bülten ve kupon ayrı `ErrorBoundary`'lerle sarıldı (`react-error-boundary`); birinde hata diğerini düşürmez. Route seviyesinde ayrıca `app/error.jsx` var.
- Veri gelene kadar `TableSkeleton` gösterilir.

## 8. Build & Geliştirici Deneyimi

- **React Compiler açık** (`reactCompiler: true`). Virtualizer ile uyumsuz olan tek bileşende (`TableVirtualRows`) `"use no memo"` ile o bileşeni compiler dışında bıraktım.
- **Bundle analyzer** (`ANALYZE=true`) ve **SVGR** (SVG → component) yapılandırıldı.
- **Webpack** kullandım default turbopack ile geliyordu bu versiyonda next. next.config.mjs ile webpack config ekledim.


## 9. Bilinen Kısıtlar / Daha Fazla Zamanla

- **TypeScript** — Typescript'te type tanımlayarak zaman kaybetmek istemedim.
- **Unit test** — `groupBulletinItems`, kupon toggle mantığı, oran hesabı gibi saf fonksiyonlar için.
- **Responsive dikey render** — marketleri column bazlı gizleyen daha performanslı yaklaşım.
- **SSR + virtualization** — server-uyumlu virtualizer
