import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  Alert,
  PixelRatio,
  Image
} from "react-native";
import {
  Content,
  Header,
  Form,
  Item,
  FooterTab,
  Text,
  Container,
  Input,
  Textarea,
  List,
  Label,
  Button,
  Footer,
  Body,
  Title,
  ListItem,
  Right,
  Left,
  Picker,
  Icon
} from "native-base";
import axios from "axios";
import ImagePicker from "react-native-image-picker";

const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700";

export default class TambahLapakToko extends Component {
  state = {
    form: {},
    avatarSource: null
  };

  handleSubmit() {
    //post data ke API
    axios.post(`${uri}/data/stores`, this.state.form).then(result => {
      if (result.data) {
        axios.get(`${uri}/data/stores?sortBy=created%20desc`).then(result => {
          //set state to return result.data and emptying field title
          this.setState({
            form: result.data
          });
        });
        this.props.navigation.navigate("ShowInput");
      }
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
        const data = new FormData(); // you can append anyone.
        data.append("photo", {
          uri: source.uri,
          type: "image/jpeg", // or photo.type
          name: "Photo"
        });
        fetch(`${uri}/files/images/logo-toko.png?overwrite=true`, {
          method: "post",
          body: data
        }).then(result => {
          // alert(JSON.stringify(res.url));
          this.setState({ form: { ...this.state.form, logo: result.url } });
        });
      }
    });
  }

  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }

  render() {
    return (
      <Container>
        <Header style={styles.mainColor} androidStatusBarColor="#b4424b">
          <Body>
            <Title>Tambah Lapak CS</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dialog"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
              style={{ marginLeft: -7, marginBottom: 10 }}
            >
              <Picker.Item label="si A" value="key0" />
              <Picker.Item label="si B" value="key1" />
              <Picker.Item label="si C" value="key2" />
              <Picker.Item label="Another name" value="key3" />
              <Picker.Item label="another name again" value="key4" />
            </Picker>
            <Label style={styles.marginTop}>Nama Toko</Label>
            <Item regular>
              <Input
                onChangeText={name =>
                  this.setState({ form: { ...this.state.form, name } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Slogan</Label>
            <Item regular>
              <Input
                onChangeText={slogan =>
                  this.setState({ form: { ...this.state.form, slogan } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Logo Toko</Label>

            {this.state.avatarSource === null ? (
              <Button transparent onPress={this.selectPhotoTapped.bind(this)}>
                <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
              </Button>
            ) : (
              <View
                style={[
                  styles.avatar,
                  styles.avatarContainer,
                  { marginBottom: 20 }
                ]}
              >
                <Image style={styles.avatar} source={this.state.avatarSource} />
              </View>
            )}

            <Label style={styles.marginTop}>Kategori</Label>
            <Item regular>
              <Input
                onChangeText={categories =>
                  this.setState({ form: { ...this.state.form, categories } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Deskripsi</Label>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={description =>
                this.setState({ form: { ...this.state.form, description } })
              }
            />

            <Label style={styles.marginTop}>Alamat Lengkap</Label>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={address =>
                this.setState({ form: { ...this.state.form, address } })
              }
            />

            <Label style={styles.marginTop}>Kota</Label>
            <Item regular>
              <Input
                onChangeText={city =>
                  this.setState({ form: { ...this.state.form, city } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Kode Pos</Label>
            <Item regular>
              <Input
                onChangeText={postal_code =>
                  this.setState({ form: { ...this.state.form, postal_code } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Situs Web</Label>
            <Item regular>
              <Input
                onChangeText={website =>
                  this.setState({ form: { ...this.state.form, website } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>No Telp</Label>
            <Item regular>
              <Input
                onChangeText={mobile_phone =>
                  this.setState({ form: { ...this.state.form, mobile_phone } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Alamat Email</Label>
            <Item regular>
              <Input
                onChangeText={email =>
                  this.setState({ form: { ...this.state.form, email } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Nama Bank</Label>
            <Item regular>
              <Input
                onChangeText={bank =>
                  this.setState({ form: { ...this.state.form, bank } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Nomor Rekening</Label>
            <Item regular>
              <Input
                onChangeText={bank_account =>
                  this.setState({ form: { ...this.state.form, bank_account } })
                }
              />
            </Item>

            <Label style={styles.marginTop}>Nama Pemilik Akun Bank</Label>
            <Item regular>
              <Input
                onChangeText={bank_account_owner =>
                  this.setState({
                    form: { ...this.state.form, bank_account_owner }
                  })
                }
              />
            </Item>

            <ListItem style={{ alignSelf: "center", justifyContent: "center" }}>
              <Button
                style={styles.buttone}
                onPress={() => this.handleSubmit()}
              >
                <Text style={{ marginLeft: 40 }}>Submit</Text>
              </Button>
            </ListItem>
          </Form>
        </Content>

        <Footer style={styles.mainColor}>
          <FooterTab style={styles.mainColor}>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="cart" />
            </Button>
            <Button>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttone: {
    width: "60%",
    backgroundColor: "#b4424b"
  },

  marginTop: {
    marginTop: 10
  },

  labelBtn: {
    marginLeft: 55
  },

  labelSelect: {
    marginLeft: 20
  },

  label: {
    margin: 20
  },

  iteme: {
    marginLeft: -0.1
  },

  fileChooser: {
    color: "#156af2",
    marginLeft: -17
  },

  mainColor: {
    backgroundColor: "#dd5453"
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
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  }
});
