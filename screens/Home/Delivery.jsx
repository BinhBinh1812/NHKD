import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/delivery/Header';
import Body from '../../components/delivery/Body';

const Delivery = () => {
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

export default Delivery;