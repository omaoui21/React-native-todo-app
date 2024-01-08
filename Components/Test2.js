import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import react,{useState} from 'react';

export default function Test2(){
    const [name,setName]=useState('ZAKARIAE');
    const [age,setAge]=useState(24);
  return (
    <>
    <View style={styles.container}>
    <Text>Enter Your Name</Text>
    <TextInput
    style={styles.input}
    placeholder='e.g John Doe'
    onChangeText={(val)=>setName(val)}/>
    <Text>Enter Your Age</Text>
    <TextInput
    keyboardType='numeric'
    style={styles.input}
    placeholder='e.g John Doe'
    onChangeText={(val)=>setAge(val)}/>

<Text>My name is : {name}   and     My age is : {age}</Text>
    </View>
    
    </>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer:{
      backgroundColor:'orange',
      textColor:'white'
    },
    input:{
      margin:10,
      padding:8,
      borderWidth:1,
      borderColor:'Black',
      width:200,
    }
  });
  