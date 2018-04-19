import React, { Component } from 'react';
import { Container, Content} from 'native-base';

import CustomList from '../../../common/List'

export default class TabProcess extends Component {
    render() {
        return (
            <Container>
                <Content style={{ margin: 10 }}>

                    <CustomList list = {
                        {
                            title: 'Toko 1d3',
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
                            title: 'Toko 13dd',
                            address: 'JL DI HOHO purwokerto',
                            date: '11 Januari 2000',
                            time: '12.00',
                            sender: 'JNE',
                            onpress: {
                                view:this.props.nav.screen,
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