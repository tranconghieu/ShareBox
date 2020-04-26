// https://www.npmjs.com/package/color
import Color from 'color';
import { Dimensions, StyleSheet, Text, PixelRatio } from 'react-native';

const primary = '#039be5';
const secondary = '#009141';
const { height, width } = Dimensions.get('window');

const scale = width / 320;
export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    const size = Math.round(newSize);
    if (size >= 15) {
      return 15
    }
    else {
      return size;
    }
  } else {
    const size = Math.round(newSize) - 2;
    if (size >= 15) {
      return 15
    }
    else {
      return size;
    }
  }
}

export const Colors = {
  black: '#000',
  primary: primary,
  primaryDark: '#B80000',
  white: '#ffffff',
  warm: '#f44336',
  indigo: '#3f51b5',
  green: '#008000',
  green50: '#e8f5e9',
  grey: '#9e9e9e',
  Yellow: '#ebe302',
  orange: '#ff9800',
  lightOrange: Color('#ff9800').lighten(0.5).hex(),
  accent: '#039be5',
  lightAccent: '#b3e5fc',
  secondaryConstraint: '#F7FFFB',
  textDark: '#686868',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffa701',
  info: '#17a2b8',
  unfilledDanger: '#df3329',
  verdurous:'#3FBF3F',
  unfilledSuccess: '#438B28',
  buttonPrimary: '#4e9e2f',
  buttonSecondary: '#007ef9',
  Secondary:'#f2d38e',// '#087ef5',//'#007ef9',
  Secondary95: "#e6f2ff",
  greyPrimary: '#8c8a8a',
  greySecondary: '#505050',
  blackPrimary: '#1d1d1d',
  greyBorder: '#ececec',
  greyPrimaryConstraint: '#eaeaea',
  greySecondaryConstraint: '#cccccc',
  navy: '#373530',
  colorIcon: '#000',
  whileOpacity: Color.rgb(255, 255, 255, 0.54),
  whiteOpacity70 : Color.rgb(255, 255, 255, 0.9),
  whiteOpacity60 : Color.rgb(255, 255, 255, 0.6),
  whiteOpacity30 : Color.rgb(255, 255, 255, 0.3),
  borderColor: '#e5e5e7',

};

export const Size = {
  'iconSize': normalize(13) + 7,
  'heightInput': 40,
  'heightButton': 40,
  'text': normalize(13),
  'textmedium': normalize(17),
  'textlarge': normalize(18),
  'textLableTabar': 13,
  'deviceWidth': width,
  'deviceheight': height,
}

export const styleSheets = {
  'sizeIconImage': {
    width: 22,
    height: 22
  },
  'opacity_button': 0.6,
  //'opacity' : 0.5,
  'radius_5': 5,
  'radius_10': 10,
  'm_7': 7,
  'm_10': 10,
  'p_10': 10,
  'p_15': 15,
  'p_20': 20,
  'm_20': 20,
  'm_5': 5,
  'p_5': 5,
  'p_7': 7,
  text: {
    fontSize: Size.text,
    padding: 1
  },
  textItalic: {
    fontSize: Size.text,
    padding: 1
  },
  lable: {
    fontSize: Size.text,
    fontWeight: "500",
  },
  textInput: {
    height: 35,
    fontSize: Size.text,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 0.5,
    borderColor: Colors.grey,
    borderRadius: 5,
    backgroundColor:Colors.white
  },
}
export const stylesDatePicker = {
  bntPicker: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginHorizontal: styleSheets.m_10,
    borderColor: Colors.grey,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: styleSheets.p_10,
  },
  selectPicker: {
    flex: 1,
    flexDirection: "row",
    minHeight: Size.heightInput,
    maxHeight: Size.heightInput,
  }
}

export const stylesLoading = {
  Loading: {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  LoadingPages: {
    modal: {
      position: "absolute",
      paddingVertical: 0,
      borderRadius: styleSheets.radius_5,
      //backgroundColor:Colors.black,
      height: Size.deviceheight,
      width: Size.deviceWidth,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: Colors.black
    },
  }
}