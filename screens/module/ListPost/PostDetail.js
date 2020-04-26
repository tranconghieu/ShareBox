import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, StyleSheet,
    ScrollView, Image, ImageBackground
} from 'react-native';
import { Size, Colors, styleSheets } from '../../../constants/styleConfig';
import { IconMore, IconCheck, IconLike, IconComment, IconSend, IconMap ,IconSquare } from '../../../constants/Icons';
import InputPicker from '../../../components/InputPicker/InputPicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RadioForm from 'react-native-simple-radio-button';
import format from 'number-format.js';
import moment from 'moment';
import Modal from "react-native-modal";
export default class PostDetail extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            dataItem: this.props.navigation.state.params.data,
            commentValue: '',
            isShowInputComment: false,
            isVisibleModalDonate: false,
            E_1 : false,
            E_2 : false,
            E_3 : false
        }
    }
    componentDidMount() {
        console.log(this.state.dataItem);
    }
    onGoback = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }
    showInput = () => {
        this.setState({ isShowInputComment: true })
    }
    hideInput = () => {
        this.setState({ isShowInputComment: false })
    }
    showModalDonate =(name)=>{
        this.setState({ isVisibleModalDonate : true})
    }
    hideModalDonate =()=>{
        this.setState({isVisibleModalDonate : false})
    }
    checkItem =(index)=>{
        switch (index) {
            case 'E_1':
                this.setState({ E_1 : true , E_2 : false , E_3 :false })
                break;
            case 'E_2':
                this.setState({ E_1 : false , E_2 : true , E_3 :false })
                break;
            case 'E_3':
                this.setState({ E_1 : false , E_2 : false , E_3 :true })
                break;
            default:
                break;
        }
    }
    render() {
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
            viewLikeAndComment,
            RowLikeCommten,
            bntGoback,
            styleViewTextComment,
            bntSend,
            styleModal,
            styleViewModal,
            containerPicker,listOption,
            checkBoxActive,
            checkBoxUnActive,
            txtCheckboxActive ,
            txtCheckboxUnActive ,
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
        } = this.state.dataItem;
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 0 }} forceInset={{ top: 'never' }}>
                <KeyboardAwareScrollView style={{ flex: 1, height: Size.deviceheight, backgroundColor: Colors.white }}>
                    <ScrollView horizontal={true}>
                        <ImageBackground 
                            source={{ uri: 'https://kscloset.vn/wp-content/uploads/2020/02/ba%CC%89o-ve%CC%A3%CC%82-tra%CC%81i-%C4%91a%CC%82%CC%81t-web_1200x900px-scaled.jpg', }} 
                            style={imagePost} resizeMode="cover" 
                        >
                            <View style={bntGoback} onPress={() => this.onGoback()}>
                                <Text>1/2</Text>
                            </View>
                            <View style={styleLikeComment}>
                                <View style={rowComment}>
                                    <Text style={styleSheets.text}>{count_Like}</Text>
                                    <IconLike size={Size.iconSize - 5} color={Colors.accent} />
                                    <Text style={[styleSheets.text, { marginLeft: 10 }]}>{count_Seen} đã xem</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeuIV7hatzYlQ1KCmyHUrohR4ZJSXk-6gNatulvqEnMcgQ50kC&usqp=CAU',
                            }} style={imagePost} resizeMode="cover" >
                            <View style={bntGoback} onPress={() => this.onGoback()}>
                                <Text>2/2</Text>
                            </View>
                            <View style={styleLikeComment}>
                                <View style={rowComment}>
                                    <Text style={styleSheets.text}>{count_Like}</Text>
                                    <IconLike size={Size.iconSize - 5} color={Colors.accent} />
                                    <Text style={[styleSheets.text, { marginLeft: 10 }]}>{count_Seen} đã xem</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>


                    <View style={container}>
                        <View style={styleTilePost}>
                            <View style={avatar} >
                                <Image source={{
                                    uri: imageAvatar,
                                }} style={styleImageAvatar} />
                            </View>
                            <View style={styleTitleAndDate}>
                                <Text style={styleSheets.lable} numberOfLines={2} >
                                    {'Trần Công Hiếu'}
                                </Text>
                                <Text style={[styleSheets.text, { color: Colors.textDark }]} numberOfLines={1} >
                                    {moment(date_Crt).format('DD/MM/YYYY')}
                                </Text>
                            </View>

                            <View style={viewMore} >
                                <IconMore size={Size.iconSize} color={Colors.black} />
                            </View>

                        </View>

                        <View style={viewHasTag}>
                            <Text style={styleSheets.lable} numberOfLines={1} >
                                {`#${optionName.toUpperCase()}`}
                            </Text>
                        </View>

                        <View style={contentProgress}>
                            <View style={titleProgress}>
                                <Text style={txtTitleProgress}>
                                    {format('#.###,##', current_Amount)} Đ Đã nhân</Text>
                                <Text style={txtTitleProgress}>{current_Amount * 100 / money_Estimate}/100 %</Text>
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
                                    Mục tiêu :</Text>
                                <Text style={txtBold}>
                                    {format('#.###,##', money_Estimate)}đ</Text>
                            </View>
                            <View style={detailText}>
                                <Text style={styleSheets.text}  >
                                    Còn</Text>
                                <Text style={txtBold}>
                                    29</Text>
                                <Text style={styleSheets.text}  >
                                    ngày</Text>
                            </View>
                        </View>
                        <View style={viewAddress}>
                            <Text style={styleSheets.text}>
                                {address}
                            </Text>
                            <IconMap size={Size.iconSize} color={Colors.black} />
                        </View>
                        <View style={styleListOption}>
                            <View style={styleContent}>
                                {/* <TouchableOpacity onPress={() => this.router('PostDetail')}> */}
                                <Text style={[styleSheets.lable, { fontSize: Size.text + 5 }]} >
                                    {campaignName}
                                </Text>
                                {/* </TouchableOpacity> */}
                                <Text style={[styleSheets.text, txtContent]}  >
                                    {content}
                                </Text>
                            </View>


                            <View style={viewLikeAndComment}>
                                <View style={RowLikeCommten}>
                                    <IconLike size={Size.iconSize - 5} color={Colors.accent} />
                                    <Text style={[styleSheets.text, { marginLeft: 3 }]}>Thích</Text>
                                </View>
                                <TouchableOpacity style={RowLikeCommten} onPress={() => this.showInput()}>
                                    <IconComment size={Size.iconSize - 5} color={Colors.accent} />
                                    <Text style={[styleSheets.text, { marginLeft: 3 }]}>Bình luận</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>

                </KeyboardAwareScrollView>
                <TouchableOpacity style={bntPrimary} onPress={()=>this.showModalDonate()}>
                    <Text style={txtBntPrimary}>Ủng hộ chiến dịch</Text>
                </TouchableOpacity>
                {
                    (this.state.isShowInputComment) && (
                        <View style={styleViewTextComment} >
                            {/* <View> */}
                            <KeyboardAwareScrollView>
                                <InputPicker
                                    //style={{flex:1}}

                                    disable={false}
                                    placeholder={'...'}
                                    onChangeText={(text) => this.setState({ commentValue: text })}
                                    value={this.state.commentValue}
                                />
                            </KeyboardAwareScrollView>
                            {/* </View> */}
                            <TouchableOpacity style={bntSend} onPress={() => this.hideInput()}>
                                <IconSend size={20} color={Colors.accent} />
                            </TouchableOpacity>
                        </View>
                    )
                }
                <Modal
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    //key={id}
                    isVisible={this.state.isVisibleModalDonate}
                    style={styleModal}

                >
                    <View style={styleViewModal}>
                        <ScrollView style={{flex:1 , width:'100%',}}>
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
                                <TouchableOpacity style={viewCkek} onPress={()=>this.checkItem('E_1')}>
                                {
                                    this.state.E_1 == true ?  <IconCheck size={Size.iconSize + 3} color={Colors.accent} /> : <IconSquare IconMore size={Size.iconSize + 5} color={Colors.borderColor} />
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
                                <TouchableOpacity style={viewCkek} onPress={()=>this.checkItem('E_2')}>
                                {
                                    this.state.E_2 == true ?  <IconCheck size={Size.iconSize + 3} color={Colors.accent} /> : <IconSquare IconMore size={Size.iconSize + 5} color={Colors.borderColor} />
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
                                <TouchableOpacity style={viewCkek} onPress={()=>this.checkItem('E_3')}>
                                {
                                    this.state.E_3 == true ?  <IconCheck size={Size.iconSize + 3} color={Colors.accent} /> : <IconSquare IconMore size={Size.iconSize + 5} color={Colors.borderColor} />
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
            </SafeAreaView>
        );
    }

}
const styles = StyleSheet.create({
    containerPicker: {
        height: 40 ,
        width: '100%',
        backgroundColor: Colors.white,
    },
    listOption:{
        flex:1,
        height :Size.heightInput,
        borderColor:Colors.accent,
        borderWidth : 1,
        borderRadius: styleSheets.radius_5,
        flexDirection:'row'
    },
    checkBoxActive :{
        flex:5,
        height:'100%',
        backgroundColor: Colors.accent,
        justifyContent:'center',
        alignItems:'center',
        // borderRadius: styleSheets.radius_5,
    },
    checkBoxUnActive :{
        flex:5,
        height:'100%',
        backgroundColor: Colors.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: styleSheets.radius_5,

    },
    txtCheckboxActive : {
        color:Colors.white,
        fontSize:Size.text ,
        fontWeight:'600'
    },
    txtCheckboxUnActive :{
        color:Colors.accent,
        fontSize:Size.text ,
        fontWeight:'600'
    },
    styleViewModal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    styleModal: {
        backgroundColor: Colors.white,
        //position: "absolute",
        width: Size.deviceWidth - 30,
        marginHorizontal: 15,
        marginTop : (Size.deviceheight / 2) - ((Size.deviceheight * 0.4 /2)),
        maxHeight : Size.deviceheight * 0.4,
        //marginVertical :338,
        padding: 20,
        //paddingVertical: 0,
        borderRadius: styleSheets.radius_10,
        //height : Size.deviceheight * 0.3,
      },
    viewHasTag: {
        marginBottom: styleSheets.m_5,
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
        marginBottom: styleSheets.m_20
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
        //width:50,
        //justifyContent:'center',
        //alignContent:'center',
        //alignItems:'center',
        // paddingLeft:20,
    },
    viewCkek:{
        width:50,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:20,
    },
    viewImagePost: {
        width: Size.deviceWidth,
        marginBottom: styleSheets.m_10
    },
    imagePost: {
        width: Size.deviceWidth,
        height: Size.deviceheight * 0.35,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        backgroundColor: Colors.blackPrimary
    },
    styleListOption: {

    },
    styleContent: {
        marginBottom: styleSheets.m_20
    },
    txtContent: {
        textAlign: 'justify',
        marginVertical: 5
    },
    contentProgress: {
        width: '100%',
        marginBottom: styleSheets.m_5
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
        flexDirection: 'row',
        justifyContent: 'space-between'
        //marginBottom: styleSheets.m_10
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
        //flex: 1,
        width: Size.deviceWidth - 20,
        height: 45,
        backgroundColor: Colors.accent,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        position: 'absolute',
        zIndex: 1,
        bottom: 0
    },
    bntGoback: {
        width: 35,
        height: 35,
        backgroundColor: Colors.whiteOpacity30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        position: 'absolute',
        zIndex: 1,
        top: 10
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
        marginBottom: styleSheets.m_10,
        marginLeft: styleSheets.m_10,
        backgroundColor: Colors.white,
        padding: 5
    },
    rowComment: {
        flexDirection: 'row',

    },
    viewAddress: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //borderTopColor: Colors.grey,
        //borderTopWidth: 1,
        //borderBottomColor: Colors.grey,
        //borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: styleSheets.m_10,
    },
    viewLikeAndComment: {
        flex: 1,
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: Colors.grey,
        borderTopWidth: 1,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 40,
    },
    RowLikeCommten: {
        flexDirection: 'row',
        flex: 5,
        justifyContent: 'center'
    },
    styleViewTextComment: {
        flexDirection: 'row',
        width: Size.deviceWidth,
        paddingVertical: 15,
        paddingHorizontal: 10,
        //height: 70,
        backgroundColor: Colors.greyPrimaryConstraint,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 20,
        position: 'absolute',
        zIndex: 1,
        bottom: 0
    },
    bntSend: {
        height: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: Colors.accent,
        borderWidth: 0.5,
        borderRadius: 5,
        marginLeft: 10,
        backgroundColor: Colors.white
    }
});




