import React, {
  Component,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        itemWrapperStyle={styles.navWrap}
        style={styles.nav}
        ref="nav"
        initialRoute = {{
        title: "GitHub Swipe",
        component: Login
        }}
        navigationBarHidden={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  navWrap: {
    flex: 1,
  },
  nav: {
    flex: 1,
  },
})
