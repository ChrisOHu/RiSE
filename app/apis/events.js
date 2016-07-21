import t from 'counterpart'
import _s from 'underscore.string'
import { Log } from 'meteor/up:core'
import { upload as ossUpload } from './clouds/aliyun/OSS'

let events = new class {
  constructor() {
    this.BUCKET_PICTURES_PATH = "pictures/";
  }

  createEvent(name, time, descriptions, address, tags, clubId, posterBlob) {
    let eventId;
    return new Promise((resolve, reject) => {
      let newEvent = {name, time, descriptions, address, tags, clubId};
      Log.debug('events.createEvent:');
      Log.debug(newEvent);
      Log.debug('    =>');
      Meteor.DC.call('events.createEvent', newEvent, (error, newEventId) => {
        if (error) {
          Log.error(error);
          reject(error);
        } else {
          eventId = newEventId;
          Log.debug(`new event id: ${newEventId}`);
          resolve(newEventId);
        }
      });
    })
      .then((newEventId) => {
        let posterName = this.BUCKET_PICTURES_PATH + 'event_' + newEventId + '_poster.jpg';
        return ossUpload(posterName, posterBlob);
      })
      .then(({url}) => {
        if (url.substr(0, 4) != 'http') {
          url = 'http://' + url;
        }
        return this.updateEventPoster(eventId, url);
      });
  }
  updateEventPoster(eventId, posterUrl) {
    return new Promise((resolve, reject) => {
      Log.debug('events.updateEventPoster:');
      Log.debug(`  eventId=${eventId}  url=${posterUrl}`);
      Meteor.DC.call('events.updateEventPoster', eventId, posterUrl, (error, result) => {
        if (error) {
          reject(error);
          if (error) {
            Log.error(error);
          }
        } else {
          resolve(result);
          Log.debug('  =>');
          Log.debug(result);
        }
      });
    });
  }
  getEvents(filter, from, to, count) {
    return new Promise((resolve, reject) => {
      Meteor.DC.call('events.getEvents', filter, from, to, count, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  getEvent(eventId) {
    return new Promise((resolve, reject) => {
      Meteor.DC.call('events.getEvent', eventId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  joinEvent(eventId) {
    return new Promise((resolve, reject) => {
      Meteor.DC.call('events.joinEvent', eventId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    })
  }
  leaveEvent(eventId) {
    return new Promise((resolve, reject) => {
      Meteor.DC.call('events.leaveEvent', eventId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    })
  }
  commentEvent(eventId, commentText) {
    return new Promise((resolve, reject) => {
      Meteor.DC.call('events.commentEvent', eventId, commentText, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    })
  }
}

export default events;
