import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    Image,
    TextInput,
 } from 'react-native';
 import { Feather, Ionicons } from '@expo/vector-icons'; 

const FogotPasswordScreen = ({navigation}) => {
    return (
      <View style= {styles.container}>
        <TouchableOpacity 
            style= {styles.btnBack}
            onPress= { () => {navigation.navigate('SignIn')}}
            >
              <Ionicons name="chevron-back-sharp" size={26} color="black" />
              <Text style= {styles.btnTextBack}>Trở lại</Text>
        </TouchableOpacity>
        <Text style= {styles.textForgotPass}>Quên mật khẩu</Text>

        <View style= {styles.body}>
            <Text style= {{marginBottom: 5}}>Vui lòng nhập Email để lấy lại mật khẩu:</Text>
            <View style= {styles.email}>
                <Feather 
                    name="mail" 
                    size={24} 
                    color="black" 
                    style= {{paddingHorizontal: 5}}/>
                <TextInput
                    placeholder='Email...'
                    style= {styles.inputEmail}
                />
            </View>
        </View>

        <View style= {styles.footer}>
            <TouchableOpacity style= {styles.btnForgotPass}>
                <Text style= {styles.text}>Lấy lại mật khẩu</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    btnBack: {
        marginTop: 25,
        marginLeft: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnTextBack: {
        fontSize: 20
    },
    textForgotPass: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight:'bold',
        marginVertical: 25
    },
    body: {
        marginHorizontal: 20
    },
    email: {
        backgroundColor: 'white',
        height: 54,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputEmail: {
        height: 54,
        width: 330
    },
    footer: {
        height: "10%",
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25

    },
    btnForgotPass: {
        height: 54,
        width: "100%",
        borderRadius: 12,
        backgroundColor: '#222222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }

});

export default FogotPasswordScreen;