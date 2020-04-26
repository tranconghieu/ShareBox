import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import {Colors,stylesLoading} from '../../constants/styleConfig';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    if (this.props.isVisible == false) {
      return null;
    }
    const { container } = stylesLoading.Loading;
    return (
      <View style={container}>
           <ActivityIndicator size={this.props.size} color={Colors.accent} />
      </View>
    );
  }
}
