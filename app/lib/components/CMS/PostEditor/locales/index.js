import es from './es.json'
import en from './en.json'

const translate = (label, lang = 'es') => {
  switch (lang) {
    case 'en':
      if (label in en) {
        return en[label]
      }

      throw new Error('Unregister label in locale: ' + lang)

    case 'es':
      if (label in es) {
        return es[label]
      }   

      throw new Error('Unregister label in locale: ' + lang)
      
    default:
      throw new Error('Unregistered language')
  }
}

export default translate