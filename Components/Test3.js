import react,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,StatusBar} from 'react-native';
import background from './assets/background.jpg'

export default function App() {
  const image=background;
const [people,setPeople]=useState([
  {name:'peach',key:1},
  {name:'banana',key:2},
  {name:'orange',key:3},
  {name:'cucumber',key:4},
  {name:'melon',key:5},
  {name:'bowser',key:6},
  {name:'strawberry',key:7},
]);
  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
      <ImageBackground source={image}>
      <ScrollView>
      {people.map((item)=>{
        return(
        <View key={item.key}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
        )
      })}
      </ScrollView>
      </ImageBackground>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  text:{
    padding:30,
    marginTop:24,
    backgroundColor:'pink',
    fontWeight:'bold',
    fontSize:25,
    width:200,
    textAlign:'center',
  }
});
