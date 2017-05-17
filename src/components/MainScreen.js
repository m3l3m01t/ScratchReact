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

    rect(x, y, w, h, radiusTL, radiusTR, radiusBL, radiusBR) {
        var d = `M ${x} ${y} m ${radiusTL} 0 h ${w - radiusTR - radiusTL} `;

        if (radiusTR > 0) {
            d += `a ${radiusTR} ${radiusTR} 0 0 1 ${radiusTR} ${radiusTR} `;
        }
        d += `v ${h - radiusTR - radiusBR} `;

        if (radiusBR > 0) {
            d = d + `a ${radiusBR} ${radiusBR} 0 0 1 ${-radiusBR} ${radiusBR} `;
        }
        d += `H ${x + radiusBL} `;

        if (radiusBL > 0) {
            d += `a ${radiusBL} ${radiusBL} 0 0 1 ${-radiusBL} ${-radiusBL} `;
        }
        d += `V ${y + radiusTL} `;

        if (radiusTL > 0) {
            d += `a ${radiusTL} ${radiusTL} 0 0 1 ${radiusTL} ${-radiusTL} `;
        }
        d += ' Z';

        return d;
    }

    render() {
        const {navigate} = this.props.navigation;
        const w = getWidth(50);
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


        const d = this.rect(0, 0, w, h / 2, r, r, r, r);
        const d1 = this.rect(20, 20, w - 20, h / 2 - 40, r, 0, r, 0);

        return (
            <View style={[styles.flex_vbox, {transform: [{translateX: 0}, {translateY: 0}]}]}>

                <Svg width={w} height={h}>
                    <Defs>
                        <G id="nose">
                            <Polygon points="0,0 80,0 60,15 20,15" fill="#008888" strokeWidth="0"/>
                        </G>

                        <ClipPath id="clip2">
                            <Path d={d} fill="#888888"/>
                            <Polygon points="0,0 80,0 60,15 20,15 0,0" fill="#550000"/>
                        </ClipPath>
                        <G id="block1">
                            <G>
                                {/*<Rect x="0" y="0" width={w} height={h}/>*/}
                                <G>
                                    <Path d={d} fill="#880088" strokeWidth="0"/>
                                    <Path d={d1} fill="#880088" strokeWidth="0"/>
                                </G>

                                {/*                                <G>
                                 <Use href="#nose" x="40" scale="0.4"/>
                                 </G>*/}
                                {/*<Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="red" fill="red" x="0" y="0"/>*/}
                                <Use href="#nose" x="60" y="20" scale="0.4"/>
                            </G>
                        </G>
                        <ClipPath id="clip">
                            <Polygon points="40,0 72,0 64,6 48,6" fill="#550000" strokeWidth="0"/>

                            {/*<G scale="1">*/}
                                <Path d={d} fill="#888888" strokeWidth="0"/>
                                <Path d={d1} fill="#777777" strokeWidth="0"/>
                            {/*</G>*/}
                        </ClipPath>
                    </Defs>

                    {/*<G rotate="0" origin="10,10" scale="1">*/}
                    {/*<Use href="#block1"/>*/}
                    {/*</G>*/}
                    <G >
                        <Rect width="100%" height="100%" clipPath="url(#clip)" clipRule="evenodd" fill="#008888"/>
                        <Use href="#nose" x="60" y="20" scale="0.4"/>
                    </G>
                </Svg>

            </View>
        );

        // const path1 = new ART.Path().moveTo(l, t + r)
        //     .push(`a${r} ${r} 0 0 1 ${r} ${-r} h ${l1} l ${noseW} ${noseB} h ${noseW2} l ${noseW} ${-noseB} h ${rl - 3 * r - noseW * 2 - noseW2 - l1}`)
        //     .arc(r, r, r, r, 0, false, true)
        //     .line(0, h1 - r * 2)
        //     .arc(-r, r, r, r, 0, false, true)
        //     .lineTo(l + r + l1 + noseW * 2 + noseW2 + h1, t + h1)
        //     .push(`l ${-noseW} ${noseB} h ${-noseW2} l ${-noseW} ${-noseB} h ${-l1}`)
        //     .push(`a${r} ${r} 0 0 0 ${-r} ${r}`)
        //     .push(`v40`)
        //     .push(`a${r} ${r} 0 0 0 ${r} ${r}`)
        //     .push(`H${rl - r}`)
        //     .arc(r, r, r, r, 0, false, true)
        //     .push(`v ${h1 - 2 * r}`)
        //     .arc(-r, r, r, r, 0, false, true)
        //     .push(`H${l + r}`)
        //     .push(`a${r} ${r} 0 0 1 ${-r} ${-r}`)
        //     .close();
        // return (
        //     <View style={styles.flex_vbox}>
        //         <View style={[styles.flex_vbox, {
        //             alignItems: 'center', height: h, width: w,
        //             transform: [{translateX: -45}, {translateY: 0}, {rotate: "30deg"}]
        //         }]}>
        //             <Surface x="0" y="0" width={w} height={h}>
        //                 <Group>
        //                     <Shape x={0} y={0} d={path1} stroke="red" strokeWidth={2} fill="yellow"/>
        //                     <Shape x={h1} y={h1} d={path1} stroke="red" strokeWidth={2} fill="green"/>
        //                     {/*<Shape style={{x: 0, y: 0, d:path1, stroke: "gray", strokeWidth:2, fill:"red",}}/>*/}
        //                 </Group>
        //                 {/*<Shape d={path2} stroke="red" strokeWidth={2}/>*/}
        //                 {/*<Text strokeWidth={2} stroke="#000" path={path1}>Hello World!</Text>*/}
        //                 {/*<Rect x={l} y = {t} width={rl - l} height={h1} radius={r} />*/}
        //             </Surface>
        //
        //         </View>
        //
        //         {/*<RNSVGRect/>*/}
        //         <Svg
        //             height="100"
        //             width="100"
        //         >
        //             <Defs>
        //                 <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%"
        //                                 gradientUnits="userSpaceOnUse">
        //                     <Stop
        //                         offset="0%"
        //                         stopColor="#ff0"
        //                         stopOpacity="1"
        //                     />
        //                     <Stop
        //                         offset="100%"
        //                         stopColor="#00f"
        //                         stopOpacity="1"
        //                     />
        //                 </RadialGradient>
        //
        //                 <ClipPath id="clip">
        //                     <G scale="0.9" x="10">
        //                         <Circle cx="30" cy="30" r="20"/>
        //                         <Ellipse cx="60" cy="70" rx="20" ry="10"/>
        //                         <Rect x="65" y="15" width="30" height="30"/>
        //                         <Polygon points="20,40 20,100 50,70"/>
        //                         <Text
        //                             x="50"
        //                             y="30"
        //                             fontSize="32"
        //                             fonWeight="bold"
        //                             textAnchor="middle"
        //                             scale="1.2"
        //                         >Q</Text>
        //                     </G>
        //                 </ClipPath>
        //             </Defs>
        //             <Rect
        //                 x="0"
        //                 y="0"
        //                 width="100"
        //                 height="100"
        //                 fill="url(#grad)"
        //                 clipPath="url(#clip)"
        //             />
        //         </Svg>
        //
        //         <Button
        //             title="Go to Web Service"
        //             onPress={() =>
        //                 navigate('WebService', {a: 1, b: 2})
        //             }
        //         />
        //     </View>
        // )
    }
}
