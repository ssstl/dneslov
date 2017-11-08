import SelectField from 'SelectField'

export default class AlphabethField extends SelectField {
   static defaultProps = {
      name: 'alphabeth_code',
      title: 'Азбука',
      codeNames: {
         '': 'Избери азбуку...',
         ру: 'Совеременная русская азбука',
         рп: 'Дореформенная русская азбука',
         цс: 'Церковнославянская кириллица',
         цр: 'Церковнославянская разметка (hip)',
         сс: 'Старославянкая кириллица',
         ук: 'Украинская азбука',
         ср: 'Сербская азбука (кириллица)',
         хр: 'Хорватская азубка (латиница)',
         со: 'Словнеская азбука',
         бг: 'Болгарская азбука',
         чх: 'Чешская азбука',
         сл: 'Словацкая азбука',
         по: 'Польская азбука',
         ар: 'Армянская азбука',
         ив: 'Грузинская азбука',
         рм: 'Церковнославянская кириллица',
         цу: 'Церковнославянская кириллица румынского извода',
         гр: 'Греческая азбука',
         ла: 'Латынь',
         ит: 'Итальянская азбука',
         фр: 'Французская азбука',
         ис: 'Испанская азбука',
         не: 'Немецкая азбука',
         ир: 'Ирландская азбука',
         си: 'Староирландская азбука',
         ан: 'Английская азбука',
         са: 'Среднеанглийская азбука',
         ра: 'Раннеанглийская азбука',
      },
      validations: {
         'Пункт из списка должен быть выбран': /^$/,
      }
   }
}
