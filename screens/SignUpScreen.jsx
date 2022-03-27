import React, { Component } from 'react';
import { 
  Text, 
  StyleSheet, 
  View, 
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'; 

const SignUpScreen = ({navigation}) => {
    return (
      <View style= {styles.container}>
        <View style= {styles.header}>
            <TouchableOpacity 
              style= {styles.btnBack}
              onPress= { () => {navigation.navigate('WaitingScreen')}}
            >
              <Ionicons name="chevron-back-sharp" size={26} color="black" />
              <Text style= {styles.btnTextBack}>Trở lại</Text>
            </TouchableOpacity>

            <View style= {styles.heading1}>
              <Text style= {styles.textHeading1}>Đăng ký thành viên</Text>
            </View> 
        </View>

       

        <View style= {styles.body}>
            <Text style= {styles.userName}>Username:</Text>
            <View style= {styles.input}>
              <TextInput 
                style= {styles.inputUserName}
              />
            </View>


            <Text style= {styles.fullName}>Họ và Tên:</Text>
            <View style= {styles.input}>
              <TextInput 
                style= {styles.inputFullName}
              />
            </View>


            <Text style= {styles.email}>Email:</Text>
            <View style= {styles.input}>
              <TextInput 
                style= {styles.inputEmail}
              />
            </View>


            <Text style= {styles.phone}>Số điện thoại:</Text>
            <View style= {styles.input}>
              <TextInput 
                style= {styles.inputPhone}
                keyboardType= {'number-pad'}
              />
            </View>

            <Text style= {styles.password}>Mật khẩu:</Text>
            <View style= {styles.input}>
              <TextInput 
                style= {styles.inputPassword}
                secureTextEntry={true}
              />
            </View>

            <Text style= {styles.confirmPassword}>Xác nhận mật khẩu:</Text>
            <View style= {styles.input}>
              <TextInput 
                style= {styles.inutConfirmPassword}
                secureTextEntry={true}
              />
            </View>
        </View>

        <View style= {styles.footer}>
          <TouchableOpacity 
            style= {styles.btnSignUp}
            onPress= {() => {navigation.navigate('Notifications')}}
          > 
            <Text style= {styles.textSignUp}>Đăng ký</Text> 
          </TouchableOpacity>
        </View> 
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
      width: "100%",
      height: "20%",
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
      marginHorizontal: 20,
    },
    heading1: {
      alignItems: 'center'
    },
    textHeading1: {
      marginVertical: 25,
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: 'white'
    },
    inputUserName: {
      height: 26,
      marginLeft: 5,  
    },
    inputFullName: {
      height: 26,
      marginLeft: 5, 
    },
    inputEmail: {
      height: 26,
      marginLeft: 5, 
    },
    inputPhone: {
      height: 26,
      marginLeft: 5, 
    },
    inputPassword: {
      height: 26,
      marginLeft: 5, 
    },
    inutConfirmPassword: {
      height: 26,
      marginLeft: 5, 
    },
    footer: {
      height: "10%",
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 10,
      justifyContent: 'center',
    },
    btnSignUp: {
      width: "100%",
      height: 54,
      borderRadius: 12,
      backgroundColor: '#8b4513',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textSignUp: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500'
    }

});

export default SignUpScreen;