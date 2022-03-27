import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import các màn hình
import WaitingScreen from '../screens/WaitingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FogotPasswordScreen from '../screens/FogotPasswordScreen';
import TabNavigation from '../navigation/TabNavigation'
import ListProduct from '../screens/Home/ListProduct';
import Chats from '../screens/Home/Chats';
import OrderItemScreen from '../screens/OrderItem/OrderItemScreen.jsx';
import TaobaoScreen from '../screens/OrderWebScreen/TaobaoScreen.jsx';
import TmallScreen from '../screens/OrderWebScreen/TmallScreen'
//
const Stack = createNativeStackNavigator();

export default function StackNavigation () {
    return (
        <Stack.Navigator 
            initialRouteName='WaitingScreen'
            screenOptions={{ headerShown: false}}
        >
            <Stack.Screen 
                name="WaitingScreen" 
                component={WaitingScreen}
            />
            <Stack.Screen 
                name="SignIn" 
                component={SignInScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
            />
            <Stack.Screen
                name="Home"
                component={TabNavigation}
            />
            <Stack.Screen
                name='Notifications'
                component={NotificationsScreen}
            />
            <Stack.Screen
                name='FogotPassword'
                component={FogotPasswordScreen}
            />
            <Stack.Screen
                name='ListProduct'
                component={ListProduct}
            />
            <Stack.Screen
                name='Chats'
                component={Chats}
            />
            <Stack.Screen
                name='OrderItemScreen'
                component={OrderItemScreen}
            />
            <Stack.Screen
                name='TaobaoScreen'
                component={TaobaoScreen}
            />
            <Stack.Screen
                name='TmallScreen'
                component={TmallScreen}
            />
        </Stack.Navigator>
    )
}
