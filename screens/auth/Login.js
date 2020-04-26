import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Dimensions, StyleSheet,
  ScrollView
} from 'react-native';
import { Size, Colors, styleSheets } from '../../constants/styleConfig';
import { IconCreate, IconTime, IconMap, IconRefresh } from '../../constants/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class LoginScreen extends Component {
  constructor(porps) {
    super(porps);
    this.state = {

    }
  }

  render() {
    const {
      container
    } = styles;

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 0 }} forceInset={{ top: 'never' }}>
        <ScrollView style={{flex:1}}>
          <View style={container}>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    height: 100 ,
     width : Size.de
  }
});




