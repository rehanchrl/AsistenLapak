import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Footer,
  FooterTab,
  Button,
  Icon,
  View,
  Body,
  List,
  ListItem,
  Left,
  Right
} from "native-base";

import CustomFooter from "../common/Footer";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs androidStatusBarColor="#b4424b" style={{backgroundColor: '#dd5453'}}>
          <Body>
            <Title>Setting</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("SettingProfile")}
            >
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text>Profile</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
        <Button primary full style={{ margin: 10, backgroundColor:'#b4424b' }}>
          <Text> Logout </Text>
        </Button>
        <CustomFooter
          footer={{
            activeSettings: true,
            screenHome: () => this.props.navigation.navigate("FieldHome"),
            screenCart: () => this.props.navigation.navigate("FieldCart")
          }}
        />
      </Container>
    );
  }
}
