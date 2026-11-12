/**
 * Pilgrimage index entries. Only names and states are filled in here.
 * `reviewed` stays false until a religious reviewer and a source for each fact are attached (PRD §8 WEB-011/013).
 * Travel logistics, seasons and open/closed status must not be added without a dated, verified source.
 */
export type YatraEntry = {
  slug: string;
  name: string;
  romanization: string;
  state: string;
  reviewed: false;
};

export const jyotirlingas: YatraEntry[] = [
  { slug: "somnath", name: "सोमनाथ", romanization: "Somnātha", state: "गुजरात", reviewed: false },
  { slug: "mallikarjuna", name: "मल्लिकार्जुन", romanization: "Mallikārjuna", state: "आंध्र प्रदेश", reviewed: false },
  { slug: "mahakaleshwar", name: "महाकालेश्वर", romanization: "Mahākāleśvara", state: "मध्य प्रदेश", reviewed: false },
  { slug: "omkareshwar", name: "ओंकारेश्वर", romanization: "Oṃkāreśvara", state: "मध्य प्रदेश", reviewed: false },
  { slug: "kedarnath", name: "केदारनाथ", romanization: "Kedārnātha", state: "उत्तराखंड", reviewed: false },
  { slug: "bhimashankar", name: "भीमाशंकर", romanization: "Bhīmaśaṅkara", state: "महाराष्ट्र", reviewed: false },
  { slug: "kashi-vishwanath", name: "काशी विश्वनाथ", romanization: "Kāśī Viśvanātha", state: "उत्तर प्रदेश", reviewed: false },
  { slug: "trimbakeshwar", name: "त्र्यंबकेश्वर", romanization: "Trimbakeśvara", state: "महाराष्ट्र", reviewed: false },
  { slug: "vaidyanath", name: "वैद्यनाथ", romanization: "Vaidyanātha", state: "झारखंड", reviewed: false },
  { slug: "nageshwar", name: "नागेश्वर", romanization: "Nāgeśvara", state: "गुजरात", reviewed: false },
  { slug: "rameshwaram", name: "रामेश्वरम्", romanization: "Rāmeśvaram", state: "तमिलनाडु", reviewed: false },
  { slug: "grishneshwar", name: "घृष्णेश्वर", romanization: "Ghṛṣṇeśvara", state: "महाराष्ट्र", reviewed: false },
];

export const panchKedar: YatraEntry[] = [
  { slug: "kedarnath", name: "केदारनाथ", romanization: "Kedārnātha", state: "उत्तराखंड", reviewed: false },
  { slug: "tungnath", name: "तुंगनाथ", romanization: "Tuṅganātha", state: "उत्तराखंड", reviewed: false },
  { slug: "rudranath", name: "रुद्रनाथ", romanization: "Rudranātha", state: "उत्तराखंड", reviewed: false },
  { slug: "madhyamaheshwar", name: "मध्यमहेश्वर", romanization: "Madhyamaheśvara", state: "उत्तराखंड", reviewed: false },
  { slug: "kalpeshwar", name: "कल्पेश्वर", romanization: "Kalpeśvara", state: "उत्तराखंड", reviewed: false },
];
