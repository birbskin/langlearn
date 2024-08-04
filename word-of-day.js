const words = [
    {
        word: "Hello",
        pronunciation: "hə-ˈlō",
        usage: "Used as a greeting or to begin a conversation.",
        translations: {
            es: "Hola",
            fr: "Bonjour",
            de: "Hallo",
            it: "Ciao",
            ja: "こんにちは",
            ru: "Привет"
        }
    },

    {
        word: "こんばんは",
        pronunciation: "kon-ban-wa",
        usage: "A greeting used in the evening in Japanese.",
        translations: {
            en: "Good evening",
            es: "Buenas noches",
            fr: "Bonsoir",
            de: "Guten Abend",
            it: "Buonasera",
            ru: "Добрый вечер"
        }
    },

    {
        word: "Пожалуйста",
        pronunciation: "pa-zha-lu-sta",
        usage: "Used to say 'please' or 'you're welcome' in Russian.",
        translations: {
            en: "Please / You're welcome",
            es: "Por favor / De nada",
            fr: "S'il vous plaît / Je vous en prie",
            de: "Bitte / Gern geschehen",
            it: "Per favore / Prego",
            ja: "どうぞ / どういたしまして"
        }
    }
];

function getWordOfTheDay() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return words[dayOfYear % words.length];
}

function displayWordOfTheDay() {
    const wordOfTheDay = getWordOfTheDay();
    document.getElementById('word').textContent = wordOfTheDay.word;
    document.getElementById('pronunciation').textContent = `Pronunciation: ${wordOfTheDay.pronunciation}`;
    document.getElementById('usage').textContent = `Usage: ${wordOfTheDay.usage}`;

    const translationsContainer = document.getElementById('translations');
    translationsContainer.innerHTML = '';
    for (const [lang, translation] of Object.entries(wordOfTheDay.translations)) {
        const translationElement = document.createElement('span');
        translationElement.classList.add('translation');
        translationElement.textContent = `${lang.toUpperCase()}: ${translation}`;
        translationsContainer.appendChild(translationElement);
    }
}

document.addEventListener('DOMContentLoaded', displayWordOfTheDay);