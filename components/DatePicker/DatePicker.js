import React, { Component } from 'react';
import { View, Text, Platform, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { IconDate, IconTime } from '../../constants/Icons';
import { Colors, Size, styleSheets, stylesDatePicker } from '../../constants/styleConfig';
import GeneralFunction from '../../utils/GeneralFunction';
export default class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueDate: (!GeneralFunction.CheckIsNullOrEmpty(props.value)) ? new Date(moment(props.value)) : null,
            setDatePickerVisibility: false,
            stateProps: props
        };
    }
    onChange = (event, selectedDate) => {
        //const currentDate = selectedDate || date;
        console.log(event);
        //setShow(Platform.OS === 'ios');
        //setDate(currentDate);
    };
    showDatePicker = () => {
        this.setState({ setDatePickerVisibility: true })
    };

    hideDatePicker = () => {
        const { stateProps } = this.state;
        if (!GeneralFunction.CheckIsNullOrEmpty(stateProps.onCancel)) {
            this.state.stateProps.onCancel();
        }

        const { autoShowModal } = this.props;
        if (autoShowModal) {
            stateProps.onFinish(null);
        }

        this.setState({ setDatePickerVisibility: false })
    };
    handleConfirm = date => {
        const stateProps = { ...this.state.stateProps };
        this.setState({ valueDate: date, setDatePickerVisibility: false }, () => { stateProps.onFinish(date) })
    };
    changeDisable = (bool) => {
        const stateProps = { ...this.state.stateProps };
        if (!GeneralFunction.CheckIsNullOrEmpty(stateProps.disable) && typeof stateProps.disable === 'boolean') {
            stateProps.disable = bool;
            this.setState({ stateProps: stateProps });
        }
    }
    onRefreshControl = (nextProps) => {
        const valueDate = (!GeneralFunction.CheckIsNullOrEmpty(nextProps.value))
            ? new Date(moment(nextProps.value)) : null;

        this.setState({ stateProps: nextProps, valueDate });
    }
    componentDidMount() {
        const { autoShowModal } = this.props;
        if (autoShowModal) {
            this.showDatePicker();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.refresh !== this.props.refresh) {
            this.onRefreshControl(nextProps);
        }
    }

    render() {
        const { stateProps, valueDate, setDatePickerVisibility } = this.state;
        const { bntPicker, selectPicker } = stylesDatePicker;
        let textValue = null;
        if (valueDate != null) {
            textValue = moment(valueDate).format(stateProps.format);
        }
        let disable = false;
        if (!GeneralFunction.CheckIsNullOrEmpty(stateProps.disable) && typeof stateProps.disable === 'boolean') {
            disable = stateProps.disable;
        }

        return (
            <View style={[selectPicker]}>
                <TouchableOpacity
                    onPress={!disable && this.showDatePicker}
                    style={[
                        bntPicker,
                        { backgroundColor: (!disable ? Colors.white : Colors.greyPrimaryConstraint) },
                        stateProps.stylePicker
                    ]}
                    activeOpacity={!disable ? 0.2 : 1}
                >
                    <Text style={{ fontSize: Size.text }}>
                        {
                            (textValue != null) ?
                                textValue :
                                <Text style={ styleSheets.text} > Vui lòng chọn</Text>
                        }
                    </Text>
                    {
                        stateProps.type == 'date' ?
                            <IconDate
                                size={Size.iconSize}
                                color={Colors.accent}
                            /> :
                            <IconTime
                                size={Size.iconSize}
                                color={Colors.accent}
                            />
                    }

                </TouchableOpacity>
                {
                    // (setDatePickerVisibility === true) && (
                    <DateTimePicker
                        date={valueDate == null ? new Date() : new Date(moment(valueDate))}
                        format='dd/MM/yyyy'
                        customHeaderIOS={{ backgroundColor: Colors.Secondary }}
                        isVisible={this.state.setDatePickerVisibility}
                        mode={stateProps.type}
                        onConfirm={this.handleConfirm}
                        onCancel={this.hideDatePicker}
                        is24Hour={true}
                    />
                    // )
                }
            </View>
        );
    }
}

