import React, { AppRegistry, Component } from 'react-native';
import { Provider } from 'react-redux/native';
import configureStore from './src/store/configureStore';
import App from './src/containers/App';

const store = configureStore();

class GitHubSwipe extends Component {
  render() {
    return (
      <Provider store={store}>
        { () => <App /> }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('GitHubSwipe', () => GitHubSwipe);
