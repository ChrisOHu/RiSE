import counterpart from 'counterpart'
import En from './en'
import Zh from './zh'

export function init() {
  // var deviceLocale = require('react-native').NativeModules.RNI18n.locale

  counterpart.registerTranslations('en', En);
  counterpart.registerTranslations('zh', Zh);
}

export default counterpart
