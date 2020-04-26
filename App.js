import React, { Component } from 'react';
import AppRootContainer from './navigation/RootNavigator';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import LoadingPages from './components/Loading/LoadingPages';
export default class App extends Component {
  render() {
    return (
        <SafeAreaProvider >
          <LoadingPages/>
          <AppRootContainer />
          
        </SafeAreaProvider>
    )
  }
}
const styles = {
};
