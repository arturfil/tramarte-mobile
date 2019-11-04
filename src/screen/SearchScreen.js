import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';
import {getProducts} from '../core/apiCore';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [product, setProduct] = useState([]); 

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if (data.error) {
        setError(data.error);
      } else { 
        setProduct(data);
      }
    })
  }

  useEffect(() => {
    loadProductsBySell();
  })

  return <View>
    <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)}/>
    <Text>Search Screen</Text>
    <Text>{term}</Text>
    <Text>break</Text>
    {product.map((product, i) => (
        <Text key={i}>{product.name}</Text>
      ))}
  </View>
}

const styles = StyleSheet.create({

});

export default SearchScreen;