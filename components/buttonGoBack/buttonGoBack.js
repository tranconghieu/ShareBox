import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, Size, styleSheets } from '../../constants/styleConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconBack} from '../../constants/Icons';
export default class ButtonGoBack extends Component {
  constructor(porps) {
    super(porps);
  }
  GoBack = () => {
    const { navigation } = this.props;
    (navigation.goBack() == false) && (navigation.navigate('Home'))
  }
  render() {
    //let {Key,navigation} = this.props;
    const { ContentCenter, bnt_right } = styles;
    let iconName = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}arrow-back`
    return (
      <View style={ContentCenter}>
        <TouchableOpacity onPress={() => this.GoBack()} style={bnt_right}>
          <IconBack name={iconName} size={Size.iconSize} color={Colors.accent}></IconBack>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  ContentCenter: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft : styleSheets.m_5
  },
  bnt_right: {
    //paddingHorizontal: styleSheets.p_5
  }
}
