import React,{useState} from "react";
import { View,StyleSheet } from "react-native";
import { TextInput,Button } from 'react-native-paper';

export default function AddTodo({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    return(
        <>
        <View>
            <TextInput
            mode="outlined"
            label="Add New Todo"
            onChangeText={changeHandler}/>
        <Button style={styles.appButtonContainer} onPress={()=>submitHandler(text)} mode="contained" buttonColor="coral">Add Todo</Button>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    appButtonContainer: {
        marginTop:8,
      }
  });