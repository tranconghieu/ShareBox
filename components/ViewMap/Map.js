import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styleSheets, Size, Colors } from '../../constants/styleConfig';
import MapView, {
    PROVIDER_GOOGLE,
    Circle,
    Callout,
    Marker,
    LocalTile
  } from 'react-native-maps';
export default class MapViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelay : true
        };
        this.Marker = null;
    }
    getResMarker = ()=>{
        return this.Marker;
    }
    showCallout =()=>{
        this.Marker.showCallout();
    }
    componentDidMount() {
        // if(this.props.address != ''){
        //     setTimeout(() => {
        //         this.Marker.showCallout();
                
        //     }, 800);
        // }
        setTimeout(()=>{
            this.setState({isDelay : false})
        }, 300)
    }
    render() {
        const {coordinate,address} = this.props;
        
        return (
            this.state.isDelay == false && (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 , opacity: 0.3 }}
                initialRegion={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    latitudeDelta: 15,
                    longitudeDelta: 8,
                }}
            >
                {/* <Circle center={coordinate}
                    radius={200}
                    fillColor={Colors.lightAccent}
                />

                <Marker coordinate={coordinate}
                    ref={ref => this.Marker = ref}
                >
                    <Callout
                        tooltip={Platform.OS == 'ios' ? true : false}
                        style={
                            {
                                width: Size.deviceWidth - 70,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 20,
                                backgroundColor: '#fff',
                                borderWidth: 1,
                                borderColor: '#6666',
                            }}
                    >
                        <Text style={styleSheets.text}>{address}</Text>
                    </Callout>
                </Marker> */}


            </MapView>
            )
        );
    }
}


