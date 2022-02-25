import * as React from 'react';
import {Image, View, Text, TextInput, Button} from 'react-native';

import TextInputCustom from '../common/TextInputCustom'
import ButtonCustom from '../common/ButtonCustom'

export default function LoginScreen({ navigation }){
  const handlingRegister = () => navigation.navigate('Register');

  return (
    <View>
      <Image source={require('../../assets/logo.png')} style={{alignSelf: "center"}} />
      <View style={{backgroundColor: "#808186", padding: 24}}>
        <Text style={{color: "white", marginBottom: 8}}>Username</Text>
        <TextInputCustom />
        <Text style={{color: "white", marginBottom: 8, marginTop:8}}>Password</Text>
        <TextInputCustom />
        <ButtonCustom title="Login" warna="red" radius={16} onPress={() => console.log("hai")} />
        <ButtonCustom title="Register" warna="yellow" radius={8} onPress={handlingRegister} />
      </View>
    </View>
  );
}