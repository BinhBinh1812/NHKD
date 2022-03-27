import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 

const WaitingScreen = ({navigation}) => {
    return (
//thêm backgroud ở đây nếu có
      <View style= {styles.container}>
        <View style= {styles.header}>
            <Image 
                source={require('../assets/Logo.png')} 
                style={styles.logo} 
                resizeMode='stretch' />
        </View>
        <View style= {styles.body}>
            <Text style= {styles.domain}>Nguonhangkinhdoanh.com</Text>
            <Text style= {styles.textBody}>
                <Text>Chào mừng bạn đến với</Text>
                <Text style={{fontWeight: 'bold', color: '#8b4513'}}> NHKD!</Text>
            </Text>
            <Text>Dịch vụ vận chuyển hàng hóa Trung-Việt</Text>
        </View>

        <View style= {styles.footer}>
            {/* nút đăng nhập */}
            <TouchableOpacity 
                style= {styles.btnSignIn}
                onPress={ () => {navigation.navigate('SignIn')}}
                >
                    <Text style= {styles.btnStart}>Bắt Đầu</Text>
                    <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <StatusBar style='auto'/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: "100%",
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        width: "100%",
        height: "12%",
        alignItems: 'center',
    },
    logo: {
        width: 350,
        height: 350,
    },
    domain: {
        paddingVertical: 12,
        fontSize: 28,
        fontWeight: 'bold'
    },
    footer: {
        width: "100%",
        height: "18%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSignIn: {
        width: "70%",
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#222222',
        flexDirection: 'row'
    },
    btnStart: {
        color: 'white',
        fontSize: 16,
        marginRight: 10
    },
});

export default WaitingScreen;