import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, StyleSheet,
    ScrollView, Image
} from 'react-native';
import { Size, Colors, styleSheets } from '../../../constants/styleConfig';
import DatePicker from '../../../components/DatePicker/DatePicker';
import InputPicker from '../../../components/InputPicker/InputPicker';
import {LoadingSevices} from '../../../components/Loading/LoadingPages';
import { IconDelete, IconSearch, IconLike, IconComment, IconCreate, IconMap } from '../../../constants/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';    
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class CreatePost extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            isCheckCategory_1 : true,
            campaignName : 'Dịch bệnh Covid 19',
            contentDescription : 'Vi-rút này gây ra bệnh lý về hô hấp (giống như cảm cúm) với các triệu chứng như ho, sốt và những trường hợp nghiêm trọng hơn có thể bị khó thở. Bạn có thể bảo vệ chính mình bằng cách rửa tay thường xuyên, tránh chạm tay lên mặt và tránh tiếp xúc gần (trong phạm vi 1 mét hoặc 3 feet) với những người không khỏe.',
            target : '',
            listImg : [],
            listDonate : [{
                id : Math.random(),
                name: '',
                money : '',
                content : ''
            }],
            isOptionDonate : false
        }
    }
    router = (roouterName) => {
        const { navigation } = this.props;
        navigation.navigate(roouterName);
    }
    componentDidMount(){
        console.log(LoadingSevices , 'dasdas');

    }
    checkedOptionDonate =()=>{
        this.setState({ isOptionDonate : !this.state.isOptionDonate })
    }
    showImagePicker=()=>{
        LoadingSevices.show();
        const options = {
            title: 'Chọn ảnh từ thư viện hoặc chụp ảnh  ',
            // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            // storageOptions: {
            //   skipBackup: true,
            //   path: 'images',
            // },
          };
        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);
            const {listImg} = this.state;
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
            //   const source = { uri: response.uri };
            //     console.log(response);
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              listImg.push(response);
              this.setState({listImg} , ()=>{ LoadingSevices.hide(); });
            }
          });
    }
    addTypeDonate = ()=>{
        const { listDonate } = this.state;
        listDonate.push({
            id : Math.random(),
            name: '',
            money : '',
            content : ''
        });
        this.setState({ listDonate });
    }
    removeTypeDonate =(index)=>{
        const { listDonate } = this.state;
        if(listDonate.length > 1){
            listDonate.splice(index,1);
            this.setState({ listDonate });
        }
    }
    setStateListDonade =(value , index , fieldName)=>{
        const { listDonate } = this.state;
        if(listDonate.length > 0){
            listDonate[index][fieldName] = value;
            this.setState({ listDonate });
        }
    }
    render() {
        const {
            containerPicker,
            viewLable,
            listOption,
            checkBoxActive,
            checkBoxUnActive,
            txtCheckboxActive,
            txtCheckboxUnActive,
            bntChoseImage,
            containerImage,
            ImgSize,
            ContentDonate,
            styleViewCreateDonate,
            styleRowDonate,
            bntCreateDonate,
            leftViewCreateDonate,
            rightViewCreateDonate,
        } = styles;
        const {
            campaignName,
            target,
            contentDescription,
            listImg,
            listDonate
        } = this.state
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 0 }} forceInset={{ top: 'never' }}>

                <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: Colors.white, }}>
                    <View style={containerPicker}>
                        <View style={listOption}>
                            {
                                this.state.isOptionDonate ? 
                                <TouchableOpacity style={checkBoxActive} onPress={()=> this.checkedOptionDonate()}>
                                    <Text style={txtCheckboxActive}>Kêu gọi vốn</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={checkBoxUnActive} onPress={()=> this.checkedOptionDonate()}>
                                    <Text style={txtCheckboxUnActive}>Kêu gọi vốn</Text>
                                </TouchableOpacity>
                            }
                            {
                                !this.state.isOptionDonate ? 
                                <TouchableOpacity style={checkBoxActive} onPress={()=> this.checkedOptionDonate()}>
                                    <Text style={txtCheckboxActive}>Tiếp thị sản phẩm</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={checkBoxUnActive} onPress={()=> this.checkedOptionDonate()}>
                                    <Text style={txtCheckboxUnActive}>Tiếp thị sản phẩm</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={containerPicker}>
                        <View style={viewLable}>
                            <Text style={styleSheets.lable} >Tên chiến dịch</Text>
                        </View>
                        
                        <InputPicker
                            placeholder={'...'}
                            // height={50}
                            onChangeText={(text) => this.setState({ campaignName : text })}
                            value={campaignName}
                            // multiline={true}
                            // numberOfLines={3}
                            // returnKeyType='done'
                        />
                    </View>
                    <View style={containerPicker}>
                        <View style={viewLable}>
                            <Text style={styleSheets.lable} >Mục tiêu (VNĐ)</Text>
                        </View>
                        
                        <InputPicker
                            placeholder={'...'}
                            keyboardType={'numeric'}
                            // height={50}
                            onChangeText={(text) => this.setState({ target : text })}
                            value={target}
                            // multiline={true}
                            // numberOfLines={3}
                            // returnKeyType='done'
                        />
                    </View>
                    <View style={containerPicker}>
                        <View style={viewLable}>
                            <Text style={styleSheets.lable} >Thời gian (bắt đầu và kết thúc)</Text>
                        </View>
                        <DatePicker
                            stylePicker={{ marginLeft: 5 }}
                            type="date"//"time"
                            placeholder="CHOOSE_TIME"
                            fieldName="txtDate"
                            onFinish={(value) => { console.log(value) }}
                            //onCancel = {()=>{ console.log('cancel') }}
                            format='DD-MM-YYYY' //"hh:mm:ss"//
                        />

                    </View>
                    <View style={containerPicker}>
                        <View style={viewLable}>
                            <Text style={styleSheets.lable} >Nội dung</Text>
                        </View>
                        
                        <InputPicker
                            placeholder={'...'}
                            height={100}
                            onChangeText={(text) => this.setState({ contentDescription : text })}
                            value={contentDescription}
                            multiline={true}
                            //numberOfLines={3}
                            // returnKeyType='done'
                        />
                    </View>
                    <View style={containerPicker}>
                        <View style={viewLable}>
                            <Text style={styleSheets.lable} >Hình ảnh</Text>
                        </View>
                        <ScrollView horizontal={true} style={containerImage}>
                        {/* <View style={containerImage}> */}
                            <TouchableOpacity onPress={()=>this.showImagePicker()} 
                                style={bntChoseImage}
                            >
                                <IconCreate size={Size.iconSize + 30} color={Colors.white} />
                            </TouchableOpacity>
                            {
                                listImg.map(item=>{
                                    console.log(item , 'item')
                                    return (
                                        <Image source={{ uri: item.uri}} style={ImgSize}/>
                                    )
                                })
                            }
                        {/* </View> */}
                        </ScrollView>
                    </View>
                    <View style={containerPicker}>
                        <View style={viewLable}>
                            <Text style={styleSheets.lable} >Gói ủng hộ</Text>
                        </View>
                        <View style={ContentDonate}>
                           {
                                listDonate.map((item,index) => {
                                    return (
                                        <View style={styleViewCreateDonate}>
                                            <View style={leftViewCreateDonate}>
                                                <View style={styleRowDonate}>
                                                    <View style={viewLable}>
                                                        <Text style={styleSheets.lable} >Tên gói</Text>
                                                    </View>
                                                    <InputPicker
                                                        placeholder={'...'}
                                                        onChangeText={(text) => this.setStateListDonade(text,index,'name')}
                                                        value={item.name}
                                                    />
                                                </View>
                                                <View style={styleRowDonate}>
                                                    <View style={viewLable}>
                                                        <Text style={styleSheets.lable} >Số tiền</Text>
                                                    </View>
                                                    <InputPicker
                                                        keyboardType={'numeric'}
                                                        placeholder={'...'}
                                                        onChangeText={(text) => this.setStateListDonade(text,index,'money')}
                                                        value={item.money}
                                                    />
                                                </View>
                                                <View style={styleRowDonate}>
                                                    <View style={viewLable}>
                                                        <Text style={styleSheets.lable} >Nội dung của gói</Text>
                                                    </View>
                                                    <InputPicker
                                                        placeholder={'...'}
                                                        onChangeText={(text) => this.setStateListDonade(text,index,'content')}
                                                        value={item.content}
                                                    />
                                                </View>
                                            </View>
                                            <TouchableOpacity style={rightViewCreateDonate} onPress={()=> this.removeTypeDonate(index)}>
                                                <IconDelete size={Size.iconSize} color={Colors.grey} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                           }
                            <TouchableOpacity style={bntCreateDonate} onPress={()=> this.addTypeDonate()}>
                                <Text style={[styleSheets.text,{color:Colors.white}]} >Thêm gói</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>

            </SafeAreaView>
        );
    }

}
const styles = StyleSheet.create({
    ContentDonate:{
        //height:150,
        flex:1,
        borderColor : Colors.grey,
        borderWidth :0.5,
        padding : styleSheets.p_15,
        borderRadius : styleSheets.radius_5,
    },
    
    styleViewCreateDonate:{
        width:'100%',
        minHeight : 60,
        borderColor : Colors.grey,
        borderWidth :0.5,
        padding : styleSheets.p_10,
        borderRadius : styleSheets.radius_5,
        flexDirection:'row',
        marginBottom : styleSheets.m_10
    },
    leftViewCreateDonate:{
        flex :1
    },
    rightViewCreateDonate:{
        marginLeft : styleSheets.m_5,
        justifyContent:'center',
        alignItems:'center'
    },
    bntCreateDonate:{
        height:35,
        backgroundColor: Colors.accent,
        justifyContent:'center',
        alignItems:'center',
        borderRadius : styleSheets.radius_5,
        marginTop : styleSheets.m_10
    },
    styleRowDonate:{
        marginBottom: styleSheets.m_5
    },
    viewLable: {
        // flex : 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: styleSheets.m_7
      },
    containerPicker: {
        //height: 100 ,
        width: Size.deviceWidth,
        padding: styleSheets.p_10,
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
    bntChoseImage:{
        backgroundColor : Colors.accent,
        height : 100,
        width: 100,
        justifyContent:'center',
        alignItems:'center',
        marginRight : styleSheets.m_10,
        borderRadius : styleSheets.radius_5
    },
    containerImage : {
        flex:1,
        flexDirection:'row',
        borderColor : Colors.grey,
        borderWidth :0.5,
        padding : styleSheets.p_10,
        borderRadius : styleSheets.radius_5
    },
    ImgSize:{
        height : 100,
        width: 100,
        marginRight : styleSheets.m_10,
        borderRadius : styleSheets.radius_5,
        resizeMode:'cover'
    }
});







