import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { Colors, Size, styleSheets, stylesLoading } from '../../constants/styleConfig';
import moment from 'moment';
const heightModal = 100;
const api = {};
export const LoadingSevices = api;
export default class LoadingPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show = () => {
    this.setState({ isVisible: true });
  }
  hide = () => {
    this.setState({ isVisible: false });
  }
  componentDidMount() {
    api.show = this.show;
    api.hide = this.hide;
  }

  render() {
    const { container, modal } = stylesLoading.LoadingPages;
    const ID = moment(new Date).format("DD-MM-YYYY HH:mm:ss:SSS");

    return (
      <View style={{ zIndex: 3, }} >
        {
          this.state.isVisible === true &&
          (
            <View
              style={modal}>
              <View style={container}>
                <ActivityIndicator size="large" color={Colors.accent} />
              </View>
            </View>
          )
        }

        {/* <View
         // animationIn="fadeIn"
          //animationOut="fadeOut"
          id={ID}
          //isVisible={this.state.isVisible}
          style={[modal , {
            width: heightModal,
            marginLeft: (Size.deviceWidth / 2) - (heightModal / 2),
            height: heightModal,
            top: (Size.deviceheight / 2) - (heightModal / 2),
            
            }]}
          //hasBackdrop={false}
        >
          <View style={container}>
            <ActivityIndicator size="large" color={Colors.Secondary} />
          </View>
        </View> */}
      </View>


    );
  }
}
