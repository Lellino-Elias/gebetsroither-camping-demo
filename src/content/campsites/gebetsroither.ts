import type { CampsiteConfig } from "../types";

/**
 * Komfort-Campingpark Burgstaller — Döbriach am Millstätter See, Kärnten.
 * Vermarktet die Gebetsroither-Urlaubsunterkünfte (Mobilheime & Wohnwagen) an
 * diesem Platz; Buchung & Betreuung laufen über das Gebetsroither Service Center.
 * Alle Texte/Fakten belegt aus dem gebetsroither.com-Listing (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Burgstaller-Fotos in /public/campsites/gebetsroither/
 * (vision-verifiziert). EHRLICH: der Platz liegt NICHT direkt am Wasser, sondern
 * ~100 m vom Seeufer mit privatem Badebereich — nie als "direkt am Wasser" geframt.
 * Preise = REALE Quellpreise (7-Nächte-Beispielpreise Juni 2026), als Richtpreis je
 * Nacht heruntergerechnet und im priceNote offen ausgewiesen (keine Platzhalter).
 * Saison "Mai–September" abgeleitet aus den Service-Center-Hauptsaison-Zeiten (kein
 * explizites Öffnungsdatum auf der Quelle) → im REPORT geflaggt. Keine Auszeichnung
 * eindeutig belegt → awards bleibt leer. Keine eigenen Koordinaten/Logo → ausgeblendet.
 */
const IMG = "/campsites/gebetsroither";

