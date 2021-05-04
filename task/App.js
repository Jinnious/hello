
import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  useColorScheme,
  View,
} from 'react-native';

import Cards from './comps/Cards';

export default  class App extends Component {
  constructor(){
    super();
    this.state = {
      query : null,
      dataSource : [],
      dataBackup :[]
    };
  }

  

 render() {
   return(
     <SafeAreaView >
         <View style={styles.container}>
      
      <Cards />
  
       
     </View>
     </SafeAreaView>
    
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header :{
    height: 80,
    width :'100%',
    backgroundColor : '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems :'center'
  },
  input :{
    height:45,
    width :'90%',
    backgroundColor: '#fff',
    borderRadius :20,
    padding: 5,


  }
});