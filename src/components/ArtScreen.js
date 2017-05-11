/**
 * Created by 34372 on 2017/5/10.
 */
import React from "react";
import {Animated, Easing} from "react-native";

import {app_styles as styles} from "../styles/PrivateStyles";
// import {VectorWidget} from './VectorWidget';
import {FireworkShooter} from "./VectorWidget";

export class ArtScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rotate: new Animated.Value(0), spin: 0};
    }

    static navigationOptions = {
        title: 'Art',
    };

    triggerAnim(angle) {
        Animated.timing(this.state.rotate, {
            duration: 5000,
            toValue: angle,
            easing: Easing.linear,
        }).start();
    };

    componentDidMount() {
        this.state.rotate.addListener(({value}) => {
            this.setState({spin: value});
            if (value > 300) {
                this.triggerAnim(0);
            } else if (value == 0) {
                this.triggerAnim(360);
            }
        });

        this.triggerAnim(360);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }
    render() {
        const { navigate } = this.props.navigation;

        var spin = this.state.rotate.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '180deg']
        });

        var spin1 = this.state.rotate.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });

        return (
            <Animated.View style={[styles.flex_vbox, {
                alignItems: 'center',
                transform: [{
                    rotate: spin
                }]
            }]}>
                <Animated.Text>{this.state.spin}</Animated.Text>
                <Animated.View style={{
                    backgroundColor: 'blue', justifyContent: 'center',
                    alignItems: 'center',

                    width: 360,
                    height: 240,
                    borderRadius: 13,
                    position: 'relative',

                }}>
                    <FireworkShooter/>
                    <Animated.View style={{
                        backgroundColor: 'red',
                        width: 240,
                        height: 120,
                        borderRadius: 13,
                        transform: [{
                            rotate: spin1
                        }, {translateY: 120}]
                    }}/>
                </Animated.View>
            </Animated.View>
        )
    }
}
