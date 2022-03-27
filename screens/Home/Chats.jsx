import React from 'react';
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native';

const Chats = () => {
    return (
      <View style= {styles.container}>
        <Text>Chat</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Chats;