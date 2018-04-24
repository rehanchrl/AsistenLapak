import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image
} from "react-native";
import { Button } from "native-base";
import axios from "axios";
const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700";

import ImagePicker from "react-native-image-picker";

export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null
  };

  handleSubmit() {
    //post data ke API
    const data = new FormData(); // you can append anyone.
    data.append("photo", {
      uri: this.state.avatarSource.uri,
      type: "image/jpeg", // or photo.type
      name: "testPhotoName"
    });
    fetch(`${uri}/files/images/hahaha.png`, {
      method: "post",
      body: data
    }).then(res => {
      alert(JSON.stringify(res.url));
    });
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: "Video Picker",
      takePhotoButtonTitle: "Take Video...",
      mediaType: "video",
      videoQuality: "medium"
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled video picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        this.setState({
          videoSource: response.uri
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[
              styles.avatar,
              styles.avatarContainer,
              { marginBottom: 20 }
            ]}
          >
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>
        <Button onPress={() => alert(this.state.avatarSource.uri)}>
          <Text>Link</Text>
        </Button>
        <Button onPress={() => this.handleSubmit()}>
          <Text>Submit</Text>
        </Button>

        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        {this.state.videoSource && (
          <Text style={{ margin: 8, textAlign: "center" }}>
            {this.state.videoSource}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  avatarContainer: {
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
