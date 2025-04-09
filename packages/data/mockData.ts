// Types
export interface Civilization {
    id: string;
    name: string;
    slug: string;
    continent: string;
    region: string;
    startYear: number;
    endYear: number | null;
    description: string;
    imageUrl: string;
    capital?: string;
    language?: string;
    religion?: string;
}

export interface Infrastructure {
    id: string;
    name: string;
    slug: string;
    description: string;
    iconUrl: string;
}

export interface HistoricalFigure {
    id: string;
    name: string;
    slug: string;
    title: string;
    birthYear: number;
    deathYear: number | null;
    civilization: string;
    description: string;
    imageUrl: string;
}

// Mock Civilizations
export const civilizations: Civilization[] = [
    {
        id: "ancient-egypt",
        name: "Ancient Egypt",
        slug: "ancient-egypt",
        continent: "Africa",
        region: "North Africa",
        startYear: -3100,
        endYear: -30,
        description: "One of the world's earliest and longest-lasting civilizations, centered along the Nile River and known for its monumental architecture, complex religious beliefs, and innovations in writing, art, and technology.",
        imageUrl: "/mockImages/ancient-egypt.jpg",
        capital: "Memphis (Early), Thebes (Middle), Alexandria (Late)",
        language: "Ancient Egyptian",
        religion: "Egyptian Polytheism"
    },
    {
        id: "roman-empire",
        name: "Roman Empire",
        slug: "roman-empire",
        continent: "Europe",
        region: "Mediterranean",
        startYear: -27,
        endYear: 476,
        description: "An ancient civilization that grew from a city-state to control territories across Europe, North Africa, and Western Asia. Known for its sophisticated legal system, military prowess, architecture, and lasting cultural influence.",
        imageUrl: "/mockImages/roman-empire.jpg",
        capital: "Rome",
        language: "Latin",
        religion: "Roman Polytheism, later Christianity"
    },
    {
        id: "han-dynasty",
        name: "Han Dynasty",
        slug: "han-dynasty",
        continent: "Asia",
        region: "East Asia",
        startYear: -206,
        endYear: 220,
        description: "A pivotal dynasty in Chinese history that developed significant arts, sciences, and technology. The Han period is considered the golden age of ancient Chinese civilization.",
        imageUrl: "/mockImages/han-dynasty.jpg",
        capital: "Chang'an (Western Han), Luoyang (Eastern Han)",
        language: "Classical Chinese",
        religion: "Confucianism, Taoism, Buddhism (later)"
    },
    {
        id: "aztec-empire",
        name: "Aztec Empire",
        slug: "aztec-empire",
        continent: "Americas",
        region: "Mesoamerica",
        startYear: 1428,
        endYear: 1521,
        description: "A Mesoamerican civilization known for its complex social hierarchy, architectural achievements, agricultural innovations, and cultural practices including a sophisticated calendar system.",
        imageUrl: "/mockImages/aztec-empire.jpg",
        capital: "Tenochtitlan",
        language: "Nahuatl",
        religion: "Aztec Polytheism"
    },
    {
        id: "mali-empire",
        name: "Mali Empire",
        slug: "mali-empire",
        continent: "Africa",
        region: "West Africa",
        startYear: 1230,
        endYear: 1670,
        description: "A West African empire that became renowned for the wealth of its rulers, particularly Mansa Musa. The Mali Empire was known for its cultural and commercial achievements, particularly in the city of Timbuktu.",
        imageUrl: "/mockImages/mali-empire.jpg",
        capital: "Niani",
        language: "Mandinka",
        religion: "Islam"
    }
];

// Mock Infrastructures
export const infrastructures: Infrastructure[] = [
    {
        id: "food",
        name: "Food",
        slug: "food",
        description: "Systems and technologies for agricultural production, food storage, distribution, and preparation across civilizations.",
        iconUrl: "/icons/food.svg"
    },
    {
        id: "water",
        name: "Water",
        slug: "water",
        description: "Technologies and systems for managing water resources, including irrigation, aqueducts, wells, and sanitation.",
        iconUrl: "/icons/water.svg"
    },
    {
        id: "shelter",
        name: "Shelter",
        slug: "shelter",
        description: "Evolution of housing and building technologies, from primitive shelters to complex urban structures.",
        iconUrl: "/icons/shelter.svg"
    },
    {
        id: "transport",
        name: "Transport",
        slug: "transport",
        description: "Development of roads, waterways, vehicles, and systems for moving people and goods between locations.",
        iconUrl: "/icons/transport.svg"
    },
    {
        id: "law",
        name: "Law",
        slug: "law",
        description: "Legal systems, codes, courts, and enforcement mechanisms that governed societies throughout history.",
        iconUrl: "/icons/law.svg"
    }
];

