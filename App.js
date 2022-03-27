import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
// import TabNavigation from './navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
      {/* <TabNavigation/> */}
    </NavigationContainer>
  );
}
