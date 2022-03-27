import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Header from '../../components/orderProduct/Header';
import Body from '../../components/orderProduct/Body';
import OrderApp from '../../components/orderProduct/OrderApp'

const OderProduct = () => {
    return (
      <View style= {styles.container}>
        <Header/>
        <OrderApp/>
        <Body/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default OderProduct;