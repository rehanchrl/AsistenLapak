import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import CustomerHome from "./components/customer/home/Main";
import CustomerCart from "./components/customer/cart/Main";
import CustomerSettings from "./components/customer/settings/Main";

import FieldHome from "./components/field/home/Main";
import FieldCart from "./components/field/cart/Main";
import FieldSettings from "./components/settings/Main";

import DetailTransaction from "./components/detail_transaction/Main";
import SettingProfile from "./components/settings/EditAccount";
import FieldDetailToko from "./components/detail_toko/Main";
import AddStore from "./components/add_store/Main";
import ShowInput from "./components/add_store/ShowInput";
import ImagePicker from "./components/image_pick/Main";

import HomeLogin from './components/simpleLogin/Home'
import Login from './components/simpleLogin/Login'

const App = StackNavigator(
  {
    CustomerHome: {
      screen: CustomerHome
    },
    CustomerCart: {
      screen: CustomerCart
    },
    CustomerSettings: {
      screen: CustomerSettings
    },
    FieldHome: {
      screen: FieldHome
    },
    FieldCart: {
      screen: FieldCart
    },
    FieldSettings: {
      screen: FieldSettings
    },
    DetailTransaction: {
      screen: DetailTransaction
    },
    SettingProfile: {
      screen: SettingProfile
    },
    FieldDetailToko: {
      screen: FieldDetailToko
    },
    AddStore: {
      screen: AddStore
    },
    ShowInput: {
      screen: ShowInput
    },
    ImagePicker: {
      screen: ImagePicker
    },
    HomeLogin: {
      screen: HomeLogin
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default App;
