import React from 'react';
import { StyleSheet, 
  Text, 
  View,
TextInput,
TouchableOpacity, 
Alert} from 'react-native';


export default class Forgotpwd extends React.Component{
    render(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
        placeholder="Password"
        placeholderTextColor="#003f5c"
    secureTextEntry={true}
       
        />
         <TextInput style={styles.input}
        placeholder="conform Password"
        placeholderTextColor="#003f5c"
    secureTextEntry={true}
       
        />
        <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.btn}
        onPress={()=>Alert("Password successfully Changed")}>
            <Text style={ styles.button}>Submit</Text>
          </TouchableOpacity>
          </View>
            </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      // backgroundColor: '#8181F7',
      
      alignItems: 'center',
      justifyContent: 'center',
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
        
        }
    });