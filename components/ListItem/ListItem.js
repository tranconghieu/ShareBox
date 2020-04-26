
import React, { Component } from 'react';
import {
    View, Text, StyleSheet, FlatList,
    RefreshControl, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import { Colors, Size, styleSheets, } from '../../constants/styleConfig';
// import {
//     IconListRow,
//     IconListColumn
// } from '../../constants/Icons';    
import RenderItemColumn from './RenderItemColumn';
import Loading from '../Loading/Loading';
import GeneralFunction from '../../utils/GeneralFunction';
import EmptyData from '../EmptyData/EmptyData';
import HttpService from '../../utils/HttpService';


const heightActionBottom = 45;
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSelected: [],
            refreshing: false,
            isLoading: true,
            stateProps: props,
            dataSource: [],
            totalRow: 0,
            //pageSize: 20,
            page: 1,
            footerLoading: false,
            isOpenAction: false,
            messageEmptyData: 'EmptyData',
            typeItem: 'E_ROW',
        };
        this.callOnEndReached = false;
        this.oldIndexOpenSwipeOut = null;
        this.listItemOpenSwipeOut = [];
        this.pageSize = (!GeneralFunction.CheckIsNullOrEmpty(this.props.api.pageSize) && typeof this.props.api.pageSize == "number") ? this.props.api.pageSize : 20;

    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 15,
                    width: "auto",
                    backgroundColor: Colors.borderColor,
                    //marginHorizontal: styleSheets.p_10
                }}
            />
        );
    };
    remoteData = () => {
        const { api, headerConfig } = this.state.stateProps;
        const { dataSource, page } = this.state;
        // api.dataBody = Object.assign(api.dataBody, { "pageSize": this.pageSize, page: page })
        // console.log(api);
        HttpService.Get(api.urlApi)
        .then((res) => {
            console.log(res,'res');
            if(page == 1){
                this.setState({
                    dataSource: res,
                    //totalRow: res.total,
                    isLoading: false,
                    refreshing: false,
                    footerLoading: false
                })
            }
            else{
                this.setState({
                    dataSource: [...dataSource, ...res],
                    //totalRow: res.total,
                    isLoading: false,
                    refreshing: false,
                    footerLoading: false
                })
            }

           

        })
        .catch(error => {
            //ToasterSevice.showError("HRM_Common_SendRequest_Error", 4000);
            this.setState({ isLoading: false, messageEmptyData: 'Không có dữ liệu' });
            //console.log(error);
        })
    }
    componentDidMount() {
        this.remoteData();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                dataSource: [],
                itemSelected: [],
                stateProps: nextProps,
                page: 1,
                isOpenAction: false,
                isLoading: true
            }, () => this.remoteData());
        }
    }

    _handleRefresh = () => {
        (!this.state.isOpenAction) && this.setState({ refreshing: true, page: 1 }, this.remoteData);
    }
    _handleEndRefresh = async () => {
        if (this.state.isOpenAction) {
            return false
        }
        let { totalRow, page } = this.state;
        let PageTotal = Math.ceil(totalRow / this.pageSize);
        if (page <= PageTotal) {
            this.setState({ page: page + 1, footerLoading: true }, this.remoteData);
        }
        else {
            return null
        }
    }
    _renderLoading = () => {
        return (
            <View style={{ flex: 1, paddingVertical: styleSheets.p_10 }}>
                <Loading
                    size="large" isVisible={this.state.footerLoading}
                />
            </View>
        );
    }
    
    changeTypeItem = (type) => {
        this.setState({ typeItem: type });
    }
    moveToDetail = (item) => {
        const { navigation} = this.state.stateProps;
        console.log(navigation);
        // if (!GeneralFunction.CheckIsNullOrEmpty(rowTouch) && typeof rowTouch == "function") {
        //     rowTouch();
        // }
        // else {
        //     navigation.navigate(detail.screenDetail, { dataItem: item, screenName: detail.screenName });
        // }
    }
    
    render() {
        const {
            dataSource, stateProps, isLoading, refreshing, isOpenAction, itemSelected, messageEmptyData,
            typeItem
        } = this.state;
        const valueField = (!GeneralFunction.CheckIsNullOrEmpty(stateProps.valueField) ? stateProps.valueField : "ID");
        return (
            <View style={[{flex:1}, (isOpenAction == true) && { paddingBottom: heightActionBottom }]}>
               
                {(isLoading) ? (
                    <Loading size="large" isVisible={isLoading} />
                ) : (
                        dataSource.length == 0 ? (
                            <EmptyData messageEmptyData={messageEmptyData} />
                        ) :
                            (
                                <FlatList
                                    ItemSeparatorComponent={this.renderSeparator}
                                    key={typeItem}
                                    //numColumns={numberColumn}
                                    disableScrollViewPanResponder={true} // fix bug khong the click onPess sau khi pulltoRefresh
                                    data={dataSource}
                                    extraData={this.state}
                                    ListFooterComponent={this._renderLoading}
                                    renderItem={
                                        ({ item, index }) => (
                                            <View style={[{ flex: 1, flexDirection: "row", backgroundColor: Colors.white },
                                            ]}>
                                                {/* <TouchableOpacity
                                                    onPress={() => { this.moveToDetail(item) }}
                                                > */}
                                                    <View style={{ flex: 1 }}>
                                                        <RenderItemColumn
                                                            navigation={stateProps.navigation}
                                                            index={index}
                                                            dataItem={item}
                                                        />
                                                    </View>
                                                {/* </TouchableOpacity> */}
                                            </View>)
                                    }
                                    keyExtractor={item => item[valueField]}
                                    refreshControl={
                                        <RefreshControl
                                            onRefresh={() => this._handleRefresh()}
                                            refreshing={refreshing}
                                            size="large"
                                            tintColor={Colors.accent}
                                        />
                                    }
                                    onMomentumScrollEnd={() => {
                                        this.callOnEndReached && this._handleEndRefresh()
                                        this.callOnEndReached = false
                                    }}
                                    onEndReached={(aa) => {
                                        this.callOnEndReached = true
                                    }} // refresh khi scroll den cuoi
                                    onEndReachedThreshold={0.1} // khoan cach tinh tu vi tri cuoi ds , se goi onEndReached
                                ></FlatList>
                            )
                    )}
            </View>
        );
    }

}
