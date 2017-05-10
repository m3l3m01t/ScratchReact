/**
 * Created by 34372 on 2017/5/10.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Navigator,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import Svg, {
    Circle,
    Path,
    Rect
} from 'react-native-svg';

import {app_styles as styles} from '../styles/PrivateStyles';

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.flex_vbox}>
                <Button
                    title="Go to Web Service"
                    onPress={() =>
                        navigate('WebService', { a: 1, b: 2 })
                    }
                />
                <View style={styles.hbox}>
                    <Svg
                        height="100"
                        width="100"
                    >
                        <Rect x="0" y="0" width="100" height="100" fill="black" />
                        <Circle cx="50" cy="50" r="30" fill="yellow" />
                        <Circle cx="40" cy="40" r="4" fill="black" />
                        <Circle cx="60" cy="40" r="4" fill="black" />
                        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
                    </Svg>
                </View>
            </View>
        )
    }
}
