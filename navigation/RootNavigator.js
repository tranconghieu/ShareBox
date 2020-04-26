
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home/Home';
import ListPost from '../screens/module/ListPost/ListPost';
import CreatePost from '../screens/module/ListPost/CreatePost';
import ListMemberShip from '../screens/module/ListPost/ListMemberShip';
import PostDetail from '../screens/module/ListPost/PostDetail';
import {
  View, Text, TouchableOpacity, Dimensions, StyleSheet,
} from 'react-native';
import { Colors, Size, styleSheets } from '../constants/styleConfig';
import ButtonGoBack from '../components/buttonGoBack/buttonGoBack';

const navigationOptionsCogfigHeaderNull = (navigation) => {
  return {
    header: null,
    headerForceInset: {top: 'never'},
  }
}
const navigationOptionsCogfig = (navigation, Title_Key) => {
  return {
    title: <Text style={styleSheets.lable} >{Title_Key}</Text>,
    //headerLeft: () => <DrawerToggle Key={Title_Key}></DrawerToggle>,
    headerStyle: {
      backgroundColor: Colors.white,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: { // hide border ios
        height: 0,
      },
      elevation: 0, //hide shadow android
    },
    headerTintColor: Colors.black,
    headerTitleStyle: {
      textTransform: 'uppercase',
      fontWeight: "500",
    },
    
  }
}
const navigationOptionsCogfigGoBack = (navigation, Title_Key) => {
  let titleScreen = '';
  switch (Title_Key) {
    case 'ListPost':
      titleScreen = 'Danh sách bài viết'
      break;
    case 'ListMemberShip' :
      titleScreen = 'Danh sách đối tác'
      break;
    case 'PostDetail' :
      titleScreen = 'Chi tiết bài viết'
      break; 
    default:
      break;
  }
  return {
    tabBarVisible: false,
    title: <Text style={styleSheets.lable} >{titleScreen}</Text>,
    headerLeft: () => <ButtonGoBack Key={Title_Key} navigation={navigation}></ButtonGoBack>,
    headerStyle: {
      backgroundColor: Colors.white,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0
    },
    headerTintColor: Colors.black,
    headerTitleStyle: {
      color:Colors.accent,
      textTransform: 'uppercase',
      fontWeight: "500",
    },
    //tabBarVisible: false,
    //headerRight:() => <ButtonGoBack Key={Title_Key} navigation={navigation}></ButtonGoBack>,
  }
}

const navigationOptionsCogfigGoBackSaveCratePost = (navigation, Title_Key) => {
  return {
    tabBarVisible: false,
    title: <Text style={styleSheets.lable} >Tạo mới bài viết</Text>,
    headerLeft: () => <ButtonGoBack Key={Title_Key} navigation={navigation}></ButtonGoBack>,
    headerRight: () => { return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight :styleSheets.m_10
      }}> 
        <TouchableOpacity onPress={()=>navigation.navigate('ListMemberShip')}>
          <Text style={[ styleSheets.lable, {color:Colors.accent}]} >Lưu</Text>  
        </TouchableOpacity> 
      </View>
    ) },
    headerStyle: {
      backgroundColor: Colors.white,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0
    },
    headerTintColor: Colors.black,
    headerTitleStyle: {
      color:Colors.accent,
      textTransform: 'uppercase',
      fontWeight: "500",
    },
    //tabBarVisible: false,
    //headerRight:() => <ButtonGoBack Key={Title_Key} navigation={navigation}></ButtonGoBack>,
  }
}
const AppRootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigHeaderNull(navigation, 'home')),
  },
  ListPost:{
    screen: ListPost,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigGoBack(navigation, 'ListPost')),
  },
  CreatePost:{
    screen: CreatePost,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigGoBackSaveCratePost(navigation, 'CreatePost')),
  },
  ListMemberShip:{
    screen: ListMemberShip,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigGoBack(navigation, 'ListMemberShip')),
  },
  PostDetail:{
    screen: PostDetail,
    navigationOptions: ({ navigation }) => (navigationOptionsCogfigGoBack(navigation,'PostDetail')),
  }
},
  {
    //initialRouteName: 'Home',
    //headerMode: 'none',
  });
const AppRootContainer = createAppContainer(AppRootStack);
export default AppRootContainer
