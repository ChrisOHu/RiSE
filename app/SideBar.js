import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Icon,
  List,
  ListItem,
  Badge,
  Content,
  Thumbnail
} from 'native-base'

class SideBar extends Component {

  render(){
    return (
      <Content style={{backgroundColor: 'skyblue'}} >
        {/*<Thumbnail size={200} style={{alignSelf: 'center', marginTop: 20, marginBottom: 15, resizeMode: 'contain'}} circular source={require('image/path')} />
        <List foregroundColor={"white"} >
          <ListItem button onPress={() => this.navigateTo('home')} iconLeft style={styles.links} >
            <Icon name="ios-home" />
            <Text >Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('inbox')} iconLeft style={styles.links} >
            <Icon name="ios-mail-open-outline" />
            <Text>Inbox</Text>
            <Badge>2</Badge>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('mail')} iconLeft style={styles.links} >
            <Icon name="ios-paper-outline" />
            <Text>Mail</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('compose')} iconLeft style={styles.links} >
            <Icon name="ios-paper-plane" />
            <Text>Compose</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('lists')} iconLeft style={styles.links} >
            <Icon name="ios-list-box-outline" />
            <Text>Lists</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('icons')} iconLeft style={styles.links} >
            <Icon name="ios-planet" />
            <Text>Icons</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('progressBar')} iconLeft style={styles.links} >
            <Icon name="ios-finger-print-outline" />
            <Text>Progressbars</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('spinners')} iconLeft style={styles.links} >
            <Icon name="ios-jet" />
            <Text>Spinners</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('form')} iconLeft style={styles.links}>
            <Icon name="ios-aperture-outline" />
            <Text>Forms</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('modal')} iconLeft style={styles.links}>
            <Icon name="ios-alert-outline" />
            <Text>Modal</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('chat')} iconLeft style={styles.links}>
            <Icon name="ios-chatboxes" />
            <Text>Chat</Text>
          </ListItem>
        </List>*/}
      </Content>
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
