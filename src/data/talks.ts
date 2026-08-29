export type Talk = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  date: string;
};

export const talks: Talk[] = [
  { year: 2025, authors: 'Szekrényes István', title: 'A félreértés magánya. Nyelv, megismerés és értelmezés Francis Ford Coppola Magánbeszélgetésében', venue: 'Vendégelőadás, Böhm Károly terem, Babeș-Bolyai Tudományegyetem, Kolozsvár (Románia)', date: '2025. december 11.' },
  { year: 2025, authors: 'Dobás Kata – Szekrényes István', title: 'Az ITIdata szemantikus adatbázis új keresőfelületei', venue: 'Networkshop 2025, Győr', date: '2025. május 14.' },
  { year: 2024, authors: 'Szekrényes István – Gudberg K. Jonsson – M. Teresa Anguera – Hunyadi László', title: 'Connecting Elan and Theme for analyzing therapeutic communication using mixed methods and observational methodology', venue: 'XVIII Congreso de Metodología de las Ciencias Sociales y de la Salud, Sevilla', date: '2024. szeptember 3–6.' },
  { year: 2023, authors: 'Palkó Gábor – Szekrényes István – Bobák Barbara', title: 'A Digitális Örökség Nemzeti Laboratórium webszolgáltatásai automatikus kézírás-felismertetéshez', venue: 'Networkshop 2023, Veszprém', date: '2023. április 12–14.' },
  { year: 2022, authors: 'Szekrényes István', title: 'Dolgok és nem tények', venue: 'Lehetséges világok. Saul Kripke emlékkonferencia, Debreceni Egyetem, Debrecen', date: '2022. november 18.' },
  { year: 2020, authors: 'Szekrényes István', title: 'Jön a kisbolygó!', venue: 'Nyelv, idegenség, vizualitás – Ünnepi konferencia Kelemen István 60. születésnapja alkalmából, Debreceni Egyetem, Debrecen', date: '2020. február 14.' },
  { year: 2019, authors: 'Hunyadi László – Szekrényes István', title: 'A HuComTech Multimodális Korpusz', venue: 'Korpuszok, nyelvtechnológiai eszközök és kísérletes módszerek a bölcsészet- és társadalomtudományokban, DAB székház, Debrecen', date: '2019. február 7.' },
  { year: 2018, authors: 'Szekrényes István', title: 'Post-processing T-patterns Using External Tools from a mixed method perspective', venue: 'The tenth meeting of MASI – Research Network on Methodology for the Analysis of Social Interaction, University of La Laguna, Tenerife', date: '2018. szeptember 13–15.' },
  { year: 2018, authors: 'Hunyadi László – Szekrényes István – Váradi Tamás', title: 'Human-human, human-machine communication: on the HuComTech multimodal corpus', venue: 'Szegedi Tudományegyetem, Szeged', date: '2018. május 23.' },
  { year: 2018, authors: 'Hunyadi László – Szekrényes István – Váradi Tamás', title: 'Ember-ember, ember-gép, kommunikáció: A HuComTech multimodális korpuszról', venue: 'MTA Nyelvtudományi Intézet, Budapest', date: '2018. április 26.' },
  { year: 2017, authors: 'Kovács György – Szekrényes István – Hunyadi László', title: 'Mesterséges intelligencia alkalmazása a viselkedés mintázatainak feltárásában', venue: 'A Magyar Tudomány Ünnepe, Debreceni Egyetem', date: '2017. november 15.' },
  { year: 2017, authors: 'Szekrényes István – Kovács György', title: 'Classification of Formal and Informal Dialogues Based on Turn-Taking and Intonation Using Deep Neural Networks', venue: 'SPECOM 2017 – 19th International Conference on Speech and Computer, University of Hertfordshire, Hatfield (UK)', date: '2017. szeptember 12–16.' },
  { year: 2017, authors: 'Szekrényes István', title: 'Challenges in automatic annotation and the perception of prosody in spontaneous speech', venue: 'CAPSS2017 – Challenges in analysis and processing of spontaneous speech, MTA Nyelvtudományi Intézet, Budapest', date: '2017. május 14–17.' },
  { year: 2017, authors: 'Kornai András – Szekrényes István', title: 'e-Magyar beszédarchívum', venue: 'XIII. Magyar Számítógépes Nyelvészeti Konferencia (MSZNY 2017), Szegedi Tudományegyetem', date: '2017. január 26–27.' },
  { year: 2016, authors: 'Takács Karolina – Szekrényes István', title: 'Automatizált szóhatár illesztés a HuComTech-korpuszban', venue: 'A Magyar Tudomány Ünnepe, Debreceni Egyetem', date: '2016. november 24.' },
  { year: 2016, authors: 'Hunyadi László – Váradi Tamás – Szekrényes István', title: 'The Multimodal HuComTech Corpus: Principles of Annotation and Discovery of Hidden Patterns of Behaviour', venue: 'LREC 2016, Multimodal Corpora 2016 Workshop, Portorož (Szlovénia)', date: '2016. május 24.' },
  { year: 2016, authors: 'Szekrényes István', title: 'Automatic Prosodic Annotation for DRD Analysis (poszter)', venue: 'Second Action Conference (TextLink), Károli Gáspár Egyetem, Budapest', date: '2016. április 11–13.' },
  { year: 2015, authors: 'Szekrényes István', title: 'Az azonosság problémája a bűnügyi nyelvészet kontextusában', venue: 'A szubjektum topográfiája, DAB székház, Debrecen', date: '2015. november 6–7.' },
  { year: 2015, authors: 'Szekrényes István', title: 'ProsoTool, a Method for Automatic Annotation of Fundamental Frequency', venue: '6th IEEE Conference on Cognitive Infocommunications (CogInfoCom 2015), Széchenyi István Egyetem, Győr', date: '2015. október 19–21.' },
  { year: 2015, authors: 'Szekrényes István', title: 'Introduction to the HuComTech corpus and database', venue: 'On The Temporal Structure Of Multimodal Communication Workshop, Debreceni Egyetem', date: '2015. szeptember 24.' },
  { year: 2015, authors: 'Szekrényes István', title: 'Possible functions of prosody & speech dynamics in the analysis of conversations', venue: 'Multimodal communication: resources and application, Debreceni Egyetem', date: '2015. február 11–13.' },
  { year: 2014, authors: 'Szekrényes István', title: 'Automatic prosodic annotation for the analysis of conversations', venue: 'University of Debrecen Symposium 2014, Debreceni Egyetem', date: '2014. október 8–9.' },
  { year: 2014, authors: 'Szekrényes István', title: 'A prozódiai és beszéddinamikai információk funkciója és feldolgozhatósága a társalgási folyamatok elemzésében', venue: 'Tavaszi Szél 2014, Debreceni Egyetem', date: '2014. március 21–23.' },
  { year: 2013, authors: 'Szekrényes István', title: 'Automatic prosodic annotation in the HuComTech corpus', venue: 'Workshop on crossmodality and multimodality, Debreceni Egyetem', date: '2013. május 23–24.' },
  { year: 2013, authors: 'Szekrényes István', title: 'Multimodal recordings of Hungarian speech sounds and syllables', venue: 'Workshop on crossmodality and multimodality, Debreceni Egyetem', date: '2013. május 23–24.' },
  { year: 2012, authors: 'Esfandiari Ghazaleh – Szekrényes István', title: 'Topic change detection based on prosodic cues in unimodal settings', venue: 'The 3rd IEEE International Conference on Cognitive Infocommunications, Kosice (Szlovákia)', date: '2012. december 2.' },
  { year: 2012, authors: 'Esfandiari Ghazaleh – Szekrényes István', title: 'Topic change detection based on non-verbal acoustic cues', venue: '“Culture and Technology” European Summer School, Universität Leipzig (Németország)', date: '2012. június 23–31.' },
  { year: 2012, authors: 'Szekrényes István – Csipkés László – Oravecz Csaba', title: 'Automatic prosodic annotation', venue: 'Data and Interpretation in Human-Machine Communication, Debreceni Egyetem', date: '2012. június 11.' },
  { year: 2012, authors: 'Esfandiari Ghazaleh – Szekrényes István', title: 'Topic change detection based on non-verbal acoustic cues (a pilot study)', venue: 'Data and Interpretation in Human-Machine Communication, Debreceni Egyetem', date: '2012. június 11.' },
  { year: 2011, authors: 'Szekrényes István – Csipkés László – Oravecz Csaba', title: 'A HuComTech-korpusz és -adatbázis számítógépes feldolgozási lehetőségei. Automatikus prozódiai annotáció', venue: 'VIII. Magyar Számítógépes Nyelvészeti Konferencia, Szegedi Tudományegyetem', date: '2011. december 1–2.' },
  { year: 2011, authors: 'Szekrényes István', title: 'Automatic prosodic annotation', venue: 'The Theoretical Fundamentals of Human-Computer Interaction Technologies Closing Conference, DAB székház, Debrecen', date: '2011. október 9–11.' },
  { year: 2011, authors: 'Hunyadi László és mtsai.', title: 'The outlines of a theory and technology of human-computer interaction as represented in the model of the HuComTech project', venue: '2nd International Conference on Cognitive Infocommunications, Budapest', date: '2011. augusztus 7–9.' },
  { year: 2011, authors: 'Szekrényes István', title: 'Improvements in the annotation and analysis methods of multimodal corpora', venue: '8th Old World Conference in Phonology, Marrakech (Marokkó)', date: '2011. január 19–22.' },
  { year: 2010, authors: 'Szekrényes István', title: 'The Hungarian Multimodal Dialogue Database 1.: Annotation – Pre-processing and Technical Implementation', venue: '“Culture and Technology” ESU European Summer School, Universität Leipzig (Németország)', date: '2010. július 26–30.' },
];
