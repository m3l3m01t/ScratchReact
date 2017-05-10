/**
 * Created by 34372 on 2017/5/10.
 */
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
    TouchableHighlight
} from 'react-native';

import {app_styles as styles} from '../styles/PrivateStyles';
// import {VectorWidget} from './VectorWidget';
import {FireworkShooter} from './VectorWidget';

export class ArtScreen extends React.Component {
    static navigationOptions = {
        title: 'Art',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.hbox}>
                    <FireworkShooter/>
            </View>
        )
    }
}
