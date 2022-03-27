import React, {useState} from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    Image, 
    TextInput
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderApp = () => {
    
    const navigation = useNavigation();
    return (
      <View style= {styles.container}>
        <View style= {styles.input}>
            <TextInput 
                style= {styles.inputData}
                placeholder='Nhập link sản phẩm...'
            />
            <TouchableOpacity style= {{justifyContent: 'center', marginRight: 10}}>
                <Image 
                    style= {styles.searchIcon}
                    source={require('../../assets/orderApp/SearchIcon.png')}
                    resizeMode='stretch'
                    />
            </TouchableOpacity>
        </View>

        <View style= {styles.innerContainer}>
            <View style= {styles.topInner}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('TaobaoScreen')}>
                        <Image 
                            source={require('../../assets/orderApp/Taobao.png')}
                            style= {styles.taobao}
                            resizeMode='stretch'/>
                </TouchableOpacity>

                <TouchableOpacity>
                    {/* onPress={() => navigation.navigate('Web1688')}> */}
                        <Image source={require('../../assets/orderApp/1688.png')}
                        style= {styles.img1688}
                        resizeMode='stretch'/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('TmallScreen')}>
                        <Image source={require('../../assets/orderApp/Tmall.png')}
                        style= {styles.tmall}
                        resizeMode='stretch'/>
                </TouchableOpacity>
            </View>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "25%", 
    },
    innerContainer: {
        marginHorizontal: 10,
    },
    topInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomInner: {
        flexDirection: 'row',
        marginTop: 20,
    },
    taobao: {
        width: 100,
        height: 100,
        borderRadius: 16

    },
    img1688: {
        width: 100,
        height: 100,
        borderRadius: 16
    },
    tmall: {
        width: 100,
        height: 100,
        borderRadius: 16
    },
    inputLink: {

    },
    input: {
        height: 37,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    inputData: {
        width: 320,
        marginLeft: 10,
        marginRight: 10
    },
    searchIcon: {
        width: 18,
        height: 18,
        tintColor: '#8b4513',
    }

});

export default OrderApp;