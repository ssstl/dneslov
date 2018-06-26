# language: ru
@model @memo
Функционал: Модель помина

   Сценарий: Проверка полей модели помина
      Допустим есть модель помина

      То не могут быть пустыми следующие свойства помина:
         | столбец            |
         | calendary          |
         | event              |
      И помин имеет рода "строка" следущие столбцы:
         | столбец            |
         | year_date          |
         | add_date           |
      И помин имеет рода "целый" следущие столбцы:
         | столбец            |
         | calendary_id       |
         | event_id           |


   Сценарий: Проверка многосвязности полей модели помина
      Если есть модель помина
      То свойство "calendary" модели есть отношение
      И свойство "event" модели есть отношение
