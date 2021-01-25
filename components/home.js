import React, { useState, useEffect} from 'react';
import {Button, View} from "react-native";


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomePage</Text>  
      <Button
        title="Aller a la page article"
        onPress={() => navigation.navigate('Screen')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;