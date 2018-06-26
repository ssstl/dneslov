# language: ru
@model @description
Функционал: Модель описания

   @language
   Сценарий: Проверка полей модели описания
      Допустим есть модель описания

      То не могут быть пустыми следующие свойства описания:
         | столбец            |
         | text               |
         | language_code      |
         | alphabeth_code     |
      И таблица модели имеет столбец "describable_id" рода "целый"
      И описание имеет рода "строка" следущие столбцы:
         | столбец            |
         | describable_type   |
         | language_code      |
         | alphabeth_code     |
      И описание имеет рода "текст" следущие столбцы:
         | столбец            |
         | text               |


   Сценарий: Проверка многосвязности полей модели описания
      Допустим есть модель описания
      То свойство "describable" модели есть отношение к описываемому


   @language
   Сценарий: Действительная запись описания
      Допустим есть память "Василий Памятливый"
      Если создадим новое описание с полями:
        | alphabeth_code      | ру                    |
        | language_code       | ру                    |
        | text                | Мурмур                |
        | describable:memory  | ^Василий Памятливый   |
      То русское описание "Мурмур" будет существовать


   Сценарий: Ошибка удвоения записи описания для одинаковых памяти, алфавита и языка
      Допустим есть память "Василий Памятливый"
      Если создадим новое описание с полями:
        | alphabeth_code      | ру                    |
        | language_code       | ру                    |
        | text                | Мурмур                |
        | describable:memory  | ^Василий Памятливый   |
      То получим ошибку удвоения попытавшись создать новое описание с полями:
        | alphabeth_code      | ру                    |
        | language_code       | ру                    |
        | text                | Шуршур                |
        | describable:memory  | ^Василий Памятливый   |
