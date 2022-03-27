import {
  StyleSheet
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
// import màn hình
import OderProduct from '../screens/Home/OderProduct';
import Delivery from '../screens/Home/Delivery';
import Notification from '../screens/Home/Notification';
import Profile from '../screens/Home/Profile';
import OrderStatusScreen from '../screens/Home/OrderStatusScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator 
      initialRouteName='OderProduct'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8b4513'
      }}
      
      >
      <Tab.Screen
        style= {styles.orderProduct} 
        name="OderProduct" 
        component={OderProduct}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons name='home' size= {26} color= {color}/>
          ),
        }} />
        <Tab.Screen 
        style= {styles.OrderStatusScreen} 
        name="OrderStatusScreen" 
        component={OrderStatusScreen} 
        options= {{
          title: 'Đơn hàng',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name='CodeSandbox' size= {26} color= {color}/>
          ),
        }}/>
      <Tab.Screen 
        style= {styles.delivery} 
        name="Delivery" 
        component={Delivery} 
        options= {{
          title: 'Giao hàng',
          tabBarIcon: ({focused, color, size}) => (           
            <MaterialCommunityIcons name="truck-delivery" size={27} color= {color} />
          ),
        }}/>
      <Tab.Screen
        style= {styles.notification}  
        name="Notification" 
        component={Notification} 
        options= {{
          title: 'Thông báo',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons name="bell-ring-outline" size= {26} color= {color}/>
          ),
        }}/>
      <Tab.Screen 
        style= {styles.profile} 
        name="Profile" 
        component={Profile}
        options= {{
          title: 'Tôi',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons name='account-box' size= {26} color= {color}/>
          )
        }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

});