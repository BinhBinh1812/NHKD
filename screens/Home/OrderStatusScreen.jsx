import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/OrderStatus/Header';
import Body from '../../components/OrderStatus/Body';

const OrderStatusScreen = () => {
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

export default OrderStatusScreen;