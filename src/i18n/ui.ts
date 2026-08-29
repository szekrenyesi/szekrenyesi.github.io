export const languages = {
  hu: 'Magyar',
  en: 'English',
} as const;

export const defaultLang = 'hu';

export type Lang = keyof typeof languages;

export const ui = {
  hu: {
    'nav.home': 'Kezdőlap',
    'nav.about': 'Bemutatkozás',
    'nav.publications': 'Publikációk',
    'nav.talks': 'Előadások',
    'nav.services': 'Szolgáltatások',
    'nav.contact': 'Kapcsolat',
    'nav.cv': 'Önéletrajz',

    'home.tagline': 'Kutató · Egyetemi oktató · Szoftverfejlesztő',
    'home.intro': 'A Debreceni Egyetem Filozófia Intézetének adjunktusa vagyok; logikát, nyelvfilozófiát, tudományfilozófiát és más kapcsolódó tárgyakat tanítok. Oktatói munkám mellett számítógépes nyelvészettel és digitális bölcsészeti fejlesztésekkel is foglalkozom — főként a beszédtechnológia és a kézírás-felismerés területén.',
    'home.more': 'Bővebben',

    'about.title': 'Bemutatkozás',
    'publications.title': 'Publikációk',
    'publications.featured': 'Kiemelt publikációk',
    'publications.full': 'Teljes publikációs jegyzék az MTMT-ben',
    'talks.title': 'Konferencia-előadások',
    'services.title': 'Szolgáltatások',
    'services.lead': 'Szakmai szolgáltatások egyéni vállalkozásom keretében.',
    'contact.title': 'Kapcsolat',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefon',
    'contact.affiliation': 'Főfoglalkozású munkahely',
    'contact.position': 'Beosztás',
    'contact.mtmt': 'MTMT-profil',
    'contact.github': 'GitHub',

    'footer.copyright': 'Szekrényes István',
    'footer.imprint': 'Impresszum',

    'imprint.title': 'Impresszum',
    'imprint.intro': 'A honlapon szereplő szakmai szolgáltatásokat egyéni vállalkozás keretében nyújtom. Az alábbi adatokat az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény alapján teszem közzé.',
    'imprint.name': 'Szolgáltató neve',
    'imprint.address': 'Székhely',
    'imprint.email': 'E-mail',
    'imprint.registration': 'Nyilvántartási szám',
    'imprint.tax': 'Adószám',
    'imprint.statistical': 'Statisztikai számjel',
    'imprint.activity': 'Főtevékenység',
    'imprint.activities': 'Egyéb bejelentett tevékenységek',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.publications': 'Publications',
    'nav.talks': 'Talks',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    'home.tagline': 'Researcher · University Lecturer · Software Developer',
    'home.intro': 'I am Assistant Professor at the Institute of Philosophy, University of Debrecen; I teach logic, philosophy of language, philosophy of science, and other related subjects. Alongside my teaching, I also work in computational linguistics and digital humanities — primarily in speech technology and handwritten text recognition.',
    'home.more': 'Read more',

    'about.title': 'About',
    'publications.title': 'Publications',
    'publications.featured': 'Featured publications',
    'publications.full': 'Full list of publications on MTMT',
    'talks.title': 'Conference talks',
    'services.title': 'Services',
    'services.lead': 'Professional services offered through my sole proprietorship.',
    'contact.title': 'Contact',
    'contact.email': 'E-mail',
    'contact.phone': 'Phone',
    'contact.affiliation': 'Primary affiliation',
    'contact.position': 'Position',
    'contact.mtmt': 'MTMT profile',
    'contact.github': 'GitHub',

    'footer.copyright': 'István Szekrényes',
    'footer.imprint': 'Imprint',

    'imprint.title': 'Imprint',
    'imprint.intro': 'The professional services listed on this website are offered through my sole proprietorship. The following details are published in accordance with the Hungarian Act CVIII of 2001 on electronic commerce services.',
    'imprint.name': 'Service provider',
    'imprint.address': 'Registered address',
    'imprint.email': 'E-mail',
    'imprint.registration': 'Registration number',
    'imprint.tax': 'Tax number',
    'imprint.statistical': 'Statistical identifier',
    'imprint.activity': 'Main activity',
    'imprint.activities': 'Other registered activities',
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui.hu): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return 'hu';
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'hu') return clean === '/' ? '/' : clean;
  return `/en${clean === '/' ? '' : clean}`;
}
