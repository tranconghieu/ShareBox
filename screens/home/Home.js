import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Size, Colors, styleSheets } from '../../constants/styleConfig';
import { IconSetting, IconShare, IconHome,IconBook } from '../../constants/Icons';
export default class Home extends Component {
  constructor(porps) {
    super(porps);
    this.state = {

    }
  }
  componentDidMount(){
    console.disableYellowBox = true;
  }
  router = (roouterName) => {
    const { navigation } = this.props;
    navigation.navigate(roouterName);
  }
  render() {
    const {
      styleViewMenu,
      listItemMenu,
      bntMenu,
      lineBorderVertical,
      lineBorderHorizontal,
      logoApp,
      txtBntMenu,
      LogoTextLange,
      bgLogo,
      logoTextSmall
    } = styles;

    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
         <ImageBackground source={require('../../assets/images/bg.jpg')} style={{
           flex: 1,
           resizeMode: 'cover',
            justifyContent: 'center'

           }}>
          <View style={styleViewMenu}>
            <View style={listItemMenu}>
              <TouchableOpacity style={bntMenu} >
                <IconHome size={60} color={Colors.accent} />
                <Text style={txtBntMenu}>Doanh nghiệp</Text>
              </TouchableOpacity>
              {/* <View style={lineBorderVertical}></View> */}
              <TouchableOpacity style={bntMenu} onPress={()=> this.router('ListPost')}>
                <IconShare size={60} color={Colors.accent} />
                <Text style={txtBntMenu}>Chiến dịch</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={lineBorderHorizontal}></View> */}
            <View style={listItemMenu}>
              <View style={bntMenu}>
                <IconBook size={60} color={Colors.accent} />
                <Text style={txtBntMenu}>Cẩm Nang</Text>
              </View>
              {/* <View style={lineBorderVertical}></View> */}
              <View style={bntMenu}>
                <IconSetting size={60} color={Colors.accent} />
                <Text style={txtBntMenu}>Cài Đặt</Text>
              </View>
            </View>
          </View>
          {/* <Text style={ { fontSize: 50 }}>Home</Text>
        <TouchableOpacity onPress={()=> this.router('ListPost')}>
          <Text>List Post</Text>
        </TouchableOpacity> */}
          <View style={logoApp}>
            <View style={bgLogo}>
              <Text style={LogoTextLange}>
                SHARE
          </Text>
              <Text style={logoTextSmall}>
                BOX
          </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>

    );
  }

}
const styles = StyleSheet.create({
  styleViewMenu: {
    //position: 'absolute',
    //bottom: 100,
    width: Size.deviceWidth,
    paddingHorizontal: 25,
    padding : 10
  },
  listItemMenu: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical :10
  },
  bntMenu: {
    width: '47%',
    backgroundColor: Colors.white,
    height: 170,
    justifyContent: 'space-around',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius : 10,
    borderColor:Colors.accent,
    borderWidth : 1
    
  },
  lineBorderVertical: {
    width: 1.5,
    height: '100%',
    backgroundColor: Colors.navy,
  },
  lineBorderHorizontal: {
    width: '100%',
    height: 1.5,
    backgroundColor: Colors.navy,
  },
  logoApp:{
    position: 'absolute',
    top:0,
    height : Size.deviceheight * 0.25,
    width: Size.deviceWidth,
    paddingHorizontal: 30,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor: Colors.white,
    // paddingVertical: 20
  },
  txtBntMenu:{ 
    color: Colors.accent, 
    fontSize: Size.text + 2, 
    fontWeight : '600'
 },
  LogoTextLange : { 
    fontSize: Size.text + 20, 
    color: Colors.accent, 
    fontWeight: '700' ,
    marginRight:5
  },
  logoTextSmall:{
    fontSize: Size.text +20,
    color: Colors.black, 
    fontWeight: '700' 
  },
  bgLogo:{
   backgroundColor:Colors.white,
   borderColor:Colors.accent,
   borderWidth:1,
   flexDirection:'row',
    paddingVertical : styleSheets.p_5,
    width : '70%',
    //paddingHorizontal : styleSheets.p_20,
    borderRadius:styleSheets.p_7,
    justifyContent:'center',
    alignItems:'flex-end',
  }
});




