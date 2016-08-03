import _s from 'underscore.string'
import t from 'app/i18n'
import Meteor from 'react-native-meteor'

export function getCitiesOfCountry(countryCode, query) {
  return new Promise((resolve, reject) => {
    let country = Counties[countryCode];

    if (!country || !query) {
      resolve(null);
      return;
    }

    Meteor.call('cities.getCitiesOfCountry', country, query, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
}

export const Counties = {
  cn: 'China',
  jp: 'Japan',
  kr: 'South Korea',
  us: 'United States'
};
