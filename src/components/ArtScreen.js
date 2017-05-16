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
                <Animated.View style={{
                    backgroundColor: 'blue', justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 10,

                    borderRadius: 8,
                    position: 'relative',

                }}>
                    <Animated.Text style={{width: 200}}>{this.state.spin}</Animated.Text>

                    {/*<FireworkShooter/>*/}
                    <Animated.View style={{
                        backgroundColor: 'red',
                        width: 10,
                        height: 10,
                        borderRadius: 4,
                        transform: [{
                            rotate: spin1
                        }, {translateY: 10}]
                    }}/>
                </Animated.View>
            </Animated.View>
        )
    }
}
