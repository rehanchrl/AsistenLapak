import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Text, Button, Icon, View, Card, CardItem, Body, Fab } from 'native-base';

import CustomFooter from '../../common/Footer'
import CustomList from '../../common/List'

export default class Main extends Component {

    state = {
        stores: [
            {
                title: 'Toko 1',
                address: 'JL DI HOHO purwokerto',
                asistent: 'Sumanto',
                onpress: {
                    view:()=>alert('view'),
                    edit:()=>alert('edit'),
                    delete:()=>alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                asistent: 'Jondes',
                onpress: {
                    view:()=>alert('view'),
                    edit:()=>alert('edit'),
                    delete:()=>alert('delete')
                }
            }
        ]
    }

    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Body>
                        <Title>Lapak Saya</Title>
                    </Body>
                </Header>

                <Content>

                    {this.state.stores.map((stores,index)=>{
                        return(
                            <CustomList key={index} list={stores} />
                        )
                    })}

                </Content>

                <Fab style={{ bottom: 60 }}
                    onPress={() => alert('fabpressed')}>
                    <Icon name="add" />
                </Fab>

                <CustomFooter footer={
                    {
                        activeHome: true,
                        screenCart: () => this.props.navigation.navigate('CustomerCart'),
                        screenSettings: () => this.props.navigation.navigate('CustomerSettings'),
                    }
                } />

            </Container>
        )
    }
}