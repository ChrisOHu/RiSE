import _s from 'underscore.string'
import t from 'app/i18n'
import Meteor from 'react-native-meteor'
import { upload as ossUpload } from './clouds/aliyun/OSS'

let clubs = new class {
  constructor() {
    this.BUCKET_PICTURES_PATH = "pictures/";
  }

  createClub(name, city, descriptions, tags, posterBlob) {
    let clubId;
    return new Promise((resolve, reject) => {
      let newClub = {name, city, descriptions, tags};

      Meteor.call('clubs.createClub', newClub, (error, newClubId) => {
        if (error) {
          reject(error);
        } else {
          clubId = newClubId;
          resolve(newClubId);
        }
      });
    })
      .then((newClubId) => {
        let posterName = this.BUCKET_PICTURES_PATH + 'club_' + newClubId + '_poster.jpg';
        return ossUpload(posterName, posterBlob);
      })
      .then(({url}) => {
        if (url.substr(0, 4) != 'http') {
          url = 'http://' + url;
        }
        return this.updateClubPoster(clubId, url);
      });
  }
  updateClubPoster(clubId, posterUrl) {
    return new Promise((resolve, reject) => {
      Meteor.call('clubs.updateClubPoster', clubId, posterUrl, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  getMyClubs() {
    return new Promise((resolve, reject) => {
      Meteor.call('clubs.getMyClubs', (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  getClub(id) {
    return new Promise((resolve, reject) => {
      Meteor.call('clubs.getClub', id, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default clubs;
