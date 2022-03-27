import React from 'react';
import { 
    Text,
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/orderItem/Header';
import Body from '../../components/orderItem/Body';

const OrderItemScreen = () => {
    return (
      <View style= {styles.container}>
          <Header/>
          <Body/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default OrderItemScreen;