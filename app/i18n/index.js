import { Platform } from 'react-native'
import counterpart from 'counterpart'
import En from './en'
import Zh from './zh'

export function init() {
  /**
   * see http://www.science.co.il/language/locale-codes.asp
   * for locale codes
   */

  let locale;
  switch (Platform.OS) {
    case 'ios':
      locale = require('react-native')
        .NativeModules.SettingsManager.settings.AppleLocale;
      break;
    case 'android':
      throw new Error(`#TODO: locale support for android`);
      break;
    default:
      throw new Error(`unsupported platform: ${Platform.OS}`);
  }

  counterpart.registerTranslations('en', En);
  counterpart.registerTranslations('zh', Zh);

  // 'zh-cn', 'en-US' => 'zh', 'en'
  locale = (/^[a-z]*/.exec(locale.trim().toLowerCase()))[0]

  counterpart.setLocale(locale);
}
