import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const Body = () => {
    return (
      <View style= {styles.container}>
        <ScrollView style= {styles.scrollviewContainer}>
            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Có trao đổi mới trên đơn hàng: ACBXYZ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ chuyển sang trạng thái về kho TQ</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>

            <View style= {styles.innerNotification}>
                <View style= {styles.imgNotification}>
                    <Image 
                        style= {styles.img}
                        source={require('../../assets/profile/Avatar.jpg')}
                        resizeMod= 'strecth' />
                </View>


                <View style= {styles.inforContainer}>
                    <View style= {styles.innerInforContainer}>
                        <Text style= {styles.txtInfor}>Đơn hàng ABCXYZ đã nhận được kiện: 614322134864513211</Text>
                    </View>
                    <Text style= {styles.txtTime}>17 giờ trước</Text>
                </View>
            </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollviewContainer: {
        marginHorizontal: 14,
        height: "100%",
    },
    innerNotification: {
        marginTop: 14,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    imgNotification: {
        marginHorizontal: 10,
        justifyContent:'center'
    },
    img: {
        width: 35,
        height: 35,
        borderRadius: 50, 
        flexDirection: 'row'
    },
    inforContainer: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    innerInforContainer: {
        width: 240,
    },
    txtInfor: {
        fontSize: 12,
    },
    txtTime: {
        marginLeft: 5,
        fontSize: 10,
    }

});

export default Body;