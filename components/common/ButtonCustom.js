import React from 'react';
import { View, Button } from 'react-native';

export default (props) => (
  <View
    style={{
      marginTop: 16,
      backgroundColor: props.warna,
      padding: 8,
      borderRadius: props.radius,
    }}>
    <Button title={props.title} color={props.warna} onPress={props.onPress} />
  </View>
);
