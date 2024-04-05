const words = ["Шлёпнуть", "Смять", "Хрустнуть", "Проследить", "Скрутить", "Очертить", "Завояжить", "Дать в", "Расквасить", "Сорвать", "Развернуть", "Отправить в", "Въебать в", "Раскусить", "Вынести", "Раздерибанить", "Распидорасить", "Абстрагировать", "Вскрыть", "Припиздячить", "Вырвать", "Порвать", "Распиздячить", "Оформить", "Смакай"];
const words2 = ["кабинет ", "казинак ", "бобину ", "табло ", "рапсодию ", "периметр  ", "кибитку ", "сертаки ", "парапет ", "пломбу ", "чердак ", "Барановичи ", "аврал ", "герменевтику ", "капитал ", "Чебоксары ", "мачту ", "ебало ", "пилораму ", "кавардак ", "фуникулёр ", "киянку ", "кадило ", "декрет ", "яйки"];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  document.getElementById("random-word").innerText = randomWord;
  
  const randomIndex2 = Math.floor(Math.random() * words2.length);
  const randomWord2 = words2[randomIndex2];
  document.getElementById("random-word2").innerText = randomWord2;
  document.getElementById("word-button").innerText = "ещё раз";
}