import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Pallete from 'Pallete'

class SideBar extends Component {

  render(){
    return (
      <Pallete.Content style={{backgroundColor: 'skyblue'}} >
        {/*<Pallete.Thumbnail size={200} style={{alignSelf: 'center', marginTop: 20, marginBottom: 15, resizeMode: 'contain'}} circular source={require('image/path')} />
        <Pallete.List foregroundColor={"white"} >
          <Pallete.ListItem button onPress={() => this.navigateTo('home')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-home" />
            <Pallete.Text>Home</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('inbox')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-mail-open-outline" />
            <Pallete.Text>Inbox</Pallete.Text>
            <Pallete.Badge>2</Pallete.Badge>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('mail')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-paper-outline" />
            <Pallete.Text>Mail</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('compose')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-paper-plane" />
            <Pallete.Text>Compose</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('lists')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-list-box-outline" />
            <Pallete.Text>Lists</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('icons')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-planet" />
            <Pallete.Text>Icons</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('progressBar')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-finger-print-outline" />
            <Pallete.Text>Progressbars</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('spinners')} iconLeft style={styles.links} >
            <Pallete.Icon name="ios-jet" />
            <Pallete.Text>Spinners</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('form')} iconLeft style={styles.links}>
            <Pallete.Icon name="ios-aperture-outline" />
            <Pallete.Text>Forms</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('modal')} iconLeft style={styles.links}>
            <Pallete.Icon name="ios-alert-outline" />
            <Pallete.Text>Modal</Pallete.Text>
          </Pallete.ListItem>
          <Pallete.ListItem button onPress={() => this.navigateTo('chat')} iconLeft style={styles.links}>
            <Pallete.Icon name="ios-chatboxes" />
            <Pallete.Text>Chat</Pallete.Text>
          </Pallete.ListItem>
        </Pallete.List>*/}
      </Pallete.Content>
    );
  }
}

const styles = StyleSheet.create({
  links: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'white'
  }
});

export default SideBar
