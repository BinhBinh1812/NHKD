import React from 'react';
import { 
    StyleSheet, 
    View 
} from 'react-native';
import { WebView } from 'react-native-webview';

const Body = () => {
    return (
      <View style= {styles.container}>
        <WebView 
            source={{ uri: 'https://www.tmall.com/' }} 
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: "85%"
  }
});

export default Body;