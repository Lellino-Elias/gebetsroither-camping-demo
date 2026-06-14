import type { CampsiteConfig } from "../types";

/**
 * Komfort-Campingpark Burgstaller — Döbriach am Millstätter See, Kärnten.
 * Alle Texte/Fakten belegt aus dem Scrape von gebetsroither.com (Stand 2026-06):
 * raw/pages/01.md (Platz-Listing) + 02.md (Startseite). Bilder = ausschließlich
 * eigene Burgstaller-Fotos (S3-Pfad campings/burgstaller/) in
 * /public/campsites/gebetsroither/, jedes per Vision geprüft.
 *
 * EHRLICH:
 *  - Dieses Listing vermarktet die Urlaubsunterkünfte von GEBETSROITHER (Mobilheime
 *    & Wohnwagen) am Komfort-Campingpark Burgstaller; Buchung/Betreuung über das
 *    Gebetsroither Service Center → in Intro, Trust, Booking & Anreise offengelegt.
 *  - Der Platz liegt NICHT direkt am Wasser, sondern ~100 m vom Seeufer, mit eigenem
 *    privatem Badebereich (großer Steg, Segelschule) → nie "direkt am Wasser" geframt.
 *  - Preise = REALE Quellpreise: 7-Nächte-Beispielpreise (Juni 2026, regulärer Preis)
 *    ÷ 7 → Richtpreis/Nacht, offen im priceNote ausgewiesen → keine Platzhalter.
 *  - Saison "Mai–September" aus den Service-Center-Hauptsaisonzeiten abgeleitet (geflaggt).
 *  - coords/logo/facebook weggelassen (nicht belegbar); awards leer (keine Auszeichnung).
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

  claim: "Familiencamping mit kreativer Erlebniswelt am Millstätter See",
  claimEmphasis: "kreativer Erlebniswelt",
  intro:
    "Komfort-Campingpark mitten in der Natur — nur rund 100 Meter vom Millstätter See, mit privatem Badebereich, fantasievoller Erlebniswelt und reichem Programm für die ganze Familie. Die Urlaubsunterkünfte am Platz vermietet und betreut Gebetsroither.",

  // Kein platzeigenes Logo in der Quelle (nur Konzern-Logo) → Wortmarke statt Bild.

  statement: {
    text: "In ganz Österreich bekannt für Kreativität, tolle Unterhaltung und eine einzigartige Atmosphäre.",
    emphasis: "einzigartige Atmosphäre",
  },

  pillars: [
    {
      title: "Am Millstätter See",
      text: "Nur rund 100 Meter vom Seeufer: privater Badebereich mit großem Steg und eigener Segelschule.",
      image: { src: `${IMG}/millstaettersee-panorama.webp`, alt: "Panoramablick auf den Millstätter See und die umliegenden Berge" },
    },
    {
      title: "Kreative Erlebniswelt",
      text: "Fantasievoll gestaltete Gebäude, Themenwelten und liebevolle Details prägen die einzigartige Atmosphäre des Platzes.",
      image: { src: `${IMG}/erlebniswelt-uboot.webp`, alt: "Markantes Erlebnisgebäude mit U-Boot am Komfort-Campingpark Burgstaller" },
    },
    {
      title: "Topi Kids Club",
      text: "Reichhaltiges Animationsprogramm, Themenabende, Paraden und kleine Feste für die jüngsten Gäste.",
      image: { src: `${IMG}/topi-kids-show.webp`, alt: "Kinder beim Topi Kids Club auf der Showbühne des Campingparks" },
    },
  ],

  usps: [
    "Rund 100 m zum Millstätter See",
    "Privater Badebereich mit Steg",
    "Topi Kids Club & Animation",
    "Restaurant, Pizzeria & SB-Markt",
    "Hunde willkommen",
    "Mobilheime mit Klimaanlage",
  ],

  trust: {
    heading: "Worauf Sie sich hier verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Buchung und Betreuung übernimmt Gebetsroither mit 45 Jahren Campingerfahrung. Die Unterkünfte kommen mit inkludierter Endreinigung — bei den Mobilheimen zusätzlich mit Bettwäsche — und sind online rund um die Uhr buchbar.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  // Aus den Service-Center-Hauptsaisonzeiten ("Mai bis September") abgeleitet — kein
  // explizites Platz-Öffnungsdatum auf der Quelle (im REPORT geflaggt).
  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/see-luftaufnahme.webp`, alt: "Luftaufnahme des Komfort-Campingpark Burgstaller am Ufer des Millstätter Sees" },
  },

  camping: {
    heading: "Komfort-Campingpark am See",
    intro:
      "Auf rund 12 Hektar mit altem Laubbaumbestand: privater Seezugang, ein lebendiger Ortskern mit Restaurant, Pizzeria und SB-Markt und alles, was einen unbeschwerten Campingurlaub ausmacht.",
    features: [
      { title: "Privater Badebereich", text: "Eigener Seezugang mit großem Steg und Wasserrutsche — der private Badebereich liegt nur rund 100 Meter vom Platz.", image: { src: `${IMG}/badebereich-rutsche.webp`, alt: "Privater Badebereich mit Wasserrutsche und Steg am Millstätter See" } },
      { title: "Badesteg & Sprungturm", text: "Stege weit in den Millstätter See hinaus, mit Sprungturm und viel Platz zum Sonnen und Schwimmen.", image: { src: `${IMG}/badesteg-sprungturm.webp`, alt: "Badesteg mit Sprungturm am Millstätter See" } },
      { title: "Restaurant & Pizzeria", text: "Markante, fantasievoll gestaltete Gebäude beherbergen Restaurant, Pizzeria und Strandbuffet direkt am Platz.", image: { src: `${IMG}/restaurant-pizzeria.webp`, alt: "Fantasievoll gestaltetes Restaurantgebäude am Komfort-Campingpark Burgstaller" } },
      { title: "Alles am Platz", text: "SB-Markt, Kegelbahnen, Bücherei, Jugendraum, Internet-Corner, Solarium und mehr — kurze Wege zu allem.", image: { src: `${IMG}/ausstattung-wegweiser.webp`, alt: "Wegweiser mit der Ausstattung des Campingparks: Spielplätze, Sportplätze, SB-Markt und mehr" } },
      { title: "Service & Sanitär", text: "Gepflegte Servicegebäude und Sanitäranlagen sorgen für Komfort im Campingalltag.", image: { src: `${IMG}/service-sanitaer.webp`, alt: "Servicegebäude am Komfort-Campingpark Burgstaller" } },
      { title: "Lebendiger Mittelpunkt", text: "Ein zentraler Platz mit Rezeption, Almstub'n, SB-Markt und Pizzeria bildet das Herz des Campingparks.", image: { src: `${IMG}/marktplatz.webp`, alt: "Zentraler Platz mit Rezeption, SB-Markt und Pizzeria im Campingpark" } },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte am Platz",
    intro:
      "Lieber feste Wände als Zelt? Gebetsroither vermietet moderne Mobilheime und Wohnwagen direkt am Komfort-Campingpark — mit Klimaanlage und inkludierter Endreinigung; bei den Mobilheimen zusätzlich mit Bettwäsche.",
    items: [
      {
        name: "Mobilheim Premium",
        kind: "Mobilheim · bis 6 Personen",
        text: "Modernes Mobilheim mit Terrasse, Bad (Dusche/WC), Klimaanlage, Geschirrspüler und voll ausgestatteter Küche.",
        image: { src: `${IMG}/mobilheim-premium.webp`, alt: "Modernes Gebetsroither-Mobilheim mit überdachter Terrasse am Campingpark" },
        priceFrom: 173,
        features: ["24–34 m² Wohnfläche", "bis 6 Personen", "Klimaanlage & Geschirrspüler", "Endreinigung & Bettwäsche inkl."],
      },
      {
        name: "Wohnwagen Premium",
        kind: "Wohnwagen · 2 Erw. + 3 Kinder",
        text: "Komfort-Wohnwagen mit Vorzelt (ca. 11 m²), Klimaanlage und Kochgelegenheit — ideal für Familien mit Kindern.",
        image: { src: `${IMG}/wohnwagen-premium.webp`, alt: "Gebetsroither-Wohnwagen mit Vorzelt am Komfort-Campingpark Burgstaller" },
        priceFrom: 102,
        features: ["14,3 m² + Vorzelt ca. 11 m²", "2 Erwachsene, 3 Kinder", "Klimaanlage", "Endreinigung inkl."],
      },
    ],
  },

  kinder: {
    heading: "Für Kinder & Familien",
    intro:
      "Beim Topi Kids Club wird es nie langweilig: Animation, Themenabende und Shows, dazu Spielplätze, Rutschen und ein eigenes Kino.",
    features: [
      { title: "Wasserspielplatz", text: "Wasserspielplatz und Spielbereiche mit Rutschen — Toben und Planschen den ganzen Tag.", image: { src: `${IMG}/wasserspielplatz.webp`, alt: "Kinder am Wasserspielplatz des Campingparks" } },
      { title: "Rutschenturm & Kletterwand", text: "Langer Rutschenturm über den Hügel und eine Kletterwand für kleine Abenteurer.", image: { src: `${IMG}/rutschenturm-kletterwand.webp`, alt: "Großer Rutschenturm und Kletterwand am Campingpark" } },
      { title: "Campingstar-Show", text: "Eigene Showbühne mit Kinderprogramm, Talentshows und ausgefallenen Themenabenden.", image: { src: `${IMG}/campingstar-show.webp`, alt: "Kinder bei der Campingstar-Show auf der Bühne des Campingparks" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Millstätter See",
    intro:
      "Baden, Segeln, Reiten und Ausflüge in die Nockberge — rund um den Campingpark gibt es viel zu erleben.",
    items: [
      { title: "Stand-Up-Paddeln", text: "Aufs Board und raus auf den klaren Millstätter See — nur ein paar Schritte vom Platz.", image: { src: `${IMG}/sup-paddeln.webp`, alt: "Jugendliche beim Stand-Up-Paddeln auf dem Millstätter See" } },
      { title: "Segeln & Segelschule", text: "Der private Badebereich verfügt über eine eigene Segelschule — ideal für erste Schläge auf dem See.", image: { src: `${IMG}/segeln.webp`, alt: "Segelboot auf dem Millstätter See vor Bergkulisse" } },
      { title: "Reiten", text: "Auf der Reitbahn am Platz können Kinder erste Runden im Sattel drehen.", image: { src: `${IMG}/reiten.webp`, alt: "Kind beim Reiten auf der Reitbahn am Campingpark" } },
      { title: "Sport & Fußball", text: "Fußballplatz, Beach-Volleyball, Tischtennis, Boccia und Minigolf sorgen für aktive Urlaubstage.", image: { src: `${IMG}/fussballplatz.webp`, alt: "Kinder beim Fußballspielen auf dem Sportplatz des Campingparks" } },
      { title: "Schifffahrt am See", text: "Eine Rundfahrt mit dem Ausflugsschiff zeigt den Millstätter See von seiner schönsten Seite.", image: { src: `${IMG}/schifffahrt.webp`, alt: "Ausflugsschiff auf dem Millstätter See" } },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Nach Döbriach am Millstätter See, Seefeldstraße 16 — der Campingpark liegt nur rund 10 Gehminuten vom Ort entfernt." },
      { title: "In der Umgebung", text: "Spittal an der Drau mit Schloss Porcia, der Biosphärenpark Nockberge und die Burg Sommeregg liegen in Reichweite." },
      { title: "Buchung & Service", text: "Buchung und Betreuung über das Gebetsroither Service Center — online rund um die Uhr buchbar." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wiederkommen",
    headingEmphasis: "Wiederkommen",
    intro:
      "Ein paar Eindrücke vom Komfort-Campingpark Burgstaller am Millstätter See.",
    tag: "Millstätter See · Kärnten",
    images: [
      { src: `${IMG}/strandbad.webp`, alt: "Strandbad mit Badesteg und Sprungturm am Millstätter See" },
      { src: `${IMG}/restaurant-terrasse.webp`, alt: "Sonnenterrasse am Restaurant des Campingparks" },
      { src: `${IMG}/showbuehne-abend.webp`, alt: "Abendliche Showbühne mit Publikum am Campingpark" },
      { src: `${IMG}/kino-burgstaller.webp`, alt: "Kino-Schild des Komfort-Campingpark Burgstaller" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Zeitraum, Unterkunft und Personen wählen — Gebetsroither meldet sich mit Ihrer persönlichen Verfügbarkeit. Online rund um die Uhr buchbar.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise/Nacht, abgeleitet aus den 7-Nächte-Beispielpreisen der Quelle (Juni 2026, regulärer Preis) · inkl. Endreinigung, bei Mobilheimen zusätzlich Bettwäsche · Haupt-/Nebensaison kann abweichen — bitte bestätigen.",
    highlight: {
      title: "Inklusive Endreinigung",
      text: "Bei allen Unterkünften ist die Endreinigung inkludiert; bei den Mobilheimen zusätzlich die Bettwäsche.",
    },
    categories: [
      // Reale Quellpreise (01.md): 7-Nächte-Beispielpreise Juni 2026 (regulär) ÷ 7 → Richtpreis/Nacht.
      { id: "wohnwagen", label: "Wohnwagen Premium", perNight: 102, perExtraGuest: 0 }, // 712,40 € ÷ 7 = 101,77
      { id: "mobilheim-aplus", label: "Mobilheim Premium (A+)", perNight: 173, perExtraGuest: 0 }, // 1.208,10 € ÷ 7 = 172,59
      { id: "mobilheim-la", label: "Mobilheim Premium (LA)", perNight: 175, perExtraGuest: 0 }, // 1.223,60 € ÷ 7 = 174,80
    ],
  },

  kontakt: {
    coords: { lat: 46.77, lng: 13.648203 },
    tel: "+43 (0)3612 26300",
    telHref: "tel:+43361226300",
    mail: "office@gebetsroither.com",
    adresse: "Seefeldstraße 16 · 9873 Döbriach · Kärnten",
    // coords weggelassen (keine Koordinaten auf der Quelle, keine Geokodierung im Cage) → Karte ausgeblendet.
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Badebereich am See", href: "#camping" },
        { label: "Restaurant & Pizzeria", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Mobilheim Premium", href: "#mobilheime" },
        { label: "Wohnwagen Premium", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Topi Kids Club", href: "#kinder" },
        { label: "Spielplätze & Rutschen", href: "#kinder" },
        { label: "Showbühne & Kino", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Baden & Segeln", href: "#aktivitaeten" },
        { label: "Reiten & Sport", href: "#aktivitaeten" },
        { label: "Schifffahrt", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default gebetsroither;
