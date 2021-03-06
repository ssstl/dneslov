import { merge } from 'merge-anything'

import { kindToKlass } from 'formsLib'
import { displaySchemeToWrapperClass } from 'support'

export function renderElement(element, meta) {
   console.debug("[renderElement] > meta:", meta, "e:", element)

   let rendered = Object.getOwnPropertyNames(meta).map(_name => {
      let sub = meta[_name],
          name = sub.name || _name,
          new_name = [ element.name, name ].filter((x) => { return x }).join("."),
          value_context_names = [ sub.context_names ].flat().filter((x) => { return x }),
          value_context = value_context_names.reduce((res, context_name) => {
             res[context_name] = element.value[context_name]
             return res
          }, {}),
          res = merge(sub, { key: new_name,
                             name: new_name,
                             value: element.value[name],
                             humanized_value: element.value[sub.humanized_name],
                             value_context: value_context,
                             validation_context: element.value,
                             wrapperClassName: displaySchemeToWrapperClass(sub.display_scheme) })

      console.debug("[renderElement] > result object", res)

      self.klass = kindToKlass(sub['kind'])
      return <self.klass {...res} />
   })

   console.debug("[renderElement] >>>", rendered)

   return rendered
}
