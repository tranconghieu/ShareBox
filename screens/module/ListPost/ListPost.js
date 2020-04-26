import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Dimensions, StyleSheet,
  ScrollView, Image
} from 'react-native';
import { Size, Colors, styleSheets } from '../../../constants/styleConfig';
import { IconMore, IconSearch, IconLike, IconComment, IconCreate, IconMap } from '../../../constants/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import ListItem from '../../../components/ListItem/ListItem';
export default class ListPost extends Component {
  constructor(porps) {
    super(porps);
    this.state = {

    }
  }
  router = (roouterName) => {
    const { navigation } = this.props;
    navigation.navigate(roouterName);
  }
  render() {
    const {
      container,
      styleTilePost,
      avatar,
      imageAvatar,
      styleTitleAndDate,
      viewMore,
      imagePost,
      viewImagePost,
      styleContent,
      styleListOption,
      txtContent,
      contentProgress,
      titleProgress,
      txtTitleProgress,
      progress,
      persenProgress,
      txtPersenProgress,
      styleContentDetail,
      detailText,
      txtBold,
      bntPrimary,
      txtBntPrimary,
      contentSearch,
      inputSearch,
      viewSearch,
      rowComment,
      styleLikeComment,
      bntCreate,
      viewAddress
    } = styles;

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 0 }} forceInset={{ top: 'never' }}>
        <View style={viewSearch}>
          <View style={contentSearch}>
            <IconSearch size={Size.iconSize} color={Colors.grey} />
            <TextInput
              style={inputSearch}
              placeholder={'Tìm kiếm'}
            />
          </View>
        </View>
        
        <ListItem
          navigation ={this.props.navigation}
          api={{
            urlApi: "http://210.2.88.53:44343/api/chiendich",
            type: "E_GET",
          }}
          detail={{
            dataLocal: false,
            screenDetail: 'PostDetail'
          }}
          valueField="id"
        />
        <TouchableOpacity style={bntCreate} onPress={() => this.router('CreatePost')}>
          <IconCreate size={Size.iconSize + 10} color={Colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({
  bntCreate: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: Colors.accent,
    height: 60,
    width: 60,
    borderRadius: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  viewSearch: {
    height: 50,
    backgroundColor: Colors.white,
    paddingHorizontal: styleSheets.p_15,
    paddingBottom: styleSheets.p_10,
  },
  contentSearch: {
    height: '100%',
    backgroundColor: Colors.borderColor,
    borderRadius: 10,
    paddingHorizontal: styleSheets.p_5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputSearch: {
    flex: 1,
    height: '100%',
    marginLeft: styleSheets.m_10,
    fontSize: Size.text,
  },
  
});







