import React from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const Body = () => {
    return (
      <View style= {styles.container}>
        <ScrollView>
            <View style= {styles.topContainer}>
                    <View style= {styles.topOderInfomation}>
                        <View style= {styles.information}>
                            <Image 
                                style= {{width: 70, height: 70}}
                                source={require('../../assets/profile/Avatar.jpg')}
                                resizeMode= 'stretch' />
                            <View style= {{marginLeft: 10}}>
                                <Text style= {{fontSize: 18, fontWeight: '500', color: '#8b4513'}}>#ABCXYZ</Text>
                                <Text>
                                    <Text>Tổng chi phí: </Text>
                                    <Text>999.999</Text>
                                    <Text> VNĐ</Text>
                                </Text>
                            </View>
                        </View>

                        <View style= {styles.details}>
                            <View style= {{marginHorizontal: 10, marginVertical: 10}}>
                                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View>
                                        <Text>
                                            <Text style= {{fontSize: 16, fontWeight: '500'}}>Thành viên: </Text>
                                            <Text>VIP 4</Text>
                                        </Text>

                                        <Text style= {{marginTop: 10}}>
                                            <Text style= {{fontSize: 16, fontWeight: '500'}}>Tỷ lệ đặt cọc: </Text>
                                            <Text>45%</Text>
                                        </Text>

                                        <Text style= {{marginTop: 10}}>
                                            <Text style= {{fontSize: 16, fontWeight: '500'}}>Tỷ giá: </Text>
                                            <Text>4.000</Text>
                                        </Text>
                                    </View>

                                    <View>
                                        <Text>
                                            <Text style= {{fontSize: 16, fontWeight: '500'}}>Cân nặng tính phí: </Text>
                                            <Text>0.1 kg</Text>
                                        </Text>
                                        <Text style= {{marginTop: 10}}>
                                            <Text style= {{fontSize: 16, fontWeight: '500'}}>Thể tính: </Text>
                                            <Text>null</Text>
                                        </Text>
                                    </View>
                                </View>
                                
                                <Text style= {{marginTop: 10}}>
                                    <Text style= {{fontSize: 16, fontWeight: '500'}}>Địa Chỉ giao hàng: </Text>
                                    <Text>123/ gò dầu/ Tân Phú/ Hồ Chí Minh</Text>
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style= {styles.bottomOderInfomation}>
                        
                    </View>

                </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 14,
        marginTop: 14,
    },
    topContainer: {
        width: "100%",
    },
    topOderInfomation:{

    },
    information: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomWidth: 3,
        borderBottomColor: '#a6a6a6',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    details: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'white'
    }
});

export default Body;