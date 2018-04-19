import React, { Component } from 'react';
import { Container, Content} from 'native-base';

import CustomList from '../../../common/List'

export default class TabFailed extends Component {

    state = {
        stores: [
            {
                title: 'Toko 1',
                address: 'JL DI HOHO purwokerto',
                date: '11 Januari 2000',
                sender : 'JNE',
                time : '08.00',
                onpress: {
                    view:()=>alert('view'),
                    edit:()=>alert('edit'),
                    delete:()=>alert('delete')
                }
            },
            {
                title: 'Toko 2',
                address: 'JL Kenangan Bandung',
                date: '11 Januari 2000',
                time : '08.00',
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
                <Content style={{margin:10}}>

                    {this.state.stores.map((stores,index)=>{
                        return(
                            <CustomList key={index} list={stores} />
                        )
                    })}

                </Content>
            </Container>
        )
    }
}