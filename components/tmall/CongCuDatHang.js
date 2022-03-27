import React, {Component} from 'react';
import { 
    Text,
    StyleSheet, 
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CongCuDatHang = () => {
    const navigation = useNavigation();
    return (
        <View style= {styles.container}>
            <View>
                <Text style= {{fontSize: 16, fontWeight: 'bold'}}>Giá tạm tính: </Text>
                <Text>null</Text>
            </View>

            <View style= {styles.btnContainer}>
                <TouchableOpacity 
                    style= {styles.btnCart}
                    onPress={() => navigation.navigate('ListProduct')}>
                    <Text style= {styles.textCart}>Giỏ hàng</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.btnAddToCart}>
                    <Text style= {styles.textAddToCart}>Thêm vào giỏ</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
  },
  btnContainer: {
      flexDirection: 'row'

  },
  btnAddToCart: {
      width: 120,
      height: 36,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: '#8b4513',
      justifyContent: 'center',
      alignItems: 'center'
  },
  textAddToCart: {
      color: 'white',
  },
  btnCart: {
    width: 120,
    height: 36,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCart: {
      color: 'white'
  }
});

export default CongCuDatHang;