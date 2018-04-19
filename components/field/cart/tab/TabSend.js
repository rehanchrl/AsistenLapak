import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Content, Header, SwipeRow, View, Icon, Button } from 'native-base'

import CustomList from '../../../common/List'

export default class TabSend extends Component {
    render() {
        return (
            <Container>
                <Content scrollEnabled={false}>

                    <Text style={styles.deadline}>Batas Akhir, 21 Maret 2018</Text>

                    <CustomList list = {
                        {
                            title: 'Toko 13',
                            address: 'JL DI HOHO purwokerto',
                            date: '11 Januari 2000',
                            time: '12.00',
                            sender: 'JNE',
                            onpress: {
                                view:()=>alert('view'),
                                edit:()=>alert('edit'),
                                delete:()=>alert('delete')
                            }
                        }
                    } />

                    <CustomList list = {
                        {
                            title: 'Toko 14',
                            address: 'JL DI HOHO purwokerto',
                            date: '11 Januari 2000',
                            time: '12.00',
                            sender: 'JNE',
                            onpress: {
                                view:()=>alert('view'),
                                edit:()=>alert('edit'),
                                delete:()=>alert('delete')
                            }
                        }
                    } />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    deadline: {
        textAlign: 'center',
        padding: 5,
        color: 'black',
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 5,
        marginBottom: 5
    }
})