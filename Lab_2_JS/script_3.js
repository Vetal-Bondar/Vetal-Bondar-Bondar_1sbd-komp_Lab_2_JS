function each(arr, callback) {
    const modifiedArr = [];
    for (let i = 0; i < arr.length; i++) {
      modifiedArr.push(callback(arr[i], i, arr));
    }
    return modifiedArr;
  }
  const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 1000));

  const modifyNumber = (num) => (num + 6) * 2.5;
  
console.log('Текст задачі: Зробіть функцію each, яка першим параметром приймає масив, а другим - функцію, яка застосовується до кожного елементу масиву. Функція each повинна повернути змінений масив.')
console.log('Початковий масив:', numbers);
const modifiedNumbers = each(numbers, modifyNumber);

  console.log('Змінений масив:', modifiedNumbers);
  console.log('Пояснення щодо результатів. Спочатку згенеровано рандомний масив із 10 цілих чисел до 1000, далі він передається в функцію, яка додає до кожного числа масиву 6, та після цього множить кожне число на 2,5. Виводиться змінений масив')
  