export const gebetsroither: CampsiteConfig = {
  name: "Komfort-Campingpark Burgstaller",
  shortName: "Burgstaller",
  slug: "gebetsroither",
  ort: "Döbriach am Millstätter See",
  region: "Kärnten",
  brandKind: "Komfort-Camping",
  see: "Millstätter See",
  regionLong: "Millstätter See · Kärnten · Österreich",

  claim: "Dein Familienurlaub am Millstätter See",
  claimEmphasis: "am Millstätter See",
  intro:
    "Ein Familiencampingplatz, bekannt für Kreativität, Unterhaltung und eine einzigartige Atmosphäre — nur 100 Meter vom Millstätter See, in Döbriach in Kärnten. Komfort-Unterkünfte von Gebetsroither.",

  statement: {
    text: "In ganz Österreich bekannt für Kreativität, Unterhaltung und eine einzigartige Atmosphäre.",
    emphasis: "einzigartige Atmosphäre",
  },

  pillars: [
    { title: "100 Meter zum Millstätter See", text: "Privater Badebereich mit großem Steg und Segelschule — Entspannung in der Natur, nur 100 Meter vom Seeufer entfernt.", image: { src: `${IMG}/badebereich-steg.webp`, alt: "Privater Badebereich des Komfort-Campingparks Burgstaller mit Steg und Rutsche am Millstätter See" } },
    { title: "Eine kreative Erlebniswelt", text: "Fantasievoll gestaltete Gebäude, eine Showbühne und ausgefallene Themenabende — ein Campingplatz mit unverwechselbarer Atmosphäre.", image: { src: `${IMG}/restaurantgebaeude.webp`, alt: "Fantasievoll gestaltetes Restaurantgebäude am Komfort-Campingpark Burgstaller" } },
    { title: "Topi Kids Club", text: "Ein reichhaltiges Animationsprogramm für die Jüngsten — mit Paraden, kleinen Festen und jeder Menge Spaß.", image: { src: `${IMG}/topi-kids-show.webp`, alt: "Kinder beim Topi Kids Club auf der Showbühne des Komfort-Campingparks Burgstaller" } },
  ],

  usps: [
    "Nur 100 m zum Seeufer",
    "Privater Badebereich & Steg",
    "Topi Kids Club & Animation",
    "Endreinigung inkl., Bettwäsche bei Mobilheimen",
    "Restaurant, Pizzeria & SB-Markt",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Worauf du dich bei Burgstaller verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Ein Familiencampingplatz am Millstätter See, gebucht und betreut über Gebetsroither — mit 45 Jahren Campingerfahrung, fertig ausgestatteten Unterkünften und bereits im Preis enthaltener Endreinigung; bei den Mobilheimen ist zusätzlich die Bettwäsche inklusive.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  // Abgeleitet aus den Hauptsaison-Öffnungszeiten des Service Centers ("Mai bis September").
  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme des Komfort-Campingparks Burgstaller am Ufer des Millstätter Sees in Kärnten" },
  },

  camping: {
    heading: "Der Campingpark",
    intro:
      "12 Hektar unter wunderschönen Laubbäumen, nur 100 Meter vom Millstätter See: Restaurant und Pizzeria, SB-Markt, ein privater Badebereich mit Steg und jede Menge Platz zum Erholen.",
    features: [
      { title: "Eine Erlebniswelt für sich", text: "Fantasievoll gestaltete Gebäude, eine Showbühne und eine einzigartige Atmosphäre — in ganz Österreich für seine Kreativität bekannt.", image: { src: `${IMG}/erlebniswelt-uboot.webp`, alt: "Kreativ gestaltetes Gebäude mit U-Boot am Komfort-Campingpark Burgstaller" } },
      { title: "Restaurant, Pizzeria & Showbühne", text: "Restaurant, Pizzeria und Strandbuffet direkt am Platz — abends sorgt die Showbühne für Unterhaltung.", image: { src: `${IMG}/restaurant-terrasse.webp`, alt: "Gäste auf der Restaurantterrasse des Komfort-Campingparks Burgstaller" } },
      { title: "Alles direkt am Platz", text: "SB-Markt für den täglichen Einkauf, dazu Bücherei, Kinoraum, Kegelbahnen und ein Internet-Corner.", image: { src: `${IMG}/servicegebaeude.webp`, alt: "Service- und Sanitärgebäude am Komfort-Campingpark Burgstaller" } },
      { title: "12 Hektar voller Möglichkeiten", text: "Auf 12 Hektar unter alten Laubbäumen finden Spiel- und Sportplätze, Tischtennis, Beachvolleyball und mehr ihren Platz.", image: { src: `${IMG}/wegweiser-ausstattung.webp`, alt: "Wegweiser zu den Anlagen und Sportplätzen am Komfort-Campingpark Burgstaller" } },
      { title: "Privater Badebereich", text: "Ein eigener Badebereich mit großem Steg — entspannt ins kühle Nass des Millstätter Sees, nur 100 Meter vom Platz.", image: { src: `${IMG}/badesteg.webp`, alt: "Großer Badesteg mit Sprungturm am Millstätter See beim Komfort-Campingpark Burgstaller" } },
      { title: "Tennis, Minigolf & Go-Karts", text: "Tennisplätze, Minigolf und Go-Karts, mit denen die Kinder über den Platz flitzen — Bewegung und Spaß für jedes Alter.", image: { src: `${IMG}/minigolf.webp`, alt: "Minigolfanlage am Komfort-Campingpark Burgstaller" } },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte von Gebetsroither",
    intro:
      "Komplett ausgestattete Mobilheime und Wohnwagen direkt am Campingpark — alle mit Klimaanlage und inkludierter Endreinigung; bei den Mobilheimen ist zusätzlich die Bettwäsche bereits inklusive. Einfach ankommen und Urlaub genießen.",
    items: [
      { name: "Mobilheim Premium", kind: "Mobilheim · bis 6 Personen", text: "Geräumiges Mobilheim mit vollwertigem Bad, Küche mit Geschirrspüler und Klimaanlage — rund 24 bis 34 m² Wohnfläche, dazu Terrasse mit Campingtisch und Sonnenschirm.", image: { src: `${IMG}/mobilheim-premium.webp`, alt: "Modernes Mobilheim mit Terrasse am Komfort-Campingpark Burgstaller" }, priceFrom: 173, features: ["4–6 Personen", "Klimaanlage & Bad", "Endreinigung & Bettwäsche inkl."] },
      { name: "Wohnwagen Premium", kind: "Wohnwagen · 2 Erw. + 3 Kinder", text: "Gemütlicher Wohnwagen mit Klimaanlage und Vorzelt (ca. 11 m²), Stockbett mit Kindersicherung und eigener Kochgelegenheit — ideal für Familien.", image: { src: `${IMG}/wohnwagen-premium.webp`, alt: "Gebetsroither Wohnwagen mit Vorzelt auf einem Stellplatz am Komfort-Campingpark Burgstaller" }, priceFrom: 102, features: ["2 Erw. + 3 Kinder", "Vorzelt ca. 11 m²", "Klimaanlage"] },
    ],
  },

  kinder: {
    heading: "Für Familien & Kinder",
    intro:
      "Bei Burgstaller wird es Kindern nie langweilig: Animation im Topi Kids Club, Spielplätze, Wasserspaß und jede Menge Platz zum Toben.",
    features: [
      { title: "Spielplätze & Topi Kids Club", text: "Kinderspielplatz, Wasserspielplatz und ein langer Rutschenturm — dazu das reichhaltige Animationsprogramm im Topi Kids Club mit Paraden, Themenabenden und kleinen Festen. Go-Karts und Bimmelbahn warten ebenfalls.", image: { src: `${IMG}/wasserspielplatz.webp`, alt: "Kinder am Wasserspielplatz des Komfort-Campingparks Burgstaller" } },
      { title: "Wasserspaß am See", text: "Baden, Reifen-Rutschen und Plantschen am privaten Badebereich, nur 100 Meter vom Platz entfernt.", image: { src: `${IMG}/kinder-wasserspass.webp`, alt: "Kinder beim Wasserspaß auf dem Millstätter See beim Komfort-Campingpark Burgstaller" } },
      { title: "Kinoraum & Kinderkino", text: "An regnerischen Tagen lockt der eigene Kinoraum mit Kinderkino — Unterhaltung bei jedem Wetter.", image: { src: `${IMG}/kino-burgstaller.webp`, alt: "Kinoraum-Schild am Komfort-Campingpark Burgstaller" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Millstätter See",
    intro:
      "Baden, Segeln, Sport und Ausflüge in die Bergwelt — rund um den Campingpark wird es nie langweilig.",
    items: [
      { title: "Baden & Stand-Up-Paddeln", text: "Der Millstätter See lädt zum Schwimmen, SUPen und Plantschen ein — der private Badebereich ist nur 100 Meter entfernt.", image: { src: `${IMG}/sup-paddeln.webp`, alt: "Jugendliche beim Stand-Up-Paddeln auf dem Millstätter See" } },
      { title: "Segeln & Segelschule", text: "Eine eigene Segelschule am See macht den Einstieg leicht — Segeln und Bootfahren direkt vom Steg.", image: { src: `${IMG}/segeln.webp`, alt: "Segelboot auf dem Millstätter See vor Bergkulisse" } },
      { title: "Reiten", text: "Auf dem Reitplatz drehen schon die Kleinen ihre Runden hoch zu Ross.", image: { src: `${IMG}/reiten.webp`, alt: "Kind beim Reiten auf dem Reitplatz am Komfort-Campingpark Burgstaller" } },
      { title: "Sport: Fußball, Tennis & Beachvolleyball", text: "Fußballplatz, Tennisplätze, Beachvolleyball und Boccia — Bewegung für aktive Urlaubstage.", image: { src: `${IMG}/fussballplatz.webp`, alt: "Kinder beim Fußballspielen auf dem Sportplatz am Komfort-Campingpark Burgstaller" } },
      { title: "Ausflüge & Schifffahrt", text: "Mit dem Schiff über den Millstätter See, Radwege rund ums Ufer und Wanderungen im Biosphärenpark Nockberge.", image: { src: `${IMG}/schifffahrt.webp`, alt: "Ausflugsschiff auf dem Millstätter See" } },
      { title: "Wandern & Sehenswürdigkeiten", text: "Aussichtsberg Tschiernock, Burg Sommeregg mit Restaurant und Spittal an der Drau mit Schloss Porcia liegen in der Umgebung.", image: { src: `${IMG}/millstaettersee-panorama.webp`, alt: "Panoramablick über den Millstätter See und die umliegenden Berge" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Anreise", text: "Der Komfort-Campingpark Burgstaller liegt in Döbriach am Millstätter See, Seefeldstraße 16 — rund 10 Gehminuten vom Ortszentrum Döbriach entfernt." },
      { title: "Ruhig & naturnah", text: "Fernab von der Hektik der Straßen, inmitten der Natur und nur 100 Meter vom Seeufer des Millstätter Sees." },
      { title: "Ausflugsziele", text: "Spittal an der Drau mit Schloss Porcia, der Biosphärenpark Nockberge, der Aussichtsberg Tschiernock und die Burg Sommeregg liegen in der Umgebung." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wiederkommen",
    headingEmphasis: "Wiederkommen",
    intro:
      "Ein paar Eindrücke vom Komfort-Campingpark Burgstaller am Millstätter See — von der Showbühne bis zum Badesteg.",
    tag: "Sommer am Millstätter See",
    images: [
      { src: `${IMG}/showbuehne-abend.webp`, alt: "Abendliche Showbühne mit Publikum am Komfort-Campingpark Burgstaller" },
      { src: `${IMG}/badebereich-sprungturm.webp`, alt: "Badebereich mit Sprungturm am Millstätter See" },
      { src: `${IMG}/rutsche-kletterwand.webp`, alt: "Langer Rutschenturm und Kletterwand am Komfort-Campingpark Burgstaller" },
      { src: `${IMG}/kinder-buehne.webp`, alt: "Kinder beim Singen auf der Bühne am Komfort-Campingpark Burgstaller" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — Gebetsroither meldet sich mit deiner persönlichen Verfügbarkeit. Online ist rund um die Uhr buchbar.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise je Nacht, abgeleitet aus 7-Nächte-Beispielpreisen (Juni 2026, 2 Personen, inkl. Endreinigung; bei Mobilheimen zusätzlich Bettwäsche). Der endgültige Preis hängt von Reisezeitraum, Unterkunft und Belegung ab.",
    highlight: {
      title: "Endreinigung & Bettwäsche inklusive",
      text: "Bei den Mobilheimen sind Endreinigung und Bettwäsche bereits im Preis enthalten — einfach ankommen und Urlaub genießen.",
    },
    categories: [
      // Reale Quellpreise (7-Nächte-Gesamtpreise, 2 Pers.) ÷ 7 → Richtpreis/Nacht; Einheitspreis, daher kein Aufpreis je Person.
      { id: "wohnwagen", label: "Wohnwagen Premium", perNight: 102, perExtraGuest: 0 },
      { id: "mobilheim-aplus", label: "Mobilheim Premium (A+)", perNight: 173, perExtraGuest: 0 },
      { id: "mobilheim-la", label: "Mobilheim Premium (LA)", perNight: 175, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.77, lng: 13.648203 },
    tel: "+43 (0)3612 26300",
    telHref: "tel:+43361226300",
    mail: "office@gebetsroither.com",
    adresse: "Seefeldstraße 16 · 9873 Döbriach · Kärnten",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Lage am See", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
        { label: "Privater Badebereich", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Mobilheime", href: "#mobilheime" },
        { label: "Wohnwagen", href: "#mobilheime" },
        { label: "Inklusive", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Topi Kids Club", href: "#kinder" },
        { label: "Spielplätze", href: "#kinder" },
        { label: "Kinoraum", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Baden & SUP", href: "#aktivitaeten" },
        { label: "Segeln", href: "#aktivitaeten" },
        { label: "Ausflüge", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
  ],
};

export default gebetsroither;
