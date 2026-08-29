export type PubType = 'journal' | 'book' | 'chapter' | 'conference' | 'thesis' | 'other';

export type Publication = {
  type: PubType;
  year: number;
  authors: string;
  title: string;
  venue: string;
  detail?: string;
  doi?: string;
  quartile?: string;
};

export const pubTypeLabels: Record<PubType, { hu: string; en: string }> = {
  journal: { hu: 'Folyóiratcikkek', en: 'Journal articles' },
  book: { hu: 'Szerkesztett kötetek és könyvek', en: 'Edited volumes and books' },
  chapter: { hu: 'Könyvfejezetek', en: 'Book chapters' },
  conference: { hu: 'Konferenciaközlemények', en: 'Conference proceedings' },
  thesis: { hu: 'Disszertáció', en: 'Dissertation' },
  other: { hu: 'Egyéb', en: 'Other' },
};

export const pubTypeOrder: PubType[] = ['journal', 'book', 'chapter', 'conference', 'thesis', 'other'];

export const publications: Publication[] = [
  // ── Journal articles ────────────────────────────────────────────
  {
    type: 'journal', year: 2025,
    authors: 'Molinero, F. – Jonsson, G. K. – Anguera, M. T. – Hunyadi, L. – Szekrényes, I.',
    title: 'Therapeutic communication laboratory: integrating mixed methods with digital tools and reflective professional practice',
    venue: 'Frontiers in Psychology',
    detail: '16, Paper 1447587, 16 p.',
    quartile: 'Q1',
  },
  {
    type: 'journal', year: 2019,
    authors: 'Szekrényes, I.',
    title: 'Post-processing T-patterns Using External Tools From a Mixed Method Perspective',
    venue: 'Frontiers in Psychology',
    detail: '10, Paper 1680, 12 p.',
    quartile: 'Q1',
  },
  {
    type: 'journal', year: 2015,
    authors: 'Hunyadi, L. – Szekrényes, I. – Sziklai, I.',
    title: 'Vizuális percepció és nyelvi feldolgozás',
    venue: 'Beszédkutatás',
    detail: '23, pp. 186–208',
  },
  {
    type: 'journal', year: 2014,
    authors: 'Hunyadi, L. – Szekrényes, I. – Czap, L. – Sziklai, I.',
    title: 'Seeing the sounds?',
    venue: 'Argumentum',
    detail: '10, pp. 235–338',
  },
  {
    type: 'journal', year: 2014,
    authors: 'Szekrényes, I.',
    title: 'Annotation and interpretation of prosodic data in the HuComTech corpus for multimodal user interfaces',
    venue: 'Journal on Multimodal User Interfaces',
    detail: '8:2, pp. 143–150',
    quartile: 'Q3',
  },
  {
    type: 'journal', year: 2011,
    authors: 'Pápay, K. – Szeghalmy, Sz. – Szekrényes, I.',
    title: 'HuComTech Multimodal Corpus Annotation',
    venue: 'Argumentum',
    detail: '7, pp. 330–337',
  },
  {
    type: 'journal', year: 2010,
    authors: 'Szekrényes, I.',
    title: 'Egy apolitikusan felfogott élet esélyei',
    venue: 'Nagyerdei Almanach: Bölcseleti Évkönyv',
    detail: '2010/1, Paper 8, 8 p.',
  },
  {
    type: 'journal', year: 2007,
    authors: 'Szekrényes, I.',
    title: 'A király meztelen: avagy Egy boldogtalan kritikus „apológiája"',
    venue: 'Forrás: Irodalom-Művészet-Tudomány',
    detail: '39:7–8, pp. 161–167',
  },

  // ── Books / edited volumes ──────────────────────────────────────
  {
    type: 'book', year: 2019,
    authors: 'Hunyadi, L. – Szekrényes, I. (eds.)',
    title: 'The Temporal Structure of Multimodal Communication: Theory, Methods and Applications',
    venue: 'Intelligent Systems Reference Library, vol. 164. Springer, Cham',
    detail: '162 p. ISBN 978-3-030-22894-1',
    doi: 'https://doi.org/10.1007/978-3-030-22895-8',
  },
  {
    type: 'book', year: 2016,
    authors: 'Csűry, I. – Hunyadi, L. – Abuczki, Á. – Esfandiari, G. – Földesi, A. – Szekrényes, I. (Csűry, I. szerk.)',
    title: 'Elements of Electronic Information and Document Processing: An introduction to informatics (not only) for the humanities',
    venue: 'Debreceni Egyetemi Kiadó, Debrecen',
    detail: '139 p. ISBN 978-963-318-564-3',
  },

  // ── Book chapters ───────────────────────────────────────────────
  {
    type: 'chapter', year: 2023,
    authors: 'Hunyadi, L. – Szekrényes, I.',
    title: 'A kommunikáció multimodális mintázatainak időszerkezete',
    venue: 'In: Horváth, V. – Dér, Cs. I. – Hámori, Á. – Krepsz, V. (szerk.) Empirikus társalgáskutatás Magyarországon. HUN-REN Nyelvtudományi Kutatóközpont, Budapest',
    detail: 'pp. 67–83',
  },
  {
    type: 'chapter', year: 2022,
    authors: 'Szekrényes, I.',
    title: 'Az azonosítás nem kizárólag forenzikus problémájáról',
    venue: 'In: Angyalosi, G. – Valastyán, T. (szerk.) Fakultások közt: Tudomány, tudás, alkalmazás. L\'Harmattan Kiadó, Budapest',
    detail: 'pp. 183–201',
  },
  {
    type: 'chapter', year: 2021,
    authors: 'Hunyadi, L. – Szekrényes, I.',
    title: 'Hangok, hangulatok, gesztusok: magyar nyelvű dialógusok multimodális vizsgálata',
    venue: 'In: Dodé, R. – Ludányi, Zs. (szerk.) A korpusznyelvészettől a neurális hálókig: Köszöntő kötet Váradi Tamás 70. születésnapjára. Nyelvtudományi Kutatóközpont, Budapest',
    detail: 'pp. 81–90',
  },
  {
    type: 'chapter', year: 2019,
    authors: 'Hunyadi, L. – Szekrényes, I.',
    title: 'Preface',
    venue: 'In: Hunyadi, L. – Szekrényes, I. (eds.) The Temporal Structure of Multimodal Communication. Springer, Cham',
    detail: 'pp. vii–viii',
  },
  {
    type: 'chapter', year: 2019,
    authors: 'Kovács, Gy. – Szekrényes, I.',
    title: 'Applying Neural Network Techniques for Topic Change Detection in the HuComTech Corpus',
    venue: 'In: Hunyadi, L. – Szekrényes, I. (eds.) The Temporal Structure of Multimodal Communication. Springer, Cham',
    detail: 'pp. 147–162',
    doi: 'https://doi.org/10.1007/978-3-030-22895-8_8',
  },
  {
    type: 'chapter', year: 2017,
    authors: 'Szekrényes, I. – Kovács, Gy.',
    title: 'Classification of Formal and Informal Dialogues Based on Turn-Taking and Intonation Using Deep Neural Networks',
    venue: 'In: Karpov, A. – Potapova, R. – Mporas, I. (eds.) Speech and Computer: SPECOM 2017. Springer, Cham',
    detail: 'pp. 233–243',
  },
  {
    type: 'chapter', year: 2016,
    authors: 'Hunyadi, L. – Váradi, T. – Szekrényes, I.',
    title: 'Language technology tools and resources for the analysis of multimodal communication',
    venue: 'In: Hinrichs, E. – Hinrichs, M. – Trippel, T. (eds.) Proceedings of the Workshop on Language Technology Resources and Tools for Digital Humanities (LT4DH 2016). University of Tübingen',
    detail: 'pp. 117–124',
  },
  {
    type: 'chapter', year: 2016,
    authors: 'Hunyadi, L. – Kiss, H. – Szekrényes, I.',
    title: 'Incompleteness and Fragmentation: Possible Formal Cues to Cognitive Processes Behind Spoken Utterances',
    venue: 'In: Tweedale, J. W. et al. (eds.) Intelligent Decision Technology Support in Practice. Springer, Cham',
    detail: 'pp. 231–257',
  },
  {
    type: 'chapter', year: 2016,
    authors: 'Hunyadi, L. – Szekrényes, I. – Kiss, H.',
    title: 'Prosody Enhances Cognitive Infocommunication: Materials from the HuComTech Corpus',
    venue: 'In: Esposito, A. – Jain, L. C. (eds.) Toward Robotic Socially Believable Behaving Systems – Vol. I: Modeling Emotions. Springer, Cham',
    detail: 'pp. 183–204',
  },
  {
    type: 'chapter', year: 2014,
    authors: 'Szekrényes, I.',
    title: 'Prozódiai és beszéddinamikai információk funkciója a társalgási folyamatok elemzésében',
    venue: 'In: Csiszár, I. – Kőmíves, P. M. (szerk.) Tavaszi Szél 2014 Konferencia III. DOSZ, Debrecen',
    detail: 'pp. 532–544',
  },
  {
    type: 'chapter', year: 2012,
    authors: 'Hunyadi, L. – Földesi, A. – Szekrényes, I. – Kiss, H. – Abuczki, Á. – Bódog, A.',
    title: 'Az ember-gép kommunikáció elméleti-technológiai modellje és nyelvtechnológiai vonatkozásai',
    venue: 'In: Prószéky, G. – Váradi, T. (szerk.) Nyelvtechnológiai kutatások. Akadémiai Kiadó, Budapest',
    detail: 'pp. 265–309',
  },
  {
    type: 'chapter', year: 2011,
    authors: 'Szekrényes, I.',
    title: 'Automatizált F0-mérések beágyazott mondatszerkezetek rekurziós sajátosságainak vizsgálatához',
    venue: 'In: Hunyadi, L. (szerk.) Rekurzió a nyelvben I.: Prozódiai megközelítés. Tinta Könyvkiadó, Budapest',
    detail: 'pp. 141–152',
  },

  // ── Conference proceedings ──────────────────────────────────────
  {
    type: 'conference', year: 2025,
    authors: 'Dobás, K. – Szekrényes, I.',
    title: 'Az ITIdata szemantikus adatbázis új keresőfelületei',
    venue: 'In: Tick, J. – Kokas, K. – Holl, A. (szerk.) NETWORKSHOP 2025 – 34. Országos Informatikai Konferencia (Széchenyi István Egyetem, Győr). Hungarnet Egyesület, Budapest',
    detail: 'pp. 58–65',
  },
  {
    type: 'conference', year: 2023,
    authors: 'Palkó, G. – Szekrényes, I. – Bobák, B.',
    title: 'A Digitális Örökség Nemzeti Laboratórium webszolgáltatásai automatikus kézírás-felismertetéshez',
    venue: 'In: Tick, J. – Kokas, K. – Holl, A. (szerk.) 32. Networkshop (Pannon Egyetem, Veszprém). Hungarnet, Budapest',
    detail: 'pp. 164–169',
  },
  {
    type: 'conference', year: 2018,
    authors: 'Hunyadi, L. – Váradi, T. – Kovács, Gy. – Szekrényes, I. – Kiss, H. – Takács, K.',
    title: 'Human-human, human-machine communication: on the HuComTech multimodal corpus',
    venue: 'In: Skadina, I. – Eskevich, M. (eds.) Selected papers from the CLARIN Annual Conference 2018, Pisa. Linköping University Electronic Press',
    detail: 'pp. 56–65',
  },
  {
    type: 'conference', year: 2017,
    authors: 'Kornai, A. – Szekrényes, I.',
    title: 'e-Magyar beszédarchívum',
    venue: 'In: Vincze, V. (szerk.) XIII. Magyar Számítógépes Nyelvészeti Konferencia (MSZNY 2017). Szegedi Tudományegyetem',
    detail: 'pp. 103–109',
  },
  {
    type: 'conference', year: 2015,
    authors: 'Szekrényes, I.',
    title: 'ProsoTool, a method for automatic annotation of fundamental frequency',
    venue: '6th IEEE Conference on Cognitive Infocommunications (CogInfoCom 2015), Győr. IEEE, New York',
    detail: 'pp. 291–296',
  },
  {
    type: 'conference', year: 2012,
    authors: 'Esfandiari Baiat, G. – Szekrényes, I.',
    title: 'Topic change detection based on prosodic cues in unimodal setting',
    venue: '3rd IEEE International Conference on Cognitive Infocommunications (CogInfoCom 2012). IEEE, Piscataway (NJ)',
    detail: 'pp. 527–530',
  },
  {
    type: 'conference', year: 2012,
    authors: 'Hunyadi, L. – Szekrényes, I. – Borbély, A. – Kiss, H.',
    title: 'Annotation of spoken syntax in relation to prosody and multimodal pragmatics',
    venue: '3rd IEEE International Conference on Cognitive Infocommunications (CogInfoCom 2012). IEEE, Piscataway (NJ)',
    detail: 'pp. 537–541',
  },
  {
    type: 'conference', year: 2011,
    authors: 'Hunyadi, L. – Bertók, K. – Németh T., E. – Szekrényes, I. – Abuczki, Á. – Nagy, G. – Nagy, N. – Németi, P. – Bódog, A.',
    title: 'The outlines of a theory and technology of human-computer interaction as represented in the model of the HuComTech project',
    venue: '2nd International Conference on Cognitive Infocommunications (CogInfoCom 2011), Budapest. IEEE Computer Society Press',
    detail: 'Paper 5999491, 5 p.',
  },
  {
    type: 'conference', year: 2011,
    authors: 'Szekrényes, I. – Csipkés, L. – Oravecz, Cs.',
    title: 'A HuComTech-korpusz és -adatbázis számítógépes feldolgozási lehetőségei: Automatikus prozódiai annotáció',
    venue: 'In: Tanács, A. – Vincze, V. (szerk.) VIII. Magyar Számítógépes Nyelvészeti Konferencia (MSZNY 2011). Szegedi Tudományegyetem',
    detail: 'pp. 190–198',
  },

  // ── Thesis ──────────────────────────────────────────────────────
  {
    type: 'thesis', year: 2020,
    authors: 'Szekrényes, I.',
    title: 'Prozódiai jellemzők gépi feldolgozása és hasznosítása élőnyelvi korpuszok elemzésében',
    venue: 'PhD-értekezés. Debreceni Egyetem, Nyelvtudományok Doktori Iskola',
    detail: 'Témavezető: Hunyadi László',
  },
  {
    type: 'thesis', year: 2019,
    authors: 'Szekrényes, I.',
    title: 'Automatic extraction of prosodic features and their employment in the analysis of speech corpora',
    venue: 'Debreceni Egyetem',
  },

  // ── Other ───────────────────────────────────────────────────────
  {
    type: 'other', year: 2017,
    authors: 'Ács, J. – Bobák, B. – Both, Zs. – Falyuna, N. – Farkas, R. – Fegyó, T. – Gerőcs, M. – Indig, B. – Kornai, A. – Kovács, R. et al.',
    title: 'e-magyar: magyar szövegfeldolgozó eszközlánc',
    venue: 'Kutatói infrastruktúra',
  },
];
