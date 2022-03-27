import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native';
import Header from '../../components/profile/Header.js';
import Body from '../../components/profile/Body.js'

const Profile = () => {
    return (
      <View style= {styles.container}>
        <Header/>
        <Body/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Profile;