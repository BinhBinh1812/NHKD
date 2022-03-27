import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/listProduct/Header.js'

const ListProduct = () => {
    return (
      <View style= {styles.container}>
        <Header/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ListProduct;