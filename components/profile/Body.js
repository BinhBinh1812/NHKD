import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const Body = () => {
    return (
      <View style= {styles.container}>
        <View style= {styles.innerContainer}> 
            <Text style= {{padding: 10, fontSize: 14, fontWeight: '500'}}>Thông tin tài khoản: </Text>
                <View style= {styles.infomation}>
                    <View style={{padding: 10}}>
                        <Text>
                            <Text>Họ và Tên: </Text>
                            <Text>Trần Thái Bình</Text>
                        </Text>

                        <Text>
                            <Text>Email: </Text>
                            <Text>tranthaibinh0@gmail.com</Text>
                        </Text>

                        <Text>
                            <Text>SĐT: </Text>
                            <Text>0825022279</Text>
                        </Text>
                    </View>
                </View>

            <View style= {styles.headerAddress}>
                <Text style ={{fontSize: 14,fontWeight: '500'}}>Địa chỉ nhận hàng: </Text>
                <TouchableOpacity style= {styles.btnCreate}>
                    <Text style= {{color: 'white'}}>Tạo mới</Text>
                </TouchableOpacity>
            </View>

            <View style= {styles.addressContainer}>
                <ScrollView>
                    <View style= {styles.address}>
                        <Text>địa chỉ 1</Text>
                    </View>

                    <View style= {styles.address}>
                        <Text>địa chỉ 2</Text>
                    </View>

                    <View style= {styles.address}>
                        <Text>địa chỉ 3</Text>
                    </View>

                    <View style= {styles.address}>
                        <Text>địa chỉ 4</Text>
                    </View>



                </ScrollView>
            </View>

        </View>

        <View style= {styles.btnContainer}>
            <TouchableOpacity style= {styles.btnPin}>
                <Text>Khôi phục mã PIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.btnSignOut}>
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "85%", 
    },
    innerContainer: {
        height: 535,
    },
    btnContainer: {
        marginVertical: 5,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnPin: {
        width: 140,
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    btnSignOut: {
        width: 140,
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center' 
    },
    infomation: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 15
    },
    headerAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
        justifyContent: 'space-between'
    },
    btnCreate: {
        height: 33,
        width: 100,
        backgroundColor: '#8b4513',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    addressContainer: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    address: {
        width: "100%",
        height: 100,
        borderRadius: 20,
        marginTop: 5,
        borderBottomWidth: 4,
        borderBottomColor: '#8a4513',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }

});

export default Body;