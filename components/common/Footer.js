import React, { Component } from 'react';
import {View, Footer, FooterTab, Button, Icon} from 'native-base'


export default class CustomFooter extends Component{
    render(){
        return(
            <View>
                <Footer>
                    <FooterTab>
                        <Button active={this.props.footer.activeHome} onPress={this.props.footer.screenHome}>
                            <Icon name="home" />
                        </Button>
                        <Button active={this.props.footer.activeCart} onPress={this.props.footer.screenCart}>
                            <Icon name="cart" />
                        </Button>
                        <Button active={this.props.footer.activeSettings} onPress={this.props.footer.screenSettings}>
                            <Icon active name="settings" />
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}