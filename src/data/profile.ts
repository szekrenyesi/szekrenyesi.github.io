export const profile = {
  name: 'Szekrényes István',
  nameEn: 'István Szekrényes',
  email: 'szekrenyes.istvan@arts.unideb.hu',
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
};
