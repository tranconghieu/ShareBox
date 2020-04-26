import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleSheets } from '../../constants/styleConfig';
export default class EmptyData extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { messageEmptyData } = this.props;

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text  style={styleSheets.lable} >{messageEmptyData}</Text>
            </View>
        );
    }
}

