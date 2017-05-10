'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Navigator,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import {
    // StackNavigator,
    TabNavigator
} from 'react-navigation';

import {MainScreen} from './src/components/MainScreen';
import {WebServiceScreen} from './src/components/WebService';
import {ArtScreen} from './src/components/ArtScreen';

const ScratchReact = TabNavigator ({
    Main: {screen: MainScreen},
    WebService: {screen: WebServiceScreen},
    ArtService: {screen: ArtScreen}
});

AppRegistry.registerComponent('ScratchReact', () => ScratchReact);
