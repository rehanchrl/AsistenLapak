import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { List, ListItem, Body, Thumbnail } from "native-base";
import Modal from "react-native-modal";
import axios from "axios";

const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700";

export default class Example extends Component {
  state = {
    visibleModal: false,
    users: [],
    selectedName: "Name Not Selected"
  };

  getAllUser() {
    axios.get(`${uri}/data/Users`).then(result => {
      console.log(result.data);
      this.setState({ users: result.data });
    });
  }

  componentDidMount() {
    this.getAllUser();
  }

  render() {
    console.log(this.state.users);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.setState({ visibleModal: true })}>
          <View style={styles.button}>
            <Text>{this.state.selectedName}</Text>
          </View>
        </TouchableOpacity>

        <Modal isVisible={this.state.visibleModal}>
          <View style={styles.modalContent}>
            <List>
              {this.state.users.map(user => {
                return (
                  <ListItem
                    key={user.objectId}
                    onPress={() =>
                      this.setState({
                        selectedName: user.name,
                        visibleModal: false
                      })
                    }
                  >
                    <Thumbnail
                      square
                      size={5}
                      source={{ uri: user.photo }}
                      style={{ marginRight: 20 }}
                    />
                    <Body>
                      <Text>{user.name}</Text>
                      <Text>{user.email}</Text>
                    </Body>
                  </ListItem>
                );
              })}
            </List>
            <TouchableOpacity
              onPress={() => this.setState({ visibleModal: false })}
            >
              <View style={styles.button}>
                <Text>close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  }
});
