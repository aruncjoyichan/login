import React, { Component, useState } from 'react';
import { StyleSheet, 
    Text, 
    View,
  TextInput,
  TouchableOpacity, 
  Alert} from 'react-native';
//   import { NavigationActions, StackNavigator } from 'react-navigation';
//   import {NavigationContainer} from '@react-navigation/native';
//   import {useNavigation} from '@react-navigation/native';
//   import { createStackNavigator, createAppContainer } from'react-navigation';
  
//    import Login from './components/Registration';

import Registration from './Registration';

  export default class Login extends React.Component{
    // const navigation = useNavigation();
  
    //   function navigateToDashboard() {
    //       navigation.navigate(<Registration/>);
    //   }
    // const [email, setEmail] = useState('');
    //  const [password, setPassword] = useState('');
    render(){
        // const { navigate } = this.props.navigation;
        // FunctionToOpenRegActivity = () =>
        // {
        //    this.props.navigation.navigate('Registration');
           
        // }
    return (
      
      <View style={styles.container}>
        <Text style={styles.loginHeader}>Login</Text>
        <TextInput style={styles.input}
        placeholder="Username"
        placeholderTextColor="#003f5c"
    // onChangeText={(email) => setEmail(email)}        
        />
        <TextInput style={styles.input}
        placeholder="Password"
        placeholderTextColor="#003f5c"
    secureTextEntry={true}
    // onChangeText={(password) => setPassword(password)}
    
        />
        <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.btn}
        onPress={()=>Alert("successfully Logged in")}>
            <Text style={ styles.button}>Login</Text>
          </TouchableOpacity>
       
          <TouchableOpacity style={styles.btn}
        //   onPress = {navigation.navigate('Registration')}
           >
               
            <Text style={ styles.button}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={ styles.forgotpwd}>forgot Password</Text>
          </TouchableOpacity>
        
        </View>
        
        {/* <StatusBar style="auto" /> */}
        {/* <Registration/> */}
        
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
    loginHeader: {
      fontSize:50,
      color:'green',
      borderColor:'red',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input:{
      borderColor: '#190707',
      alignItems: 'center',
      fontSize: 20, 
      margin: 15,
      height: 30,
      padding:10,
      borderWidth: 1,
      marginBottom:10
         
    },
    buttonContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      width:"95%"
    },
    btn:{
     
      backgroundColor: '#5882FA',
      padding: 15,
      // width:"45% " 
      
      },
      button:{
        textAlign:"center",
        fontSize:16
      },
      forgotpwd:{
        textAlign:"center",
        fontSize:16
      }
     
  });
  