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
    const { image, name, price } = this.props.item;

    // console.log(this.props.list[0].name); buat belajar tapi ini salah
    return (
      <Card>
        <CardItem>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{ maxWidth: 50, height: 50 }}
                source={{ uri: image }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <Text style={styles.judul}>{name}</Text>
              {/* <Text>{amount}</Text> */}
              <Text>{price}</Text>
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
