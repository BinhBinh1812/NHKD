import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Image,
  TouchableOpacity,
  TextInput, 
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 

const SignInScreen = ({navigation}) => {
    return (
      <View style= {styles.container}>
          <TouchableOpacity 
            style= {styles.btnBack}
            onPress= { () => {navigation.navigate('WaitingScreen')}}
            >
              <Ionicons name="chevron-back-sharp" size={26} color="black" />
              <Text style= {styles.btnTextBack}>Trở lại</Text>
          </TouchableOpacity>

          <View style= {styles.body}>
            <Text style= {styles.heading1}>Chào mừng bạn trở lại!</Text>
          </View>

          <View style= {styles.input}>
              <View style= {styles.username}>
                <AntDesign 
                  name="user" 
                  size={24} 
                  color="black" 
                  style= {{paddingHorizontal: 5}}/>
                <TextInput
                placeholder='Username...'
                style= {styles.inputUserName}
                />    
              </View>

              <View style= {styles.password}>
                <Ionicons  
                name="ios-lock-closed-outline" 
                size={24} 
                color="black" 
                style= {{paddingHorizontal: 5}}/>
                <TextInput
                placeholder='Password...'
                style= {styles.inputPassword}
                secureTextEntry={true}
                />
              </View>
          </View>
          
          <TouchableOpacity 
            style= {styles.btnForgotPass}
            onPress={() => {navigation.navigate('FogotPassword')}}
            >
              <Text style={styles.textForgotPass}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          
          <View style= {styles.footer}>
            <TouchableOpacity 
              style= {styles.btnSignIn}
              onPress= { () => {navigation.navigate('Home')}}
            >
                <Text style= {styles.textSignIn}>ĐĂNG NHẬP</Text>              
            </TouchableOpacity>
          </View>


          <View style= {styles.signout}>
            <Text>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity 
              style= {styles.btnSignOut}
              onPress={ () => {navigation.navigate('SignUp')}}>
                <Text style= {styles.txtSignOut}>ĐĂNG KÝ NGAY</Text>
            </TouchableOpacity>
          </View> 
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    body: {
      alignItems: 'center'
    },
    input: {
      height: "20%",
      justifyContent: 'space-evenly',
      marginHorizontal: 20,
    },
    heading1: {
      marginVertical: 25,
      fontSize: 30,
      fontWeight: 'bold'
    },
    username:{
      borderRadius: 8,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputUserName: {
      height: 54,
      width: 330
    },
    password: {
      borderRadius: 8,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center'
    },
    inputPassword: {
      height: 54,
      width: 330
    },
    btnForgotPass: {
      padding: 5,
      marginHorizontal: 20,
      flexDirection: 'row-reverse'
    },
    textForgotPass: {
      color: '#8b4513',
      fontWeight:'bold'
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
    textSignIn: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500'
    },
    signout: {
      height: "8%",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    btnSignOut: {
      padding: 5
    },
    txtSignOut: {
      fontSize: 16,
      color: '#8b4513',
      fontWeight: 'bold'
    }
});

export default SignInScreen;