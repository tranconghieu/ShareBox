
import React, { Component, PureComponent } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image,ScrollView
} from 'react-native';
import { IconMore, IconSquare, IconLike, IconComment, IconCheck, IconMap } from '../../constants/Icons';
import {
  Colors,
  Size,
  styleSheets,
} from '../../constants/styleConfig';
import GeneralFunction from '../../utils/GeneralFunction';
import format from 'number-format.js';
import moment from 'moment';
import Modal from "react-native-modal";
export default class RenderItemColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModalDonate: false,
      E_1: false,
      E_2: false,
      E_3: false
    };

  }
  checkItem = (index) => {
    switch (index) {
      case 'E_1':
        this.setState({ E_1: true, E_2: false, E_3: false })
        break;
      case 'E_2':
        this.setState({ E_1: false, E_2: true, E_3: false })
        break;
      case 'E_3':
        this.setState({ E_1: false, E_2: false, E_3: true })
        break;
      default:
        break;
    }
  }
  router = (roouterName) => {
    const { navigation, dataItem } = this.props;
    console.log(navigation, 'navigation')
    navigation.navigate(roouterName, { data: dataItem });
  }
  showModalDonate = (name) => {
    this.setState({ isVisibleModalDonate: true })
  }
  hideModalDonate = () => {
    this.setState({ isVisibleModalDonate: false })
  }
  render() {
    const {
      // dataItem,
      index,
    } = this.props;
    const {
      container,
      styleTilePost,
      avatar,
      styleImageAvatar,
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
      viewAddress,
      viewHasTag,
      styleModal,
      styleViewModal,
      containerPicker, listOption,
      checkBoxActive,
      checkBoxUnActive,
      txtCheckboxActive,
      txtCheckboxUnActive,
      viewCkek
    } = styles;
    const { imageAvatar,
      imageContent,
      content,
      count_Like,
      count_Seen,
      current_Amount,
      address,
      campaignName,
      date_Crt,
      money_Estimate,
      optionName,
    } = this.props.dataItem;

    return (
      <View style={container}>
        <View style={styleTilePost}>
          <View style={avatar} >
            <Image source={{
              uri: imageAvatar,
            }} style={styleImageAvatar} resizeMode="cover" />
          </View>
          <View style={styleTitleAndDate}>
            <Text style={styleSheets.lable} numberOfLines={2} >
              {index == 0 && 'Trần Công Hiếu'}
              {index == 1 && 'Phạm Tấn Phong'}
            </Text>
            <Text style={[styleSheets.text, { color: Colors.textDark }]} numberOfLines={1} >
              {moment(date_Crt).format('DD/MM/YYYY')}
            </Text>
          </View>

          <View style={viewMore}>
            <IconMore size={Size.iconSize} color={Colors.black} />
          </View>

        </View>

        <View style={viewImagePost}>
          <View style={viewHasTag}>
            <Text style={styleSheets.lable} numberOfLines={1} >
              {`#${optionName.toUpperCase()}`}
            </Text>
          </View>
          <Image

            source={
              index == 0 ? { uri: 'https://kscloset.vn/wp-content/uploads/2020/02/ba%CC%89o-ve%CC%A3%CC%82-tra%CC%81i-%C4%91a%CC%82%CC%81t-web_1200x900px-scaled.jpg' }
                : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeuIV7hatzYlQ1KCmyHUrohR4ZJSXk-6gNatulvqEnMcgQ50kC&usqp=CAU' }
            }
            style={imagePost} resizeMode='cover' />
        </View>


        <View style={styleListOption}>
          <View style={styleContent}>
            <View style={styleLikeComment}>
              <View style={rowComment}>
                <Text style={styleSheets.text}>{count_Like}</Text>
                <IconLike size={Size.iconSize - 5} color={Colors.accent} />
                <Text style={[styleSheets.text, { marginLeft: 10 }]}>{count_Seen} đã xem</Text>
              </View>
              <View style={rowComment}>
                <Text style={styleSheets.text}>20</Text>
                <IconComment size={Size.iconSize - 5} color={Colors.accent} />
              </View>

            </View>
            <TouchableOpacity onPress={() => this.router('PostDetail')}>
              <Text style={[styleSheets.lable, { fontSize: Size.text + 2 }]} numberOfLines={2} >
                {campaignName}
              </Text>
            </TouchableOpacity>
            <Text style={[styleSheets.text, txtContent]} numberOfLines={2} >
              {content}
            </Text>

          </View>

          <View style={contentProgress}>
            <View style={titleProgress}>
              <Text style={txtTitleProgress}>
                {format('#.###,##', current_Amount)} Đ Đã nhân
                    </Text>
              <Text style={txtTitleProgress}>
                {current_Amount * 100 / money_Estimate}/100 %
                    </Text>
            </View>
            <View style={progress}>
              <View style={[persenProgress, { width: `${current_Amount * 100 / money_Estimate}%`, }]}>
                {/* <Text style= {txtPersenProgress}> 10% </Text> */}
              </View>
            </View>
          </View>

          <View style={styleContentDetail}>
            <View style={detailText}>
              <Text style={styleSheets.text}  >
                Mục tiêu :
                  </Text>
              <Text style={txtBold}>
                {format('#.###,##', money_Estimate)}đ
                  </Text>
            </View>
            <View style={detailText}>
              <Text style={styleSheets.text}  >
                Còn
                  </Text>
              <Text style={txtBold}>
                29
                  </Text>
              <Text style={styleSheets.text}  >
                ngày
                  </Text>
            </View>
          </View>

          <TouchableOpacity style={bntPrimary} onPress={()=>this.showModalDonate()}>
            <Text style={txtBntPrimary}>
              Ủng hộ chiến dịch
                  </Text>
          </TouchableOpacity>
          <View style={viewAddress}>
            <IconMap size={Size.iconSize} color={Colors.black} />
            <Text style={styleSheets.text}>
              {address}
            </Text>
          </View>
        </View>
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          //key={id}
          isVisible={this.state.isVisibleModalDonate}
          style={styleModal}

        >
          <View style={styleViewModal}>
            <ScrollView style={{ flex: 1, width: '100%', }}>
              <View style={styleTilePost}>
                <View style={styleTitleAndDate}>
                  <Text style={styleSheets.lable} numberOfLines={2} >
                    {'Gói tinh thần (100.000 VNĐ)'}
                  </Text>
                  {/* <Text style={[styleSheets.text, { color: Colors.textDark }]} numberOfLines={1} >
                                        {''}
                                    </Text> */}
                  <Text style={[styleSheets.text, { color: Colors.textDark }]} >
                    {'Ủng hộ 100.000 VNĐ cho doanh nghiệp Xã Hội Thiên Ân'}
                  </Text>
                </View>
                <TouchableOpacity style={viewCkek} onPress={() => this.checkItem('E_1')}>
                  {
                    this.state.E_1 == true ? <IconCheck size={Size.iconSize + 3} color={Colors.accent} /> : <IconSquare IconMore size={Size.iconSize + 5} color={Colors.borderColor} />
                  }
                </TouchableOpacity>
              </View>

              <View style={styleTilePost}>
                <View style={styleTitleAndDate}>
                  <Text style={styleSheets.lable} numberOfLines={2} >
                    {'Gói siêu tinh thần (500.000 VNĐ)'}
                  </Text>
                  <Text style={[styleSheets.text, { color: Colors.textDark }]} >
                    {'Ủng hộ 500.000 VNĐ cho doanh nghiệp Xã Hội Thiên Ân'}
                  </Text>
                </View>
                <TouchableOpacity style={viewCkek} onPress={() => this.checkItem('E_2')}>
                  {
                    this.state.E_2 == true ? <IconCheck size={Size.iconSize + 3} color={Colors.accent} /> : <IconSquare IconMore size={Size.iconSize + 5} color={Colors.borderColor} />
                  }
                </TouchableOpacity>
              </View>
              <View style={styleTilePost}>
                <View style={styleTitleAndDate}>
                  <Text style={styleSheets.lable} numberOfLines={2} >
                    {'Gói siêu tinh thần (1.000.000 VNĐ)'}
                  </Text>
                  <Text style={[styleSheets.text, { color: Colors.textDark }]} >
                    {'Ủng hộ 1.000.000 VNĐ cho doanh nghiệp Xã Hội Thiên Ân'}
                  </Text>
                </View>
                <TouchableOpacity style={viewCkek} onPress={() => this.checkItem('E_3')}>
                  {
                    this.state.E_3 == true ? <IconCheck size={Size.iconSize + 3} color={Colors.accent} /> : <IconSquare IconMore size={Size.iconSize + 5} color={Colors.borderColor} />
                  }
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={containerPicker}>
              <View style={listOption}>
                <TouchableOpacity style={checkBoxUnActive} onPress={() => this.hideModalDonate()} activeOpacity={1}>
                  <Text style={txtCheckboxUnActive}>Huỷ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={checkBoxActive} onPress={() => this.hideModalDonate()} activeOpacity={1}>
                  <Text style={txtCheckboxActive}>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>



            {/* <TouchableOpacity style={bntSend} onPress={()=>this.hideModalDonate()} activeOpacity={1}> 
                            <Text style={[styleSheets.text,{color:Colors.white}]} >
                                Gửi lời mời
                            </Text>
                        </TouchableOpacity> */}
          </View>
        </Modal>



      </View>
    );
  }

}
const styles = StyleSheet.create({
  containerPicker: {
    height: 40,
    width: '100%',
    backgroundColor: Colors.white,
  },
  listOption: {
    flex: 1,
    height: Size.heightInput,
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: styleSheets.radius_5,
    flexDirection: 'row'
  },
  checkBoxActive: {
    flex: 5,
    height: '100%',
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: styleSheets.radius_5,
  },
  checkBoxUnActive: {
    flex: 5,
    height: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: styleSheets.radius_5,

  },
  txtCheckboxActive: {
    color: Colors.white,
    fontSize: Size.text,
    fontWeight: '600'
  },
  txtCheckboxUnActive: {
    color: Colors.accent,
    fontSize: Size.text,
    fontWeight: '600'
  },
  styleViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleModal: {
    backgroundColor: Colors.white,
    //position: "absolute",
    width: Size.deviceWidth - 30,
    marginHorizontal: 15,
    marginTop: (Size.deviceheight / 2) - ((Size.deviceheight * 0.4 / 2)),
    maxHeight: Size.deviceheight * 0.4,
    //marginVertical :338,
    padding: 20,
    //paddingVertical: 0,
    borderRadius: styleSheets.radius_10,
    //height : Size.deviceheight * 0.3,
  },
  viewCkek: {
    width: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  viewHasTag: {
    marginBottom: styleSheets.m_5
  },
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
  container: {
    //height: 100 ,
    width: Size.deviceWidth,
    padding: styleSheets.p_15,
    backgroundColor: Colors.white,
    //marginBottom : styleSheets.m_20
  },
  styleTilePost: {
    flexDirection: 'row',
    marginBottom: styleSheets.m_10
  },
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 20,

  },
  styleImageAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  styleTitleAndDate: {
    flex: 1,
    paddingHorizontal: 10

  },
  viewMore: {
  },
  viewImagePost: {
    marginBottom: styleSheets.m_10
  },
  imagePost: {
    width: Size.deviceWidth - 30,
    height: Size.deviceheight * 0.22,
    backgroundColor: Colors.blackPrimary
  },
  styleListOption: {

  },
  styleContent: {
    marginBottom: styleSheets.m_5
  },
  txtContent: {
    textAlign: 'justify'
  },
  contentProgress: {
    width: '100%',
    marginBottom: styleSheets.m_10
  },
  titleProgress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtTitleProgress: {
    color: Colors.accent,
    fontSize: Size.text,
    fontWeight: '600'
  },
  progress: {
    flex: 1,
    marginTop: styleSheets.m_5,
    height: 22,
    backgroundColor: Colors.borderColor,
    borderRadius: 10,

  },
  persenProgress: {

    height: 22,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtPersenProgress: {
    color: Colors.white,
    fontSize: Size.text - 1,
  },
  styleContentDetail: {
    marginBottom: styleSheets.m_10
  },
  detailText: {
    flexDirection: 'row'
  },
  txtBold: {
    fontSize: Size.text + 1,
    fontWeight: '700',
    marginHorizontal: styleSheets.m_5
  },
  bntPrimary: {
    flex: 1,
    height: 45,
    backgroundColor: Colors.accent,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: styleSheets.m_10
  },
  txtBntPrimary: {
    fontSize: Size.text + 1,
    fontWeight: '700',
    marginHorizontal: styleSheets.m_5,
    color: Colors.white
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
  styleLikeComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: styleSheets.m_5
  },
  rowComment: {
    flexDirection: 'row',
  },
  viewAddress: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    flexDirection: 'row'
  }
});







