import React from 'react';
import { 
    Text,
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/taobao/Header';
import Body from '../../components/taobao/Body.js';
import CongCuDatHang from '../../components/taobao/CongCuDatHang.js'

const TaobaoScreen = () => {
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

export default TaobaoScreen;