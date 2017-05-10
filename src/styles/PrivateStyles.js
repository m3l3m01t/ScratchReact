/**
 * Created by 34372 on 2017/5/10.
 */
import React from 'react';
import {StyleSheet} from 'react-native';

export var app_styles = StyleSheet.create({
    description: {
        fontSize: 14,
        textAlign: 'left',
        color: '#656565'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    flowRight: {
        fontSize: 14,
        textAlign: 'right',
        color: '#88888888'
    },

    flex_vbox: {
        padding: 2,
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },

    vbox: {
        padding: 2,
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'flex-start'
    },
    hbox: {
        padding: 2,
        marginLeft: 2,
        marginRight: 2,
        // flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    vector: {
        width: 100,
        height: 100
    },
});