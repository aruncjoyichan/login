import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
  Text, 
  View,
} from 'react-native';
// import Registration from './components/Registration';
// import {useNavigation} from '@react-navigation/native';

 import Login from './components/Login';
export default class  App extends React.Component {
  render(){
  // const navigation = useNavigation();

  //   function navigateToDashboard() {
  //       navigation.navigate(<Registration/>);
  //   }
  return (
    
    <View style={styles.container}>
      {/* <Text style={styles.loginHeader}>Login</Text>
      <TextInput style={styles.input}
      placeholder="Username"
      
      />
      <TextInput style={styles.input}
      placeholder="Password"
      secureTextEntry
      autoCapitalize = "none"
      // onChangeText = {this.handlePassword}
      />
      <View style={styles.buttonContainer}>
      
      <TouchableOpacity style={styles.btn}
      onPress={()=>alert("successfully Loged in")}>
          <Text style={ styles.button}>Login</Text>
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.btn}
        onPress={()=><Registration/>}>
          <Text style={ styles.button}>Register</Text>
        </TouchableOpacity> */}
      
      {/* </View> */}
      
      {/* <StatusBar style="auto" /> */}
      <Login/>
    </View>
    
  );
}}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor: '#8181F7',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  // loginHeader: {
  //   fontSize:50,
  //   color:'green',
  //   borderColor:'red',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // input:{
  //   borderColor: '#190707',
  //   alignItems: 'center',
  //   fontSize: 20, 
  //   margin: 15,
  //   height: 30,
  //   padding:10,
  //   borderWidth: 1,
  //   marginBottom:10
       
  // },
  // buttonContainer:{
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width:"15%"
  // },
  // btn:{
   
  //   backgroundColor: '#5882FA',
  //   padding: 15,
  //   // width:"45% " 
    
  //   },
  //   button:{
  //     textAlign:"center",
  //     fontSize:16
  //   }
   
});
