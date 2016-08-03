import _s from 'underscore.string'
import t from 'app/i18n'
import Meteor from './Meteor'
import { upload as ossUpload } from './clouds/aliyun/OSS'

const SUCCESS            = 'SUCCESS';
const ERROR              = 'ERROR';
const INVALID_USERNAME   = 'INVALID_USERNAME';
const PWD_NOT_MATCH      = 'PWD_NOT_MATCH';
const INVALID_PWD        = 'INVALID_PWD';
const USERNAME_REGISTERD = 'USERNAME_REGISTERD';
const NOT_EXISTS         = 'NOT_EXISTS';
const INVALID_PARAMS     = 'INVALID_PARAMS';

let Users = new class {
  constructor() {
    this.SUCCESS            = SUCCESS;
    this.INVALID_USERNAME   = INVALID_USERNAME;
    this.PWD_NOT_MATCH      = PWD_NOT_MATCH;
    this.INVALID_PWD        = INVALID_PWD;
    this.USERNAME_REGISTERD = USERNAME_REGISTERD;
    this.NOT_EXISTS         = NOT_EXISTS;
    this.INVALID_PARAMS     = INVALID_PARAMS;

    this.BUCKET_AVATAR_PATH = "avatars/";
  }

  register(username, password, passwordConfirm) {
    return new Promise(function(resolve, reject) {
      username = _s(username).trim().value();
      password = _s(password).trim().value();
      passwordConfirm = _s(passwordConfirm).trim().value();

      if (!isValidUsername(username)) {
        reject({
          ret: INVALID_USERNAME,
          hint: t('validUsernameHint')
        });
      }
      if (!isValidPwd(password)) {
        reject({
          ret: INVALID_PWD,
          hint: t('validPasswordHint')
        });
      }
      if (password !== passwordConfirm) {
        reject({
          ret: PWD_NOT_MATCH,
          hint: t('passwordsNotMatch')
        });
      }

      Meteor.Accounts.createUser({username, password}, function(error) {
        if (!error) {
          resolve({
            ret: SUCCESS
          });
        } else {
          reject({
            error: error
          });
        }
      });
    });
  }

  login(user, password) {
    return new Promise(function(resolve, reject) {
      if (!password || !Match.test(user, new SimpleSchema({
        username: {
          type: String,
          optional: true
        },
        email: {
          type: String,
          optional: true
        }
      }))) {
        reject({ret: INVALID_PARAMS});
      }

      password = _s(password).trim().value();

      Meteor.loginWithPassword(user, password, function(error) {
        if (!error) {
          resolve({
            ret: SUCCESS
          });
        } else {
          reject({
            error: error
          });
        }
      });
    });
  }

  getUserInfo(userId) {
    return new Promise(function(resolve, reject) {
      if (!userId || typeof userId != 'string') {
        reject({ret: INVALID_PARAMS});
      }

      if (userId === Meteor.userId() && Meteor.user()) {
        let user = Meteor.user();
        resolve({ret: SUCCESS, data: Meteor.user()});
      }

      Meteor.call('users.getUserInfo', userId, function(error, result) {
        if (error) {
          reject({ret: ERROR, error: error});
        }
        resolve({ret: SUCCESS, data: result});
      });
    });
  }

  updateUserProfile(profile) {
    return new Promise((resolve, reject) => {
      if (!profile) reject('null profile');
      CommonSchemas.UserProfile.validate(profile);

      Meteor.call('users.updateUserProfile', profile, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  updateAvatar(file, onProgress) {
    return new Promise((resolve, reject) => {
      if (!Meteor.userId()) {
        reject('not logged in');
      }

      let userAvatarFileName = this.BUCKET_AVATAR_PATH + 'user_' + Meteor.userId() + '.jpg';
      resolve(userAvatarFileName);
    })
      .then((userAvatarFileName) => {
        return ossUpload(userAvatarFileName, file, onProgress)
      })
      .then(({url}) => {
        if (url.substr(0, 4) != 'http') {
          url = 'http://' + url;
        }
        return this.updateUserProfile({avatar: url});
      });
  }

}

function isValidUsername(username) {
  return username && username.length >= 3 && /^[0-9a-zA-Z_.-]+$/.test(username);
}
function isValidPwd(pwd) {
  return pwd && pwd.length >= 6;
}

export default Users;
