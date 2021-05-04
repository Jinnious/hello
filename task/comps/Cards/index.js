import React from 'react';
import { Text, View , StyleSheet,TouchableOpacity, SafeAreaView, FlatList } from 'react-native';





export default  class Cards extends Component  {
   


    render(){
    return (
        <SafeAreaView>
              <View style={styles.container}>
                <FlatList />
              </View>
        </SafeAreaView>
     
    );

}
}


const styles = StyleSheet.create({

    container: {

    }



});


