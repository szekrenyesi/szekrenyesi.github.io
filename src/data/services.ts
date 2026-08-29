export type Service = {
  slug: string;
  title: { hu: string; en: string };
  description: { hu: string; en: string };
};

export const services: Service[] = [
  {
    slug: 'htr-asr',
    title: {
      hu: 'HTR- és ASR-modellek fejlesztése, betanítása',
      en: 'Development and fine-tuning of HTR and ASR models',
    },
    description: {
      hu: 'Történeti kéziratok és gépiratok automatikus felismerése, valamint egyedi beszédfelismerő rendszerek finomhangolása intézmények és kutatócsoportok igényeire szabva.',
      en: 'Automatic recognition of historical manuscripts and typescripts, and fine-tuning of custom speech recognition systems tailored to the needs of institutions and research groups.',
    },
  },
  {
    slug: 'software',
    title: {
      hu: 'Egyedi szoftverfejlesztés kutatási projektekhez',
      en: 'Custom software development for research projects',
    },
    description: {
      hu: 'Adatbázis-tervezés, adatfeldolgozó pipeline-ok és korpuszkezelő webalkalmazások digitális bölcsészet, nyelvtechnológia és beszédtechnológia területén.',
      en: 'Database design, data-processing pipelines, and corpus-management web applications in the fields of digital humanities, language technology, and speech technology.',
    },
  },
  {
    slug: 'web',
    title: {
      hu: 'Egyedi statikus és dinamikus weboldalak fejlesztése',
      en: 'Custom static and dynamic website development',
    },
    description: {
      hu: 'Bemutatkozó oldalaktól kutatói és intézményi honlapokon át adatbázis-alapú webalkalmazásokig; tartalom- és tipográfia-központú, gyors és karbantartható megoldások.',
      en: 'From presentation sites and academic or institutional homepages to database-backed web applications; content- and typography-focused, fast and maintainable solutions.',
    },
  },
  {
    slug: 'latex',
    title: {
      hu: 'LaTeX-tördelés, tudományos kiadványszerkesztés',
      en: 'LaTeX typesetting and scholarly publishing',
    },
    description: {
      hu: 'Konferenciakötetek, tanulmánykötetek, monográfiák és disszertációk professzionális tipográfiája. Referenciák: L’Harmattan, Debreceni Egyetemi Kiadó.',
      en: 'Professional typography for conference proceedings, edited volumes, monographs, and dissertations. References: L’Harmattan Publishing, University of Debrecen Press.',
    },
  },
  {
    slug: 'consulting',
    title: {
      hu: 'Kutatási együttműködés, tanácsadás, továbbképzés',
      en: 'Research collaboration, consultancy, and continuing education',
    },
    description: {
      hu: 'Bekapcsolódás K+F projektekbe beszédtechnológia és digitális bölcsészet területén; workshopok, továbbképzések tartása kutatóknak és felsőoktatási hallgatóknak.',
      en: 'Participation in R&D projects in speech technology and digital humanities; workshops and continuing-education courses for researchers and university students.',
    },
  },
];
