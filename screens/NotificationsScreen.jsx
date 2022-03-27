import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    Image,
    TouchableOpacity
} from 'react-native'

const NotificationsScreen = ({navigation}) => {
    return (
      <View style= {styles.container}>
        <View style= {styles.header}>
          <Image style= {styles.imgLogo} source={require('../assets/Logo.png')} resizeMode='stretch'/>
        </View>

        <View style= {styles.body}>
            <Text style= {styles.heading1}>Xin chúc mừng!</Text>

            <Text style= {{textAlign: 'center', fontSize: 15}}>
                <Text>Chúc mừng bạn đã đăng ký thành công tài khoản và trở thành thành viên của </Text>
                <Text style = {{color: '#8b4513', fontWeight: 'bold'}}>NHKD</Text>
                <Text>. Hãy chăm chỉ mua sắm để có thể trở thành khách hàng</Text>
                <Text style = {{color: '#8b4513', fontWeight: 'bold'}}> VIP </Text>
                <Text>nhằm được hưởng nhiều ưu đãi của chúng mình bạn nhé!</Text>
            </Text>  
            {/* cho cái hình chúc mừng vào đây */}
        </View>


        <View style= {styles.footer}>
        <TouchableOpacity 
            style= {styles.btnSignIn}
            onPress={() => {navigation.navigate('SignIn')}}
            >
                <Text style= {styles.btnText}>VỀ MÀN HÌNH ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        width: "100%",
        height: "15%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLogo: {
        width: 50,
        height: 50,
    },
    heading1: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        height: "75%",
        marginHorizontal: 12
    },
    img: {
        width: 310,
        height: 230,
    },
    footer: {
        height: "10%",
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    btnSignIn: {
        width: "100%",
        height: 54,
        borderRadius: 12,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default NotificationsScreen;