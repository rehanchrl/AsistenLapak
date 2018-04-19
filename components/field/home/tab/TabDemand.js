import React, { Component } from 'react';
import { Container, Content, Icon, Button, Text } from 'native-base';

import App from '../../../../App'
import CustomList from '../../../common/ReqAcquisition'

export default class TabDemand extends Component {
    state = {
        title: 'Toko 1'
    }
    
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <CustomList info={
                        {
                            title: this.state.title,
                            address: 'JL DI HOHO purwokerto',
                            pressed: this.props.nav.screen
                        }
                    } />
                    <Button onPress={() => this.navigation.navigate('FieldDetailToko')}>
                    <Text>hahaha</Text></Button>
                </Content>
            </Container>
        )
    }
}