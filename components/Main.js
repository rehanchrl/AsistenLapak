import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import {
  Content,
  Text,
  Header,
  Container,
  Form,
  Item,
  Input,
  Textarea,
  Label,
  Button,
  Footer,
  Body,
  Title,
  ListItem,
  Right,
  Left,
  Picker,
  Icon,
  FooterTab,
  List
} from "native-base";

export default class TambahLapakToko extends Component {
  state = {
    form: {
      
    },
    selectAssistant: "key1",
    marketName: "",
    slogan: "",
    description: "",
    fullAddress: "",
    city: "",
    postCode: "",
    website: "",
    phone: "",
    email: "",
    bankName: ""
  };
  
  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }
  
  render() {
    console.log(this.props.navigation)
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
            <Label>Nama Toko</Label>
            <Item regular>
              <Input
                onChangeText={text => this.setState({ marketName: text })}
              />
            </Item>

            <Label style={styles.batasAtas}>Slogan</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ slogan: text })} />
            </Item>

            <Label style={styles.batasAtas}>Logo Toko</Label>
            <Button
              transparent
              onPress={() => {
                alert("Coming Soon");
              }}
            >
              <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
            </Button>

            <Label style={styles.batasAtas}>Deskripsi</Label>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={text => this.setState({ description: text })}
            />

            <Label style={styles.batasAtas}>Alamat Lengkap</Label>
            <Textarea
              rowSpan={5}
              bordered
              onChangeText={text => this.setState({ fullAddress: text })}
            />

            <Label style={styles.batasAtas}>Kota</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ city: text })} />
            </Item>

            <Label style={styles.batasAtas}>Kode Pos</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ postCode: text })} />
            </Item>

            <Label style={styles.batasAtas}>Situs Web</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ website: text })} />
            </Item>

            <Label style={styles.batasAtas}>No Telp</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ phone: text })} />
            </Item>

            <Label style={styles.batasAtas}>Alamat Email</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ email: text })} />
            </Item>

            <Label style={styles.batasAtas}>Nama Bank dan No Rek.</Label>
            <Item regular>
              <Input onChangeText={text => this.setState({ bankName: text })} />
            </Item>

            <ListItem style={{ alignSelf: "center", justifyContent: "center" }}>
              <Button
                style={styles.buttone}
                onPress={() =>
                  this.props.navigation.navigate("ShowInput", {
                    data: {
                      selectAssistant: this.state.selectAssistant,
                      marketName: this.state.marketName,
                      slogan: this.state.slogan,
                      description: this.state.description,
                      fullAddress: this.state.fullAddress,
                      city: this.state.city,
                      postCode: this.state.postCode,
                      website: this.state.website,
                      phone: this.state.phone,
                      email: this.state.email,
                      bankName: this.state.bankName
                    }
                  })
                }
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

  batasAtas: {
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
  }
});
