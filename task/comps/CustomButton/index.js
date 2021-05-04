import React from 'react';
import { Text, View , StyleSheet,TouchableOpacity } from 'react-native';



const CustomButton = () => (
    <TouchableOpacity >
    <View style={styles.buttonContainer}>
      <Text style={styles.followers}>Follwers</Text>
    </View>
 </TouchableOpacity>
  );



const styles = StyleSheet.create({
    buttonContainer :{
      flex: 1,
      borderWidth: 2,
      borderColor :'purple',
      justifyContent: "center",
      borderRadius: 20,
      alignItems: "center",
      width:100,
      
     


    },
    followers: {
      textAlign :'center',
      color:'purple'
    }
  });

export default CustomButton;