let a = ''; // Первая цифра
let b = ''; // Вторая цифра
let sign = ''; // Знак операции
let finish = false;

// Массивы для цифр и операций
const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["+", "-", "*", "/"]; // Исправлено: * вместо x

// Экран
const display = document.querySelector('.display');

// Кнопка очистки
function clearAll() {
 a = '';
 b = '';
 sign = '';
 finish = false;
 display.textContent = '0';
}

// Обработчик события клика на кнопках
document.querySelector('.buttons').addEventListener('click', function(event) {
 // Проверяем, была ли нажата кнопка
 if (!event.target.classList.contains('btn')) return;
 // Проверяем, была ли нажата кнопка очитски
 if (event.target.classList.contains('clear')) {
  clearAll();
  return;
 }

 // Получаем текст нажатой кнопки
 const key = event.target.textContent;

 // Если нажата цифра
 if (digits.includes(key)) {
  // Если знак операции уже установлен
  if (sign) {
   // Добавляем цифру к b
   b += key;
   // Обновляем экран
   display.textContent = b;
  } else {
   // Добавляем цифру к a
   a += key;
   // Обновляем экран
   display.textContent = a;
  }
 }

 // Если нажата операция
 if (operations.includes(key)) {
  // Сохраняем знак операции
  sign = key;
  // Очищаем экран, чтобы вводить вторую цифру
  display.textContent = '0';
  // Переводим a в число 
  a = parseFloat(a);
 }

 // Если нажато равно
 if (key === '=') {
  // Переводим b в число
  b = parseFloat(b);
  // Вычисляем результат
  let result = calculate(a, b, sign);
  // Обновляем экран результатом
  display.textContent = result;
  // Сбрасываем a и b для нового вычисления
  a = result;
  b = '';
  sign = '';
 }
});

// Функция для вычисления результата
function calculate(a, b, sign) {
 switch (sign) {
  case '+':
   return a + b;
  case '-':
   return a - b;
  case '*': // Исправлено: * вместо x
   return a * b;
  case '/':
   return a / b;
  default:
   return 'Ошибка';
 }
}
