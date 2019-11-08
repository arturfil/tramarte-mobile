import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ProductListScreen = ({navigation}) => {
  return ( <>
    <Text style={{fontSize: 48}}>ProductListScreen</Text>
    <Button title="Go to Product Detail" onPress={() => navigation.navigate('ProductDetail')}/>
  </>
  )
}

const styles = StyleSheet.create({

})

export default ProductListScreen;