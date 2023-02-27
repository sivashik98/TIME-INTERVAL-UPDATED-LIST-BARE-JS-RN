import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import createSagaMiddleware from 'redux-saga';

import configureStore from './src/store/configureStore';
import rootSaga from './src/store/sagas';

import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({}, sagaMiddleware);

enableScreens();
// LogBox.ignoreAllLogs(true);
sagaMiddleware.run(rootSaga);

const AppWrapper = () => {
  return (
    <View style={styles.app}>
      <Provider store={store}>
        <App />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
});

export default AppWrapper;
