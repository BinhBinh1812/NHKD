import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
      <View style= {styles.container}>
          <View style= {styles.innerContainer}>
            
            <TouchableOpacity 
                style= {styles.cartBtn}
                onPress={() => navigation.navigate('ListProduct')}>
                    <MaterialCommunityIcons name='cart' size= {30} color= 'white'/>
            </TouchableOpacity>

            <Text style= {styles.textHeader}>
                <Text>Tỷ giá: </Text>
                <Text>4000 </Text>
                <Text>VNĐ</Text> 
            </Text>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        backgroundColor: '#8b4513',
    },
    innerContainer: {
        marginTop: 25,
        height: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textHeader: {
        color: 'white',

        fontSize: 16
    },
    cartBtn: {
    },
    chatBtn: {
        marginLeft: 12
    }

});

export default Header;