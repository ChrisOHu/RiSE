import Meteor from 'react-native-meteor'

export function init() {
  Meteor.connect('ws://192.168.X.X:3000/websocket')
  // see: https://github.com/mondora/ddp.js/
  // Meteor.ddp.on('connected')
  // Meteor.ddp.on('disconnected')
  // Meteor.ddp.on('added')
  // Meteor.ddp.on('changed')
}

export default Meteor;
