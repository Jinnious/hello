import React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import CustomButton from '../CustomButton';

const Header = ({onClick}) => (
    <View style={styles.headerContainer}>
      <Text style={styles.recent}>Recent</Text>
      <CustomButton onPress={onClick}/>
    </View>

  );

  const styles = StyleSheet.create({
    headerContainer :{
   
      flex: 1,
      borderColor :'purple',
      justifyContent: 'space-between',
      borderRadius: 20,
      flexDirection:"row"
     
     
    },
    recent: {
        paddingLeft:15,
   fontSize:32,
   fontWeight:"500"
    }
  });

export default Header;
