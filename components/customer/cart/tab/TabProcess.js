import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';

import CustomList from '../../../common/List'

export default class TabProcess extends Component {

    state = {
        stores: [
            {
                title: 'Toko 1',
                address: 'JL DI HOHO purwokerto',
                date: '11 Januari 2000',
                time : '08.00',
                sender : 'JNE',
                onpress: {
                    view:()=>alert('view'),
                    edit:()=>alert('edit'),
                    delete:()=>alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                time : '08.00',
                date: '11 Januari 2000',
                sender : 'JNE',
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
                <Content>

                   {this.state.stores.map((stores,index)=>{
                        return(
                            <CustomList key={index} list={stores} />
                        )
                    })}

                </Content>

                <Fab onPress={() => alert('fabpressed')}>
                    <Icon name="add" />
                </Fab>

            </Container>
        )
    }
}