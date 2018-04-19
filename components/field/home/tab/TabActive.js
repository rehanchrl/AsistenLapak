import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';

import CustomList from '../../../common/List'

export default class TabActive extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <CustomList list={
                        {
                            title: 'Toko 1 process',
                            address: 'JL DI HOHO purwokerto'
                        }
                    } />

                </Content>

                <Fab onPress={() => alert('fabpressed')}>
                    <Icon name="add" />
                </Fab>

            </Container>
        )
    }
}