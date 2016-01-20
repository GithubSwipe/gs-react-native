import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  View
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GitHub Swipe</Text>
        <Text style={styles.tagline}>make Open Source more open</Text>
        <TouchableHighlight style={styles.touch}>
          <Text style={styles.text}>Login using GitHub</Text>
        </TouchableHighlight>
      </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#CFD8DC'
  },
  title: {
    marginTop: 100,
    fontFamily: 'Helvetica Neue',
    fontWeight: '200',
    fontSize: 50,
  },
  touch: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderColor: 'black',
    borderRadius: 5
  },
  tagline:{
    marginBottom: 150,
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '200'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 20
  }
});
