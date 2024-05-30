console.log('Текст задачі: Задано масив із 16 чисел, що генерується автоматично. Вивести у рядок всі елементи, які розміщені у парних позиціях, та відсортувати його у порядку спадання.')
let numbers = Array.from({length: 16}, () => Math.floor(Math.random() * 100));
console.log('Початковий масив:', numbers);
let evenIndexedNumbers = numbers.filter((element, index) => index % 2 === 0);
evenIndexedNumbers.sort((a, b) => b - a);
console.log('Елементи на парних позиціях, відсортовані у порядку спадання:', evenIndexedNumbers);