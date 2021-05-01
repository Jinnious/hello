import React from 'react';
import { Text, View , StyleSheet } from 'react-native';

const CustomButton = () => (
    <View style={styles.buttonContainer}>
      <Text style={styles.followers}>Follwers</Text>
    </View>

  );

const styles = StyleSheet.create({
    buttonContainer :{
      flex: 0.5,
      borderWidth: 2,
      borderColor :'purple',
      justifyContent: "center",
      borderRadius: 20,
      alignItems: "center",

    },
    followers: {
      textAlign :'center',
      color:'purple'
    }
  });

export default CustomButton;