import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    Image 
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style= {styles.container}>
            <View style= {styles.innerContainer}>
                <View style= {styles.leftContainer}>
                    <View style= {styles.profileContainer}>
                        <Image 
                            style= {styles.profileImg}
                            source={require('../../assets/profile/Avatar.jpg')}
                            resizeMode= 'stretch'/>
                    </View>

                    <View style= {styles.textContainer}>
                        <Text style= {styles.username}>
                            <Text>Username: </Text>
                            <Text>binhbinh</Text>
                        </Text>
                        <Text style= {styles.vip}>
                            <Text>VIP: </Text>
                            <Text>1</Text>
                            <Text> | </Text>
                            <Text>Số dư: </Text>
                            <Text>1.000.000</Text>
                            <Text> VNĐ</Text>
                        </Text>
                    </View>
                </View>

                <View style= {styles.rightContainer}>
                    <TouchableOpacity 
                        style= {styles.cartBtn}
                        onPress={() => navigation.navigate('ListProduct')}
                        >
                            <MaterialCommunityIcons name='cart' size= {30} color= 'white'/>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "15%",
        backgroundColor: '#8b4513',
    },
    innerContainer: {
        flex: 1,
        height: "100%",
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightContainer: {
        justifyContent: 'center'
    },
    leftContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileImg: {
        width: 65,
        height: 65,
        marginRight: 10,
        borderRadius: 100
    },
    cartBtn: {
    },
    username: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    vip: {
        color: 'white',
        fontSize: 12,
    }

});

export default Header;