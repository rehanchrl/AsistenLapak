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
  ListItem,
  Label,
  Button,
  Footer,
  Body,
  Title,
  Right,
  Left,
  Picker,
  Icon,
  Thumbnail
} from "native-base";
import axios from "axios";
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-picker";

const uri =
  "https://api.backendless.com/E0A64170-55DF-79B6-FF21-82980C30AD00/64DF2F32-8DD4-92DC-FF3C-850E44AD8700";

export default class TambahLapakToko extends Component {
  state = {
    form: {},
    logoSource: null,
    visibleModal: false,
    users: [],
    selectedName: null,
    userObjectId: ""
  };

  handleSubmit() {
    const userAssistant = [this.state.userObjectId];

    //post data ke API
    axios.post(`${uri}/data/stores`, this.state.form).then(result => {
      if (result.data) {
        axios
          .post(
            `${uri}/data/stores/${result.data.objectId}/assistant:Users:1`,
            userAssistant
          )
          .then(resultRelation => {
            //set state to return result.data and emptying field title
            this.setState({
              form: resultRelation.data
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
        this.setState({
          logoSource: source
        });
        const data = new FormData();
        data.append("photo", {
          uri: source.uri,
          type: "image/jpeg",
          name: "Photo"
        });
        // Photo name still static
        fetch(`${uri}/files/images/logo-toko.png?overwrite=true`, {
          method: "post",
          body: data
        }).then(result => {
          this.setState({ form: { ...this.state.form, logo: result.url } });
        });
      }
    });
  }

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
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#dd5453" }}
          androidStatusBarColor="#b4424b"
        >
          <Body>
            <Title>Tambah Lapak CS</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Label style={{ marginTop: 10 }}>Nama Asisten Lapak </Label>
            <List>
              <ListItem onPress={() => this.setState({ visibleModal: true })}>
                <Body>
                  {this.state.selectedName === null ? (
                    <Text>Please Select Assistant</Text>
                  ) : (
                    <Text>{this.state.selectedName}</Text>
                  )}
                </Body>
                <Right>
                  <Icon name="arrow-dropdown" />
                </Right>
              </ListItem>
            </List>

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
                            userObjectId: user.objectId,
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
                <Button
                  style={styles.button}
                  onPress={() => this.setState({ visibleModal: false })}
                >
                  <Text>Close</Text>
                </Button>
              </View>
            </Modal>

            <Label style={{ marginTop: 10 }}>Nama Toko</Label>
            <Item regular>
              <Input
                onChangeText={name =>
                  this.setState({ form: { ...this.state.form, name } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Slogan</Label>
            <Item regular>
              <Input
                onChangeText={slogan =>
                  this.setState({ form: { ...this.state.form, slogan } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Logo Toko</Label>

            {this.state.logoSource === null ? (
              <Button transparent onPress={this.selectPhotoTapped.bind(this)}>
                <Text
                  style={{
                    color: "#156af2",
                    marginLeft: -17
                  }}
                >
                  Tambahkan Logo
                </Text>
              </Button>
            ) : (
              <View>
                <Button transparent onPress={this.selectPhotoTapped.bind(this)}>
                  <Text
                    style={{
                      color: "#156af2",
                      marginLeft: -17
                    }}
                  >
                    Ganti Logo
                  </Text>
                </Button>
                <View
                  style={[
                    styles.logo,
                    styles.logoContainer,
                    { marginBottom: 20, alignSelf: "center" }
                  ]}
                >
                  <Image style={styles.logo} source={this.state.logoSource} />
                </View>
              </View>
            )}

            <Label style={{ marginTop: 10 }}>Kategori</Label>
            <Item regular>
              <Input
                onChangeText={categories =>
                  this.setState({ form: { ...this.state.form, categories } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Deskripsi</Label>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={description =>
                this.setState({ form: { ...this.state.form, description } })
              }
            />

            <Label style={{ marginTop: 10 }}>Alamat Lengkap</Label>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={address =>
                this.setState({ form: { ...this.state.form, address } })
              }
            />

            <Label style={{ marginTop: 10 }}>Kota</Label>
            <Item regular>
              <Input
                onChangeText={city =>
                  this.setState({ form: { ...this.state.form, city } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Kode Pos</Label>
            <Item regular>
              <Input
                onChangeText={postal_code =>
                  this.setState({ form: { ...this.state.form, postal_code } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Situs Web</Label>
            <Item regular>
              <Input
                onChangeText={website =>
                  this.setState({ form: { ...this.state.form, website } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>No Telp</Label>
            <Item regular>
              <Input
                onChangeText={mobile_phone =>
                  this.setState({ form: { ...this.state.form, mobile_phone } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Alamat Email</Label>
            <Item regular>
              <Input
                onChangeText={email =>
                  this.setState({ form: { ...this.state.form, email } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Nama Bank</Label>
            <Item regular>
              <Input
                onChangeText={bank =>
                  this.setState({ form: { ...this.state.form, bank } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Nomor Rekening</Label>
            <Item regular>
              <Input
                onChangeText={bank_account =>
                  this.setState({ form: { ...this.state.form, bank_account } })
                }
              />
            </Item>

            <Label style={{ marginTop: 10 }}>Nama Pemilik Akun Bank</Label>
            <Item regular>
              <Input
                onChangeText={bank_account_owner =>
                  this.setState({
                    form: { ...this.state.form, bank_account_owner }
                  })
                }
              />
            </Item>

            <Button style={styles.button} onPress={() => this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>

        <Footer style={{ backgroundColor: "#dd5453" }}>
          <FooterTab style={{ backgroundColor: "#dd5453" }}>
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
  fileChooser: {
    color: "#156af2",
    marginLeft: -17
  },
  button: {
    margin: 10,
    width: "60%",
    backgroundColor: "#b4424b",
    alignSelf: "center",
    justifyContent: "center"
  },
  logoContainer: {
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
