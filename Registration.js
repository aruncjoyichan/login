
import React from 'react';
import { StyleSheet, 
  Text, 
  View,
TextInput,
TouchableOpacity, 
Alert} from 'react-native';


export default class Registration extends React.Component{
    render(){
    return(
        <View> 
            <Text style={Styles.header}>Registration </Text>
            <TextInput style={styles.input}
             placeholder="Name"
             underlineColorAndroid={'transparent'}
             />
            <TextInput style={styles.input}
             placeholder="Email"
             underlineColorAndroid={'transparent'}
             />
             <TextInput style={styles.input}
             placeholder="Password"
             secureTextEntry={true}
             underlineColorAndroid={'transparent'}
             />
    
            <TextInput style={styles.input}
             placeholder="Phone"
             underlineColorAndroid={'transparent'}
             />
            <TouchableOpacity style={styles.btn}
        onPress={()=>Alert("successfully Registrated")}>
            <Text style={ styles.button}>Submit</Text>
          </TouchableOpacity>
            </View>

    )
}
}
const styles = StyleSheet.create({
    registration:{
       alignSelf: "stretch" 
    },
    header:{
        fontSize: 24,
        padding:10
    },
    input:{
        alignSelf: "stretch",
        height: 40,
        margin:30
    },
    btn:{
     
        backgroundColor: '#5882FA',
        padding: 15,
              
        },
})