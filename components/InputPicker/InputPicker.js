import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors, Size, styleSheets } from '../../constants/styleConfig';
import GeneralFunction from '../../utils/GeneralFunction';

export default class InputPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateProps: props,
            isShowClearText: false
        };

    }
    changeDisable = (bool) => {
        const stateProps = { ...this.state.stateProps };
        if (!GeneralFunction.CheckIsNullOrEmpty(stateProps.disable) && typeof stateProps.disable === "boolean") {
            stateProps.disable = bool;
            this.setState({ stateProps: stateProps });
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.refresh !== this.props.refresh) {
            this.onRefreshControl(nextProps);
        }
    }
    onRefreshControl = (nextProps) => {
        this.setState({ stateProps: nextProps });
    }

    render() {
        const stateProps = this.state.stateProps;
        let disable = false;

        if (!GeneralFunction.CheckIsNullOrEmpty(stateProps.disable) && typeof stateProps.disable === "boolean") {
            disable = stateProps.disable;
        }
        return (
            <View style={{
                flex: 1,
                height: '100%',
                //width:'100%',
                //justifyContent:'center',
                //alignContent : 'center', 
                flexDirection: 'row'
            }}>
                <View style={{ flex: 1   }}>
                    <TextInput
                        editable={!disable}
                        style={[styleSheets.textInput,
                        {
                            height: (this.props.height == undefined ? Size.heightInput : this.props.height),
                            backgroundColor: (!disable ? Colors.white : Colors.greyPrimawhiryConstraint),
                        }
                        ]}
                        {...this.props}
                    />
                </View>
            </View>
        );
    }
}

