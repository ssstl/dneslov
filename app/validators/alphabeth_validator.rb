class AlphabethValidator < ActiveModel::EachValidator
   RUSSIAN_CAPITAL = 'А-ЯЁІѢѲѴ'
   RUSSIAN_STROKE = 'а-яёіѣѳѵ'
   RUSSIAN_ACCENT = '́'
   MODIFIED_RUSSIAN_CAPITAL = 'А-ЯЁ'
   MODIFIED_RUSSIAN_STROKE = 'а-яё'
   MODIFIED_RUSSIAN_ACCENT = '́'
   CSLAV_CAPITAL = 'А-ЬЮЅІѠѢѦѮѰѲѴѶѸѺѼѾꙖꙊ'
   CSLAV_STROKE = 'а-ьюєѕіѡѣѧѯѱѳѵѷѹѻѽѿꙗꙋ'
   CSLAV_ACCENT = '̀́̓̔҃҇҈҉꙽'
   HIP_CAPITAL = 'А-ЯЁA-Z'
   HIP_STROKE = 'а-яёa-z'
   SERBIAN_CAPITAL = 'ЂЈ-ЋЏА-ИК-Ш'
   SERBIAN_STROKE = 'ђј-ћа-ик-ш'
   GREEK_CAPITAL = 'ͶͲΑ-ΫϏϒϓϔϘϚϜϠϞϴϷϹϺϾϿἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙ-ὟὨ-Ὧᾈ-ᾏᾘ-ᾟᾨ-ᾯᾸ-ᾼῈ-ῌῘ-ΊῨ-ῬῸ-ῼΩΆ-Ώ'
   GREEK_STROKE = 'ά-ώϐϑϕ-ϗϙϛϝ-ϟϡ-ϳϵ-϶ϸϻϼᴦ-ᴪἀ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾷῂ-ῇῐ-ῗῠ-ῧῲ-ῷͻ-ͽͷΐά-ΰ'
   GREEK_ACCENT = 'ͺ͵΄᾽ι᾿῀῁῍῎῏῝῞῟῭΅`´῾'
   BULGARIAN_CAPITAL = 'А-ЪЬЮЯ'
   BULGARIAN_STROKE = 'а-ъьюя'
   LATIN_CAPITAL = 'A-IK-TVX-ZÆ'
   LATIN_STROKE = 'a-ik-tvx-zæ'
   IRISH_CAPITAL = 'A-IL-PR-U'
   IRISH_STROKE = 'a-il-pr-u'
   CZECH_CAPITAL = 'A-PR-VX-ZÁÉĚÍÓÚŮÝČĎŇŘŠŤŽ'
   CZECH_STROKE = 'a-pr-vx-záéěíóúůýčďňřšťž'
   CZECH_ACCENT = '́̌̊'
   ENGLISH_CAPITAL = 'A-Z'
   ENGLISH_STROKE = 'a-z'
   ITALIAN_CAPITAL = 'A-IL-VZ'
   ITALIAN_STROKE = 'a-il-vz'
   ARMENIAN_CAPITAL = 'Ա-Ֆ'
   ARMENIAN_STROKE = 'ա-և'
   IVERIAN_CAPITAL = 'ა-ჺჽ'
   IVERIAN_STROKE = 'ა-ჺჽ'
   ROMANIAN_CAPITAL = 'A-ZĂÂÎŞŢ'
   ROMANIAN_STROKE = 'a-zăâîşţ'
   OLD_ENGLISH_CAPITAL = 'A-IL-PR-UW-YÆÐꝽÞǷĊĠĀĒĪŌŪ'
   OLD_ENGLISH_STROKE = 'a-il-pr-uw-yæðᵹſþƿċġāēīūō'
   MIDDLE_ENGLISH_CAPITAL = 'A-ZÆ'
   MIDDLE_ENGLISH_STROKE = 'a-zæ'
   FRENCH_CAPITAL = 'A-ZŒÆÇÀÂÎÏÛÙÜÉÈÊËÔŸÑ'
   FRENCH_STROKE = 'a-zœæçàâîïûùüéèêëôÿñ'
   FRENCH_ACCENT = '́'
   SPANISH_CAPITAL = 'A-ZÑÁÉÍÓÚÜÏ'
   SPANISH_STROKE = 'a-zñáéíóúüï'
   GERMAN_CAPITAL = 'A-ZÄÖÜẞ'
   GERMAN_STROKE = 'a-zäöüßſ'
   UKRAINIAN_CAPITAL = 'А-ЩЬЮЯЄІЇҐ'
   UKRAINIAN_STROKE = 'а-щьюяєіїґ'
   HEBREW_STROKE = 'א-תשׁ-זּטּ-לּמּנּסּףּפּצּ-ﭏ'
   HEBREW_ACCENT = '׳״ׇ֑-ׇ'

   RUSSIAN_SYNTAX = ' \(\)\.,:;\!\/\-«»—\?0-9–№†0-9IVXLCDM'
   HIP_SYNTAX = ' 0-9\(\[\{\/\'\+\.\:\!"=~@#\$%\^&\*_\)\]\}\\\\`\-,;?\|'
   MODIFIED_RUSSIAN_SYNTAX = ' \(\)\.,:;\!\/\-«»—\?0-9†IVXLCDM©–№\'\[\]&^'
   CSLAV_SYNTAX = ' \(\)\.,:;'
   SERBIAN_SYNTAX = ' \(\)\.,\!:;“”\/0-9'
   GREEK_SYNTAX = ' \(\)0-9~\+\(\)\-\.,;;:.·˙\!«»\'’"`©\/' # TODO last 4 to fix and merge
   BULGARIAN_SYNTAX = ' \(\)\.,0-9'
   UKRAINIAN_SYNTAX = ' \(\)\.,—’;\/:0-9'
   LATIN_SYNTAX = ' \(\)\.,<\>'
   IRISH_SYNTAX = ' \(\)\.,0-9'
   CZECH_SYNTAX = ' \(\)\.,0-9'
   ENGLISH_SYNTAX = ' \(\)\.,’\/\!\-:;\>"0-9'
   ITALIAN_SYNTAX = ' \(\)\.,0-9'
   ARMENIAN_SYNTAX = ' \(\)\.,0-9'
   IVERIAN_SYNTAX = ' \(\)\.,:;\-\!0-9'
   ROMANIAN_SYNTAX = ' \(\)\.,;:\-\!0-9'
   OLD_ENGLISH_SYNTAX = ' \(\)\.,\/\>'
   MIDDLE_ENGLISH_SYNTAX = ' \(\)\.,;\/\!\-:;’\>0-9'
   FRENCH_SYNTAX = ' \(\)\.,’\/0-9'
   SPANISH_SYNTAX = ' \(\)\.,0-9'
   GERMAN_SYNTAX = ' \(\)\.,0-9'
   HEBREW_SYNTAX = ' \(\)\.,0-9'

   SPECIFIC_SYNTAX = '\*~`\+\-#=>\[\]\(\)!'

   UPCHAR = RUSSIAN_CAPITAL + MODIFIED_RUSSIAN_CAPITAL + CSLAV_CAPITAL + SERBIAN_CAPITAL + GREEK_CAPITAL +
      ENGLISH_CAPITAL + LATIN_CAPITAL + CZECH_CAPITAL + ARMENIAN_CAPITAL +
      ROMANIAN_CAPITAL + OLD_ENGLISH_CAPITAL + IVERIAN_CAPITAL + GERMAN_CAPITAL + UKRAINIAN_CAPITAL + MIDDLE_ENGLISH_CAPITAL
   DOWNCHAR = RUSSIAN_STROKE + MODIFIED_RUSSIAN_STROKE + CSLAV_STROKE + SERBIAN_STROKE + GREEK_STROKE +
      ENGLISH_STROKE + LATIN_STROKE + CZECH_STROKE + ARMENIAN_STROKE +
      IVERIAN_STROKE + ROMANIAN_STROKE + OLD_ENGLISH_STROKE + GERMAN_STROKE + UKRAINIAN_STROKE + MIDDLE_ENGLISH_STROKE +
      HEBREW_STROKE
   ACCENT = GREEK_ACCENT + RUSSIAN_ACCENT + CSLAV_ACCENT + FRENCH_ACCENT + HEBREW_ACCENT
   CHAR = DOWNCHAR + UPCHAR

   # TODO уравнять с LANGUAGE_TREE.alphabeths
   SYNTAX_TABLE = {
      :рп => RUSSIAN_SYNTAX,
      :ру => MODIFIED_RUSSIAN_SYNTAX,
      :цр => HIP_SYNTAX,
      :цс => CSLAV_SYNTAX,
      :ср => SERBIAN_SYNTAX,
      :гр => GREEK_SYNTAX,
      :ан => ENGLISH_SYNTAX,
      :чх => CZECH_SYNTAX,
      :ир => IRISH_SYNTAX,
      :си => IRISH_SYNTAX,
      :ла => LATIN_SYNTAX,
      :бг => BULGARIAN_SYNTAX,
      :ук => UKRAINIAN_SYNTAX,
      :ит => ITALIAN_SYNTAX,
      :ар => ARMENIAN_SYNTAX,
      :ив => IVERIAN_SYNTAX,
      :рм => ROMANIAN_SYNTAX,
      :ра => OLD_ENGLISH_SYNTAX,
      :са => MIDDLE_ENGLISH_SYNTAX,
      :фр => FRENCH_SYNTAX,
      :ис => SPANISH_SYNTAX,
      :не => GERMAN_SYNTAX,
      :ев => HEBREW_SYNTAX,
      # ЧИНЬ: сс, сц, цр, мк, со, сл, по, кш, вл, нл, цу
   }

   MATCH_TABLE = {
      :рп => "#{RUSSIAN_CAPITAL}#{RUSSIAN_STROKE}#{RUSSIAN_ACCENT}#{SPECIFIC_SYNTAX}",
      :ру => "#{MODIFIED_RUSSIAN_CAPITAL}#{MODIFIED_RUSSIAN_STROKE}#{MODIFIED_RUSSIAN_ACCENT}#{SPECIFIC_SYNTAX}",
      :цс => "#{CSLAV_CAPITAL}#{CSLAV_STROKE}#{CSLAV_ACCENT}#{SPECIFIC_SYNTAX}",
      :цр => "#{HIP_CAPITAL}#{HIP_STROKE}#{SPECIFIC_SYNTAX}",
      :ср => "#{SERBIAN_CAPITAL}#{SERBIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :гр => "#{GREEK_CAPITAL}#{GREEK_STROKE}#{GREEK_ACCENT}#{SPECIFIC_SYNTAX}",
      :ан => "#{ENGLISH_CAPITAL}#{ENGLISH_STROKE}#{SPECIFIC_SYNTAX}",
      :чх => "#{CZECH_CAPITAL}#{CZECH_STROKE}#{CZECH_ACCENT}#{SPECIFIC_SYNTAX}",
      :ир => "#{IRISH_CAPITAL}#{IRISH_STROKE}#{SPECIFIC_SYNTAX}",
      :си => "#{IRISH_CAPITAL}#{IRISH_STROKE}#{SPECIFIC_SYNTAX}",
      :ла => "#{LATIN_CAPITAL}#{LATIN_STROKE}#{SPECIFIC_SYNTAX}",
      :бг => "#{BULGARIAN_CAPITAL}#{BULGARIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :ук => "#{UKRAINIAN_CAPITAL}#{UKRAINIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :ит => "#{ITALIAN_CAPITAL}#{ITALIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :ар => "#{ARMENIAN_CAPITAL}#{ARMENIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :ив => "#{IVERIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :рм => "#{ROMANIAN_CAPITAL}#{ROMANIAN_STROKE}#{SPECIFIC_SYNTAX}",
      :са => "#{OLD_ENGLISH_CAPITAL}#{OLD_ENGLISH_STROKE}#{SPECIFIC_SYNTAX}",
      :ра => "#{MIDDLE_ENGLISH_CAPITAL}#{MIDDLE_ENGLISH_STROKE}#{SPECIFIC_SYNTAX}",
      :фр => "#{FRENCH_CAPITAL}#{FRENCH_STROKE}#{FRENCH_ACCENT}#{SPECIFIC_SYNTAX}",
      :ис => "#{SPANISH_CAPITAL}#{SPANISH_STROKE}#{SPECIFIC_SYNTAX}",
      :не => "#{GERMAN_CAPITAL}#{GERMAN_STROKE}#{SPECIFIC_SYNTAX}",
      :ев => "#{HEBREW_STROKE}#{HEBREW_ACCENT}#{SPECIFIC_SYNTAX}",
   }

   def plain_options
      [ options[:with], options[:in] ].flatten.compact.map do |o|
         case o
         when Hash
            o.map { |(k, v)| { k => v } }
         when String, Symbol
            { o => true }
         when Array
            o.map { |x| { x => true } }
         else
            raise "Target of kind #{o.class} is unsupported" ;end ;end
         .flatten.map { |x| [ x.keys.first, x.values.first ] }.to_h ;end

   def validate_each(record, attribute, value)
      o = plain_options
      code = record.alphabeth_code.to_s.to_sym
      res = MATCH_TABLE[ code ]
      if res
         if ! o.keys.include?( :nosyntax )
            res += SYNTAX_TABLE[ code ] ;end
         if o.keys.include?( :allow )
            res += o[ :allow ] ;end
         res += '\<\>' ;end

      if res && value.present? && value !~ ( re = /^[#{res}]+$/ )
         invalid_is = []
         chars = value.unpack( "U*" ).map.with_index do |c, i|
            begin
               re !~ [ c ].pack( "U" ) && c || nil
            rescue Encoding::CompatibilityError
               invalid_is << i
               nil ;end ;end
         .compact.uniq.sort.pack( "U*" )

         if chars.present?
            record.errors[ attribute ] <<
            I18n.t( 'activerecord.errors.invalid_language_char',
               alphabeth: record.alphabeth_code,
               chars: chars ) ;end

         if invalid_is.any?
            parts = invalid_is.map { |i| value[ i - 2..i + 2 ] }
            record.errors[ attribute ] <<
            I18n.t( 'activerecord.errors.invalid_utf8_char',
               alphabeth: record.alphabeth_code,
               parts: '"' + parts.join('", "') + '"' ) ;end ;end ;end ;end
