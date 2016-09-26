import Meteor from 'react-native-meteor'

export function init() {
  Meteor.connect('ws://128.0.0.1:8086/websocket')
  // see: https://github.com/mondora/ddp.js/
  //Meteor.ddp.on('connected')
  //Meteor.ddp.on('disconnected')
  //Meteor.ddp.on('added')
  //Meteor.ddp.on('changed')
}

