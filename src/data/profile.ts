export const profile = {
  name: 'Szekrényes István',
  nameEn: 'István Szekrényes',
  affiliation: {
    hu: 'Debreceni Egyetem, Filozófia Intézet',
    en: 'Institute of Philosophy, University of Debrecen',
  },
  position: {
    hu: 'Egyetemi adjunktus',
    en: 'Assistant Professor',
  },
  mtmt: 'https://m2.mtmt.hu/gui2/?type=authors&mode=browse&sel=authors10038180',
  github: 'https://github.com/szekrenyesi',
  cvUrl: '/cv.pdf',
  // Profilkép: tedd a fájlt a public/ mappába (pl. public/avatar.jpg),
  // majd írd ide az URL-t (a public/ gyökere = /). Ha null, monogram jelenik meg.
  avatar: null as string | null,
  academic: {
    email: 'szekrenyes.istvan@arts.unideb.hu',
    phone: '+36 52 512 900 / 22124',
    phoneTel: '+3652512900',   // clickable form for tel: (extension after slash)
  },
  business: {
    name: 'Szekrényes István egyéni vállalkozó',
    nameEn: 'Szekrényes István, sole proprietor',
    address: {
      hu: '4027 Debrecen, Egyetem sugárút 11., földszint 4., Magyarország',
      en: '4027 Debrecen, Egyetem sugárút 11., ground floor 4, Hungary',
    },
    email: 'i.szekrenyes@comp-ling.org',
    phone: '+36 30 439 2304',
    phoneTel: '+36304392304',   // clickable form for tel:
    registrationNumber: '62661315',
    taxNumber: '92272932-1-29',
    statisticalNumber: '92272932-7499-231-09',
    mainActivity: {
      hu: '749901 – Egyéb szakmai, tudományos, műszaki tevékenység m.n.s.',
      en: '749901 – Other professional, scientific and technical activities n.e.c.',
    },
    activities: [
      { hu: '181303 – Nyomdai kiadvány tördelése, szerkesztése, tipográfia',
        en: '181303 – Typesetting and typographic work for print publications' },
      { hu: '621002 – Egyedi szoftverfejlesztés',
        en: '621002 – Custom software development' },
      { hu: '621004 – Weblap tervezése (webdizájn)',
        en: '621004 – Web design' },
      { hu: '629001 – Egyéb számítástechnikai tevékenység',
        en: '629001 – Other information technology activities' },
      { hu: '722002 – Humán kutatás, fejlesztés',
        en: '722002 – Research and development in the humanities' },
      { hu: '854001 – Főiskolai és egyetemi oktatás (alapképzés, mesterképzés, doktori képzés)',
        en: '854001 – Higher education (bachelor, master, and doctoral programmes)' },
      { hu: '854002 – Egyéb felsőfokú továbbképzés',
        en: '854002 – Other higher-education continuing training' },
    ],
  },
};
