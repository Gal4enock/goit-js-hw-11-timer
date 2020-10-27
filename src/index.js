import './styles.css';
// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.
class CountdownTimer {


  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }


}
const count = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
console.log(count);