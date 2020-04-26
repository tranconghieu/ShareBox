
import React, { Component } from 'react';
import { Colors, Size, styleSheets } from './styleConfig';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class IconSquare extends Component {
    render() {
        const { color ,size } = this.props;
        return (
            <MaterialIcons
                name={'crop-square'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconCheck extends Component {
    render() {
        const { color ,size } = this.props;
        return (
            <IconAntDesign
                name={'checksquareo'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconSend extends Component {
    render() {
        const { color ,size } = this.props;
        return (
            <IconFeather
                name={'send'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconBack extends Component {
    render() {
        const { color ,size } = this.props;
        return (
            <IconEntypo
                name={'chevron-left'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconNext extends Component {
    render() {
        const { color ,size } = this.props;
        return (
            <IconEntypo
                name={'chevron-right'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconCreate extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'plus'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconTime extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <MaterialIcons
                name={'access-time'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconRefresh extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <SimpleLineIcons
                name={'refresh'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconMap extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <MaterialCommunityIcons
                name={'map-marker-outline'}
                size={size}
                color={color}
            />
        );
    }
}

export class IconMore extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconFeather
                name={'more-vertical'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconSearch extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'search1'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconLike extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'like2'}
                size={size}
                color={color}
            />
        );
    }
}

export class IconComment extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <MaterialCommunityIcons
                name={'comment-outline'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconDate extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <MaterialIcons
                name={'date-range'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconTags extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconEntypo
                name={'price-tag'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconSetting extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'setting'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconHome extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'home'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconBook extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconEntypo
                name={'open-book'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconShare extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconFeather
                name={'share-2'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconDelete extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'delete'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconGmail extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <MaterialCommunityIcons
                name={'gmail'}
                size={size}
                color={color}
            />
        );
    }
}
export class IconPhone extends Component {
    render() {
        const { color,size } = this.props;
        return (
            <IconAntDesign
                name={'phone'}
                size={size}
                color={color}
            />
        );
    }
}
