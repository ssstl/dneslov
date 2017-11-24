import SelectField from 'SelectField'

export default class NameStateField extends SelectField {
   static defaultProps = {
      name: 'state',
      title: 'Род имени',
      codeNames: {
         '': 'Избери род имени...',
         'наречёное': 'Наречённое',
         'самоданное': 'Самоданное',
         'крещенское': 'В крещении',
         'чернецкое': 'В рясофорстве',
         'иноческое': 'В иночестве',
         'схимное': 'В схиме',
         'отчество': 'Отчество',
         'отчество_принятое': 'Нареченное отчество',
         'кумство': 'По кумовству',
         'благословенное': 'В благословении',
         'покаянное': 'В покаянии',
         'отечья': 'Фамилия по отцу',
         'мужнина': 'Фамилия по мужу',
         'наречёная': 'В наречении',
         'самоданная': 'В самонаречении',
         'матерня': 'Фамилия по матери',
         'прозвание': 'Прозвание',
      },
      validations: {
         'Пункт из списка должен быть выбран': /^$/,
      }
   }
}
