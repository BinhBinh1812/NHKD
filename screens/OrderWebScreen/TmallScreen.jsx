import React from 'react';
import { 
    Text,
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/tmall/Header.js';
import Body from '../../components/tmall/Body'
import CongCuDatHang from '../../components/tmall/CongCuDatHang'

const TmallScreen = () => {
    return (
      <View style= {styles.container}>
        <Header/>
        <Body/>
        <CongCuDatHang/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default TmallScreen;