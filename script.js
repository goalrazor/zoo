function catSays(word) {
    return word;
}

function pigeonSays(word) {
    return word;
}

function animalTalks() {
    return catSays("Мяу") + " " +
        dogSays() + " " + //"Гав-гав"
        ratSays("Пи-пи-пи") + " " +
        crowSays() + " " + //"Кар"
        ferretSays("Кути-кути-кути") + " " +
        monkeySays() + " " +  //"У-а-а-а"
        frogSays("Ква-ква") + " " +
        tigerSays() + " " + //"РРРР"
        goatSays("Бээээ") + " " +
        snakeSays() + " " + //"Ашассах шассах"
        pigeonSays("Курлы-курлы");
}

console.log(animalTalks());
