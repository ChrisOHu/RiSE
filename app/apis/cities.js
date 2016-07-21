import t from 'counterpart'
import _s from 'underscore.string'
import { Log } from 'meteor/up:core'

export function getCitiesOfCountry(countryCode, query) {
  return new Promise((resolve, reject) => {
    let country = Counties[countryCode];

    Log.debug(`getCitiesOfCountry => ${countryCode}`);

    if (!country || !query) {
      Log.debug(`result =>`);
      resolve(null);
      return;
    }

    Meteor.DC.call('cities.getCitiesOfCountry', country, query, (error, result) => {
      if (!error) {
        Log.debug(`result =>`);
        Log.debug(result);
        resolve(result);
      } else {
        reject(error);
        Log.error(error);
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
