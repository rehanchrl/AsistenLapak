import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  TabHeading,
  Header,
  Title,
  Content,
  Badge,
  Tab,
  Tabs,
  ScrollableTab,
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

import { TabSend, TabProcess, TabFailed, TabSuccess } from "./tab/Main";
import CustomFooter from "../../common/Footer";

export default class Main extends Component {
  state = {
    notification: {
      cart: {
        send: 1,
        process: 9,
        success: 3,
        failed: 3
      }
    }
  };

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Transaksi</Title>
          </Body>
        </Header>
        <Tabs locked={true} renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading={
              <TabHeading>
                <Text>Permintaan Kirim</Text>
                <Badge danger>
                  <Text>{this.state.notification.cart.send}</Text>
                </Badge>
              </TabHeading>
            }
          >
            <TabSend />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Proses</Text>
                <Badge danger>
                  <Text>{this.state.notification.cart.process}</Text>
                </Badge>
              </TabHeading>
            }
          >
            <TabProcess
              nav={{
                screen: () =>
                  this.props.navigation.navigate("FieldDetailTransaction")
              }}
            />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Text>Gagal</Text>
                <Badge danger>
                  <Text>{this.state.notification.cart.failed}</Text>
                </Badge>
              </TabHeading>
            }
          >
            <TabFailed />
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Text>Selesai</Text>
                <Badge danger>
                  <Text>{this.state.notification.cart.success}</Text>
                </Badge>
              </TabHeading>
            }
          >
            <TabSuccess />
          </Tab>
        </Tabs>

        <CustomFooter
          footer={{
            activeCart: true,
            screenHome: () => this.props.navigation.navigate("FieldHome"),
            screenSettings: () =>
              this.props.navigation.navigate("FieldSettings")
          }}
        />
      </Container>
    );
  }
}
