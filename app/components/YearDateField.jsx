import TextField from 'TextField'

export default class YearDateField extends TextField {
   static defaultProps = {
      name: 'year_date',
      title: 'Дата в году',
      placeholder: 'Введи дату в году',
      data: {length: '5'},
      validations: {
         "Слишком длинное значение даты в году": /^.{6,}$/,
         "Дата в году отсутствует": /^$/,
         "В значении даты допустимы только цифры, точка или знаки + и -": /[^0-9\\-\\+\\.]/,
         "Знак + или - может только предварять число": /^.[\\-\\+]{1,4}$/,
         "Цифры должны быть введены обязательно": /^[\\-\\+\\.]+$/,
      }
   }
}
