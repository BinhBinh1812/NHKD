import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const Header = () => {
    return (
      <View style= {styles.container}>
        <Text style= {styles.textHeader}>Phiếu giao hàng</Text> 
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        backgroundColor: '#8b4513',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 20
    }

});

export default Header;