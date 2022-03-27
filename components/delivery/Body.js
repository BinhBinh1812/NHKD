import React from 'react';
import { 
    Text, 
    StyleSheet, 
    SafeAreaView,
    View,
    TouchableOpacity,
    ScrollView,
    
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const Body = () => {
    return (
      <SafeAreaView style= {styles.container}>
            <View style= {styles.top}>
                    <Text style= {styles.topText}>YÊU CẦU GIAO:</Text>
                    <TouchableOpacity style= {styles.topBtn}>
                        <Text style= {styles.topBtnText}>Tạo mới</Text>
                    </TouchableOpacity>
            </View>

            <Text style= {styles.bottomText}>DANH SÁCH YÊU CẦU ĐÃ TẠO: </Text>

            <View style= {styles.bottom}>
                <ScrollView>
                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style= {styles.deliveryItems}>
                        <Text style= {{marginHorizontal: 10}}>Mã kiện: 12345</Text>
                    </TouchableOpacity>
                </ScrollView>  
            </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    top: {
        height: 50,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topBtn: {
        width: 130,
        height: 33,
        backgroundColor: '#8b4513',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    topText: {
        fontWeight: '500',
        fontSize: 18
    },
    topBtnText: {
        color: 'white'
    },
    bottom: {
        flex: 1,
        marginHorizontal: 14,
    },
    innerBottom: {
        marginHorizontal: 10,
        marginTop: 10
    },
    bottomText: {
        fontWeight: '500',
        marginLeft: 10,
        marginVertical: 10,
        fontSize: 14
    },
    deliveryItems: {
        height: 70,
        borderRadius: 8,
        borderBottomWidth: 4,
        borderBottomColor: '#8b4513',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }


});

export default Body;