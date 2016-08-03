import _s from 'underscore.string'
import t from 'app/i18n'
import Meteor from 'react-native-meteor'
import { upload as ossUpload } from './clouds/aliyun/OSS'

let orgs = new class {
  constructor() {
    this.BUCKET_PICTURES_PATH = "pictures/";
  }

  createOrg(name, city, descriptions, tags, posterBlob) {
    let orgId;
    return new Promise((resolve, reject) => {
      let newOrg = {name, city, descriptions, tags};
      Meteor.call('orgs.createOrg', newOrg, (error, newOrgId) => {
        if (error) {
          reject(error);
        } else {
          orgId = newOrgId;
          resolve(newOrgId);
        }
      });
    })
      .then((newOrgId) => {
        let posterName = this.BUCKET_PICTURES_PATH + 'organization_' + newOrgId + '_poster.jpg';
        return ossUpload(posterName, posterBlob);
      })
      .then(({url}) => {
        if (url.substr(0, 4) != 'http') {
          url = 'http://' + url;
        }
        return this.updateOrgPoster(orgId, url);
      });
  }
  updateOrgPoster(orgId, posterUrl) {
    return new Promise((resolve, reject) => {
      Meteor.call('orgs.updateOrgPoster', orgId, posterUrl, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  getMyOrgs() {
    return new Promise((resolve, reject) => {
      Meteor.call('orgs.getMyOrgs', (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  getOrg(orgId) {
    return new Promise((resolve, reject) => {
      Meteor.call('orgs.getOrg', orgId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default orgs;
