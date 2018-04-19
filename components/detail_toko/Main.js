import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  View,
  Text,
  Form,
  Input,
  Content,
  Label,
  Item,
  Header,
  Button,
  Title,
  Body,
  Textarea,
  Left,
  Right
} from "native-base";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#b4424b"
          style={{ backgroundColor: "#dd5453" }}
        >
          <Body>
            <Title>Detail Toko</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.row}>
            <Image source={require("../images/logo.png")} style={styles.logo} />
          </View>

          <Text style={styles.lblForm}>Nama Toko : Toko surya</Text>

          <Text style={styles.lblForm}>Address : </Text>
          <Textarea
            placeholder="Jl. dimana-mana"
            style={{ marginBottom: 5 }}
            rowSpan={5}
            bordered
            disabled
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Left>
              <Button full danger>
                <Text>Deny</Text>
              </Button>
            </Left>
            <Right>
              <Button full success>
                <Text>Accept</Text>
              </Button>
            </Right>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  form: {
    padding: 20
  },
  itmUser: {
    padding: 5
  },
  lblForm: {
    marginTop: 10,
    padding: 5,
    fontSize: 20
  },
  btnSave: {
    backgroundColor: "#b4424b"
  }
});
