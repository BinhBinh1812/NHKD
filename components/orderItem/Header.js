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
                onPress={() => navigation.navigate('OrderStatusScreen')}>
                    <Ionicons 
                        name="arrow-back" 
                        size={28} 
                        color="white" />
                    <Text style= {styles.txtBackBtn}>Trở lại</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Chats')}>
                <Ionicons 
                    name="md-chatbubble-ellipses-sharp" 
                    size={30} 
                    color="white" />
            </TouchableOpacity>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        backgroundColor: '#8b4513',
        justifyContent: 'center',
    },
    innerContainer: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtBackBtn: {
        fontSize: 18,
        color: 'white'
    }
});

export default Header;