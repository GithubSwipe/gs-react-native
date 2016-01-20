import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

export default class FavoritesView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Hello!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 50,
    margin: 10,
    color: 'black'
  }
})
