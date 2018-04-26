import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Header,
  SwipeRow,
  View,
  Icon,
  Button,
  Left,
  Right,
  Body,
  Text,
  Title,
  List,
  ListItem
} from "native-base";
import axios from "axios";

import CustomList from "../common/List";
import CustomListBarang from "../common/List_barang";

const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700";

export default class TabSend extends Component {
  state = {
    info: {
      title: "Sabun",
      amount: 3,
      priceperamount: 200
    },
    posts: []
  };

  allPosts() {
    //GET data from API
    axios.get(`${uri}/data/products?sortBy=created%20desc`).then(result => {
      //set state to return result.data and emptying field title
      this.setState({
        posts: result.data,
        title: ""
      });
    });
  }

  componentDidMount() {
    this.allPosts();
  }
  render() {
    console.log(this.props.list);
    return (
      <Container>
        <Header
          hasTabs
          androidStatusBarColor="#b4424b"
          style={{ backgroundColor: "#dd5453" }}
        >
          <Body>
            <Title>Detail Transaction</Title>
          </Body>
        </Header>
        <Content scrollEnabled={false}>
          <Text style={styles.deadline}>Batas Akhir, 21 Maret 2018</Text>

          <CustomList
            list={{
              title: "Toko 13",
              address: "JL DI HOHO purwokerto",
              date: "11 Januari 2000",
              time: "12.00",
              sender: "JNE",
              onpress: {
                view: () => alert("view"),
                edit: () => alert("edit"),
                delete: () => alert("delete")
              }
            }}
          />

          <Text style={styles.deadline}>Daftar Barang</Text>

          {this.state.posts.map(post => (
            <CustomListBarang item={post} key={post.objectId} />
          ))}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.pricetotal}>Total</Text>
            {/* <Text style={styles.pricetotal}>
              {this.state.info.amount * this.state.info.priceperamount}
            </Text> */}
          </View>
        </Content>
        <Button primary full style={{ margin: 10 }}>
          <Text> Proccess </Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  deadline: {
    textAlign: "center",
    padding: 5,
    color: "black",
    backgroundColor: "#d0d0d0",
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    marginBottom: 5
  },
  pricetotal: {
    fontSize: 20
  }
});
