import React, { useState } from 'react';
import {Button, Image, Text, View} from "react-native";

function Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Article Page</Text> 
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Screen;