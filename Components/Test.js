import {StyleSheet,Text,View} from 'react-native';

export default function Test(){
    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.TextBold}>Mr. ZAKARIAE OMAOUI</Text>
        </View>
        <View style={styles.body}>
        <Text>This is my first app in React Native</Text>
        <Text>This is my first app in React Native</Text>
        <Text>This is my first app in React Native</Text>
        </View>
  
      
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      backgroundColor:'pink',
      padding:20,
    },
    TextBold:{
      fontWeight:'bold',
    },
    body:{
      backgroundColor:'yellow',
      padding:20,
      margin:10,
    }
  });
  