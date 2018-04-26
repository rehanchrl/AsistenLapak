import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, List, ListItem } from "native-base";
import axios from "axios";

const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700/data";
export default class ShowInput extends Component {
  state = {
    form: []
  };

  allPosts() {
    //GET data from API
    axios.get(`${uri}/stores?sortBy=created%20desc`).then(result => {
      this.setState({
        form: result.data
      });
    });
  }

  componentDidMount() {
    this.allPosts();
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.form.map(form => (
              <ListItem key={form.objectId}>
                <Text>{form.name}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
