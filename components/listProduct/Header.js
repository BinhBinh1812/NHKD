import React from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
      <View style= {styles.container}>
          <View style= {styles.innerContainer}>
            <TouchableOpacity 
                style= {{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                }}
                onPress={() => navigation.navigate('Home')}>
                    <Ionicons 
                        name="arrow-back" 
                        size={28} 
                        color="white" />
                    <Text style= {styles.txtBackBtn}>Trở lại</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "7%",
        backgroundColor: '#8b4513',
    },
    innerContainer: {
        marginTop: 18,
        marginHorizontal: 10,
    },
    txtBackBtn: {
        fontSize: 18,
        color: 'white'
    }
});

export default Header;