// Mock Historical Figures
export const historicalFigures: HistoricalFigure[] = [
    {
        id: "julius-caesar",
        name: "Julius Caesar",
        slug: "julius-caesar",
        title: "Roman General and Statesman",
        birthYear: -100,
        deathYear: -44,
        civilization: "Roman Empire",
        description: "A Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
        imageUrl: "/mockImages/julius-caesar.jpg"
    },
    {
        id: "cleopatra",
        name: "Cleopatra VII",
        slug: "cleopatra",
        title: "Last active ruler of the Ptolemaic Kingdom of Egypt",
        birthYear: -69,
        deathYear: -30,
        civilization: "Ancient Egypt",
        description: "The last active ruler of the Ptolemaic Kingdom of Egypt. As a member of the Ptolemaic dynasty, she was a descendant of its founder Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great.",
        imageUrl: "/mockImages/cleopatra.jpg"
    },
    {
        id: "emperor-wu",
        name: "Emperor Wu of Han",
        slug: "emperor-wu",
        title: "Emperor of the Han Dynasty",
        birthYear: -156,
        deathYear: -87,
        civilization: "Han Dynasty",
        description: "The seventh emperor of the Han dynasty of China, ruling from 141 to 87 BCE. His reign lasted 54 years, a record not broken until the reign of the Kangxi Emperor more than 1,800 years later.",
        imageUrl: "/mockImages/emperor-wu.jpg"
    },
    {
        id: "mansa-musa",
        name: "Mansa Musa",
        slug: "mansa-musa",
        title: "Emperor of Mali",
        birthYear: 1280,
        deathYear: 1337,
        civilization: "Mali Empire",
        description: "The tenth Mansa of the Mali Empire, an Islamic West African state. He has been described as the wealthiest individual of the Middle Ages and one of the richest people who ever lived.",
        imageUrl: "/mockImages/mansa-musa.jpg"
    },
    {
        id: "montezuma",
        name: "Montezuma II",
        slug: "montezuma",
        title: "Aztec Emperor",
        birthYear: 1466,
        deathYear: 1520,
        civilization: "Aztec Empire",
        description: "The ninth tlatoani or ruler of Tenochtitlan, reigning from 1502 to 1520. During his reign, the Aztec Empire reached its maximal size. The first contact between indigenous civilizations of Mesoamerica and Europeans took place during his reign.",
        imageUrl: "/mockImages/montezuma.jpg"
    }
];

// Mock Time Periods
export const timePeriods = [
    { id: "ancient", name: "Ancient (3000 BCE - 500 CE)", startYear: -3000, endYear: 500 },
    { id: "medieval", name: "Medieval (500 - 1500 CE)", startYear: 500, endYear: 1500 },
    { id: "early-modern", name: "Early Modern (1500 - 1800 CE)", startYear: 1500, endYear: 1800 },
    { id: "modern", name: "Modern (1800 CE - Present)", startYear: 1800, endYear: new Date().getFullYear() }
];

// Mock Continents
export const continents = [
    { id: "africa", name: "Africa" },
    { id: "americas", name: "Americas" },
    { id: "asia", name: "Asia" },
    { id: "europe", name: "Europe" },
    { id: "oceania", name: "Oceania" }
];

// Helper functions
export function formatYear(year: number): string {
    if (year < 0) {
        return `${Math.abs(year)} BCE`;
    } else {
        return `${year} CE`;
    }
}

export function getTimePeriodForYear(year: number): string {
    const period = timePeriods.find(
        period => year >= period.startYear && year <= period.endYear
    );
    return period ? period.name : "Unknown";
}