/**
 * Created by jiff.shen on 2017/05/11.
 */
import React from 'react';
import ReactNative, {StyleSheet, ART, Animated, View} from 'react-native';

var {Shape, Surface, Path, Rect, Circle, Text} = ART;

export default class Block extends React.Component {
    blockStyle = BlockStyle.hbox;

    constructor(props) {
        super(props)

        this.state = {
            ...this.state,
            name: 'block',
            children: [],
            input: undefined,
            output: undefined,
            orientation: 'horizontal',
            bulge: {},
            pit: {}
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const w = getWidth(100);
        const h = getHeight(50);
        const r = 10;
        const l = r;
        const rl = w - l;
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


        const path1 = new Path().moveTo(l, t + r)
        // .push("a" + r + " " + r + " 0 0 1 " + (r) + " " + (-r))
        // .push(String.format("a{0} {1} 0 0 1 {2} {3}",r, r, r, -r))
            .push(`a${r} ${r} 0 0 1 ${r} ${-r} h ${l1} l ${noseW} ${noseB} h ${noseW2} l ${noseW} ${-noseB} h ${w - 4 * r - noseW * 2 - noseW2 - l1}`)

            .arc(r, r, r, r, 0, false, true)
            .line(0, h1 - r * 2)
            .arc(-r, r, r, r, 0, false, true)
            .lineTo(l + r + l1 + noseW * 2 + noseW2 + h1, t + h1)
            .push(`l ${-noseW} ${noseB} h ${-noseW2} l ${-noseW} ${-noseB} h ${-l1}`)
            .push(`a${r} ${r} 0 0 0 ${-r} ${r}`)
            .push(`v40`)
            .push(`a${r} ${r} 0 0 0 ${r} ${r}`)
            .push(`h${rl - h1 - r * 3}`)
            .arc(r, r, r, r, 0, false, true)
            .line(0, h1 - r * 2)
            .arc(-r, r, r, r, 0, false, true)
            .push(`h${-rl + 3 * r}`)
            .push(`a${r} ${r} 0 0 1 ${-r} ${-r}`)
            .close();

        return (
            <View style={styles.flex_vbox}>
                <View style={[styles.flex_vbox, {alignItems: 'center', height: h, width: w}]}>
                    <Surface width={w} height={h}>
                        <Shape d={path1} stroke="red" strokeWidth={2} fill="yellow"/>
                        {/*<Shape d={path2} stroke="red" strokeWidth={2}/>*/}
                        <Text strokeWidth={2} stroke="#000" path={path1}>Hello World!</Text>
                        {/*<Rect x={l} y = {t} width={rl - l} height={h1} radius={r} />*/}
                    </Surface>
                </View>
                <Button
                    title="Go to Web Service"
                    onPress={() =>
                        navigate('WebService', {a: 1, b: 2})
                    }
                />
            </View>
        );
    }
}

export var BlockStyle = StyleSheet.create({
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
        alignItems: 'stretch',
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
    }
});