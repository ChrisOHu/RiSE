import t from 'counterpart'
import _s from 'underscore.string'
import { Log } from 'meteor/up:core'
import { upload as ossUpload } from './clouds/aliyun/OSS'

let orgs = new class {
  constructor() {
    this.BUCKET_PICTURES_PATH = "pictures/";
  }

  createOrg(name, city, descriptions, tags, posterBlob) {
    let orgId;
    return new Promise((resolve, reject) => {
      let newOrg = {name, city, descriptions, tags};
      Log.debug('orgs.createOrg:');
      Log.debug(newOrg);
      Log.debug('    =>');
      Meteor.DC.call('orgs.createOrg', newOrg, (error, newOrgId) => {
        if (error) {
          Log.error(error);
          reject(error);
        } else {
          orgId = newOrgId;
          Log.debug(`new organization id: ${orgId}`);
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
      Log.debug('orgs.updateOrgPoster:');
      Log.debug(`  orgId=${orgId}  url=${posterUrl}`);
      Meteor.DC.call('orgs.updateOrgPoster', orgId, posterUrl, (error, result) => {
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
      Meteor.DC.call('orgs.getMyOrgs', (error, result) => {
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
      Meteor.DC.call('orgs.getOrg', orgId, (error, result) => {
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
