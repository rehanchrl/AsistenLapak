import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

export default class ShowInput extends Component {
  render() {
    console.log(this.props.navigation.state.params)
    return (
      <View>
        <Text>{this.props.navigation.state.params.data.marketName}</Text>
        <Text>{this.props.navigation.state.params.data.slogan}</Text>
        <Text>{this.props.navigation.state.params.data.description}</Text>
        <Text>{this.props.navigation.state.params.data.fullAddress}</Text>
        <Text>{this.props.navigation.state.params.data.city}</Text>
        <Text>{this.props.navigation.state.params.data.postCode}</Text>
        <Text>{this.props.navigation.state.params.data.website}</Text>
        <Text>{this.props.navigation.state.params.data.phone}</Text>
        <Text>{this.props.navigation.state.params.data.email}</Text>
        <Text>{this.props.navigation.state.params.data.bankName}</Text>

      </View>
    );
  }
}
