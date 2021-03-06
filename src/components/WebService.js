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
import {app_styles as styles} from '../styles/PrivateStyles';

var DOMParser = require('react-native-html-parser').DOMParser;

var builder = require('xmlbuilder');
var xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', {'type': 'git', 'name': 'jiff'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
    .end({ pretty: true});

console.log(xml);

export class WebServiceScreen extends React.Component {
    static navigationOptions = {
        title: 'Web Service',
    };

    constructor (props) {
        super(props);

        this.state = {'search': 'Chocolates',
            'ws': {'a':'1', 'b':'2'},
            'result': "invalid"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSum = this.handleSum.bind(this);
    }

    handleChange(val) {
        this.state.search = val;
        alert("handle Change" + val);
        // this.setState({value: event.target.value});
    }

    handleSearch(event) {
        alert('A name was submitted: ' + this.state.search + ' args: ' + event);
        event.preventDefault();
    }

    handleSum(event) {
        var url = 'http://192.168.1.2/ws/Service.asmx';
        var ns = url;
        var action = 'Sum';
        var doc = new DOMParser().parseFromString(
            '<?xml version="1.0" encoding="utf-8"?>'
            +  '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
            +   'xmlns:xsd="http://www.w3.org/2001/XMLSchema" '
            +   'xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">'
            +  '<soap12:Body/>'
            +  '</soap12:Envelope>');

        var body = doc.documentElement.firstChild;

        var elem = doc.createElement(action);
        elem.setAttribute('xmlns', ns);
        var arg1 = doc.createElement('a');
        arg1.appendChild(doc.createTextNode(this.state.ws.a));

        var arg2 = doc.createElement('b');
        arg2.appendChild(doc.createTextNode(this.state.ws.b));
        elem.appendChild(arg1);
        elem.appendChild(arg2);

        body.appendChild(elem);

        fetch('http://192.168.1.2/ws/Service.asmx', {
            method: 'POST', mode: 'no-cors',
            headers: {'Accept':'application/soap+xml; charset=utf-8', 'Content-Type': 'application/soap+xml; charset=utf-8'},

            body: doc.toString()
        }).
        then((response) => {
            if (!response.ok && response.status != 500)
                throw (response);
            else
                return response.text();
        }).then((responseText) => {

            var parser = new DOMParser();

            var doc = parser.parseFromString(responseText,"text/xml").documentElement;

            this.setState({result: doc.textContent});}
        ).catch((error) => {
            this.setState({result: error.stack});
        }).done();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.flex_vbox}>
                <Button
                    title="Go to Jane's profile" onPress={() =>
                    navigate('Main', { name: 'Jane' })
                }
                />
                <View style={styles.vbox}>

                    <View style={styles.vbox}>
                        <View style={styles.hbox}>
                            <Text style={styles.description}>A:</Text>
                            <TextInput  style={{flex: 1}} editable={true} onChangeText={(text) => this.state.ws.a=text}/>
                        </View>
                        <View style={styles.hbox}>
                            <Text style={styles.description}>B:</Text>
                            <TextInput style={{flex: 1}} editable={true} onChangeText={(text) => this.state.ws.b=text}/>
                        </View>
                        <Button
                            onPress={this.handleSum}
                            title='Sum'
                            color="#841584"
                            accessibilityLabel="Calculate Sum"/>
                        <Text>{this.state.result}</Text>
                    </View>
                    <View style={styles.vbox}>
                        <Text style={styles.description}>Search for:</Text>
                        <TextInput editable={true}  defaultValue={this.state.search}
                                   onChangeText={(text) => this.state.search=text}/>
                        <Button
                            onPress={this.handleSearch}
                            title='Go'
                            color="#841584"
                            accessibilityLabel="Search on Web"/>
                    </View>
                </View>
            </View>
        )
    }
}