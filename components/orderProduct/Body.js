import React from 'react'
import { 
  Text, 
  StyleSheet, 
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

const Body = () => {
    return (
      <View style= {styles.container}>
        <ScrollView>
          <View style= {styles.inner}>
            <View style= {{alignItems: 'center'}}>
              <Text style= {{color: '#8b4513', fontWeight: '500', fontSize: 22, }}>Hướng dẫn nạp tiền vào tài khoản</Text>
            </View>

            <Text style= {{}}>Quý khách chuyển khoản qua ngân hàng vào tài khoản ngân hàng của Nguonhangkinhdoanh.com: </Text>

            <View style= {{marginVertical: 20, marginLeft: 10, marginRight: 10}}>

              <Text>1. Techcombank : Chủ Tk – Nguyễn Thị Xuyên</Text>
              <Text>Số Tài Khoản :19032039260018 – chi nhánh Trần Thái Tông.</Text>
              <View style= {{marginVertical: 5}}>
                <Text>2. Vietcombank : Chủ TK – Nguyễn Thị Xuyên</Text>
                <Text>Số Tài Khoản : 0711000313275 – chi nhánh Thanh Xuân.</Text>
              </View>

              <Text>3. VietinBank – Chủ Tk – Nguyễn Văn Toản </Text>
              <Text>Số Tài Khoản :107868652650 – chi nhánh Thanh Xuân.</Text>
            </View>

            <Text>
              <Text style= {{fontWeight: '500', color: '#8b4513'}}>Lưu ý: </Text>
              <Text>Nội dung chuyển khoản ghi rõ:</Text>
            </Text>

            <View style= {{alignItems:'center', marginVertical: 10}}>
              <Text style= {{fontSize: 18, fontWeight: '500'}}>NHO username số điện thoại</Text>
            </View>

            <Text>
              <Text>V/d: </Text>
              <View style= {{borderBottomWidth: 1}}>
                <Text>NHO bonghoanho 0941889592</Text>
              </View>
            </Text>


            <View style= {{marginHorizontal: 10, marginVertical: 20}}>
              <Text>Username: tên đăng nhập của khách trên websize Nguonhangkinhdoanh.com.</Text>
              <Text style= {{marginTop: 5}}>Số điện thoại: không bắt buộc. Chúng tôi sẽ sử dụng trong tình huống gặp sự cố cần xác nhận giao dịch nạp tiền.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 15,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: 'white'
    },
    inner: {
      marginHorizontal: 10,
      marginTop: 10,
    },
});

export default Body;