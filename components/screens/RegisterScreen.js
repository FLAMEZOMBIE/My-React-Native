import * as React from 'react';
import {Image, View, Text, TextInput, Button} from 'react-native';

import TextInputCustom from '../common/TextInputCustom'
import ButtonCustom from '../common/ButtonCustom'

export default function LoginScreen(){
  return (
    <View>
      <Image source={require('../../assets/logo.png')} />
      <View style={{backgroundColor: "#808186", padding: 24}}>
        <Text style={{color: "white", marginBottom: 8}}>Fullname</Text>
        <TextInputCustom />
        <Text style={{color: "white", marginBottom: 8}}>Username</Text>
        <TextInputCustom />
        <Text style={{color: "white", marginBottom: 8, marginTop:8}}>Password</Text>
        <TextInputCustom />
        <ButtonCustom title="Signup" warna="blue" radius={16} />
      </View>
    </View>
  );
}