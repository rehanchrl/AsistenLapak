import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Body, SwipeRow, Button, Icon } from 'native-base';

export default class CustomCard extends Component {
    render() {
        return (
            <View>
                <Card>
                    <CardItem button={true} onPress={this.props.card.onpress}>
                        <Body>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Image style={{ width: 50, height: 50 }}
                                        source={require('../images/logo.png')}
                                    />
                                </View>
                                <View style={{ flex: 3 }}>
                                    <Text style={styles.cardHeader}>{this.props.card.title}</Text>
                                    <Text style={styles.cardContent}>{this.props.card.address}</Text>
                                    {this.props.card.asistent !== undefined ? <Text style={styles.cardDate}>Asisten Lapangan : {this.props.card.asistent}</Text> : null}                                    
                                    {this.props.card.date !== undefined ? <Text style={styles.cardDate}>{this.props.card.date}</Text> : null}
                                </View>
                                
                                <View style={{flex:1}}>
                                    <Text style={{marginTop:5}}>{this.props.card.time}</Text>
                                    <Text style={{marginTop:5}}>{this.props.card.sender}</Text>
                                </View>
                            
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardHeader: {
        fontSize: 20,
        marginBottom: 5,
        color: '#0c0c0c'
    },
    cardContent: {
        color: '#424242'
    },
    cardDate: {
        marginTop: 5
    }
})