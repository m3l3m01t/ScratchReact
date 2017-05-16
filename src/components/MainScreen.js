/**
 * Created by 34372 on 2017/5/10.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    ART,
    TouchableHighlight
} from 'react-native';

import Svg, {
    Circle,
    ClipPath,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    St,
    Stop
} from 'react-native-svg';

import * as d3 from "d3";

var {Shape, Surface, Group} = ART;

import {width as getWidth, height as getHeight} from 'react-native-dimension';

import {app_styles as styles} from '../styles/PrivateStyles';

export class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);
        /*
         if (!String.format) {
         String.format = function(format) {
         var args = Array.prototype.slice.call(arguments, 1);
         return format.replace(/{(\d+)}/g, function(match, number) {
         return typeof args[number] != 'undefined'
         ? args[number]
         : match
         ;
         });
         };
         }*/
    }

    getRect(w, h, radiusLT, radiusRT, radiusBL, radiusBR) {
        var pt = new d3.path();

        pt.rect(0, 0, w, h);

        // var rect = <Rect x="0" y="0" with = {w} height = {h}/>;
        var r = radiusLT;
        if (r > 0) {
            pt.moveTo(r, 0).arc(r, r, r, 90, 180, true);
        }
        r = radiusRT;
        if (r > 0) {
            pt.moveTo(w, r).arc(w-r, r, r, 0, 90, true);
        }

        r = radiusLB;
        if (r > 0) {
            pt.moveTo(0, h-r).arc(r, h-r, r, 180, 270, true);
        }

        r = radiusLB;
        if (r > 0) {
            pt.moveTo(0, h-r).arc(r, h-r, r, 180, 270, true);
        }

        r = radiusRB;
        if (r > 0) {
            pt.moveTo(w-r, h).arc(w-r, h-r, r, 270, 0, true);
        }

        return pt.toString();
    }

    render() {
        const {navigate} = this.props.navigation;
        const w = getWidth(100);
        const h = getHeight(50);
        const r = 10;
        const l = r;
        const rl = w - l - 25;
        const t = 5
        const h1 = 30;

        /*
         const path1 = new Path().moveTo(l, t + r).arc(l + r,t + r,r, Math.PI, Math.PI/2, false).lineTo(rl - r, t).arc(rl - r, t + r, r,Math.PI/2 , 0, false).lineTo(rl, h1-r)
         .arc(rl - r, h1 - r, r, 0, -Math.PI/2, false).lineTo(l + r, h1).arc(l + r, h1 - r, r, Math.PI/2 * 3, Math.PI, false).close();
         */
        const l1 = 40;
        const noseW = 8;
        const noseB = 5;
        const noseW2 = 10;


        const path1 = new ART.Path().moveTo(l, t + r)
        // .push("a" + r + " " + r + " 0 0 1 " + (r) + " " + (-r))
        // .push(String.format("a{0} {1} 0 0 1 {2} {3}",r, r, r, -r))
            .push(`a${r} ${r} 0 0 1 ${r} ${-r} h ${l1} l ${noseW} ${noseB} h ${noseW2} l ${noseW} ${-noseB} h ${rl - 3 * r - noseW * 2 - noseW2 - l1}`)

            .arc(r, r, r, r, 0, false, true)
            .line(0, h1 - r * 2)
            .arc(-r, r, r, r, 0, false, true)
            .lineTo(l + r + l1 + noseW * 2 + noseW2 + h1, t + h1)
            .push(`l ${-noseW} ${noseB} h ${-noseW2} l ${-noseW} ${-noseB} h ${-l1}`)
            .push(`a${r} ${r} 0 0 0 ${-r} ${r}`)
            .push(`v40`)
            .push(`a${r} ${r} 0 0 0 ${r} ${r}`)
            .push(`H${rl - r}`)
            .arc(r, r, r, r, 0, false, true)
            .push(`v ${h1 - 2 * r}`)
            .arc(-r, r, r, r, 0, false, true)
            .push(`H${l + r}`)
            .push(`a${r} ${r} 0 0 1 ${-r} ${-r}`)
            .close();

        return (
            <View style={styles.flex_vbox}>
                <View style={[styles.flex_vbox, {
                    alignItems: 'center', height: h, width: w,
                    transform: [{translateX: -45}, {translateY: 0}, {rotate: "30deg"}]
                }]}>
                    <Surface x="0" y="0" width={w} height={h}>
                        <Group>
                            <Shape x={0} y={0} d={path1} stroke="red" strokeWidth={2} fill="yellow"/>
                            <Shape x={h1} y={h1} d={path1} stroke="red" strokeWidth={2} fill="green"/>
                            {/*<Shape style={{x: 0, y: 0, d:path1, stroke: "gray", strokeWidth:2, fill:"red",}}/>*/}
                        </Group>
                        {/*<Shape d={path2} stroke="red" strokeWidth={2}/>*/}
                        {/*<Text strokeWidth={2} stroke="#000" path={path1}>Hello World!</Text>*/}
                        {/*<Rect x={l} y = {t} width={rl - l} height={h1} radius={r} />*/}
                    </Surface>

                </View>

                {/*<RNSVGRect/>*/}
                <Svg
                    height="100"
                    width="100"
                >
                    <Defs>
                        <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%"
                                        gradientUnits="userSpaceOnUse">
                            <Stop
                                offset="0%"
                                stopColor="#ff0"
                                stopOpacity="1"
                            />
                            <Stop
                                offset="100%"
                                stopColor="#00f"
                                stopOpacity="1"
                            />
                        </RadialGradient>

                        <ClipPath id="clip">
                            <G scale="0.9" x="10">
                                <Circle cx="30" cy="30" r="20"/>
                                <Ellipse cx="60" cy="70" rx="20" ry="10"/>
                                <Rect x="65" y="15" width="30" height="30"/>
                                <Polygon points="20,40 20,100 50,70"/>
                                <Text
                                    x="50"
                                    y="30"
                                    fontSize="32"
                                    fonWeight="bold"
                                    textAnchor="middle"
                                    scale="1.2"
                                >Q</Text>
                            </G>
                        </ClipPath>
                    </Defs>
                    <Rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        fill="url(#grad)"
                        clipPath="url(#clip)"
                    />
                </Svg>

                <Button
                    title="Go to Web Service"
                    onPress={() =>
                        navigate('WebService', {a: 1, b: 2})
                    }
                />
            </View>
        )
    }
}
