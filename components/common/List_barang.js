import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class CustomList extends Component {
  render() {
    const { title, amount, priceperamount } = this.props.list;

    return (
      <Card>
        <CardItem>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{ maxWidth: 50, height: 50 }}
                source={require("../images/logo.png")}
              />
            </View>
            <View style={{ flex: 3 }}>
              <Text style={styles.judul}>{title}</Text>
              <Text>{amount}</Text>
              <Text>{priceperamount}</Text>
            </View>
          </View>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    fontSize: 20,
    marginBottom: 5,
    color: "#0c0c0c"
  }
});
