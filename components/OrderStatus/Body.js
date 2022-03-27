import React from 'react';
import { 
    Text, 
    StyleSheet, 
    SafeAreaView,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TextInput,
    Image
} from 'react-native';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
    const navigation = useNavigation();

    return (
      <SafeAreaView style= {styles.container}>
            <View style= {styles.top}>
                <Text style= {styles.topText}>TÌM KIẾM:</Text>
                    <View style= {styles.innerTopText}>
                        <TextInput
                        style= {{
                            width: 145,
                            marginHorizontal: 10,
                        }}
                        placeholder='Mã vận đơn...'/>

                        <TouchableOpacity style= {{
                            justifyContent: 'center'
                        }}>
                            <AntDesign name="search1" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>

            <Text style= {styles.bottomText}>DANH SÁCH ĐƠN HÀNG: </Text>

            <View style= {styles.bottom}>
                <ScrollView style= {styles.scrollviewContainer}>
                    {/* thông báo mỗi đơn hàng */}
                    <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                                            <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('OrderItemScreen')}>
                        <View style= {styles.notificationContainer}>
                            <View style= {styles.topNotification}>
                                <View style= {styles.leftTopNoti}>
                                    <View style= {styles.imgNotification}>
                                        <Image 
                                            style= {styles.img}
                                            source={require('../../assets/profile/Avatar.jpg')}
                                            resizeMod= 'strecth' />
                                    </View>

                                    <View style= {styles.inforContainer}>
                                        <View style= {styles.innerInforContainer}>
                                            <Text style= {styles.txtInfor}>#ACBXYZ</Text>
                                        </View>
                                        <Text style= {styles.txtName}>dakjhsjdhakjs</Text>
                                    </View>
                                </View>

                                <View style= {styles.rightTopNoti}>
                                    <Text style= {styles.txtStatus}>Hàng về kho TQ</Text>
                                </View>
                            </View>

                            <View style= {styles.bottomNotification}>
                                <Text>Dịch vụ: </Text>
                                <Text>Vận chuyển thường | Đóng gỗ chung</Text>
                            </View>
                        </View>
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
        height: 70,
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
    innerTopText: {
        width: 200, 
        height: 33,
        borderWidth: 1, 
        borderRadius: 20, 
        marginTop: 5,  
        backgroundColor: 'white', 
        flexDirection: 'row'
    },
    topBtnText: {
        color: 'white'
    },
    bottom: {
        height: "100%"
    },
    innerBottom: {
        marginHorizontal: 10,
        marginTop: 10
    },
    bottomText: {
        fontWeight: '500',
        marginLeft: 10,
        fontSize: 14,
    },
    scrollviewContainer: {
        marginHorizontal: 14,
        height: "100%",
    },
    notificationContainer: {
        marginTop: 14,
        height: 80,
        borderRadius: 8,
        borderBottomWidth: 4,
        borderBottomColor: '#8b4513',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    topNotification: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftTopNoti: {
        flexDirection: 'row'
    },
    imgNotification: {

    },
    img: {
        width: 35,
        height: 35,
    },
    inforContainer: {
        width: 150,
        marginLeft: 5
    },
    innerInforContainer: {
        width: 240,
    },
    txtInfor: {
        fontSize: 14,
        fontWeight: '700',
        color: '#8b4513'
    },
    txtName: {
        fontSize: 10,
    },
    rightTopNoti: {
        height: 23,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8b4513'
    },
    txtStatus: {
        color: 'white'
    },
    bottomNotification: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


});

export default Body;