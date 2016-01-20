/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

import FavoritesView from './src/containers/FavoritesView'


class GitHubSwipe extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FavoritesView,
          title: 'Your Favorites',
        }}
      />
    );
  }
}

// class GitHubSwipe extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//         GitHub Swipe
//         </Text>
//         <Text style={styles.instructions}>
//         Making Open Source more open.
//         </Text>
//         <Text style={styles.instructions}>
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ededea',
//   },
//   welcome: {
//     fontSize: 50,
//     textAlign: 'center',
//     margin: 10,
//     color: '#de5842'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('GitHubSwipe', () => GitHubSwipe);
