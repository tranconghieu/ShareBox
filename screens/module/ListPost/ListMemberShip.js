import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, StyleSheet,
    ScrollView, Image
} from 'react-native';
import { Size, Colors, styleSheets } from '../../../constants/styleConfig';
import { IconGmail, IconSearch, IconPhone, IconComment, IconCreate, IconMap } from '../../../constants/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import InputPicker from '../../../components/InputPicker/InputPicker';
import Modal from "react-native-modal";
// import ListItem from '../../../components/ListItem/ListItem';
const uriAvatar_0 =  'https://photo-3-baomoi.zadn.vn/w100_r1x1/2020_04_25_146_34834505/9debcce5cda624f87db7.jpg';
const uriAvatar_1 =  'https://baomoi-static.zadn.vn/Uploaded/Top%20web/TBT/1.png';
const uriAvatar_2 =  'https://photo-1-baomoi.zadn.vn/w100_r1x1/2020_04_25_119_34841019/3e39b3e9c2aa2bf472bb.jpg';
const uriAvatar_3 =  'https://photo-3-baomoi.zadn.vn/w300_r3x2/2020_04_25_181_34841060/fa21fff18eb267ec3ea3.jpg';
const uriAvatar_4 =  'https://photo-1-baomoi.zadn.vn/w300_r3x2/2020_04_25_194_34841079/7aa442743337da698326.jpg';
const data = [
    {
        "Avatar" : uriAvatar_0,
        "NameDepartment": "Công Ty TNHH Doanh Nghiệp Xã Hội Thiên Ân",
        "Code": "4201756562",
        "Area": "Khánh Hòa",
        "Adress": "2A Sao Biển, Thanh Hải, Phường Vĩnh Hải, Thành phố Nha Trang, Tỉnh Khánh Hòa",
        "MainJob": "Nhà hàng và các dịch vụ ăn uống phục vụ lưu động"
    },
    {
        "Avatar" : uriAvatar_1,
        "NameDepartment": "Công Ty TNHH Doanh Nghiệp Xã Hội Tims",
        "Code": "315748092",
        "Area": "TP Hồ Chí Minh",
        "Adress": "Số 261 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
        "MainJob": "Dịch vụ lưu trú ngắn ngày"
    },
    {
        "Avatar" : uriAvatar_2,
        "NameDepartment": "Công Ty TNHH Doanh Nghiệp Xã Hội Iviệt",
        "Code": "107565080",
        "Area": "Hà Nội",
        "Adress": "Số 16B, phố Ngũ Xã - Phường Trúc Bạch - Quận Ba Đình - Hà Nội"
    },
    {
        "Avatar" : uriAvatar_3,
        "NameDepartment": "Công Ty TNHH Doanh Nghiệp Xã Hội Hướng Nghiệp Sông An",
        "Code": "316095022",
        "Area": "TP Hồ Chí Minh",
        "Adress": "Tầng 3, 16A Lê Hồng Phong, Phường 12, Quận 10, Thành phố Hồ Chí Minh",
        "MainJob": "Giáo dục khác chưa được phân vào đâu"
    },
    {
        "Avatar" : uriAvatar_4,
        "NameDepartment": "Công Ty Cổ Phần Doanh Nghiệp Xã Hội Viện Thành Viên Hội Đồng Quản Trị Việt Nam",
        "Code": "108180534",
        "Area": "Hà Nội",
        "Adress": "Số 68, Đường Phan Đình Phùng , Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội",
        "MainJob": "Hoạt động tư vấn quản lý"
    },
    {
        "Avatar" : uriAvatar_0,
        "NameDepartment": "Công Ty TNHH Doanh Nghiệp Xã Hội Vì Sức Khỏe V-health",
        "Code": "109155001",
        "Area": "Hà Nội",
        "Adress": "Tầng 3 số 466 Hoàng Hoa Thám, tổ 13A, Phường Bưởi, Quận Tây Hồ, Thành phố Hà Nội",
        "MainJob": "Tổ chức giới thiệu và xúc tiến thương mại"
    },
    {
        "Avatar" : uriAvatar_0,
        "NameDepartment": "Công Ty TNHH Doanh Nghiệp Xã Hội Giáo Dục Đặc Biệt Cánh Diều",
        "Code": "108158056",
        "Area": "Hà Nội",
        "Adress": "Số nhà 14, ngách 29, ngõ 82 Nguyễn Phúc Lai, Phường Ô Chợ Dừa, Quận Đống Đa, Thành phố Hà Nội",
        "MainJob": "Giáo dục khác chưa được phân vào đâu"
    },
    {
        "Avatar" : uriAvatar_0,
        "NameDepartment": "Trung Tâm Truyền Thông Tài Chính Và Dịch Vụ Doanh Nghiệp - Chi Nhánh Công Ty Cổ Phần Xã Hội",
        "Code": "105343477",
        "Area": "Hà Nội",
        "Adress": "Số 9, tổ 15, làng Thủ Lệ - Phường Ngọc Khánh - Quận Ba Đình - Hà Nội",
        "MainJob": "Hoạt động tư vấn quản lý"
    },
    {
        "Avatar" : uriAvatar_0,
        "NameDepartment": "Phòng lao động thương binh và xã hội quận Lê Chân",
        "Code": "200989503",
        "Area": "Hải Phòng",
        "Adress": "Số 10 Hồ Sen - Quận Lê Chân - Hải Phòng",
        "MainJob": "Hoạt động bảo đảm xã hội bắt buộc"
    },
    {
        "Avatar" : uriAvatar_0,
        "NameDepartment": "Công Ty TNHH Mạng Xã Hội Trực Tuyến Doanh Nhân Online",
        "Code": "312372162",
        "Area": "TP Hồ Chí Minh",
        "Adress": "Lầu 10A, tòa nhà OSC, 161 Võ Văn Tần - Phường 06 - Quận 3 - TP Hồ Chí Minh",
        "MainJob": "Tổ chức giới thiệu và xúc tiến thương mại"
    }
];
export default class ListMemberShip extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            isVisibleModal : false,
            inVitation : 'Chúng tôi muốn mời bạn tham gia chiến dịch này',
            nameDepartMentinvatation : ''
        }
    }
    router = (roouterName) => {
        const { navigation } = this.props;
        navigation.navigate(roouterName);
    }

    showModal =(name)=>{
        this.setState({nameDepartMentinvatation : name , isVisibleModal : true})
    }
    hideModal =()=>{
        this.setState({isVisibleModal : false})
    }
    render() {
        const {
            viewButton,
            BackgroundIcon,
            avatarStyle,
            avatar,
            lableStyle,
            viewButtonIOS,
            viewLable,
            userName,
            infoUser,
            numberPhone,
            rightUser,
            bntCreate,
            viewSearch,
            inputSearch,
            contentSearch,
            styleInVitation,
            styleModal,
            styleViewModal,
            txtTitleModal,
            bntSend
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
                <ScrollView  style={{flex:1 ,backgroundColor:Colors.borderColor} }>
                    {
                        data.map((item, index) => {
                            return (
                                <View style={BackgroundIcon}>
                                    <View style={viewButton}>
                                        <View style={avatar}>
                                            <Image
                                                source={{ uri : item.Avatar}} style={avatarStyle}
                                            />
                                        </View>
                                        <View style={rightUser}>
                                            <View style={viewLable}>

                                                <Text style={[styleSheets.lable, userName]} numberOfLines={2}>
                                                    {item.NameDepartment}
                                                </Text>
                                            </View>
                                            {/* <View style={viewLable}>
                                                <IconPhone size={Size.text} color={Colors.black} />
                                                <Text style={[styleSheets.text, infoUser]}>
                                                    {'0388 223 123'}
                                                </Text>
                                            </View> */}
                                            <View style={viewLable}>
                                                {/* <IconGmail size={Size.text} color={Colors.black} /> */}
                                                <Text style={[styleSheets.text, infoUser]}>
                                                    {item.MainJob}
                                                </Text>
                                            </View>
                                            <View style={viewLable}>
                                                <IconMap size={Size.text} color={Colors.black} />
                                                <Text style={[styleSheets.text, numberPhone]}>
                                                    {item.Area}
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styleInVitation} onPress={()=> {this.showModal(item.NameDepartment)}}>
                                            <Text 
                                                style={[styleSheets.text, { color: Colors.accent, textAlign: 'center' }]} 
                                            >
                                                Mời đối tác
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                    

                </ScrollView>
                {/* <TouchableOpacity style={bntCreate} onPress={() => this.router('CreatePost')}>
          <IconCreate size={Size.iconSize + 10} color={Colors.white} />
        </TouchableOpacity> */}
            {
                
                (this.state.nameDepartMentinvatation != '' && this.state.isVisibleModal == true) && (
                <Modal
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    //key={id}
                    isVisible={this.state.isVisibleModal}
                    style={styleModal}

                >
                    <View style={styleViewModal}>
                        <Text style={[styleSheets.lable,txtTitleModal]} >
                            {this.state.nameDepartMentinvatation}
                        </Text>
                        <InputPicker
                            multiline={true}
                            height={100}
                            placeholder={'...'}
                            onChangeText={(text) => this.setState({ inVitation : text })}
                            value={this.state.inVitation}
                        />

                        <TouchableOpacity style={bntSend} onPress={()=>this.hideModal()} activeOpacity={1}> 
                            <Text style={[styleSheets.text,{color:Colors.white}]} >
                                Gửi lời mời
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                )
            }
                
            </SafeAreaView>
        );
    }

}
const styles = StyleSheet.create({
    styleViewModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    styleModal: {
        backgroundColor: Colors.white,
        //position: "absolute",
        width: Size.deviceWidth - 40,
        marginHorizontal: 15,
        marginTop : (Size.deviceheight / 2) - ((Size.deviceheight * 0.26 /2)),
        height : 180, //Size.deviceheight * 0.26,
        maxHeight : Size.deviceheight * 0.3,
        //marginVertical :338,
        padding: 20,
        //paddingVertical: 0,
        borderRadius: styleSheets.radius_10,
        //height : Size.deviceheight * 0.3,
      },
      txtTitleModal:{
        marginBottom : 10
      },
    styleInVitation:{
        width:70,
        height :100,
        borderColor:Colors.accent,
        borderWidth : 1,
        borderRadius:styleSheets.radius_5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft : 10
    },
    bntSend:{
        width:'100%',
        height:35,
        backgroundColor: Colors.accent,
        justifyContent:'center',
        alignItems:'center',
        borderRadius : styleSheets.radius_5,
        marginTop : styleSheets.m_10
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
  
    BackgroundIcon: {
        //height : 'auto',
        width: Size.deviceWidth - 20,
        borderRadius: 12,
        marginHorizontal: styleSheets.m_10,
        marginTop: 15,
        backgroundColor:Colors.borderColor,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    viewButton: {
        //height: 96,
        
        width: '100%',
        backgroundColor: Colors.whiteOpacity70,
        borderRadius: 12,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
        padding:styleSheets.p_10
    },
    avatar: {
        marginRight: styleSheets.m_10,

    },
    avatarStyle: {
        width: 68,
        height: 80,
        resizeMode: 'cover',
        borderRadius : styleSheets.radius_5,
    },
    viewLable:{
        alignItems:'center',
        justifyContent: 'flex-start',
        padding: 2,
        flexDirection: 'row',
    },
    infoUser:{
        // fontSize : 11,
       // marginLeft : 5
    },
    userName:{
        textAlign:'justify'
    },
    numberPhone:{
        // fontSize:11,
       // marginLeft : 5
    },
    rightUser:{
        flex:1,

    }
});







