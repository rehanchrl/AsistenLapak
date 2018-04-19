import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Tab,
  Tabs,
  Text,
  Footer,
  FooterTab,
  Button,
  Icon,
  View,
  list,
  listItem,
  Body
} from "native-base";

import { TabActive, TabDemand } from "./tab/Main";
import CustomFooter from "../../common/Footer";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>

        <Tabs initialPage={0}>
          <Tab heading="Aktif">
            <TabActive />
          </Tab>
          <Tab heading="Permintaan Akuisisi">
            <TabDemand
              nav={{
                screen: () => this.props.navigation.navigate("FieldDetailToko", {item: 'blablabla'})
              }}
            />
          </Tab>
        </Tabs>

        <CustomFooter
          footer={{
            activeHome: true,
            screenCart: () => this.props.navigation.navigate("FieldCart"),
            screenSettings: () =>
              this.props.navigation.navigate("FieldSettings")
          }}
        />
      </Container>
    );
  }
}
