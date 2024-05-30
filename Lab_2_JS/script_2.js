console.log('Текст задачі: З клавіатури вводиться числове значення вартості. Записати текстове представлення вартості у гривнях. Максимальне значення, яке може бути введене у вигляді числа це 1000.')

window.onload = function() {
    var inputValue = prompt("Вводимо число від 0,01 до 1000,00:");
    console.log("Уведені дані:", inputValue);
    
    if (inputValue === null || inputValue === "") {
        alert("Введіть число!");
        return;
    }

    var value = parseFloat(inputValue.replace(",", "."));

    if (isNaN(value) || value < 0.01 || value > 1000.00) {
        alert("Введіть число від 0,01 до 1000,00!");
        return;
    }

    var rubles = Math.floor(value);
    var kopecks = Math.round((value - rubles) * 100);

    if (kopecks === 100) {
        rubles++;
        kopecks = 0;
    }

    var rublesStr = rubles.toString();
    var kopecksStr = kopecks.toString();
    
    var result = rublesStr + " гривень";

    if (rubles % 10 === 1 && rubles % 100 !== 11) {
        result = rublesStr + " гривня";
    } else if (rubles % 10 >= 2 && rubles % 10 <= 4 && (rubles % 100 < 10 || rubles % 100 >= 20)) {
        result = rublesStr + " гривні";
    }
    if (kopecks !== 0) {
        result += " " + kopecksStr;
        if (kopecks % 10 === 1 && kopecks % 100 !== 11) {
            result += " копійка";
        } else if (kopecks % 10 >= 2 && kopecks % 10 <= 4 && (kopecks % 100 < 10 || kopecks % 100 >= 20)) {
            result += " копійки";
        } else {
            result += " копійок";
        }
    }
    console.log(result);
};


