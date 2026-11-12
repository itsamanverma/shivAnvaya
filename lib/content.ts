export const primaryNavigation = [
  { label: "होम", href: "/hi" },
  { label: "मंत्र", href: "/hi/mantras" },
  { label: "शिव नाम", href: "/hi/shiva-names" },
  { label: "शिव ज्ञान", href: "/hi/shiv-charcha" },
  { label: "तीर्थ", href: "/hi/jyotirlinga" },
];

/**
 * `verse` is the original-script text. It is set only where the text itself is
 * uncontroversial; all other entries stay unset until a reviewer approves the source text.
 */
export const featuredMantras: Array<{
  title: string;
  transliteration: string;
  aliases: string[];
  meaning: string;
  href: string;
  label: string;
  verse?: string;
}> = [
  {
    title: "ॐ नमः शिवाय",
    verse: "ॐ नमः शिवाय",
    transliteration: "Om Namaḥ Śivāya",
    aliases: ["om namah shivay", "om namah shivaya", "aum namah shivaya"],
    meaning: "शिव को नमन; कल्याण और चेतना के उस स्वरूप का स्मरण।",
    href: "/hi/mantras/om-namah-shivaya",
    label: "पंचाक्षर मंत्र",
  },
  {
    title: "महामृत्युंजय मंत्र",
    transliteration: "Mahāmṛtyuñjaya Mantra",
    aliases: ["maha mrityunjaya", "mahamrityunjaya", "maha mrityunjay mantra"],
    meaning: "एक वैदिक मंत्र, जिसकी पाठ-परंपरा और अर्थ को संदर्भ सहित समझें।",
    href: "/hi/mantras/maha-mrityunjaya",
    label: "वैदिक मंत्र",
  },
  {
    title: "शिव तांडव स्तोत्र",
    transliteration: "Śiva Tāṇḍava Stotram",
    aliases: ["shiv tandav stotram", "shiva tandava stotram"],
    meaning: "प्रचलित स्तोत्र-पाठ, उसके काव्य और परंपरा की परिचयात्मक झलक।",
    href: "/hi/mantras/shiva-tandava",
    label: "स्तोत्र",
  },
];

/** Illustrative records only. Replace with reviewed API content before indexing. */
export const shivaNames = [
  {
    id: "shiva-name-neelakantha",
    slug: "neelakantha",
    name: "नीलकण्ठ",
    romanization: "Nīlakaṇṭha",
    aliases: ["Neelkanth", "Neelkantha", "Nilakantha"],
    letter: "न",
    letterName: "न",
    href: "/hi/shiva-names/neelakantha",
    note: "इस नाम का अर्थ, परंपरा और संदर्भ स्रोत समीक्षा के बाद जोड़े जाएँगे।",
  },
  {
    id: "shiva-name-mahadeva",
    slug: "mahadeva",
    name: "महादेव",
    romanization: "Mahādeva",
    aliases: ["Mahadev", "Mahadeva"],
    letter: "म",
    letterName: "म",
    href: "/hi/shiva-names/mahadeva",
    note: "इस नाम का अर्थ, परंपरा और संदर्भ स्रोत समीक्षा के बाद जोड़े जाएँगे।",
  },
  {
    id: "shiva-name-shambhu",
    slug: "shambhu",
    name: "शम्भु",
    romanization: "Śambhu",
    aliases: ["Shambhu", "Sambhu"],
    letter: "श",
    letterName: "श",
    href: "/hi/shiva-names/shambhu",
    note: "इस नाम का अर्थ, परंपरा और संदर्भ स्रोत समीक्षा के बाद जोड़े जाएँगे।",
  },
];
