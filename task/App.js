/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import KakaoPage from './comps/Item';



const App: () => Node = () => {
 

  return (
    <SafeAreaView>
     

    
        <View>
  

          </View>
           <KakaoPage/>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  
});

export default App;
