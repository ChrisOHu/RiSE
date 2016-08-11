import { Navigator } from 'react-native'

export default class NavigationBar extends Navigator.NavigationBar {
  render() {
    let routeStack = this.props.navState.routeStack;
    let route = routeStack[routeStack.length - 1];

    if (route.hideNavigationBar) {
      return null;
    }

    return super.render();
  }
}
